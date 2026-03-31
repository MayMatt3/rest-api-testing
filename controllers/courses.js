const courseServices = require('../services/courses');

class CourseController {
    async getCoursesBySubject(request) {
        const subject = request.params.subject;
        const results = await courseServices.getCoursesBySubject(subject);
        return JSON.stringify(results);
    }
    async getGenEdCoursesByCategory(request) {
        const category = request.params.category_code;
        const results = await courseServices.getCoursesByGenEdCategory(category);
        return JSON.stringify(results);
    }
}

module.exports = new CourseController();

