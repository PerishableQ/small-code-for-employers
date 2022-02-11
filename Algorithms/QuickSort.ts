

/**
 * Quicksort algorithm iterative implementation
 *
 * @param {number[]} arr
 * @return {*} 
 */
const quickSortIterative = (arr: number[]) => {
  const copiedArr = [...arr];
  console.log('function started');

  if (copiedArr.length <= 1) {
    console.log('arr length is <= 1', copiedArr);
    return copiedArr;
  }

  const smallerElementsArray = [];
  const biggerElementsArray = [];

  const pivotElement = copiedArr.shift();
  const centerElementsArray = [pivotElement];

  console.log(`smallerelements ${smallerElementsArray},
              biggerelements ${biggerElementsArray},
              centerelements ${centerElementsArray}`);

  while (copiedArr.length) {
    const currentElement = copiedArr.shift();
    console.log(
      `entered while loop, copied arr ${copiedArr}, curr el ${currentElement}`
    );

    if (currentElement === pivotElement) {
      centerElementsArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      smallerElementsArray.push(currentElement);
    } else {
      biggerElementsArray.push(currentElement);
    }

    console.log(`leaving while loop, copied arr ${copiedArr}`);
  }

  console.log(`smallerelements ${smallerElementsArray},
  biggerelements ${biggerElementsArray},
  centerelements ${centerElementsArray}`);

  const smallerElementsSortedArray = quickSort(smallerElementsArray);
  const biggerElementsSortedArray = quickSort(biggerElementsArray);

  console.log(`smallerelementsSortedArr ${smallerElementsSortedArray},
  biggerElementsSortedArray ${biggerElementsSortedArray},
  centerelements ${centerElementsArray}`);

  return smallerElementsSortedArray.concat(
    centerElementsArray,
    biggerElementsSortedArray
  );
};

console.log(quickSortIterative([1, 2, 4, 9, -1, -100]));



/**
 * Quicksort algorithm recursive implementation
 *
 * @param {number[]} arr
 * @return {*} 
 */
const quickSort = (arr: number[]) => {
  const copiedArr = [...arr];

  if (copiedArr.length <= 1) {
    return copiedArr;
  }

  const smallerElementsArray = [];
  const biggerElementsArray = [];
  const pivotElement = copiedArr.shift();
  const centerElementsArray = [pivotElement];

  while (copiedArr.length) {
    const currentElement = copiedArr.shift();

    if (currentElement === pivotElement) {
      centerElementsArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      smallerElementsArray.push(currentElement);
    } else {
      biggerElementsArray.push(currentElement);
    }
  }

  const smallerElementsSortedArray = quickSort(smallerElementsArray);
  const biggerElementsSortedArray = quickSort(biggerElementsArray);

  return smallerElementsSortedArray.concat(
    centerElementsArray,
    biggerElementsSortedArray
  );
};

console.log(quickSort([100, 8, -100, 25, 89, 17]));
