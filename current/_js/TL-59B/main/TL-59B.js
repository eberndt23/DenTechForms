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
//<ACRO_source>Average:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Average:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Average:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Average:Calculate ***********/
event.value = util.printf("%.3f" , Avg('BulkSpecificGravity1' , 'BulkSpecificGravity2' , 'BulkSpecificGravity3' , 'BulkSpecificGravity4' , 'BulkSpecificGravity5' , 'BulkSpecificGravity6' , 'BulkSpecificGravity7'));

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>BulkSpGrAF1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:BulkSpGrAF1:Calculate ***********/
// Column Gmb1
// Get the field values, as numbers

var numerator = +getField("WeightinAir1").value;

var denominator = +getField("VolumeED1").value;

// Set this field value

event.value = denominator !== 0 ? util.printf("%.3f" , numerator / denominator) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>BulkSpGrAF2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:BulkSpGrAF2:Calculate ***********/
// Column Gmb1
// Get the field values, as numbers

var numerator = +getField("WeightinAir2").value;

var denominator = +getField("VolumeED2").value;

// Set this field value

event.value = denominator !== 0 ? util.printf("%.3f" , numerator / denominator) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>BulkSpGrAF3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:BulkSpGrAF3:Calculate ***********/
// Column Gmb1
// Get the field values, as numbers

var numerator = +getField("WeightinAir3").value;

var denominator = +getField("VolumeED3").value;

// Set this field value

event.value = denominator !== 0 ? util.printf("%.3f" , numerator / denominator) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>BulkSpGrAF4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:BulkSpGrAF4:Calculate ***********/
// Column Gmb1
// Get the field values, as numbers

var numerator = +getField("WeightinAir4").value;

var denominator = +getField("VolumeED4").value;

// Set this field value

event.value = denominator !== 0 ? util.printf("%.3f" , numerator / denominator) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>BulkSpGrAF5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:BulkSpGrAF5:Calculate ***********/
// Column Gmb1
// Get the field values, as numbers

var numerator = +getField("WeightinAir5").value;

var denominator = +getField("VolumeED5").value;

// Set this field value

event.value = denominator !== 0 ? util.printf("%.3f" , numerator / denominator) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>BulkSpGrAF6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:BulkSpGrAF6:Calculate ***********/
// Column Gmb1
// Get the field values, as numbers

var numerator = +getField("WeightinAir6").value;

var denominator = +getField("VolumeED6").value;

// Set this field value

event.value = denominator !== 0 ? util.printf("%.3f" , numerator / denominator) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>BulkSpGrAF7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:BulkSpGrAF7:Calculate ***********/
// Column Gmb1
// Get the field values, as numbers

var numerator = +getField("WeightinAir7").value;

var denominator = +getField("VolumeED7").value;

// Set this field value

event.value = denominator !== 0 ? util.printf("%.3f" , numerator / denominator) : "";
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
//<ACRO_source>SubmitForm:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SubmitForm:Annot1:MouseUp:Action1 ***********/
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






//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED1:Calculate ***********/
// Column F1
// Set this field value

var numerator = +getField("SSDWtinAir1").value;

var denominator = +getField("WtinWaterBC1").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator: "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED2:Calculate ***********/
// Column F2
// Set this field value

var numerator = +getField("SSDWtinAir2").value;

var denominator = +getField("WtinWaterBC2").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator: "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED3:Calculate ***********/
// Column F3
// Set this field value

var numerator = +getField("SSDWtinAir3").value;

var denominator = +getField("WtinWaterBC3").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator: "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED4:Calculate ***********/
// Column F4
// Set this field value

var numerator = +getField("SSDWtinAir4").value;

var denominator = +getField("WtinWaterBC4").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator: "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED5:Calculate ***********/
// Column F5
// Set this field value

var numerator = +getField("SSDWtinAir5").value;

var denominator = +getField("WtinWaterBC5").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator: "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED6:Calculate ***********/
// Column F6
// Set this field value

var numerator = +getField("SSDWtinAir6").value;

var denominator = +getField("WtinWaterBC6").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator: "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED7:Calculate ***********/
// Column F7
// Set this field value

var numerator = +getField("SSDWtinAir7").value;

var denominator = +getField("WtinWaterBC7").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator: "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WtinWaterBC1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WtinWaterBC1:Calculate ***********/
// Column D1
// Get the field values, as numbers

var numerator = +getField("WeightinWater1").value;

var denominator = +getField("BasketTareWt1").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WtinWaterBC2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WtinWaterBC2:Calculate ***********/
// Column D2
// Get the field values, as numbers

var numerator = +getField("WeightinWater2").value;

var denominator = +getField("BasketTareWt2").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WtinWaterBC3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WtinWaterBC3:Calculate ***********/
// Column D3
// Get the field values, as numbers

var numerator = +getField("WeightinWater3").value;

var denominator = +getField("BasketTareWt3").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WtinWaterBC4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WtinWaterBC4:Calculate ***********/
// Column D4
// Get the field values, as numbers

var numerator = +getField("WeightinWater4").value;

var denominator = +getField("BasketTareWt4").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WtinWaterBC5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WtinWaterBC5:Calculate ***********/
// Column D5
// Get the field values, as numbers

var numerator = +getField("WeightinWater5").value;

var denominator = +getField("BasketTareWt5").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WtinWaterBC6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WtinWaterBC6:Calculate ***********/
// Column D6
// Get the field values, as numbers

var numerator = +getField("WeightinWater6").value;

var denominator = +getField("BasketTareWt6").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WtinWaterBC7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WtinWaterBC7:Calculate ***********/
// Column D7
// Get the field values, as numbers

var numerator = +getField("WeightinWater7").value;

var denominator = +getField("BasketTareWt7").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
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


