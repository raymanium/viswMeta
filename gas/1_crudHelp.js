/** 
## HELPER FUNCTIONS FOR CRUD OPERATIONS --------------------------------------------------------------
*/

/**  CHECK FOR EXISTING ID, RETURN BOOLEAN */
function checkID(ID) {
  var idList = readData(globalVar().ssheetId, CONFIG.idRng).reduce(function (
    a,
    b
  ) {
    return a.concat(b);
  });
  return idList.includes(ID);
}

/**  GET DATA RANGE A1 NOTATION FOR GIVEN ID */
function getRangeByID(id) {
  if (id) {
    var idList = readData(CONFIG.ssheetId, CONFIG.idRng);
    for (var i = 0; i < idList.length; i++) {
      if (id == idList[i][0]) {
        return "Data!A" + (i + 2) + ":" + CONFIG.lastCol + (i + 2);
      }
    }
  }
}

/**  GET RECORD BY ID */
function getRecordById(id) {
  if (id && checkID(id)) {
    var result = readData(CONFIG.ssheetId, getRangeByID(id));
    return result;
  }
}

/**  GET ROW NUMBER FOR GIVEN ID */
function getRowIndexByID(id) {
  if (id) {
    var idList = readData(CONFIG.ssheetId, CONFIG.idRng);
    for (var i = 0; i < idList.length; i++) {
      if (id == idList[i][0]) {
        var rowIndex = parseInt(i + 1);
        return rowIndex;
      }
    }
  }
}

/**  GET ALL RECORDS */
function getAllData() {
  var data = readData(CONFIG.ssheetId, CONFIG.dataRng);
  return data;
}

/*GET DROPDOWN LIST KOTA */
function getDropdownListKota(range) {
  var list = readData(CONFIG.ssheetId, range);
  return list;
}
