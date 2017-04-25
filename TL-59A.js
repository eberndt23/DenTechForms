//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

//<AcroForm>
//<ACRO_source>LeftCuAvg:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:LeftCuAvg:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
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
//<ACRO_source>SubLtAvgTotal:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SubLtAvgTotal:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Submit:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Submit:Annot1:MouseUp:Action1 ***********/
app.execMenuItem("Save");
app.execMenuItem("Close");
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
/** BVCALC TrgtDensityCtrlStrp * 1.02 EVCALC **/event.value=AFMakeNumber(getField("TrgtDensityCtrlStrp").value) * 1.02
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
/** BVCALC TrgtDensityCtrlStrp * 0.98 EVCALC **/event.value=AFMakeNumber(getField("TrgtDensityCtrlStrp").value) * 0.98
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
//<ACRO_source>subLtAvg2:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg2:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
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
//<ACRO_source>subLtAvg4:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg4:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
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
//<ACRO_source>subLtAvg6:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:subLtAvg6:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
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


