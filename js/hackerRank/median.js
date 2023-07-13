function median(a) {
  let sorted = a.sort((a, b) => a - b);

  let middleIndex = Math.floor(a.length / 2);
  console.log(middleIndex, "middleIndex");

  if (a.length % 2 !== 0) {
    return middleIndex;
  } else {
    const middleValue1 = sorted[middleIndex - 1];
    console.log(middleValue1, "middelValue1");
    const middleValue2 = sorted[middleIndex];
    console.log(middleValue2, "mid2");
    let res = Math.floor((middleValue1 + middleValue2) / 2);
    return res;
  }
}

console.log(median([1, 0, 3, 2, 4, 6, 5, 7]));

//sorted = [0,1,2,3,4,5,6,7 ]
