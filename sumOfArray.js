/* SUM of Array */
var myArr = [2, 3, 4, 5, 6];

function result(myArr) {
	let value = 0;

	for (let i = 0; i < myArr.length; i++) {
		value += myArr[i];
	}

	return value;
}

console.log(result(myArr));
