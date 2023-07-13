const weapons = `1,Red Orbs,240
2,Green Orbs,194
3,Yellow Orbs,154
4,Kill Machine,80`;

const displayWeapons = function (str) {
  let breakLine = str.split("\n");
  for (const item of breakLine) {
    const [id, weapon, cost] = item.split(",");
    console.log(`${weapon} costs $${cost}`);
  }
};

displayWeapons(weapons);
