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
event.value = util.printf("%.2f" , Avg('SSDBulkSpecificGravityAF1' , 'SSDBulkSpecificGravityAF2' , 'SSDBulkSpecificGravityAF3' , 'SSDBulkSpecificGravityAF4' , 'SSDBulkSpecificGravityAF5' , 'SSDBulkSpecificGravityAF6' , 'SSDBulkSpecificGravityAF7'));
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
//<ACRO_source>SSDBulkSpecificGravityAF1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SSDBulkSpecificGravityAF1:Calculate ***********/
var numerator = +getField("WeightinAirg1").value;

var denominator = +getField("VolumeED1").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.2f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SSDBulkSpecificGravityAF2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SSDBulkSpecificGravityAF2:Calculate ***********/
var numerator = +getField("WeightinAirg2").value;

var denominator = +getField("VolumeED2").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.2f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SSDBulkSpecificGravityAF3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SSDBulkSpecificGravityAF3:Calculate ***********/
var numerator = +getField("WeightinAirg3").value;

var denominator = +getField("VolumeED3").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.2f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SSDBulkSpecificGravityAF4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SSDBulkSpecificGravityAF4:Calculate ***********/
var numerator = +getField("WeightinAirg4").value;

var denominator = +getField("VolumeED4").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.2f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SSDBulkSpecificGravityAF5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SSDBulkSpecificGravityAF5:Calculate ***********/
var numerator = +getField("WeightinAirg5").value;

var denominator = +getField("VolumeED5").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.2f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SSDBulkSpecificGravityAF6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SSDBulkSpecificGravityAF6:Calculate ***********/
var numerator = +getField("WeightinAirg6").value;

var denominator = +getField("VolumeED6").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.2f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SSDBulkSpecificGravityAF7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SSDBulkSpecificGravityAF7:Calculate ***********/
var numerator = +getField("WeightinAirg7").value;

var denominator = +getField("VolumeED7").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.2f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SubmitForm:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SubmitForm:Annot1:MouseUp:Action1 ***********/
var cMsg = "Please make sure the form is correctly filled out before continuing.";
cMsg += "\n\nDo you wish to submit the form?";

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
var numerator = +getField("SSDWeightInAirg1").value;

var denominator = +getField("WeightinWatergBC1").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED2:Calculate ***********/
var numerator = +getField("SSDWeightInAirg2").value;

var denominator = +getField("WeightinWatergBC2").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED3:Calculate ***********/
var numerator = +getField("SSDWeightInAirg3").value;

var denominator = +getField("WeightinWatergBC3").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED4:Calculate ***********/
var numerator = +getField("SSDWeightInAirg4").value;

var denominator = +getField("WeightinWatergBC4").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED5:Calculate ***********/
var numerator = +getField("SSDWeightInAirg5").value;

var denominator = +getField("WeightinWatergBC5").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED6:Calculate ***********/
var numerator = +getField("SSDWeightInAirg6").value;

var denominator = +getField("WeightinWatergBC6").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED7:Calculate ***********/
var numerator = +getField("SSDWeightInAirg7").value;

var denominator = +getField("WeightinWatergBC7").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WeightinWatergBC1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WeightinWatergBC1:Calculate ***********/
var numerator = +getField("WeightinWaterTotalg1").value;

var denominator = +getField("BasketTareWeightg1").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WeightinWatergBC2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WeightinWatergBC2:Calculate ***********/
var numerator = +getField("WeightinWaterTotalg2").value;

var denominator = +getField("BasketTareWeightg2").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WeightinWatergBC3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WeightinWatergBC3:Calculate ***********/
var numerator = +getField("WeightinWaterTotalg3").value;

var denominator = +getField("BasketTareWeightg3").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WeightinWatergBC4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WeightinWatergBC4:Calculate ***********/
var numerator = +getField("WeightinWaterTotalg4").value;

var denominator = +getField("BasketTareWeightg4").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WeightinWatergBC5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WeightinWatergBC5:Calculate ***********/
var numerator = +getField("WeightinWaterTotalg5").value;

var denominator = +getField("BasketTareWeightg5").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WeightinWatergBC6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WeightinWatergBC6:Calculate ***********/
var numerator = +getField("WeightinWaterTotalg6").value;

var denominator = +getField("BasketTareWeightg6").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WeightinWatergBC7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WeightinWatergBC7:Calculate ***********/
var numerator = +getField("WeightinWaterTotalg7").value;

var denominator = +getField("BasketTareWeightg7").value;

var result = numerator / denominator;

event.value = (numerator !==0 , denominator !==0) ? util.printf("%.1f",result) : "";


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgSSDBulkSpGrGmm:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgSSDBulkSpGrGmm:Validate ***********/
var x1 = +getField("MaxSpecGravityGmm").value;
if (x1 === 0) event.value = "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgSSDBulkSpGrGmm:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgSSDBulkSpGrGmm:Calculate ***********/
var x1 = +getField("Average").value;
var x2 = +getField("MaxSpecGravityGmm").value;
var result = x1 / x2;

event.value = util.printf("%.1f" , result);

//</ACRO_script>
//</AcroForm>


