const post =
  "This waffle is brilliant! #foodie #waffles #instafood #nutella #chocolate #hazelnut #icecream";

const getTags = (post) => {
  const pattern = /(?<=#)\w+/gi;

  const detectTags = post.match(pattern);

  return detectTags && detectTags.length > 1 ? detectTags : detectTags[0];
};

console.log(getTags(post));
