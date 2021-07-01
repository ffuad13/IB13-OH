/* Multiply All Array */
function multiplyAll(arr) {
	let product = 1;
	// Only change code below this line
	for (let i = 0; i < arr.length; i++) {
		const subArray = arr[i];
		for (let j = 0; j < subArray.length; j++) {
			product *= subArray[j];
		}
	}
	// Only change code above this line
	return product;
}

console.log(
	multiplyAll([
		[1, 2],
		[3, 4],
		[5, 6, 7],
	])
);
//multiplyAll([[1,2],[3,4],[5,6,7]]) should return 5040
