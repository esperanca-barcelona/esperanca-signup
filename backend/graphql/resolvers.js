const service = require('../src/service')


module.exports = {
	Query: {
    getNextDays: async () => {
      return await service.getNextDays()
    },
  },
  Mutation: {
    setTaskContact: async (_, args, ctx) => {
      const {
        date,
        location,
        taskName,
        contact,
      } = args

      await service.setTaskContact({
        date,
        location,
        taskName,
        contact,
      })
    }
  }
}