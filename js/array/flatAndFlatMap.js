const nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [
    [10, 11, 12],
    [13, 14, 15],
  ],
  [
    [2, 4, 6],
    [8, 10, 12],
  ],
];

const even = nums.flat(2).filter((ele) => ele % 2 === 0);
const odd = nums.flat(2).filter((ele) => ele % 2 !== 0);

// console.log(even);
// console.log(odd);

const cords_2 = [
  [
    [2, 3],
    [4, 5],
  ],
  [
    [6, 7],
    [8, 9],
  ],
  [
    [1, 3],
    [2, 4],
  ],
];

const calDis = ([x1, y1], [x2, y2]) =>
  Number(Math.hypot(x2 - x1, y2, y1).toPrecision(2));
const shortDis = cords_2
  .flatMap(([p1, p2]) => calDis(p1, p2))
  .filter((ele) => ele < 10)
  .sort((a, b) => a - b);

console.log(shortDis);
