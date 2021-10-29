const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

// require("dotenv").config();
require("dotenv").config();

const { readFileSync } = require("fs");

const path = require("path");

const models = require("./models");

const PORT = process.env.PORT ?? 4000;

const typeDefs = readFileSync(path.join(__dirname, "schema.graphql"), "utf8");

const resolvers = require("./resolvers");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  path: "/",
  context: ({ req, res }) => ({
    ...req,
    ...res,
    models,
  }),
});

mongoose.connect(String(process.env.DATABASE_URL), () => {
  console.log("Connected to database");
});

server.listen(PORT, () => {
  console.log("👌  Server is up and running!");
});
