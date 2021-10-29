const { ApolloServer } = require("apollo-server");

const { readFileSync } = require("fs");
const path = require("path");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  path: "/",
});

server.listen(port, () => {
  console.log("👌  Server is up and running");
});
