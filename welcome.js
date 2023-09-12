function doGet() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('Index');
  return htmlOutput.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getData() {
  var spreadsheetId = '1uLnSM_XJKgbvfuoODD-WGwccjVUPo6kPqf1zXbNC9nw'; // Replace with your spreadsheet ID
  var sheetName = 'Sheet1'; // Replace with your sheet name
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  var data = sheet.getDataRange().getValues();
  return data;
}


