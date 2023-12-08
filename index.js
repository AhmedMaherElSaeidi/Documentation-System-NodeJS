const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");
const {graphqlUploadExpress} = require('graphql-upload');
const { ApolloServer } = require("apollo-server-express");

async function startServer() {
  const app = express();
  const app_port = 4600;
  const mongo_port = 27017;

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
  server.applyMiddleware({ app });

  app.use(express.static("public"));
  app.use(cors());
  
  app.get("/", (req, res) => {
    const element_style = `text-align:center;
      color:green;
      background-color:black;
      border:1px solid green;
      border-radius:.25em;
      padding:5em;`;

    res.send(`<div style='${element_style}'>
      <h3>Server is running on <a href='http://localhost:${app_port}/graphql'>http://localhost:${app_port}/graphql</a></h3>
    </div>`);
  });
  
   await mongoose.connect(`mongodb://localhost:${mongo_port}/Documentation-System`);

  app.listen(app_port, () => {
    console.log(`Server is running on http://localhost:${app_port}/graphql.`);
  });
}

startServer();
