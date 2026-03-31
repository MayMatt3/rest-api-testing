const coursesModel = require('../models/courses');
const genedModel = require('../models/gened');

class CourseServices {
    async getCoursesBySubject(subject) {
        const results = await coursesModel.find(c => c.courseCode.startsWith(subject));
        return results;
    }
    async getCoursesByGenEdCategory(category) {
        const allCourses = await coursesModel.find();
        const offeredCodes = new Set(allCourses.map(c => c.courseCode));
        const genedResults = await genedModel.find(g => g.categoryCode === category && offeredCodes.has(g.courseCode));
        return genedResults;
    }
}

module.exports = new CourseServices();