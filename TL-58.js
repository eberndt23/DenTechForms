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
//<ACRO_source>Reset Form:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Reset Form:Annot1:MouseUp:Action1 ***********/
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
//<ACRO_source>kgAvg:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:kgAvg:Validate ***********/
// Blank the field if it calculates to zero
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>kgAvg:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:kgAvg:Calculate ***********/
event.value = Avg('kg1' , 'kg2' , 'kg3' , 'kg4' , 'kg5' , 'kg6' , 'kg7' , 'kg8' , 'kg9' , 'kg10');
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
//<ACRO_source>kgTotal:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:kgTotal:Calculate ***********/
var n1 = +getField("kg1").value;
var n2 = +getField("kg2").value;
var n3 = +getField("kg3").value;
var n4 = +getField("kg4").value;
var n5 = +getField("kg5").value;
var n6 = +getField("kg6").value;
var n7 = +getField("kg7").value;
var n8 = +getField("kg8").value;
var n9 = +getField("kg9").value;
var n10 = +getField("kg10").value;

var result = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10);
event.value = result;
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
//<ACRO_source>lbAvg:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:lbAvg:Calculate ***********/
event.value = Avg('lbft1' , 'lbft2' , 'lbft3' , 'lbft4' , 'lbft5' , 'lbft6' , 'lbft7' , 'lbft8' , 'lbft9' , 'lbft10');
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

//<AcroForm>
//<ACRO_source>lbTotal:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:lbTotal:Calculate ***********/
var n1 = +getField("lbft1").value;
var n2 = +getField("lbft2").value;
var n3 = +getField("lbft3").value;
var n4 = +getField("lbft4").value;
var n5 = +getField("lbft5").value;
var n6 = +getField("lbft6").value;
var n7 = +getField("lbft7").value;
var n8 = +getField("lbft8").value;
var n9 = +getField("lbft9").value;
var n10 = +getField("lbft10").value;

var result = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10);
event.value = result;
//</ACRO_script>
//</AcroForm>


