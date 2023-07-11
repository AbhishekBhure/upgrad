function median(a) {
  let sorted = a.sort((a, b) => a - b);

  let middleIndex = Math.floor(a.length / 2);

  if (a.length % 2 !== 0) {
    return middleIndex;
  } else {
    const middleValue1 = sorted[middleIndex - 1];
    const middleValue2 = sorted[middleIndex];
    let res = (middleValue1 + middleValue2) / 2;
    return res;
  }
}

console.log(median([1, 0, 3, 2, 4, 6, 5]));
