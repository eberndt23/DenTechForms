//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

//<AcroForm>
//<ACRO_source>AverageSSD:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:AverageSSD:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>AverageSSDBulkPerSiteRow1:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:AverageSSDBulkPerSiteRow1:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>AverageSSDBulkPerSiteRow1=2:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:AverageSSDBulkPerSiteRow1=2:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>AverageSSDBulkPerSiteRow3:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:AverageSSDBulkPerSiteRow3:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>HSum:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:HSum:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SSDBulkSpecificGravityAF1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SSDBulkSpecificGravityAF1:Calculate ***********/
// Column Bulk Specific Gravity
// Get the field values, as numbers

var numerator = +getField("WeightinAirg1").value;

var denominator = +getField("VolumeED1").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SSDBulkSpecificGravityAF2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SSDBulkSpecificGravityAF2:Calculate ***********/
// Column Bulk Specific Gravity
// Get the field values, as numbers

var numerator = +getField("WeightinAirg2").value;

var denominator = +getField("VolumeED2").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SSDBulkSpecificGravityAF3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SSDBulkSpecificGravityAF3:Calculate ***********/
// Column Bulk Specific Gravity
// Get the field values, as numbers

var numerator = +getField("WeightinAirg3").value;

var denominator = +getField("VolumeED3").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SSDBulkSpecificGravityAF4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SSDBulkSpecificGravityAF4:Calculate ***********/
// Column Bulk Specific Gravity
// Get the field values, as numbers

var numerator = +getField("WeightinAirg4").value;

var denominator = +getField("VolumeED4").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SSDBulkSpecificGravityAF5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SSDBulkSpecificGravityAF5:Calculate ***********/
// Column Bulk Specific Gravity
// Get the field values, as numbers

var numerator = +getField("WeightinAirg5").value;

var denominator = +getField("VolumeED5").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SSDBulkSpecificGravityAF6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SSDBulkSpecificGravityAF6:Calculate ***********/
// Column Bulk Specific Gravity
// Get the field values, as numbers

var numerator = +getField("WeightinAirg6").value;

var denominator = +getField("VolumeED6").value;

// Set this field value

event.value = denominator !== 0 ? numerator / denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SubmitForm:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SubmitForm:Annot1:MouseUp:Action1 ***********/
app.execMenuItem("save");
app.execMenuItem("close");

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED1:Calculate ***********/
// Column F1
// Get the field values, as numbers

var numerator = +getField("SSDWeightInAirg1").value;

var denominator = +getField("WeightinWatergBC1").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED2:Calculate ***********/
// Column F2
// Get the field values, as numbers

var numerator = +getField("SSDWeightInAirg2").value;

var denominator = +getField("WeightinWatergBC2").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED3:Calculate ***********/
// Column F3
// Get the field values, as numbers

var numerator = +getField("SSDWeightInAirg3").value;

var denominator = +getField("WeightinWatergBC3").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED4:Calculate ***********/
// Column F4
// Get the field values, as numbers

var numerator = +getField("SSDWeightInAirg4").value;

var denominator = +getField("WeightinWatergBC4").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED5:Calculate ***********/
// Column F5
// Get the field values, as numbers

var numerator = +getField("SSDWeightInAirg5").value;

var denominator = +getField("WeightinWatergBC5").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>VolumeED6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:VolumeED6:Calculate ***********/
// Column F6
// Get the field values, as numbers

var numerator = +getField("SSDWeightInAirg6").value;

var denominator = +getField("WeightinWatergBC6").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WeightinWatergBC1:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WeightinWatergBC1:Validate ***********/
// Form validation to display null if cell calculation = 0

// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WeightinWatergBC1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WeightinWatergBC1:Calculate ***********/
// Column D1
// Get the field values, as numbers

var numerator = +getField("WeightinWaterTotalg1").value;

var denominator = +getField("BasketTareWeightg1").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WeightinWatergBC2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WeightinWatergBC2:Calculate ***********/
// Column D2
// Get the field values, as numbers

var numerator = +getField("WeightinWaterTotalg2").value;

var denominator = +getField("BasketTareWeightg2").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WeightinWatergBC3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WeightinWatergBC3:Calculate ***********/
// Column D3
// Get the field values, as numbers

var numerator = +getField("WeightinWaterTotalg3").value;

var denominator = +getField("BasketTareWeightg3").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WeightinWatergBC4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WeightinWatergBC4:Calculate ***********/
// Column D4
// Get the field values, as numbers

var numerator = +getField("WeightinWaterTotalg4").value;

var denominator = +getField("BasketTareWeightg4").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WeightinWatergBC5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WeightinWatergBC5:Calculate ***********/
// Column D5
// Get the field values, as numbers

var numerator = +getField("WeightinWaterTotalg5").value;

var denominator = +getField("BasketTareWeightg5").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WeightinWatergBC6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WeightinWatergBC6:Calculate ***********/
// Column D6
// Get the field values, as numbers

var numerator = +getField("WeightinWaterTotalg6").value;

var denominator = +getField("BasketTareWeightg6").value;

// Set this field value

event.value = denominator !== 0 ? numerator - denominator : "";
//</ACRO_script>
//</AcroForm>


