
const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const name = request.query.name || 'World';
            return 'Hello ' + name + '!';
        }
    });

    server.route({
        method: 'POST',
        path: '/hello',
        handler: function (request, h) {

            const name = request.payload.name;
            return 'Hello ' + name;
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
