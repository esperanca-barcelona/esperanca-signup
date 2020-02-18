const {google} = require('googleapis');
const fs = require('fs');

const privatekey = require('./privateKey.json')

let jwtClient = new google.auth.JWT(
  privatekey.client_email,
  null,
  privatekey.private_key,
  [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/calendar',
  ]
);

const sheets = google.sheets({
  version: 'v4',
});

const spreadsheetId = '13JekXctEcAGYbAQQRyLdQbanrpNXOp-gCNBJ4Woxy64'

module.exports.getSheet = async () => {
  const {
    data: {
      values,
    }
  } = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'A:Z',
    auth: jwtClient
  })
  
  // const res = fs.readFileSync('./__test__/getSheet.json')
  // const values = JSON.parse(res)
  return values
}

module.exports.setCell = async (cell, value) => {
  await sheets.spreadsheets.values.update({
    auth: jwtClient,
    spreadsheetId,
    range: cell,
    valueInputOption: 'RAW',
    resource: {
      values: [[ value ]],
    }
  })
}