const giganticArray = Array.from(Array(1000).keys());

/**
 * Function to iterate through large sequence of elements in array without blocking event loop so
 * nothing will freeze for the user. Function is iterative recursion
 *
 * @param {*} arr
 * @return {*}
 */
function iterateThroughGiganticArray(arr, fn) {
	let currentArrayIndex = 0;
	const result = [];

	function iterateThroughChunk(chunk) {
		console.log("started new chunk iteration");
		let chunkLength = 100;
		const optimalTime = 100; //ms // may be another function that calculates best time based on system performance

		while (chunkLength--) {
			result.push(fn(chunk[currentArrayIndex], currentArrayIndex, arr));
			console.log("current chunk element", chunk[currentArrayIndex]);
			currentArrayIndex++;
		}

		if (currentArrayIndex < arr.length)
			return setTimeout(() => iterateThroughChunk(arr), optimalTime);

		console.log("finished iteration, result:");
		return console.log(result);
	}

	return iterateThroughChunk(giganticArray);
}

iterateThroughGiganticArray(giganticArray, () => Math.floor(Math.random() * 100));
