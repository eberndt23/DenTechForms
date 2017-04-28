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
//<ACRO_source>avgND:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgND:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgND:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgND:Calculate ***********/
event.value = Avg('ND1' , 'ND2' , 'ND3');
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgND1:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgND1:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgND1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgND1:Calculate ***********/
event.value = Avg('ND1_1' , 'ND1_2' , 'ND1_3');
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgND2:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgND2:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgND2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgND2:Calculate ***********/
event.value = Avg('ND2_1' , 'ND2_2' , 'ND2_3');
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgND3:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgND3:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgND3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgND3:Calculate ***********/
event.value = Avg('ND3_1' , 'ND3_2' , 'ND3_3');
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgND4:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgND4:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgND4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgND4:Calculate ***********/
event.value = Avg('ND4_1' , 'ND4_2' , 'ND4_3');
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgND5:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgND5:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgND5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgND5:Calculate ***********/
event.value = Avg('ND5_1' , 'ND5_2' , 'ND5_3');
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgND6:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgND6:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgND6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgND6:Calculate ***********/
event.value = Avg('ND6_1' , 'ND6_2' , 'ND6_3');
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgND7:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgND7:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>avgND7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:avgND7:Calculate ***********/
event.value = Avg('ND7_1' , 'ND7_2' , 'ND7_3');
//</ACRO_script>
//</AcroForm>


