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
//<ACRO_source>Avg1:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Avg1:Validate ***********/
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Avg1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Avg1:Calculate ***********/
event.value = util.printf("%.3f", Avg('Gmb1' , 'Gmb2' , 'Gmb3' , 'Gmb4' , 'Gmb5' , 'Gmb6' , 'Gmb7'));
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Avg2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Avg2:Calculate ***********/
var d1 = +getField("DailyGmm").value;
event.value = util.printf("%.3f", Avg('GmmPerct1','GmmPerct2','GmmPerct3','GmmPerct4','GmmPerct5','GmmPerct6','GmmPerct7'))+'%';

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Avg3:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Avg3:Validate ***********/
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Avg3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Avg3:Calculate ***********/
event.value = util.printf("%.1f", Avg('Bonus1' , 'Bonus2' , 'Bonus3' , 'Bonus4' , 'Bonus5' , 'Bonus6' , 'Bonus7')*100)+'%';
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Bonus1:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Bonus1:Validate ***********/
var n2 = +getField("SSDwt1").value;
var n3 = +getField("GmmPerct1").value;
var n4 = +getField("DailyGmm").value;

if (n2 ===0)event.value = "";
if (n3 ===0)event.value = "";
if (n4 ===0) event.value = "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Bonus1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Bonus1:Calculate ***********/
var v = getField("Dropdown").valueAsString;
var n1 = +getField("Gmb1").value;
var n2 = +getField("DailyGmm").value;
var n3 = +getField("SSDwt1").value;

var result = (n1 / n2) * 100

if (v ==="SM-4.75") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
  }
if (v ==="SM-19") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
}
if (v ==="SM-9") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
}

if (v ==="Enter Mix Type") {
  event.value = "Select Mix";
}

if (v ==="SM-9.5") {
    event.value = "";
    if(result >= 92.5) event.value = "1";
    else if(result < 92.5) event.value = "0";
    else if(n2 = 0) event.value = "";
    else if(n1 = 0) event.value = "";
    else if(n3 = 0) event.value = "";
}

if (v ==="SM-12") {
     event.value = "";
	if(result >= 92.5) event.value = "1";
	else if(result < 92.5) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

if (v ==="IM-19") {
     event.value = "";
	if(result >= 92.2) event.value = "1";
	else if(result < 92.2) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

if (v ==="BM-25") {
     event.value = "";    
    	if(result >= 92.2) event.value = "1";
	else if(result < 92.2) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Bonus2:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Bonus2:Validate ***********/
var n2 = +getField("SSDwt2").value;
var n3 = +getField("GmmPerct2").value;
var n4 = +getField("DailyGmm").value;

if (n2 ===0)event.value = "";
if (n3 ===0)event.value = "";
if (n4 ===0) event.value = "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Bonus2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Bonus2:Calculate ***********/
var v = getField("Dropdown").valueAsString;
var n1 = +getField("Gmb2").value;
var n2 = +getField("DailyGmm").value;
var n3 = +getField("SSDwt2").value;

var result = (n1 / n2) * 100

if (v ==="SM-4.75") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
  }
if (v ==="SM-19") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
}
if (v ==="SM-9") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
}

if (v ==="Enter Mix Type") {
  event.value = "Select Mix";
}

if (v ==="SM-9.5") {
    event.value = "";
    if(result >= 92.5) event.value = "1";
    else if(result < 92.5) event.value = "0";
    else if(n2 = 0) event.value = "";
    else if(n1 = 0) event.value = "";
    else if(n3 = 0) event.value = "";
}

if (v ==="SM-12") {
     event.value = "";
	if(result >= 92.5) event.value = "1";
	else if(result < 92.5) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

if (v ==="IM-19") {
     event.value = "";
	if(result >= 92.2) event.value = "1";
	else if(result < 92.2) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

if (v ==="BM-25") {
     event.value = "";    
    	if(result >= 92.2) event.value = "1";
	else if(result < 92.2) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Bonus3:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Bonus3:Validate ***********/
var n2 = +getField("SSDwt3").value;
var n3 = +getField("GmmPerct3").value;
var n4 = +getField("DailyGmm").value;

if (n2 ===0)event.value = "";
if (n3 ===0)event.value = "";
if (n4 ===0) event.value = "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Bonus3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Bonus3:Calculate ***********/
var v = getField("Dropdown").valueAsString;
var n1 = +getField("Gmb3").value;
var n2 = +getField("DailyGmm").value;
var n3 = +getField("SSDwt3").value;

var result = (n1 / n2) * 100

if (v ==="SM-4.75") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
  }
if (v ==="SM-19") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
}
if (v ==="SM-9") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
}

