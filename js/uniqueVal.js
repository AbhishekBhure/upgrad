const a = [1, 2, 3, 4, 3, 2, 1];

function lonelyInteger(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

console.log(lonelyInteger(a));
