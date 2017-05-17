// Place this file under c:\program files (x86)\adobe\acrobat reader dc\reader\javascripts or c:\program files\adobe\acrobat reader dc\reader\javascripts in order for silent saving.

var mySaveDoc = app.trustedFunction(function(doc,fileName){
app.beginPriv();
var myPath = "TL-57" + ".pdf";

//saveAs is the only privileged code that needs to be enclosed
doc.saveAs({cPath: myPath, bPromptToOverwrite: false});
//doc.close();

app.endPriv();
});