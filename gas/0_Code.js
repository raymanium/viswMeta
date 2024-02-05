/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const CONFIG = {
  TITLE: "GAS VUE3 TEMPLATE",
  ssheetId: "1kgvEsL2QI7V8ci4UIJTWkmomrkQqNm5MT4X50xPBs7A",
  dataRng: "Data!A3:H",
  idRng: "Data!A2:A",
  lastCol: "H",
  insertRng: "Data!A1:H1",
  sheetID: "0",
};

function doGet(e) {
  return HtmlService.createTemplateFromFile("index.html")
    .evaluate()
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setTitle(CONFIG.TITLE);
}

function includes(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function apiSetCount(payload) {
  payload = JSON.parse(payload);
  updateData([[payload.count]], CONFIG.ssheetId, "Data!A1")
  return JSON.stringify({
    success: true,
    message: "Count has been set!",
  });
}
