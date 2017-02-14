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
	for (num of arr3){					//loop the elements of the bigger array
		if (!arr4.includes(num)){		//check for the elements in the smaller array
			return num;					//return the one not in the smaller array
		}
		
	}
}

module.exports = {

	findMissing: findMissing

}