 topmostSubform.Page1.SubmitForm[1]::click - (JavaScript, client)
var nRtn = xfa.host.messageBox("Do you want to save your progress and return to the form later?", "Confirm Submission", 2 ,2);
if(nRtn == 4)
{
mySaveDoc(event.target);
xfa.host.messageBox("Form saved! Please access the file through Brewpoint to continue working on the form", "File Saved", 3);
app.execMenuItem("Close");
}
else if (nRtn ==3)
{console.println("The Response Was No")
}
