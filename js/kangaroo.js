function kangaroo(x1, v1, x2, v2) {
  // Write your code here

  if ((v1 < v2 && x1 < x2) || (v1 > v2 && x1 > x2)) {
    return "NO";
  }

  let jumps = (x2 - x1) / (v1 - v2);
  if (Number.isInteger(jumps) && jumps >= 0) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(kangaroo(0, 3, 4, 2));
