const { SDLC_Init } = require("../models/init.model");

const resolvers = {
  Query: {
    getAllInitPhases: async () => {
      return await SDLC_Init.find();
    },
    getInitPhase: async (_, args) => {
      const { id } = args;
      return await SDLC_Init.findById(id);
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
  },
};

module.exports = { resolvers };
