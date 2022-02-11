const bubbleSort = (numbers: number[]) => {
  const result = [...numbers];

  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      const preI = result[i];
      const preJ = result[j];

      if (result[i] > result[j]) {
        result[i] = preJ;
        result[j] = preI;
      }
    }
  }

  return result;
};

console.log(bubbleSort([5,1, 0, 5, 8, 91]));
