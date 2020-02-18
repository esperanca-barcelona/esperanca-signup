const adapter = require('./adapter')

module.exports.getNextDays = async () => {
  return await adapter.getNextDays()
}

module.exports.setTaskContact = async ({
  date, 
  location, 
  taskName, 
  contact
}) => await adapter.setTaskContact({
  date,
  location,
  taskName,
  contact,
})
