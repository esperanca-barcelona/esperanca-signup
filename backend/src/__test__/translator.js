const { test } = require('tap')
const translator = require('../translator')

test('parseDateColumns', async assert => {

  const mockSheetValues = [
    [
      '',
      'Saturday Raval\nFebruary 8th',
      '',
      'Sunday Park\nFebruary 9th',
    ]
  ]

  const expected = [{
    date: 'February 8th',
    dayOfWeek: 'Saturday',
    location: 'Raval',
    columnIndex: 1
  }, {
    date: 'February 9th',
    dayOfWeek: 'Sunday',
    location: 'Park',
    columnIndex: 3,
  }]

  const result = translator.parseDateColumns(mockSheetValues)

  assert.deepEquals(result, expected)
})

test('parseTaskRows', async assert => {
  const mockSheetValues = [
    [ '' ],
    [ 'Route leader foobar'],
    [ 'Walker' ],
    [ 'Walker' ],
    [ 'Walker' ],
    [ 'HOST foo' ],
    [ 'unknown task name' ],
    [ 'Soft fruit' ],
  ]

  const expected = {
    ROUTE_LEADER: {
      startRow: 1,
      endRow: 1,
    },
    WALKERS: {
      startRow: 2,
      endRow: 4,
    },
    HOST: {
      startRow: 5,
      endRow: 5,
    },
    FRUIT: {
      startRow: 7,
      endRow: 7
    }
  }

  const result = translator.parseTaskRows(mockSheetValues)

  assert.deepEquals(result, expected)
})

test('parseTasksForDateColumn', async assert => {
  const mockSheetValues = [
    [ '', 'some invalid thing' ],
    [ 'Route leader foobar', '', 'Rick'],
    [ 'Walker', 'foo', 'Morty'],
    [ 'Walker', '', 'Summer' ],
    [ 'Walker' ],
    [ 'HOST foo', 'bar', 'Jerry' ],
    [ 'unknown task name' ],
    [ 'Soft fruit', '', ' We need a volunteer to pick up fruit' ],
  ]

  const expected = [
    {
      taskName: 'ROUTE_LEADER',
      contacts: [ 'Rick' ],
      allowsMultiple: false,
      isAvailable: false,
      instructions: undefined,
    }, {
      taskName: 'WALKERS',
      contacts: [ 'Morty', 'Summer', undefined ],
      allowsMultiple: true,
      isAvailable: true,
      instructions: undefined,
    }, {
      taskName: 'HOST',
      contacts: ['Jerry'],
      allowsMultiple: false,
      isAvailable: false,
      instructions: undefined,
    }, {
      taskName: 'FRUIT',
      contacts: [ undefined ],
      allowsMultiple: false,
      isAvailable: true,
      instructions: ' We need a volunteer to pick up fruit'
    }
  ]

  const result = translator.parseTasksForDateColumn(2, mockSheetValues)

  assert.deepEquals(result, expected)
})

test('getAvailableCellForTask', async assert => {
  const mockSheetValues = [
    [ '', 'Saturday Raval\nFebruary 8th', 'Sunday Park\nFebruary 9th'],
    [ '', 'some invalid thing' ],
    [ 'Route leader foobar', '', 'Rick'],
    [ 'Walker', 'foo', 'Morty'],
    [ 'Walker', '', 'Summer' ],
    [ 'Walker', 'bar', 'Beth' ],
    [ 'HOST foo', 'bar', 'Jerry' ],
    [ 'unknown task name' ],
    [ 'Soft fruit', '', ' We need a volunteer to pick up fruit' ],
  ]

  const result = translator.getAvailableCellForTask({
    date: 'February 8th', 
    location: 'Raval', 
    taskName: 'WALKERS',
  }, mockSheetValues)

  const expected = 'B5'

  assert.deepEquals(result, expected)
})