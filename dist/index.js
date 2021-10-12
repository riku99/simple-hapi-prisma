"use strict";
const Hapi = require("@hapi/hapi");
const init = async () => {
    const server = Hapi.server({
        port: 3030,
    });
    server.route({
        method: "GET",
        path: "/",
        handler: () => {
            console.log("run");
            return "Hello World!";
        },
    });
    await server.start();
    console.log("サーバー起動");
    console.log("Server running on %s", server.info.uri);
};
init();
