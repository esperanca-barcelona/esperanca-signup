const { test } = require('tap')
const proxyquire = require('proxyquire')

let setCellResults

const adapter = proxyquire('../adapter', {
  './facade': {
    getSheet: () => ['some', 'sheet'],
    setCell: (range, contact) => {
      setCellResults = {
        range,
        contact,
      }
    }
  },
  './translator': {
    parseDateColumns: sheet => sheet.map((name, i) => ({
      name,
      columnIndex: i
    })),
    parseTasksForDateColumn: (columnIndex, sheet) => ({
      columnIndex,
      sheet,
    }),

    getAvailableCellForTask: (params, sheetValues) => ({
      params,
      sheetValues,
    })
  }
})


test('getDates', async assert => {
  const expected = [{
    name: 'some',
    columnIndex: 0,
  }, {
    name: 'sheet',
    columnIndex: 1,
  }]

  const result = await adapter.getDates()

  assert.deepEquals(result, expected)
})

test('getNextDays', async assert => {
  const expected = [{
    name: 'some',
    tasks: {
      columnIndex: 0,
      sheet: [ 'some', 'sheet' ],
    }
  }, {
    name: 'sheet',
    tasks: {
      columnIndex: 1,
      sheet: [ 'some', 'sheet' ],
    }
  }]

  const result = await adapter.getNextDays()

  assert.deepEquals(result, expected)
})

test('setTaskContact', async assert => {
  const expected = {
    range: {
      params: {
        date: 'feb 5th',
        location: 'park',
        taskName: 'HOST',
      },
      sheetValues: [ 'some', 'sheet' ],
    },
    contact: 'Rick Sanchez',
  }

  await adapter.setTaskContact({
    date: 'feb 5th',
    location: 'park',
    taskName: 'HOST',
    contact: 'Rick Sanchez',
  })

  assert.deepEquals(setCellResults, expected)

})