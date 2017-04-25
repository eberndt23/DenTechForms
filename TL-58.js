//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

//<AcroForm>
//<ACRO_source>Submit:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Submit:Annot1:MouseUp:Action1 ***********/
app.execMenuItem("Save");
app.execMenuItem("Close");
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>kgAvg:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:kgAvg:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>kgTotal:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:kgTotal:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>lbAvg:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:lbAvg:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>lbTotal:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:lbTotal:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>


