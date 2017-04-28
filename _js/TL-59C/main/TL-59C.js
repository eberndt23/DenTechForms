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

//<Document-Actions>
//<ACRO_source>Document Will Close</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Actions:Document Will Close ***********/
app.execMenuItem("Save");
//</ACRO_script>
//</Document-Actions>

//<AcroForm>
//<ACRO_source>GmbAF1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmbAF1:Calculate ***********/
var numerator = +getField("WeightinAir1").value;

var denominator = +getField("VolumeED1").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.3f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmbAF2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmbAF2:Calculate ***********/
var numerator = +getField("WeightinAir2").value;

var denominator = +getField("VolumeED2").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.3f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmbAF3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmbAF3:Calculate ***********/
var numerator = +getField("WeightinAir3").value;

var denominator = +getField("VolumeED3").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.3f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmbAF4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmbAF4:Calculate ***********/
var numerator = +getField("WeightinAir4").value;

var denominator = +getField("VolumeED4").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.3f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmbAF5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmbAF5:Calculate ***********/
var numerator = +getField("WeightinAir5").value;

var denominator = +getField("VolumeED5").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.3f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmbAF6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmbAF6:Calculate ***********/
var numerator = +getField("WeightinAir6").value;

var denominator = +getField("VolumeED6").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.3f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmbAF7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmbAF7:Calculate ***********/
var numerator = +getField("WeightinAir7").value;

var denominator = +getField("VolumeED7").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.3f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmAveragePect:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmAveragePect:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmAveragePect:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmAveragePect:Calculate ***********/
event.value = util.printf("%.3f" , Avg('GmmGmbAvgGmm1' , 'GmmGmbAvgGmm2' , 'GmmGmbAvgGmm3' , 'GmmGmbAvgGmm4' , 'GmmGmbAvgGmm5' , 'GmmGmbAvgGmm6' , 'GmmGmbAvgGmm7'));
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmGmbAvgGmm1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmGmbAvgGmm1:Calculate ***********/
var numerator = +getField("GmbAF1").value;

var denominator = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

var x1 = +getField("WeightinAir1").value;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.3f",result)+'%' : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmGmbAvgGmm2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmGmbAvgGmm2:Calculate ***********/
var numerator = +getField("GmbAF2").value;

var denominator = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

var x1 = +getField("WeightinAir2").value;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.3f",result)+'%' : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmGmbAvgGmm3:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmGmbAvgGmm3:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmGmbAvgGmm3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmGmbAvgGmm3:Calculate ***********/
var numerator = +getField("GmbAF3").value;

var denominator = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

var x1 = +getField("WeightinAir3").value;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.3f",result)+'%' : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmGmbAvgGmm4:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmGmbAvgGmm4:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmGmbAvgGmm4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmGmbAvgGmm4:Calculate ***********/
var numerator = +getField("GmbAF4").value;

var denominator = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

var x1 = +getField("WeightinAir4").value;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.3f",result)+'%' : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmGmbAvgGmm5:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmGmbAvgGmm5:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmGmbAvgGmm5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmGmbAvgGmm5:Calculate ***********/
var numerator = +getField("GmbAF5").value;

var denominator = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

var x1 = +getField("WeightinAir5").value;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.3f",result)+'%' : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmGmbAvgGmm6:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmGmbAvgGmm6:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmGmbAvgGmm6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmGmbAvgGmm6:Calculate ***********/
var numerator = +getField("GmbAF6").value;

var denominator = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

var x1 = +getField("WeightinAir6").value;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.3f",result)+'%' : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmGmbAvgGmm7:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmGmbAvgGmm7:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmGmbAvgGmm7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmGmbAvgGmm7:Calculate ***********/
var numerator = +getField("GmbAF7").value;

var denominator = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

var x1 = +getField("WeightinAir7").value;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.3f",result)+'%' : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ResetForm:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ResetForm:Annot1:MouseUp:Action1 ***********/
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
//<ACRO_source>RightCAverage:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:RightCAverage:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RightCAverage:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:RightCAverage:Calculate ***********/
event.value = util.printf ("%.1f" , Avg('rightC1' , 'rightC2' , 'rightC3' , 'rightC4' , 'rightC5' , 'rightC6' , 'rightC7'));
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SubmitForm:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SubmitForm:Annot1:MouseUp:Action1 ***********/
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






//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED1:Calculate ***********/
var numerator = +getField("SSDWtinAir1").value;

var denominator = +getField("WtinWaterBC1").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED2:Calculate ***********/
var numerator = +getField("SSDWtinAir2").value;

var denominator = +getField("WtinWaterBC2").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED3:Calculate ***********/
var numerator = +getField("SSDWtinAir3").value;

var denominator = +getField("WtinWaterBC3").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED4:Calculate ***********/
var numerator = +getField("SSDWtinAir4").value;

var denominator = +getField("WtinWaterBC4").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED5:Calculate ***********/
var numerator = +getField("SSDWtinAir5").value;

var denominator = +getField("WtinWaterBC5").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED6:Calculate ***********/
var numerator = +getField("SSDWtinAir6").value;

var denominator = +getField("WtinWaterBC6").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED7:Calculate ***********/
var numerator = +getField("SSDWtinAir7").value;

var denominator = +getField("WtinWaterBC7").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WtinWaterBC1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WtinWaterBC1:Calculate ***********/
var numerator = +getField("WeightinWater1").value;

var denominator = +getField("BasketTareWt1").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WtinWaterBC2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WtinWaterBC2:Calculate ***********/
var numerator = +getField("WeightinWater2").value;

var denominator = +getField("BasketTareWt2").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WtinWaterBC3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WtinWaterBC3:Calculate ***********/
var numerator = +getField("WeightinWater3").value;

var denominator = +getField("BasketTareWt3").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WtinWaterBC4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WtinWaterBC4:Calculate ***********/
var numerator = +getField("WeightinWater4").value;

var denominator = +getField("BasketTareWt4").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WtinWaterBC5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WtinWaterBC5:Calculate ***********/
var numerator = +getField("WeightinWater5").value;

var denominator = +getField("BasketTareWt5").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WtinWaterBC6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WtinWaterBC6:Calculate ***********/
var numerator = +getField("WeightinWater6").value;

var denominator = +getField("BasketTareWt6").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WtinWaterBC7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WtinWaterBC7:Calculate ***********/
var numerator = +getField("WeightinWater7").value;

var denominator = +getField("BasketTareWt7").value;

var x1 = +getField("Last5SampleGmmAverage").value;

var result = numerator / denominator;

if (x1 ===0)event.value = "";
else {
event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>leftC7:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:leftC7:Validate ***********/
if (+event.value === "") event.value - null;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>leftCAverage:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:leftCAverage:Validate ***********/
if (event.value==0) event.value=""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>leftCAverage:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:leftCAverage:Calculate ***********/
event.value = util.printf("%.1f" , Avg('leftC1' , 'leftC2' , 'leftC3' , 'leftC4' , 'leftC5' , 'leftC6' , 'leftC7'));
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
var targDensity  = +getField("TrgtDensFromCtrlStrip").value;

var result = targDensity * 1.02;

event.value = (targDensity !==0) ? util.printf ("%.1f" , result) : "";

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
var targDensity  = +getField("TrgtDensFromCtrlStrip").value;

var result = targDensity * 0.98;

event.value = (targDensity !==0) ? util.printf ("%.1f" , result) : "";

//</ACRO_script>
//</AcroForm>


