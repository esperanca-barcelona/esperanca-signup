const {
  WALKERS,
  ROUTE_LEADER,
  EMERGENCY_VOLUNTEER,
  HOST,
  SOUP,
  EGGS,
  TUNA_SANDWICHES,
  CHEESE_SANDWICHES,
  FRUIT,
  COOKIES,
  JUICES,
} = require('./constants')

const defaultCell = {
  contact: undefined,
  instructions: undefined,
}

const parseDateColumns = sheetValues => {
  const firstRow = sheetValues[0]
  const dateColumns = firstRow.reduce((p, c, i) => {

    if (c.length !== 0)
      p.push({
        ...parseDateAndLocation(c),
        columnIndex: i,
      })

    return p
  }, [])

  return dateColumns
}

module.exports.parseDateColumns = parseDateColumns

module.exports.getAvailableCellForTask = ({
  date,
  location,
  taskName,
}, sheetValues) => {
  const columns = parseDateColumns(sheetValues)
  const rows = parseTaskRows(sheetValues)

  const column = columns.find(c => c.date === date && c.location === location)

  if (!column)
    throw new Error('dateOrLocationNotFound')

  const tasks = parseTasksForDateColumn(column.columnIndex, sheetValues)
  const task = tasks.find(t => t.taskName === taskName)
  if (!task)
    throw new Error('taskNotFound')

  if (!task.isAvailable)
    throw new Error('taskNotAvailable')

  let row = rows[taskName].startRow + 1

  if (task.contacts)
    row += task.contacts.findIndex(c => !c)
    
  
  const columnLetter = String.fromCharCode(65 + column.columnIndex)

  return columnLetter + row
}

const parseTaskRows = sheetValues => {
  const firstColumn = sheetValues.map(row => row[0])
  const tasksRows = firstColumn.reduce((p, c, i) => {
    const taskName = parseTaskName(c)
    
    if (!taskName) 
      return p


    if (!p[taskName])
      p[taskName] = {
        startRow: i,
        endRow: i,
      }
    else 
      p[taskName].endRow = i
      
    return p
  }, {})

  return tasksRows
}
module.exports.parseTaskRows = parseTaskRows

const parseTasksForDateColumn = (columnIndex, sheetValues) => {
  const taskRows = parseTaskRows(sheetValues)
  const res = Object.keys(taskRows).reduce((p,c) => {
    const {
      startRow,
      endRow
    } = taskRows[c]

    if (startRow === endRow) {

      const parsed = parseCell(sheetValues[startRow][columnIndex]) 
      return [
        ...p,
        {
          taskName: c,
          allowsMultiple: false,
          contacts: [ parsed.contact ],
          isAvailable: !parsed.contact,
          instructions: parsed.instructions,
        } 
      ]
    }

    const parsed = sheetValues.slice(startRow, endRow + 1)
      .map(row => row[columnIndex])
      .map(parseCell)

    return [
      ...p,
      {
        taskName: c,
        allowsMultiple: true,
        contacts: parsed.map(c => c.contact),
        isAvailable: parsed.some(c => !c.contact),
        instructions: parsed[0].instructions,
      }
    ]
  }, [])

  return res
}
module.exports.parseTasksForDateColumn = parseTasksForDateColumn

const parseDateAndLocation = columnName => {
  if (columnName.length === 0) return
 
  const [ dayAndlocation, date ] = columnName.split('\n')
  const [ dayOfWeek, location ] = dayAndlocation.split(' ')
 
   return {
     date,
     dayOfWeek,
     location
   }
 }

const parseCell = string => {
  if (!string || string.length === 0)
    return defaultCell

  if (string.match(/We need a volunteer/))
    return {
      ...defaultCell,
      instructions: string,
    }


  return {
    ...defaultCell,
    contact: string
  }
}

module.exports.parseCell = parseCell


const parseTaskName = rowName => {
  if (rowName.startsWith('Route leader'))
    return ROUTE_LEADER

  if (rowName.startsWith('Walker'))
    return WALKERS

  if (rowName.startsWith('Emergency volunteer'))
    return EMERGENCY_VOLUNTEER

  if (rowName.startsWith('HOST'))
    return HOST

  if (rowName.startsWith('Vegetable soup'))
    return SOUP

  if (rowName.startsWith('Hard-boiled eggs'))
    return EGGS

  if (rowName.startsWith('Tuna sandwiches'))
    return TUNA_SANDWICHES
  
  if (rowName.startsWith('Cheese sandwiches'))
    return CHEESE_SANDWICHES

  if (rowName.startsWith('Soft fruit'))
    return FRUIT

  if (rowName.startsWith('Cookies'))
    return COOKIES

  if (rowName.startsWith('Small juices'))
    return JUICES  

  console.log(rowName)
}
 