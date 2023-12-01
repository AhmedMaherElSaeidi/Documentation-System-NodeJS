const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

async function startServer() {
  const app = express();
  const app_port = 4000;
  const mongo_port = 27017;

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.get("/", (req, res) => {
    const element_style = `text-align:center;
      color:green;
      border:1px solid green;
      border-radius:.25em
      ;padding:1em;`;

    res.send(`<div style='${element_style}'>
      <h3>Server is running on <a href='http://localhost:${app_port}'>http://localhost:${app_port}</a></h3>
    </div>`);
  });

  mongoose.connect(`mongodb://localhost:${mongo_port}/Documentation-System`);

  app.listen(app_port, () => {
    console.log(`Server is running on http://localhost:${app_port}.`);
  });
}

startServer();
