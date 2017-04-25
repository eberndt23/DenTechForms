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
event.value = util.printf("%.1f", Avg('GmmPerct1','GmmPerct2','GmmPerct3','GmmPerct4','GmmPerct5','GmmPerct6','GmmPerct7'))+'%';

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

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.2f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Gmb2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Gmb2:Calculate ***********/
var n1 = +getField("WeightinAir2").value;

var n2 = +getField("Volume2").value;

result = n1 / n2;

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.2f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Gmb3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Gmb3:Calculate ***********/
var n1 = +getField("WeightinAir3").value;

var n2 = +getField("Volume3").value;

result = n1 / n2;

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.2f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Gmb4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Gmb4:Calculate ***********/
var n1 = +getField("WeightinAir4").value;

var n2 = +getField("Volume4").value;

result = n1 / n2;

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.2f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Gmb5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Gmb5:Calculate ***********/
var n1 = +getField("WeightinAir5").value;

var n2 = +getField("Volume5").value;

result = n1 / n2;

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.2f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Gmb6:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Gmb6:Calculate ***********/
var n1 = +getField("WeightinAir6").value;

var n2 = +getField("Volume6").value;

result = n1 / n2;

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.2f",result) : "";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Gmb7:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Gmb7:Calculate ***********/
var n1 = +getField("WeightinAir7").value;

var n2 = +getField("Volume7").value;

result = n1 / n2;

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.2f",result) : "";
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

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.1f",result*100) : "";
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

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.1f",result*100) : "";
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

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.1f",result*100) : "";
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

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.1f",result*100) : "";
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

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.1f",result*100) : "";
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

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.1f",result*100) : "";
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

event.value = (n1 !==0 , n2 !==0) ? util.printf("%.1f",result*100) : "";
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
     strMissing = "ProdDate";
  else if(patternEmpty.test(this.getField("Date").value))
     strMissing = "Date";
  else
  { // All is ok, submit the data
     console.println("All form data ok");
  }

  if(strMissing.length)
  {// Got an error
     app.alert("Missing Form data in field: " + strMissing);
  }

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SubmitForm:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:SubmitForm:Annot1:MouseUp:Action2 ***********/
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
//<ACRO_source>lbsft³  95 CS Density:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:lbsft³  95 CS Density:Validate ***********/
if (+event.value === 0) event.value = ""; 
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>lbsft³  95 CS Density:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:lbsft³  95 CS Density:Calculate ***********/
/** BVCALC CSdensity * 0.95 EVCALC **/event.value=AFMakeNumber(getField("CSdensity").value) * 0.95
//</ACRO_script>
//</AcroForm>


