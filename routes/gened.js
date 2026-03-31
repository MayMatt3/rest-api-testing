const Joi = require('joi');
const coursesController = require('../controllers/courses');

module.exports = [
    {
        method: 'GET',
        path: '/gened/{category_code}',
        handler: coursesController.getGenEdCoursesByCategory
    }
]