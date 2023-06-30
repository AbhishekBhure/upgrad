const weapons = `1,Red Orbs,240
2,Green Orbs,194
3,Yellow Orbs,154
4,Kill Machine,80`;

const displayWeapons = (str) => {
  const breakByLine = str.split("\n");
  for (const i of breakByLine) {
    let ele = i.split(",");
    console.log(`${ele[0]}. ${ele[1]} -- ${ele[2]}`);
  }
};
displayWeapons(weapons);
