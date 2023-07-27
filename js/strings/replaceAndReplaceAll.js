const str = "akshay kumar is an actor and he looks like akshay kumar itself";

const replace = (str) => {
  return str.replace("akshay kumar", "jonny depp");
};

// console.log(replace(str));

const message = "The 200 milles is actually 150 milles";

const milesToKms = message
  .replace(/\d+(?!milles)/g, (milles) => milles * 1.609)
  .replace(/milles/g, "kms");

// console.log(milesToKms);

const str1 =
  "akshay kumar is an - actor, And he looks like akshay kumar itself";
const str2 =
  "akshay kumar is an, Actor - and he looks like akshay kumar itself";

const compareStr = (str1, str2) =>
  str1.toLowerCase().replaceAll(/[\W+_-]/gi, "") ===
  str2.toLowerCase().replaceAll(/[\W+_-]/gi, "");

// console.log(compareStr(str1, str2));

const words = ["Civic:", "Seltos", "Car", "Noon", "Refer", "Tenet", "Design"];

const isPalindrome = (str) => {
  const strAProc = str
    .toLowerCase()
    .replaceAll(/\s/g, "")
    .replaceAll(/[:;'"!@#$%^&*]/g, "");
  const strBProc = str
    .toLowerCase()
    .replaceAll(/\s/g, "")
    .replaceAll(/[:;'"!@#$%^&*]/g, "")
    .split("")
    .reverse()
    .join("");

  return strAProc === strBProc;
};

words.forEach((w) => {
  console.log(`${w} ${isPalindrome(w) ? "is" : "is not"} a palindrome`);
});
