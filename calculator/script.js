var value1;
var value2;
var op;
var r = 0;
var c = 0;

const audio = new Audio();
audio.src = "./button.wav";

function keyboard(id){
	
	audio.play();
	if(document.getElementById("input1").value === "0")
		document.getElementById("input1").value = (document.getElementById("input1").value).slice(0, -1);
	
	switch(id){
		case "b0":
			document.getElementById("input1").value += "0";
			if(r > 0){
				document.getElementById("input1").value += "0";
				r = 0;
			}
			break;
		case "b1":
			document.getElementById("input1").value += "1";
			if(r > 0){
				document.getElementById("input1").value = "";
				document.getElementById("input1").value += "1";
				r = 0;
			}
			break;
		case "b2":
			if(r > 0){
				document.getElementById("input1").value = "";
				document.getElementById("input1").value += "2";
				r = 0;
			}
			else document.getElementById("input1").value += "2";
			break;
		case "b3":
			document.getElementById("input1").value += "3";
			if(r > 0){
				document.getElementById("input1").value = "";
				document.getElementById("input1").value += "3";
				r = 0;
			}
			break;
		case "b4":
			document.getElementById("input1").value += "4";
			if(r > 0){
				document.getElementById("input1").value = "";
				document.getElementById("input1").value += "4";
				r = 0;
			}
			break;
		case "b5":
			document.getElementById("input1").value += "5";
			if(r > 0){
				document.getElementById("input1").value = "";
				document.getElementById("input1").value += "5";
				r = 0;
			}
			break;
		case "b6":
			document.getElementById("input1").value += "6";
			if(r > 0){
				document.getElementById("input1").value = "";
				document.getElementById("input1").value += "6";
				r = 0;
			}
			break;
		case "b7":
			document.getElementById("input1").value += "7";
			if(r > 0){
				document.getElementById("input1").value = "";
				document.getElementById("input1").value += "7";
				r = 0;
			}
			break;
		case "b8":
			document.getElementById("input1").value += "8";
			if(r > 0){
				document.getElementById("input1").value = "";
				document.getElementById("input1").value += "8";
				r = 0;
			}
			break;
		case "b9":
			document.getElementById("input1").value += "9";
			if(r > 0){
				document.getElementById("input1").value = "";
				document.getElementById("input1").value += "9";
				r = 0;
			}
			break;
		case "b10":
 			document.getElementById("input1").value = (document.getElementById("input1").value).slice(0, -1);
			break;
		case "b11":
			document.getElementById("input1").value = "0";
			value1 = undefined;
			value2 = undefined;
			op = undefined;
			c = 0;
			break;
		default:
			break;
	}

		switch(id){
			case "b12":
				value1 = parseFloat(document.getElementById("input1").value);
				r++;
				op = '+';
				c = 0;
			if(
				break;
			case "b13":
				value1 = parseFloat(document.getElementById("input1").value);
				r++;
				op = '-';
				c = 0;
				break;
			case "b14":
				value1 = parseFloat(document.getElementById("input1").value);
				r++;
				op = '*';
				c = 0;
				break;
			case "b15":
				value1 = parseFloat(document.getElementById("input1").value);
				r++;
				op = '/';
				c = 0;
				break;
			case "b16":
				value1 = parseFloat(document.getElementById("input1").value);
				r++;
				op = '%';
				c = 0;
				break;
			case "b17":
				if(op == "undefined")
					document.getElementById("input1").value = document.getElementById("input1").value;
				else{
					if(c == 0){
						value2 = parseFloat(document.getElementById("input1").value);
					}
					else{
						value1 = parseFloat(document.getElementById("input1").value);
					}
						switch(op){
							case "+":
								value1 += value2;
								document.getElementById("input1").value = value1;
								break;
							case "-":
								value1 -= value2;
								document.getElementById("input1").value = value1;
								break;
							case "*":
								value1 *= value2;
								document.getElementById("input1").value = value1;
								break;
							case "/":
								value1 /= value2;
								document.getElementById("input1").value = value1;
								break;
							case "%":
								value1 %= value2;
								document.getElementById("input1").value = value1;
								break;
							default:
								break;
						}
				}
				c++;
				break;
			default:
				break;
		}
	
		if((document.getElementById("input1").value).length == 0)
			document.getElementById("input1").value = "0";
		if(document.getElementById("input1").value == "NaN")
			document.getElementById("input1").value = "0";
		
	console.log("val1 " + value1);
	console.log("val2 " + value2);
	console.log("opp " + op);
}