if (v ==="Enter Mix Type") {
  event.value = "Select Mix";
}

if (v ==="SM-9.5") {
    event.value = "";
    if(result >= 92.5) event.value = "1";
    else if(result < 92.5) event.value = "0";
    else if(n2 = 0) event.value = "";
    else if(n1 = 0) event.value = "";
    else if(n3 = 0) event.value = "";
}

if (v ==="SM-12") {
     event.value = "";
	if(result >= 92.5) event.value = "1";
	else if(result < 92.5) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

if (v ==="IM-19") {
     event.value = "";
	if(result >= 92.2) event.value = "1";
	else if(result < 92.2) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

if (v ==="BM-25") {
     event.value = "";    
    	if(result >= 92.2) event.value = "1";
	else if(result < 92.2) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Bonus4:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Bonus4:Validate ***********/
var n2 = +getField("SSDwt4").value;
var n3 = +getField("GmmPerct4").value;
var n4 = +getField("DailyGmm").value;

if (n2 ===0)event.value = "";
if (n3 ===0)event.value = "";
if (n4 ===0) event.value = "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Bonus4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Bonus4:Calculate ***********/
var v = getField("Dropdown").valueAsString;
var n1 = +getField("Gmb4").value;
var n2 = +getField("DailyGmm").value;
var n3 = +getField("SSDwt4").value;

var result = (n1 / n2) * 100

if (v ==="SM-4.75") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
  }
if (v ==="SM-19") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
}
if (v ==="SM-9") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
}

if (v ==="Enter Mix Type") {
  event.value = "Select Mix";
}

if (v ==="SM-9.5") {
    event.value = "";
    if(result >= 92.5) event.value = "1";
    else if(result < 92.5) event.value = "0";
    else if(n2 = 0) event.value = "";
    else if(n1 = 0) event.value = "";
    else if(n3 = 0) event.value = "";
}

if (v ==="SM-12") {
     event.value = "";
	if(result >= 92.5) event.value = "1";
	else if(result < 92.5) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

if (v ==="IM-19") {
     event.value = "";
	if(result >= 92.2) event.value = "1";
	else if(result < 92.2) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

if (v ==="BM-25") {
     event.value = "";    
    	if(result >= 92.2) event.value = "1";
	else if(result < 92.2) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Bonus5:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Bonus5:Validate ***********/
var n2 = +getField("SSDwt5").value;
var n3 = +getField("GmmPerct5").value;
var n4 = +getField("DailyGmm").value;

if (n2 ===0)event.value = "";
if (n3 ===0)event.value = "";
if (n4 ===0) event.value = "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Bonus5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Bonus5:Calculate ***********/
var v = getField("Dropdown").valueAsString;
var n1 = +getField("Gmb5").value;
var n2 = +getField("DailyGmm").value;
var n3 = +getField("SSDwt5").value;

var result = (n1 / n2) * 100

if (v ==="SM-4.75") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
  }
if (v ==="SM-19") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
}
if (v ==="SM-9") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
}

if (v ==="Enter Mix Type") {
  event.value = "Select Mix";
}

if (v ==="SM-9.5") {
    event.value = "";
    if(result >= 92.5) event.value = "1";
    else if(result < 92.5) event.value = "0";
    else if(n2 = 0) event.value = "";
    else if(n1 = 0) event.value = "";
    else if(n3 = 0) event.value = "";
}

if (v ==="SM-12") {
     event.value = "";
	if(result >= 92.5) event.value = "1";
	else if(result < 92.5) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

if (v ==="IM-19") {
     event.value = "";
	if(result >= 92.2) event.value = "1";
	else if(result < 92.2) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

if (v ==="BM-25") {
     event.value = "";    
    	if(result >= 92.2) event.value = "1";
	else if(result < 92.2) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Bonus6:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Bonus6:Validate ***********/
var n2 = +getField("SSDwt6").value;
var n3 = +getField("GmmPerct6").value;
var n4 = +getField("DailyGmm").value;

if (n2 ===0)event.value = "";
if (n3 ===0)event.value = "";
if (n4 ===0) event.value = "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Bonus6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Bonus6:Calculate ***********/
var v = getField("Dropdown").valueAsString;
var n1 = +getField("Gmb6").value;
var n2 = +getField("DailyGmm").value;
var n3 = +getField("SSDwt6").value;

var result = (n1 / n2) * 100

if (v ==="SM-4.75") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
  }
if (v ==="SM-19") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
}
if (v ==="SM-9") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
}

