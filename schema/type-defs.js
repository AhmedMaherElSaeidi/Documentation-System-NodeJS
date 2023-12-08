const { gql } = require("apollo-server-express");

// schema
const typeDefs = gql`
  scalar Upload

  type File {
    url: String!
  }
  
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

  type AnalysisPhase {
    id: ID!
    introduction: String!
    purpose: String!
    audience: String!
    sw_description: String!
    sys_fr: String!
    image: String!
    type: String!
  }

  type DesignPhase {
    id: ID!
    filename: String!
    image: String!
    type: String!
  }

  type Query {
    getAllInitPhases: [InitPhase]
    getInitPhase(id: ID!): InitPhase
    getAllAnalysisPhases: [AnalysisPhase!]!
    getAnalysisPhase(id: ID!): AnalysisPhase
    getAllDesignPhases: [DesignPhase!]!
    getDesignPhase(id: ID!): DesignPhase
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

  input AnalysisPhaseInput {
    introduction: String!
    purpose: String!
    audience: String!
    sw_description: String!
    sys_fr: String!
    image: String!
  }

  input UpdateAnalysisPhaseInput {
    introduction: String!
    purpose: String!
    audience: String!
    sw_description: String!
    sys_fr: String!
  }

  input DesignPhaseInput {
    filename: String!
    image: String!
  }

  type Mutation {
    createInitPhase(init_phase: InitPhaseInput!): InitPhase
    updateInitPhase(id: ID!, init_phase: InitPhaseInput!): InitPhase
    deleteInitPhase(id: ID!): InitPhase
    createAnalysisPhase(analysis_phase: AnalysisPhaseInput!): AnalysisPhase
    updateAnalysisPhase(
      id: ID!
      analysis_phase: UpdateAnalysisPhaseInput!
    ): AnalysisPhase
    deleteAnalysisPhase(id: ID!): AnalysisPhase
    createDesignPhase(design_phase: DesignPhaseInput!): DesignPhase
    uploadFile(file: Upload!): File!
  }
`;

module.exports = { typeDefs };
