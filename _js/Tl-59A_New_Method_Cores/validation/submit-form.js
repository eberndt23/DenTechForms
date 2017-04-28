var patternEmpty = /^\s*$/;
  var strMissing = "";
  if(patternEmpty.test(this.getField("ProdDate").value))
     strMissing = "Production Date";
else if(patternEmpty.test(this.getField("rtDirection1").value))
     strMissing = "Route Direction";
else if(patternEmpty.test(this.getField("lane").value))
     strMissing = "Lane";
else if(patternEmpty.test(this.getField("projSchedNumber1").value))
     strMissing = "Project Schedule Number";
else if(patternEmpty.test(this.getField("county").value))
     strMissing = "County";
else if(patternEmpty.test(this.getField("pavingContractor").value))
     strMissing = "Paving Contractor";
else if(patternEmpty.test(this.getField("testLotSection").value))
     strMissing = "Test Lot Section Number";
else if(patternEmpty.test(this.getField("from").value))
     strMissing = "From:";
else if(patternEmpty.test(this.getField("to").value))
     strMissing = "To:";
else if(patternEmpty.test(this.getField("totalPavedLength").value))
     strMissing = "Total Paved Length";
else if(patternEmpty.test(this.getField("appWidth").value))
     strMissing = "Application Width";
else if(patternEmpty.test(this.getField("applicationRate").value))
     strMissing = "Application Rate";else if(patternEmpty.test(this.getField("calcTonnage1").value))
     strMissing = "Calculated Tonnage";else if(patternEmpty.test(this.getField("asphaltProd").value))
     strMissing = "Asphalt Producer";
else if(patternEmpty.test(this.getField("asphaltPlant").value))
     strMissing = "Asphalt Plant";
else if(patternEmpty.test(this.getField("jobMixID").value))
     strMissing = "Job Mix ID";
else if(patternEmpty.test(this.getField("ctrlStripNumber").value))
     strMissing = "Control Strip Number and Date";
else if(patternEmpty.test(this.getField("csDensity").value))
     strMissing = "CS Density";
else if(patternEmpty.test(this.getField("minDensity").value))
     strMissing = "Minimum Density";
else if(patternEmpty.test(this.getField("nuclearGaugeSerial").value))
     strMissing = "Nuclear Gauge Serial Number";
else if(patternEmpty.test(this.getField("DailyGmm").value))
     strMissing = "Daily Gmm";
else if(patternEmpty.test(this.getField("plantLotSampleNumber").value))
     strMissing = "Plant Lot and Sample Number for Gmm Testing";
else if(patternEmpty.test(this.getField("Date").value))
     strMissing = "Signature Date";
else if(patternEmpty.test(this.getField("fieldTech").value))
     strMissing = "Field Level II Inspector";
else if(patternEmpty.test(this.getField("payFactor").value))
     strMissing = "Pay Factor from S315Hp1 Table III-4A";

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