if (v ==="Enter Mix Type") {
  event.value = "Select Mix";
}

if (v ==="SM-9.5") {
    event.value = "";
    if(result >= 92.5) event.value = "1";
    else if(result < 92.5) event.value = "0";
    else if(n2 = 0) event.value = "";
    else if(n1 = 0) event.value = "";
    else if(n3 = 0) event.value = "";
}

if (v ==="SM-12") {
     event.value = "";
	if(result >= 92.5) event.value = "1";
	else if(result < 92.5) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

if (v ==="IM-19") {
     event.value = "";
	if(result >= 92.2) event.value = "1";
	else if(result < 92.2) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

if (v ==="BM-25") {
     event.value = "";    
    	if(result >= 92.2) event.value = "1";
	else if(result < 92.2) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Bonus7:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Bonus7:Validate ***********/
var n2 = +getField("SSDwt7").value;
var n3 = +getField("GmmPerct7").value;
var n4 = +getField("DailyGmm").value;

if (n2 ===0)event.value = "";
if (n3 ===0)event.value = "";
if (n4 ===0) event.value = "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Bonus7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Bonus7:Calculate ***********/
var v = getField("Dropdown").valueAsString;
var n1 = +getField("Gmb7").value;
var n2 = +getField("DailyGmm").value;
var n3 = +getField("SSDwt7").value;

var result = (n1 / n2) * 100

if (v ==="SM-4.75") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
  }
if (v ==="SM-19") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
}
if (v ==="SM-9") {
  event.value = "FALSE";
  if (n2 === 0) event.value = "";
}

if (v ==="Enter Mix Type") {
  event.value = "Select Mix";
}

if (v ==="SM-9.5") {
    event.value = "";
    if(result >= 92.5) event.value = "1";
    else if(result < 92.5) event.value = "0";
    else if(n2 = 0) event.value = "";
    else if(n1 = 0) event.value = "";
    else if(n3 = 0) event.value = "";
}

if (v ==="SM-12") {
     event.value = "";
	if(result >= 92.5) event.value = "1";
	else if(result < 92.5) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

if (v ==="IM-19") {
     event.value = "";
	if(result >= 92.2) event.value = "1";
	else if(result < 92.2) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

if (v ==="BM-25") {
     event.value = "";    
    	if(result >= 92.2) event.value = "1";
	else if(result < 92.2) event.value = "0";
     else if(n2 = 0) event.value = "";
     else if(n1 = 0) event.value = "";
     else if(n3 = 0) event.value = "";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Distance1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Distance1:Calculate ***********/
// Test field value for numeric value
event.rc = !isNaN(event.value);
if(!event.rc && !this.hideWarning1) {
	// Only show alert box when hideWarning is undefined or false
	// First setup the check box object literal
	var oCk = {bAfterValue:false};
	// Display Alert box
	app.alert({cMsg:"Input value must be numeric", nIcon:1, oCheckbox:oCk});
	// Set hideWarning to value of checkbox, for next time
	hideWarning1 = oCk.bAfterValue;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Gmb1:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Gmb1:Validate ***********/

var x1 = +getField("WeightinAir1").value;
var x2 = +getField("DailyGmm").value;

if (x1 ===0)event.value = "";
if (x2 ===0)event.value = "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Gmb1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Gmb1:Calculate ***********/
var n1 = +getField("WeightinAir1").value;

var n2 = +getField("Volume1").value;

result = n1 / n2;

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.3f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Gmb2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Gmb2:Calculate ***********/
var n1 = +getField("WeightinAir2").value;

var n2 = +getField("Volume2").value;

result = n1 / n2;

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.3f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Gmb3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Gmb3:Calculate ***********/
var n1 = +getField("WeightinAir3").value;

var n2 = +getField("Volume3").value;

result = n1 / n2;

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.3f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Gmb4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Gmb4:Calculate ***********/
var n1 = +getField("WeightinAir4").value;

var n2 = +getField("Volume4").value;

result = n1 / n2;

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.3f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Gmb5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Gmb5:Calculate ***********/
var n1 = +getField("WeightinAir5").value;

var n2 = +getField("Volume5").value;

result = n1 / n2;

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.3f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Gmb6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Gmb6:Calculate ***********/
var n1 = +getField("WeightinAir6").value;

var n2 = +getField("Volume6").value;

result = n1 / n2;

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.3f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Gmb7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Gmb7:Calculate ***********/
var n1 = +getField("WeightinAir7").value;

var n2 = +getField("Volume7").value;

result = n1 / n2;

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.3f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmPerct1:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmPerct1:Validate ***********/
var x1 = +getField("Gmb1").value;
var x2 = +getField("DailyGmm").value;

if (x1 ===0)event.value = "";
if (x2 ===0)event.value = "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmPerct1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmPerct1:Calculate ***********/
var n1 = +getField("Gmb1").value;

var n2 = +getField("DailyGmm").value;

result = (n1 / n2);

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.3f",result*100) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmPerct2:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmPerct2:Validate ***********/
var x1 = +getField("Gmb2").value;
var x2 = +getField("DailyGmm").value;

if (x1 ===0)event.value = "";
if (x2 ===0)event.value = "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmPerct2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmPerct2:Calculate ***********/
var n1 = +getField("Gmb2").value;

var n2 = +getField("DailyGmm").value;

result = (n1 / n2);

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.3f",result*100) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmPerct3:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmPerct3:Validate ***********/
var x1 = +getField("Gmb3").value;
var x2 = +getField("DailyGmm").value;

if (x1 ===0)event.value = "";
if (x2 ===0)event.value = "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmPerct3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmPerct3:Calculate ***********/
var n1 = +getField("Gmb3").value;

var n2 = +getField("DailyGmm").value;

result = (n1 / n2);

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.3f",result*100) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmPerct4:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmPerct4:Validate ***********/
var x1 = +getField("Gmb4").value;
var x2 = +getField("DailyGmm").value;

if (x1 ===0)event.value = "";
if (x2 ===0)event.value = "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmPerct4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmPerct4:Calculate ***********/
var n1 = +getField("Gmb4").value;

var n2 = +getField("DailyGmm").value;

result = (n1 / n2);

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.3f",result*100) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmPerct5:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmPerct5:Validate ***********/
var x1 = +getField("Gmb5").value;
var x2 = +getField("DailyGmm").value;

if (x1 ===0)event.value = "";
if (x2 ===0)event.value = "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmPerct5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmPerct5:Calculate ***********/
var n1 = +getField("Gmb5").value;

var n2 = +getField("DailyGmm").value;

result = (n1 / n2);

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.3f",result*100) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmPerct6:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmPerct6:Validate ***********/
var x1 = +getField("Gmb6").value;
var x2 = +getField("DailyGmm").value;

if (x1 ===0)event.value = "";
if (x2 ===0)event.value = "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmPerct6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmPerct6:Calculate ***********/
var n1 = +getField("Gmb6").value;

var n2 = +getField("DailyGmm").value;

result = (n1 / n2);

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.3f",result*100) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmPerct7:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmPerct7:Validate ***********/
var x1 = +getField("Gmb7").value;
var x2 = +getField("DailyGmm").value;

if (x1 ===0)event.value = "";
if (x2 ===0)event.value = "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>GmmPerct7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:GmmPerct7:Calculate ***********/
var n1 = +getField("Gmb7").value;

var n2 = +getField("DailyGmm").value;

result = (n1 / n2);

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.3f",result*100) : "";
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
  if(patternEmpty.test(this.getField("ProdDate").value))
     strMissing = "Production Date";
else if(patternEmpty.test(this.getField("rtDirection1").value))
     strMissing = "Route Direction";
else if(patternEmpty.test(this.getField("lane").value))
     strMissing = "Lane";
else if(patternEmpty.test(this.getField("projSchedNumber1").value))
     strMissing = "Project Schedule Number";
else if(patternEmpty.test(this.getField("county").value))
     strMissing = "County";
else if(patternEmpty.test(this.getField("pavingContractor").value))
     strMissing = "Paving Contractor";
else if(patternEmpty.test(this.getField("testLotSection").value))
     strMissing = "Test Lot Section Number";
else if(patternEmpty.test(this.getField("from").value))
     strMissing = "From:";
else if(patternEmpty.test(this.getField("to").value))
     strMissing = "To:";
else if(patternEmpty.test(this.getField("totalPavedLength").value))
     strMissing = "Total Paved Length";
else if(patternEmpty.test(this.getField("appWidth").value))
     strMissing = "Application Width";
else if(patternEmpty.test(this.getField("applicationRate").value))
     strMissing = "Application Rate";else if(patternEmpty.test(this.getField("calcTonnage1").value))
     strMissing = "Calculated Tonnage";else if(patternEmpty.test(this.getField("asphaltProd").value))
     strMissing = "Asphalt Producer";
else if(patternEmpty.test(this.getField("asphaltPlant").value))
     strMissing = "Asphalt Plant";
else if(patternEmpty.test(this.getField("jobMixID").value))
     strMissing = "Job Mix ID";
else if(patternEmpty.test(this.getField("ctrlStripNumber").value))
     strMissing = "Control Strip Number and Date";
else if(patternEmpty.test(this.getField("csDensity").value))
     strMissing = "CS Density";
else if(patternEmpty.test(this.getField("minDensity").value))
     strMissing = "Minimum Density";
else if(patternEmpty.test(this.getField("nuclearGaugeSerial").value))
     strMissing = "Nuclear Gauge Serial Number";
else if(patternEmpty.test(this.getField("DailyGmm").value))
     strMissing = "Daily Gmm";
else if(patternEmpty.test(this.getField("plantLotSampleNumber").value))
     strMissing = "Plant Lot and Sample Number for Gmm Testing";
else if(patternEmpty.test(this.getField("Date").value))
     strMissing = "Signature Date";
else if(patternEmpty.test(this.getField("fieldTech").value))
     strMissing = "Field Level II Inspector";
else if(patternEmpty.test(this.getField("payFactor").value))
     strMissing = "Pay Factor from S315Hp1 Table III-4A";

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
//<ACRO_source>Volume1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Volume1:Calculate ***********/
var numerator = +getField("SSDwt1").value;

var denominator = +getField("WeightinWtr1").value;

var result = numerator - denominator;

event.value = (denominator !==0 , numerator !==0) ? util.printf("%.3f",result) : "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Volume2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Volume2:Calculate ***********/
var numerator = +getField("SSDwt2").value;

var denominator = +getField("WeightinWtr2").value;

var result = numerator - denominator;

event.value = (denominator !==0 , numerator !==0) ? util.printf("%.3f",result) : "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Volume3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Volume3:Calculate ***********/
var numerator = +getField("SSDwt3").value;

var denominator = +getField("WeightinWtr3").value;

var result = numerator - denominator;

event.value = (denominator !==0 , numerator !==0) ? util.printf("%.3f",result) : "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Volume4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Volume4:Calculate ***********/
var numerator = +getField("SSDwt4").value;

var denominator = +getField("WeightinWtr4").value;

var result = numerator - denominator;

event.value = (denominator !==0 , numerator !==0) ? util.printf("%.3f",result) : "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Volume5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Volume5:Calculate ***********/
var numerator = +getField("SSDwt5").value;

var denominator = +getField("WeightinWtr5").value;

var result = numerator - denominator;

event.value = (denominator !==0 , numerator !==0) ? util.printf("%.3f",result) : "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Volume6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Volume6:Calculate ***********/
var numerator = +getField("SSDwt6").value;

var denominator = +getField("WeightinWtr6").value;

var result = numerator - denominator;

event.value = (denominator !==0 , numerator !==0) ? util.printf("%.3f",result) : "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Volume7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Volume7:Calculate ***********/
var numerator = +getField("SSDwt7").value;

var denominator = +getField("WeightinWtr7").value;

var result = numerator - denominator;

event.value = (denominator !==0 , numerator !==0) ? util.printf("%.3f",result) : "";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>minDensity:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:minDensity:Validate ***********/
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>minDensity:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:minDensity:Calculate ***********/
var n1 = +getField("csDensity").value;
var result = n1 * 0.95;
event.value = util.printf("%.1f" , result);
//</ACRO_script>
//</AcroForm>


