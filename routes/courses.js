const Joi = require('joi');
const coursesController = require('../controllers/courses');

module.exports = [
    {
        method: 'GET',
        path: '/courses/{subject}',
        handler: coursesController.getCoursesBySubject
    },
    {
        method: 'GET',
        path: '/courses/credits/{number}',
        handler: (request, h) => {
            return request.params.number;
        }
    }   
];