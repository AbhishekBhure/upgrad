const colorPallet = (color) => {
  const primary = ["red", "green", "blue"];
  const second = ["orange", "black", "gray"];

  let result = primary.includes(color)
    ? `${color} is primary`
    : second.includes(color)
    ? `${color} is secondary`
    : `${color} doesn't match`;

  return result;
};

console.log(colorPallet("pink"));
