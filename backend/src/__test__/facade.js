const { test } = require('tap')
const proxyquire = require('proxyquire')

test('getSheet', async assert => {
  const facade = proxyquire('../facade', {
    'googleapis': {
      google: {
        sheets: () => ({
          spreadsheets: {
            values: {
              get: params => ({
                data: {
                  values: params
                }
              })
            }
          }
        }),
      }
    }
  })

  const expected = {
    spreadsheetId: '13JekXctEcAGYbAQQRyLdQbanrpNXOp-gCNBJ4Woxy64',
    range: 'A:Z'
  }

  const result = await facade.getSheet()

  assert.deepEquals(result, expected)
})


test('setCells', async assert => {
  let result
  const facade = proxyquire('../facade', {
    'googleapis': {
      google: {
        sheets: () => ({
          spreadsheets: {
            values: {
              update: params => {
                result = params
              }
            }
          }
        }),
      }
    }
  })

  const expected = {
    spreadsheetId: '13JekXctEcAGYbAQQRyLdQbanrpNXOp-gCNBJ4Woxy64',
    range: 'A1',
    resource: {
      values: [[ 'foo' ]],
    }
  }
  await facade.setCell('A1', 'foo')
  
  assert.deepEquals(result, expected)
})