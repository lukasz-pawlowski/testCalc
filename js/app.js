var installBtn = document.getElementById('install-btn');
var result = 0;
var data1 = false;
var data2 = false;
var action1 = "none";
var action2 = "none";

////////////////////
//number   buttons//
////////////////////

//function for updating result data
function update_result(num) {
	if(result == "0") {
		result = num;
	}
	else {
		result = result + num.toString();
	}
	document.getElementById("result").innerHTML = result;
};

//number buttons
var num1 = document.getElementById('1');
var num2 = document.getElementById('2');
var num3 = document.getElementById('3');
var num4 = document.getElementById('4');
var num5 = document.getElementById('5');
var num6 = document.getElementById('6');
var num7 = document.getElementById('7');
var num8 = document.getElementById('8');
var num9 = document.getElementById('9');
var num0 = document.getElementById('0');
var floating = document.getElementById('float');

//add event listeners for numbers
num1.addEventListener('click', function() {update_result(1);}, false);
num2.addEventListener('click', function() {update_result(2);}, false);
num3.addEventListener('click', function() {update_result(3);}, false);
num4.addEventListener('click', function() {update_result(4);}, false);
num5.addEventListener('click', function() {update_result(5);}, false);
num6.addEventListener('click', function() {update_result(6);}, false);
num7.addEventListener('click', function() {update_result(7);}, false);
num8.addEventListener('click', function() {update_result(8);}, false);
num9.addEventListener('click', function() {update_result(9);}, false);
num0.addEventListener('click', function() {update_result(0);}, false);
floating.addEventListener('click', function() {add_floating();}, false);

//add variables for actions
var numplus = document.getElementById('plus');
var numminus = document.getElementById('minus');
var nummultiply = document.getElementById('multiply');
var numdivide = document.getElementById('divide');
var nummodulo = document.getElementById('modulo');
var equal = document.getElementById('equal');
var ce = document.getElementById('ce');
var sqr = document.getElementById('sqr');
var sqrt = document.getElementById('sqrt');
var xtoy = document.getElementById('x^y');
var rootxy = document.getElementById('rootxy');

//add event listeners for actions
numplus.addEventListener('click', add_action, true);
numminus.addEventListener('click', add_action, false);
nummultiply.addEventListener('click', add_action, false);
numdivide.addEventListener('click', add_action, false);
nummodulo.addEventListener('click', add_action, false);
equal.addEventListener('click', add_action, false);
ce.addEventListener('click', clear_everything, false);
sqr.addEventListener('click', clear_everything, false);
sqrt.addEventListener('click', clear_everything, false);
xtoy.addEventListener('click', clear_everything, false);
rootxy.addEventListener('click', clear_everything, false);


function add_floating() {
	if(result % 1 === 0) {
		result = result + ".";
		document.getElementById("result").innerHTML = result;
		}
}

function clear_everything() {
	data1 = null;
	action1 = null;
	result = 0;
	document.getElementById("result").innerHTML = result;
	document.getElementById("action").innerHTML = "&nbsp;";
	document.getElementById("data1").innerHTML = 0;	
}

function add_action(act)
{
	//if action is "equal"
	if(action1 == "equal") {
		action1 = act.target.id;
		}
		
	//if there are two datas, perfom calculation
	if(data1 == false || action1 == "equal") {
		data1 = result;
	}
	else if(action1 != "equal") {
		data1 = calculate(parseFloat(data1), parseFloat(result), action1);
	}
	

	//set new result
	result = 0;
	action1 = act.target.id;
	document.getElementById("action").innerHTML = action1;
	document.getElementById("result").innerHTML = result;
	document.getElementById("data1").innerHTML = data1;	
}
////////////////////////
//calculating function//
////////////////////////
function calculate(x, y, operation) {

	var value = 0;
	switch(operation){
		case "plus":
			value = x + y;
			break;
		case "minus":
			value = x - y;
			break;
		case "multiply":
			value = x * y;
			break;
		case "divide":
			value = x / y;
			break;
		case "modulo":
			value = x % y;
			break;
		case "sqr":
			value = Math.pow(y,2);
			break;
		case "sqrt":
			value = sqrt(y);
			break;
		case "x^y":
			value = pow(y,x);
			break;
		case "rootxy":
			value = pow(y,1/x);
			break;
		case "equal":
			value = y;
			break;
		default:
			value = y;
			break;
	}
	
	return value;
};

//install application button
if(installBtn) {
    
    installBtn.style.display = 'none';
    
    // If you want an installation button, add this to your HTML:
    //
    // <button id="install-btn">Install</button>
    //
    // This code shows the button if the apps platform is available
    // and this app isn't already installed.
    if(navigator.mozApps) {

        installBtn.addEventListener('click', function() {
            navigator.mozApps.install(location.href + 'manifest.webapp');
        }, false);

        var req = navigator.mozApps.getSelf();
        req.onsuccess = function() {
            if(!req.result) {
                installBtn.style.display = 'block';
            }
        };

    }
}
