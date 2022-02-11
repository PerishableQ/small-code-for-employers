

/**
 * Merge sort algorithm implementation
 *
 * @param {number[]} arr
 * @return {*} 
 */
const mergeSort = (arr: number[]) => {
	if (arr.length < 2) {
		return arr;
	}

	if (arr.length === 2) {
		return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
	}

	const middle = Math.floor(arr.length / 2);

	const leftArr = arr.slice(0, middle);
	const rightArr = arr.slice(middle);

	const sortedLeft = mergeSort(leftArr);
	const sortedRight = mergeSort(rightArr);

	const merged = [];
	let leftArrInd = 0;
	let rightArrInd = 0;

	while (leftArrInd < sortedLeft.length || rightArrInd < sortedRight.length) {
		if (leftArrInd >= sortedLeft.length || sortedLeft[leftArrInd] > sortedRight[rightArrInd]) {
			merged.push(sortedRight[rightArrInd]);
			rightArrInd++;
		} else {
			merged.push(sortedLeft[leftArrInd]);
			leftArrInd++;
		}
	}

	return merged;
};

console.log(mergeSort([100, 8, -100, 25, 89]));
