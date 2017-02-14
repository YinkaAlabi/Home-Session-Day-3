function findMissing(arr1, arr2){
	if (arr1.length == arr2.length){
		return 0;
	}
	else if (arr1.length < arr2.length){
		var arr3 = arr2.slice();
		var arr4 = arr1.slice();
	}
	else {
		var arr3 = arr1.slice();
		var arr4 = arr2.slice();
	}
	for (num of arr3){
		if (!arr4.includes(num)){
			return num;
		}
		
	}
}

module.exports = {

	findMissing: findMissing

}
