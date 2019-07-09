function eIssns() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange();
  var app = SpreadsheetApp;
  var numRows = data.getNumRows();
  var startRow = "2";
  var i;
  
 for (var i = 0; i < (numRows - 1) ; i++) {
  var range = sheet.getRange(startRow, 1);
  var data = range.getValues();
  var bibISSN =  data 
  var transferUrl = "https://journaltransfer.issn.org/api?query=pi:"
  var url = transferUrl + bibISSN;
  var results = UrlFetchApp.fetch(url);
  var content = results.getContentText();
  var json = JSON.parse(content); 
  
  if (json.length > 4) { 
    var journalTitle = json[0]["contents"]["journalTitle"];
    var onlineIssn = json[0]["contents"]["journalOnlineISSN"];
    sheet.getRange(startRow, 2).setValue(journalTitle);
    sheet.getRange(startRow, 3).setValue(onlineIssn);
    startRow++;
    } else {  
           sheet.getRange(startRow, 2).setValue("No results");
           sheet.getRange(startRow, 3).setValue("No results");
           startRow++;
           { continue; }
           } 
          }
}
