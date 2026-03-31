const Hapi = require('@hapi/hapi');
const Joi = require ('@hapi/joi');
const path = require('path');
const fs = require('fs');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    const routes = [];
    const routesPath = path.join(__dirname, 'route');

    fs.readdirSync(routesPath).forEach((file) => {
        const fullPath = path.join(routesPath, file);
        const fileRoutes = require(fullPath);
        routes.push(...fileRoutes)
    });

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
