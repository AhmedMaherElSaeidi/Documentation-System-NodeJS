const { gql } = require("apollo-server-express");

// schema
const typeDefs = gql`
  type InitPhase {
    id: ID!
    title: String!
    startDate: String!
    finishDate: String!
    objectives: String!
    manager: String!
    budgetInfo: String!
    scopeStatements: String!
    type: String!
  }

  type Query {
    getAllInitPhases: [InitPhase]
    getInitPhase(id: ID!): InitPhase
  }

  input InitPhaseInput {
    title: String!
    startDate: String!
    finishDate: String!
    objectives: String!
    manager: String!
    budgetInfo: String!
    scopeStatements: String!
  }

  type Mutation {
    createInitPhase(init_phase: InitPhaseInput): InitPhase
    updateInitPhase(id: ID!, init_phase: InitPhaseInput): InitPhase
    deleteInitPhase(id: ID!): InitPhase
  }
`;

module.exports = { typeDefs };
