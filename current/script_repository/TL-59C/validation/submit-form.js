var patternEmpty = /^\s*$/;
  var strMissing = "";
  if(patternEmpty.test(this.getField("projNumber").value))
     strMissing = "Project Number on page 1";
  else if(patternEmpty.test(this.getField("itemNumber").value))
     strMissing = "Item Number on page 1";
else if(patternEmpty.test(this.getField("rtNumber").value))
     strMissing = "Route Number page 1";
else if(patternEmpty.test(this.getField("County").value))
     strMissing = "County on page 1";
else if(patternEmpty.test(this.getField("from").value))
     strMissing = "From: on page 1";
else if(patternEmpty.test(this.getField("To").value))
     strMissing = "To: on page 1";
else if(patternEmpty.test(this.getField("direction").value))
     strMissing = "Direction on page 1";
else if(patternEmpty.test(this.getField("lane").value))
     strMissing = "Lane on page 1";
else if(patternEmpty.test(this.getField("qcLotNumber").value))
     strMissing = "QC Lot Number on page 1";
else if(patternEmpty.test(this.getField("applicationRate").value))
     strMissing = "Application Rate on page 1";
else if(patternEmpty.test(this.getField("asphaltMixType").value))
     strMissing = "Asphalt Mix Type on page 1";
else if(patternEmpty.test(this.getField("JobMixNumber").value))
     strMissing = "Asphalt Job Mix Number on page 1";
else if(patternEmpty.test(this.getField("nuclearGaugeModelNum").value))
     strMissing = "Nuclear Gauge Model Number on page 1";
else if(patternEmpty.test(this.getField("gaugeCalibrationDate").value))
     strMissing = "Nuclear Gauge Calibration Date on page 1";
else if(patternEmpty.test(this.getField("GaugeSerialNumber").value))
     strMissing = "Nuclear Gauge Serial Number on page 1";
else if(patternEmpty.test(this.getField("depthSetting").value))
     strMissing = "Depth Setting on page 1";
else if(patternEmpty.test(this.getField("ctrlStripNumber").value))
     strMissing = "Control Strip Number on page 1";
else if(patternEmpty.test(this.getField("ctrlStripDate").value))
     strMissing = "Control Strip Date on page 1";
else if(patternEmpty.test(this.getField("TrgtDensFromCtrlStrip").value))
     strMissing = "Target Density from Control Strip on page 1";
else if(patternEmpty.test(this.getField("Last5SampleGmmAverage").value))
     strMissing = "Last 5 Sample Gmm Average on page 1";
else if(patternEmpty.test(this.getField("techName").value))
     strMissing = "QC Technician";
else if(patternEmpty.test(this.getField("date").value))
     strMissing = "Signature Date on page 1";
else if(patternEmpty.test(this.getField("projNumber2").value))
     strMissing = "Project Number on page 2";
else if(patternEmpty.test(this.getField("itemNumber2").value))
     strMissing = "Item Number on page 2";
else if(patternEmpty.test(this.getField("rtNumber2").value))
     strMissing = "Route Number on page 2";
else if(patternEmpty.test(this.getField("County2").value))
     strMissing = "County on page 2";
else if(patternEmpty.test(this.getField("from2").value))
     strMissing = "From: on page 2";
else if(patternEmpty.test(this.getField("To2").value))
     strMissing = "To: on page 2";
else if(patternEmpty.test(this.getField("direction2").value))
     strMissing = "Direction on page 2";
else if(patternEmpty.test(this.getField("lane2").value))
     strMissing = "Lane on page 2";
else if(patternEmpty.test(this.getField("qcLotNumber2").value))
     strMissing = "QC Lot Number on page 2";
else if(patternEmpty.test(this.getField("applicationRate2").value))
     strMissing = "Application Rate on page 2";
else if(patternEmpty.test(this.getField("asphaltMixType2").value))
     strMissing = "Asphalt Mix Type on page 2";
else if(patternEmpty.test(this.getField("asphaltMixJobNumber2").value))
     strMissing = "Asphalt Mix Job Number on page 2";
else if(patternEmpty.test(this.getField("date_2").value))
     strMissing = "Signature Date on page 2";
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





