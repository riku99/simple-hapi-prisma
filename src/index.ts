import Hapi from "@hapi/hapi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const init = async () => {
  const server = Hapi.server({
    port: 3030,
  });

  server.route([
    {
      method: "GET",
      path: "/",
      handler: () => {
        console.log("run");
        return "Hello World!";
      },
    },
    {
      method: "GET",
      path: "/users",
      handler: async () => {
        console.log("users");
        const users = await prisma.user.findMany();

        return users;
      },
    },
  ]);

  await server.start();
  console.log("サーバー起動");
  console.log("Server running on %s", server.info.uri);
};

init();
