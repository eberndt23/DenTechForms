// Place this file under c:\program files (x86)\adobe\acrobat reader dc\reader\javascripts or c:\program files\adobe\acrobat reader dc\reader\javascripts to silently print to a postscript file.

var trustedSilentPrint = app.trustedFunction(function(doc,pp){
app.beginPriv();
var pp = doc.getPrintParams();
pp.interactive = pp.constants.interactionLevel.automatic;
pp.printContent = pp.constants.printContents.docAndComments;
pp.fileName = "TL-57.ps";
pp.printerName = "Adobe PDF";
doc.print(pp);
app.endPriv();
});

