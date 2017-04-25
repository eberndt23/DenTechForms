//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

//<Document-Actions>
//<ACRO_source>Document Will Close</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Actions:Document Will Close ***********/
app.execMenuItem("Save");
//</ACRO_script>
//</Document-Actions>

//<AcroForm>
//<ACRO_source>3_2:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:3_2:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3_2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:3_2:Calculate ***********/
/** BVCALC TrgtDensFromCtrlStrip * 0.98 EVCALC **/event.value=AFMakeNumber(getField("TrgtDensFromCtrlStrip").value) * 0.98
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:4:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:4:Calculate ***********/
/** BVCALC TrgtDensFromCtrlStrip * 1.02
 EVCALC **/event.value=AFMakeNumber(getField("TrgtDensFromCtrlStrip").value) * 1.02

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmbAF1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmbAF1:Calculate ***********/
// Get the field values, as numbers

var numerator = +getField("WeightinAir1").value;

var denominator = +getField("VolumeED1").value;

 

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmbAF2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmbAF2:Calculate ***********/
// Column Gmb2
// Get the field values, as numbers

var numerator = +getField("WeightinAir2").value;

var denominator = +getField("VolumeED2").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmbAF3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmbAF3:Calculate ***********/
// Column Gmb3
// Get the field values, as numbers

var numerator = +getField("WeightinAir3").value;

var denominator = +getField("VolumeED3").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmbAF4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmbAF4:Calculate ***********/
// Column Gmb4
// Get the field values, as numbers

var numerator = +getField("WeightinAir4").value;

var denominator = +getField("VolumeED4").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmbAF5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmbAF5:Calculate ***********/
// Column Gmb5
// Get the field values, as numbers

var numerator = +getField("WeightinAir5").value;

var denominator = +getField("VolumeED5").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmbAF6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmbAF6:Calculate ***********/
// Column Gmb6
// Get the field values, as numbers

var numerator = +getField("WeightinAir6").value;

var denominator = +getField("VolumeED6").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmbAF7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmbAF7:Calculate ***********/
// Column Gmb7
// Get the field values, as numbers

var numerator = +getField("WeightinAir7").value;

var denominator = +getField("VolumeED7").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
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
//<ACRO_source>GmmGmbAvgGmm1:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmGmbAvgGmm1:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmGmbAvgGmm1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmGmbAvgGmm1:Calculate ***********/
var numerator = +getField("GmbAF1").value;

var denominator = +getField("Last5SampleGmmAverage").value;

event.value = denominator !== 0 ? numerator / denominator : "";	
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmGmbAvgGmm2:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmGmbAvgGmm2:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmGmbAvgGmm2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmGmbAvgGmm2:Calculate ***********/
// %Gmm2
// Get the field values, as numbers

var numerator = +getField("GmbAF2").value;

var denominator = +getField("Last5SampleGmmAverage").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
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
// %Gmm3
// Get the field values, as numbers

var numerator = +getField("GmbAF3").value;

var denominator = +getField("Last5SampleGmmAverage").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
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
// %Gmm4
// Get the field values, as numbers

var numerator = +getField("GmbAF4").value;

var denominator = +getField("Last5SampleGmmAverage").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
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
// %Gmm5
// Get the field values, as numbers

var numerator = +getField("GmbAF5").value;

var denominator = +getField("Last5SampleGmmAverage").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
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
// %Gmm6
// Get the field values, as numbers

var numerator = +getField("GmbAF6").value;

var denominator = +getField("Last5SampleGmmAverage").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
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
// %Gmm7
// Get the field values, as numbers

var numerator = +getField("GmbAF7").value;

var denominator = +getField("Last5SampleGmmAverage").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
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
//<ACRO_source>SubmitForm:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SubmitForm:Annot1:MouseUp:Action1 ***********/
app.execMenuItem("Save");
app.execMenuItem("Close");
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED1:Calculate ***********/
// Set this field value
// Column F1

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


