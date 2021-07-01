/* let strg = "";

function repeatNtimes(str, num) {
	//code here
	for (i = 0; i < num; i++) {
		strg += str;
	}
	return strg;
}

//should return abcabcabc
console.log(repeatNtimes("abc", 3)); */

/* let strg = ""; */

function repeatNtimes(str, num) {
	//code here
	let strg = "";
	let i = 0;
	while (i < num) {
		strg += str;
		i++;
	}
	return strg;
}

//should return abcabcabc
console.log(repeatNtimes("abc", 3));
