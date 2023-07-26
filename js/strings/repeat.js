const emotion = (score) => {
  const emojis = ["😠", "😐", "🙂", "😊", "😄"];

  switch (score) {
    case 1:
      return emojis[0];
    case 2:
      return emojis[1].repeat(2);
    case 3:
      return emojis[2].repeat(3);
    case 4:
      return emojis[3].repeat(4);
    case 5:
      return emojis[4].repeat(5);
    default:
      return emojis[1];
  }
};

// console.log(emotion(3));

const steps = 6;

for (let x = 1; x <= steps; x++) {
  console.log(`${" ".repeat(x)}${"*".repeat(steps + 1 - x)}`);
}

for (let x = steps; x >= 1; x--) {
  console.log(`${" ".repeat(x)}${"*".repeat(steps + 1 - x)}`);
}
