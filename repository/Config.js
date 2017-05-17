var mySaveDoc = app.trustedFunction(function(doc,fileName){
app.beginPriv();
var myPath = "TL-57" + ".pdf";

//saveAs is the only privileged code that needs to be enclosed
doc.saveAs({cPath: myPath, bPromptToOverwrite: false});
//doc.close();

app.endPriv();
});