var patternEmpty = /^\s*$/;
  var strMissing = "";
  if(patternEmpty.test(this.getField("projNumber").value))
     strMissing = "Project Number";
else if(patternEmpty.test(this.getField("itemNumber").value))
     strMissing = "Item Number";
else if(patternEmpty.test(this.getField("routeNumber").value))
     strMissing = "Route Number";
else if(patternEmpty.test(this.getField("county").value))
     strMissing = "County";
else if(patternEmpty.test(this.getField("from").value))
     strMissing = "From:";
else if(patternEmpty.test(this.getField("to").value))
     strMissing = "To:";
else if(patternEmpty.test(this.getField("laneDirection").value))
     strMissing = "Lane Direction";
else if(patternEmpty.test(this.getField("lane").value))
     strMissing = "Lane";
else if(patternEmpty.test(this.getField("qcLotNumber").value))
     strMissing = "QC Lot Number";
else if(patternEmpty.test(this.getField("applicationRate").value))
     strMissing = "Application Rate";
else if(patternEmpty.test(this.getField("mixType").value))
     strMissing = "Asphalt Mix Type";
else if(patternEmpty.test(this.getField("jobMixNumber").value))
     strMissing = "Asphalt Job Mix Number";
else if(patternEmpty.test(this.getField("minDensityfrmTable3").value))
     strMissing = "Minimum Density (Table III-3)";
else if(patternEmpty.test(this.getField("ctrlStripNumber").value))
     strMissing = "Control Strip Number";
else if(patternEmpty.test(this.getField("ctrlStripDate").value))
     strMissing = "Control Strip Date";
else if(patternEmpty.test(this.getField("trgtDensity").value))
     strMissing = "Target Density from Control Strip";
else if(patternEmpty.test(this.getField("trgtBulkSG").value))
     strMissing = "Target Bulk Specific Gravity from Control Strip (Gmb)";
else if(patternEmpty.test(this.getField("Gmm").value))
     strMissing = "Gmm (Rice Value per VTM 22)";
else if(patternEmpty.test(this.getField("location").value))
     strMissing = "Location";
else if(patternEmpty.test(this.getField("techName").value))
     strMissing = "Technician Name";
else if(patternEmpty.test(this.getField("date").value))
     strMissing = "Signature Date";
  else
  { // All is ok, submit the data
     console.println("All form data ok");
  }

  if(strMissing.length)
  {// Got an error
     var cMsg = "Missing Form data in field: " + strMissing;
     cMsg += "\n\nDo you want to continue?";
     var nRtn = app.alert(cMsg,2,2,"Please correct errors before continuing");
if(nRtn == 4)
{
;
}
else if(nRtn == 3)
{intentionalErrorToStopScriptWhenUserSelectsNo();;
}
}
var cMsg = "Please make sure the form is filled out completely before continuing.";
cMsg += "\n\nAre you ready to submit the form?";

var nRtn = app.alert(cMsg,2,2,"Submit Form");
if(nRtn == 4)
{
app.execMenuItem("Save");
app.alert("Form submitted successfully! This window will now close.", 3);
app.execMenuItem("Close");;
}
else if(nRtn == 3)
{console.println("The Response Was No");
}





