 topmostSubform.Page1.SubmitForm[0]::click - (JavaScript, client)
var nRtn = xfa.host.messageBox("Are you ready to submit the form?", "Confirm Submission", 2 ,2);
if(nRtn == 4)
{
trustedSilentPrint(event.target);
mySaveDoc(event.target);
xfa.host.messageBox("Form saved! This window will now close.", "File Saved", 3);
app.execMenuItem("Close");
}
else if (nRtn ==3)
{console.println("The Response Was No")
}
