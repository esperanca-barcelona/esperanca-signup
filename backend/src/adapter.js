const facade = require('./facade')
const translator = require('./translator')

module.exports.getDates = async () => {
  const sheetValues = await facade.getSheet()
  const dateColumns = translator.parseDateColumns(sheetValues)
  return dateColumns
}

module.exports.getNextDays = async () => {
  const sheetValues = await facade.getSheet()
  const dateColumns = translator.parseDateColumns(sheetValues)
  const nextDates = dateColumns.map(({ columnIndex, ...props}) => {
    const tasks = translator.parseTasksForDateColumn(columnIndex, sheetValues)

    return {
      ...props,
      tasks,
    }
  })
  return nextDates
}

module.exports.setTaskContact = async ({ 
  date, 
  location, 
  taskName, 
  contact,
}) => {
  const sheetValues = await facade.getSheet()
  
  const range = translator.getAvailableCellForTask({ 
    date,
    location,
    taskName,
  }, sheetValues)

  await facade.setCell(range, contact)
}