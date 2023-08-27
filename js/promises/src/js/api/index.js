const news = [
  { id: 1, content: 'FarmTown: A car carrying two cows and a hen collided with a truck today. No one was hurt but the animals are on the loose.' },
  {
    id: 2,
    content:
      'Towville: A local politican was found stealing an apple from a grocery store in town. This was the first time a politician was held for stealing anything other than votes and money.',
  },
  {
    id: 3,
    content:
      'Space: The Choco V rocket took off from the Galavantica Space Port but crashed into the Marshamellow Ocean, off the coast of Dessertia.',
  },
  {
    id: 4,
    content: 'Medicine: A new virus known that makes people laugh like crazy has been found in the city of Melancholia.',
  },
  {
    id: 5,
    content:
      'Medicine: Researchers have finally found a cure for mosquitoes. A new chemical compound has been formulated that can wipe out mosquitoes. According to the researchers, 2 drops of the formula needs to be fed twice to a mosquito to get him to sleep peacefully for ever.',
  },
];

export const getNews = function (cb) {
  let delay = Math.random() * 3000;
  let errorChance = Math.floor(Math.random() * 2) + 1 === 2 ? true : false;

  setTimeout(function () {
    cb(errorChance, news, 'Server 1');
  }, delay);
};

export const getNewsBackup = function (cb) {
  let delay = Math.random() * 5000;
  setTimeout(function () {
    cb(false, news, 'Server 2');
  }, delay);
};
