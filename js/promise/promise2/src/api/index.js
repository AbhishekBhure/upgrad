const messages = [
  {
    id: 1,
    user: "James Doe",
    message: "Have you guys tried the Hungry Lion at Park Lane?",
  },
  {
    id: 2,
    user: "Rebecca Stilton",
    message:
      "Strolling through Central Park is an amazing feeling. Not only does it put you right in the middle of an amazing display of flora and fauna but its the people who are the greatest asset. The smiles on their face, the peace on their mind is worth a million dollars.",
  },
  {
    id: 3,
    user: "Buzz Lightyear",
    message:
      "Well, how is everyone today? I've just returned to Planet Earth and boy everything has changed!",
  },
];
const comments = [
  {
    id: 1,
    forId: 1,
    user: "Rebecca Stilton",
    message: "Oh yes! tried it last night. It's pretty good",
  },
  {
    id: 2,
    forId: 1,
    user: "Rohit Consul",
    message:
      "I had a terrific experience there recently. The crew is hands-on and they really understand tastes well.",
  },
  {
    id: 3,
    forId: 2,
    user: "Rohit Consul",
    message: "I so agree! It is an incredible feeling!",
  },
];

export const getMessages = function () {
  let delay = Math.random() * 3000;
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(messages);
    }, delay);
  });
};

export const getComments = function () {
  let errorChance = Math.floor(Math.random() * 2) + 1 === 2 ? true : false;
  let delay = Math.random() * 6000;
  return new Promise((resolve, reject) => {
    if (errorChance) return reject("There was an error fetching comments");
    setTimeout(function () {
      resolve(comments);
    }, delay);
  });
};
