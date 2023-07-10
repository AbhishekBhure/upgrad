function staircase() {
  // Write your code here
  let n = 6;
  for (let i = 1; i <= n; i++) {
    let spaces = n - i;
    let hashes = i;
    let line = "";

    // Add spaces
    for (let j = 0; j < spaces; j++) {
      line += " ";
    }

    // Add hashes
    for (let j = 0; j < hashes; j++) {
      line += "#";
    }
    console.log(line);
  }
}

console.log(staircase());
