const stories = [
  "A sotry that tells not to lie to others",
  "A tools are used to work by plumber or carpentar",
];

const findstring = (str, arr) => {
  let result = arr.filter((ele) =>
    ele.toLowerCase().includes(str.toLowerCase())
  );

  return result && result.length > 1 ? result : result[0];
};

console.log(findstring("A", stories));
