var cMsg = "Do you want to save your progress and return to the form later?";

var nRtn = app.alert(cMsg,2,2,"Save Progress");
if(nRtn == 4)
{
var cMyPath = this.path;
this.saveAs({cPath:cMyPath, bPromptToOverwrite:false});
app.alert("Progress saved! Please access the form through Brewpoint to finish your work. This window will now close.", 3);
app.execMenuItem("Close");;
}
else if(nRtn == 3)
{console.println("The Response Was No");
}
