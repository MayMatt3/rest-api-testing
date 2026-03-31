const Joi = require('joi');
const coursesController = require('../controllers/courses');
const gened = require('../routes/gened');

module.exports = [
    {
        method: 'GET',
        path: '/gened/{category_code}',
        handler: coursesController.getGenEdCoursesByCategory
    }
]