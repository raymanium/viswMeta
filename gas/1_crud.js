/** 
## CURD FUNCTIONS ----------------------------------------------------------------------------------------
*/

/**  CREATE/ APPEND DATA */
function appendData(values, ssheetId, range) {
  var valueRange = Sheets.newRowData();
  valueRange.values = values;
  var appendRequest = Sheets.newAppendCellsRequest();
  appendRequest.sheetID = ssheetId;
  appendRequest.rows = valueRange;
  var results = Sheets.Spreadsheets.Values.append(valueRange, ssheetId, range, {
    valueInputOption: "RAW",
  });
}

/**  READ DATA */
function readData(ssheetId, range) {
  var result = Sheets.Spreadsheets.Values.get(ssheetId, range);
  return result.values;
}

/**  UPDATE DATA */
function updateData(values, ssheetId, range) {
  var valueRange = Sheets.newValueRange();
  valueRange.values = values;
  var result = Sheets.Spreadsheets.Values.update(valueRange, ssheetId, range, {
    valueInputOption: "RAW",
  });
}

/** DELETE DATA */
function deleteData(ID) {
  var startIndex = getRowIndexByID(ID);

  var deleteRange = {
    sheetId: CONFIG.sheetID,
    dimension: "ROWS",
    startIndex: startIndex,
    endIndex: startIndex + 1,
  };

  var deleteRequest = [{ deleteDimension: { range: deleteRange } }];
  Sheets.Spreadsheets.batchUpdate({ requests: deleteRequest }, CONFIG.ssheetId);

  return getAllData();
}
