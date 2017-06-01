// Place this file under c:\program files (x86)\adobe\acrobat reader dc\reader\javascripts or c:\program files\adobe\acrobat reader dc\reader\javascripts to silently save.

var mySaveDoc = app.trustedFunction(function(doc,fileName){
app.beginPriv();
var myPath = "TL-57" + ".pdf";

doc.saveAs({cPath: myPath, bPromptToOverwrite: false});

app.endPriv();
});