var patternEmpty = /^\s*$/;
  var strMissing = "";
  if(patternEmpty.test(this.getField("ctrlStripNumber").value))
     strMissing = "Control Strip Number";
else if(patternEmpty.test(this.getField("projectName").value))
     strMissing = "Project Name";
else if(patternEmpty.test(this.getField("itemNumber").value))
     strMissing = "Item Number";
else if(patternEmpty.test(this.getField("date").value))
     strMissing = "Date";
else if(patternEmpty.test(this.getField("itemNumber").value))
     strMissing = "Item Number";
else if(patternEmpty.test(this.getField("projRoute").value))
     strMissing = "Project Route";
else if(patternEmpty.test(this.getField("from").value))
     strMissing = "From:";
else if(patternEmpty.test(this.getField("to").value))
     strMissing = "To:";
else if(patternEmpty.test(this.getField("laneDirection").value))
     strMissing = "Lane Direction";
else if(patternEmpty.test(this.getField("lane").value))
     strMissing = "Lane";
else if(patternEmpty.test(this.getField("mixType").value))
     strMissing = "Mix Type";
else if(patternEmpty.test(this.getField("applicationRatelbs").value))
     strMissing = "Application Rate Lbs/yd";
else if(patternEmpty.test(this.getField("applicationRatekg").value))
     strMissing = "Application Rate kg/m";
else if(patternEmpty.test(this.getField("producer").value))
     strMissing = "Producer";
else if(patternEmpty.test(this.getField("location").value))
     strMissing = "Location";
else if(patternEmpty.test(this.getField("roller1").value))
     strMissing = "Roller 1";
else if(patternEmpty.test(this.getField("roller2").value))
     strMissing = "Roller 2";
else if(patternEmpty.test(this.getField("roller3").value))
     strMissing = "Roller 3";
else if(patternEmpty.test(this.getField("gaugeModel").value))
     strMissing = "Gauge Model";
else if(patternEmpty.test(this.getField("serialNumber").value))
     strMissing = "Gauge Serial Number";
else if(patternEmpty.test(this.getField("calibrationDate").value))
     strMissing = "Callibration Date";
else if(patternEmpty.test(this.getField("depthSetting").value))
     strMissing = "Depth Setting";
else if(patternEmpty.test(this.getField("techName").value))
     strMissing = "Technician Name";
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





