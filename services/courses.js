const coursesModel = require('../models/courses');
const genedModel = require('../models/gened');

class CourseServices {
    async getCoursesBySubject(subject) {
        const results = await coursesModel.find(c => c.course_code && c.course_code.startsWith(subject));
        return results;
    }
    async getCoursesByGenEdCategory(category) {
        const allCourses = await coursesModel.find();
        const offeredCodes = new Set(allCourses.map(c => c.course_code));
        const genedResults = await genedModel.find(g => g.category === category && offeredCodes.has(g.course_code));
        return genedResults;
    }
}

module.exports = new CourseServices();