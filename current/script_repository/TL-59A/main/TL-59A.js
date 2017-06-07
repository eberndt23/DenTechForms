//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

//<Document-Level>
//<ACRO_source>Avg</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:Avg ***********/
function Avg() {
// compute average of non-empty passed field names
var sum = 0; // sum of fields
var count = 0; // counter for non-blank fields
for(i = 0; i < arguments.length; i++) {
var iField = arguments[i]; // get the i element from passed arguments
var fField = this.getField(arguments[i]).value;
if(!(isNaN(fField)) ) {
// field is a number
if(fField.toString() != '') {
// field is not null or blank
sum += Number(fField); // add to sum
count++; // increment count
} // end not blank
} // end number
} // end loop through arguments
if(count != 0) {
// compute average if there is one or more items to average
return sum / count; // return average
} else {
return '';
} // end no average computed
} // end Avg function
//</ACRO_script>
//</Document-Level>

//<AcroForm>
//<ACRO_source>LeftCuAvg:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:LeftCuAvg:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>LeftCuAvg:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:LeftCuAvg:Calculate ***********/
event.value = util.printf("%.1f" , Avg('LeftCU1' , 'LeftCU2' , 'LeftCU3' , 'LeftCU4' , 'LeftCU5' , 'LeftCU6' , 'LeftCU7' , 'LeftCU8' , 'LeftCU9' , 'LeftCU10' , 'LeftCU11' , 'LeftCU12' , 'LeftCU13' , 'LeftCU14'));


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Reset:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Reset:Annot1:MouseUp:Action1 ***********/
var cMsg = "Continuing with the current action will erase all previous entries.";
cMsg += "\n\nDo you wish to reset the form?";

var nRtn = app.alert(cMsg,2,2,"Reset Form");
if(nRtn == 4)
{
;
}
else if(nRtn == 3)
{console.println("The Response Was No");
}





//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RightCuAvg:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:RightCuAvg:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RightCuAvg:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:RightCuAvg:Calculate ***********/
event.value = util.printf("%.1f" , Avg('RightCU1' , 'RightCU2' , 'RightCU3' , 'RightCU4' , 'RightCU5' , 'RightCU6' , 'RightCU7' , 'RightCU8' , 'RightCU9' , 'RightCU10' , 'RightCU11' , 'RightCU12' , 'RightCU13' , 'RightCU14'));

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SubLtAvgTotal:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SubLtAvgTotal:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SubLtAvgTotal:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SubLtAvgTotal:Calculate ***********/
event.value = util.printf("%.1f" , Avg('subLtAvg1' , 'subLtAvg2' , 'subLtAvg3' , 'subLtAvg4' , 'subLtAvg5' , 'subLtAvg6' , 'subLtAvg7'));
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Submit:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Submit:Annot1:MouseUp:Action1 ***********/
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
else if(patternEmpty.test(this.getField("gaugeModelNumber").value))
     strMissing = "Gauge Model Number";
else if(patternEmpty.test(this.getField("calibrationDate").value))
     strMissing = "Gauge Calibration Date";
else if(patternEmpty.test(this.getField("gaugeSerialNumber").value))
     strMissing = "Gauge Serial Number";
else if(patternEmpty.test(this.getField("depthSetting").value))
     strMissing = "Depth Setting";
else if(patternEmpty.test(this.getField("ctrlStripNumber").value))
     strMissing = "Control Strip Number";
else if(patternEmpty.test(this.getField("ctrlStripDate").value))
     strMissing = "Control Strip Date";
else if(patternEmpty.test(this.getField("trgtDensity").value))
     strMissing = "Target Density from Control Strip";
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






//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>maxDensity:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:maxDensity:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>maxDensity:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:maxDensity:Calculate ***********/
event.value = util.printf("%.1f" , +getField("trgtDensity").value * 1.02); 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>minDensity:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:minDensity:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>minDensity:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:minDensity:Calculate ***********/
event.value = util.printf("%.1f" , +getField("trgtDensity").value * 0.98); 

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>subLtAvg1:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg1:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>subLtAvg1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg1:Calculate ***********/
event.value = util.printf("%.1f" , Avg('lbsftkgm1' , 'lbsftkgm2'));
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>subLtAvg2:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg2:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>subLtAvg2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg2:Calculate ***********/
event.value = util.printf("%.1f" , Avg('lbsftkgm3' , 'lbsftkgm4'));
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>subLtAvg3:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg3:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>subLtAvg3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg3:Calculate ***********/
event.value = util.printf("%.1f" , Avg('lbsftkgm5' , 'lbsftkgm6'));
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>subLtAvg4:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg4:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>subLtAvg4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg4:Calculate ***********/
event.value = util.printf("%.1f" , Avg('lbsftkgm7' , 'lbsftkgm8'));
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>subLtAvg5:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg5:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>subLtAvg5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg5:Calculate ***********/
event.value = util.printf("%.1f" , Avg('lbsftkgm9' , 'lbsftkgm10'));
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>subLtAvg6:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg6:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>subLtAvg6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg6:Calculate ***********/
event.value = util.printf("%.1f" , Avg('lbsftkgm11' , 'lbsftkgm12'));
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>subLtAvg7:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg7:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>subLtAvg7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg7:Calculate ***********/
event.value = util.printf("%.1f" , Avg('lbsftkgm13' , 'lbsftkgm14'));
//</ACRO_script>
//</AcroForm>


