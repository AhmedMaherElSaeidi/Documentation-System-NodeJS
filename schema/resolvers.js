const { SDLC_Init } = require("../models/init.model");
const { SDLC_Design } = require("../models/design.model");
const { SDLC_Analysis } = require("../models/analysis.model");

const fs = require("fs");
const path = require("path");
const { GraphQLUpload } = require("graphql-upload");

function generateRandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    getAllInitPhases: async () => {
      return await SDLC_Init.find();
    },
    getInitPhase: async (_, args) => {
      const { id } = args;
      return await SDLC_Init.findById(id);
    },
    getAllAnalysisPhases: async () => {
      return await SDLC_Analysis.find();
    },
    getAnalysisPhase: async (_, args) => {
      const { id } = args;
      return await SDLC_Analysis.findById(id);
    },
    getAllDesignPhases: async () => {
      return await SDLC_Design.find();
    },
    getDesignPhase: async (_, args) => {
      const { id } = args;
      return await SDLC_Design.findById(id);
    },
  },

  Mutation: {
    createInitPhase: async (_, args) => {
      const init_phase = { ...args.init_phase, type: "init-phase" };

      const init_phase_graphql = new SDLC_Init(init_phase);
      await init_phase_graphql.save();

      return init_phase_graphql;
    },
    updateInitPhase: async (_, args) => {
      const { id } = args;
      return await SDLC_Init.findByIdAndUpdate(id, args.init_phase, {
        new: true,
      });
    },
    deleteInitPhase: async (_, args) => {
      const { id } = args;
      return await SDLC_Init.findByIdAndDelete(id);
    },
    createAnalysisPhase: async (_, args) => {
      const analysis_phase = { ...args.analysis_phase, type: "analysis-phase" };

      const analysis_phase_graphql = new SDLC_Analysis(analysis_phase);
      await analysis_phase_graphql.save();

      return analysis_phase_graphql;
    },
    updateAnalysisPhase: async (_, args) => {
      const { id } = args;
      return await SDLC_Analysis.findByIdAndUpdate(id, args.analysis_phase, {
        new: true,
      });
    },
    deleteAnalysisPhase: async (_, args) => {
      const { id } = args;
      return await SDLC_Analysis.findByIdAndDelete(id);
    },
    createDesignPhase: async (_, args) => {
      const design_phase = { ...args.design_phase, type: "design-phase" };

      const design_phase_grqphql = new SDLC_Design(design_phase);
      await design_phase_grqphql.save();

      return design_phase_grqphql;
    },
    uploadFile: async (_, args) => {
      const { createReadStream, filename } = await args.file;

      const { ext, name } = path.parse(filename);
      const randomName = generateRandomString(12) + ext;

      const stream = createReadStream();
      const pathName = path.join(
        __dirname,
        "..",
        `/public/images/${randomName}`
      );
      await stream.pipe(fs.createWriteStream(pathName));

      return {
        url: `http://localhost:4000/images/${randomName}`,
      };
    },
  },
};

module.exports = { resolvers };
