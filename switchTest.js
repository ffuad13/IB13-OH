/* Write chained if/else if statements to fulfill the following conditions:

val < 5 - return "Tiny"
val < 10 - return "Small"
val < 15 - return "Medium"
val < 20 - return "Large"
val >= 20 - return "Huge" */

function caseInSwitch(val) {
	// code below this line
	switch (val) {
		case 1:
			return "Alpha";
			break;
		case 2:
			return "Beta";
			break;
		case 3:
			return "Gamma";
			break;
		case 4:
			return ">Delta";
			break;
		case 5:
			return "Foxtrot";
			break;
		default:
			return "Omega";
	}
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));
console.log(caseInSwitch(5));
console.log(caseInSwitch(9));
