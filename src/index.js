const { ApolloServer } = require("apollo-server");

const { readFileSync } = require("fs");
const path = require("path");

const models = require("./models");

const typeDefs = readFileSync(path.join(__dirname, "schema.graphql"), "utf8");

const resolvers = require("./resolvers");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  path: "/",
  context: ({ req, ress }) => ({
    ...req,
    ...res,
    models,
  }),
});

mongoose.connect(process.env.DATABASE_URL, () => {
  console.log("✔  Connected to database");
});
server.listen(port, () => {
  console.log("👌  Server is up and running!");
});
