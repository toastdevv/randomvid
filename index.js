const path = require("path");
const fastify = require("fastify")();

fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "/public"),
});

console.log(path.join(__dirname, "/public"));

fastify.get("/", (request, reply) => {
  reply.send("hi");
});

fastify.get("/random", (request, reply) => {
  const option = Math.random();
  if (option > 0.5) {
    reply.sendFile("first.mp4");
  } else {
    reply.sendFile("second.mp4");
  }
});

fastify.listen({ port: 3000, host: "0.0.0.0" }, function (err, address) {
  console.log(`Listening on ${address}`);
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
