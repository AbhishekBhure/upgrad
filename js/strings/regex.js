"use strict";
const post =
  "This waffle is brilliant! #foodie #waffles #instafood #nutella #chocolate #hazelnut #icecream";

const getTags = (post) => {
  const pattern = /(?<=#)\w+/gi;

  const detectTags = post.match(pattern);

  return detectTags && detectTags.length > 1 ? detectTags : detectTags[0];
};

// console.log(getTags(post));

const text = "Wheather color is colour or colours is all same";

// const pattern = /colou?rs?/g;
const pattern = new RegExp("colou?rs?", "g");

let result;
while ((result = pattern.exec(text)) !== null) {
  //   console.log(result[0]);
}

const str = "skofpcksj hem@jis.com ino our tgb bot bw  voc@dhu.com";

const getEmails = (str) => {
  const pattern = /[a-z0-9._]+@[a-z0-9-]+\.[a-z.]{2,6}/gi;

  const result = str.match(pattern);

  return result;
};

// console.log(getEmails(str));

const message = "The 200 milles is actually 150 milles";

const getMiles = (str) => {
  const pattern = /(?<milles>\d+(?!milles))/g;
  return str.matchAll(pattern);
};
for (const dist of getMiles(message)) {
  console.log(dist.groups.milles);
}
