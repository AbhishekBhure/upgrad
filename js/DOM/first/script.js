const createPost = function ({ title, content }) {
  const socialCard = document.createElement("div");
  socialCard.setAttribute("class", "social-card");

  const icon = document.createElement("div");
  icon.setAttribute("class", "post-icon");

  const postTitle = document.createElement("div");
  postTitle.setAttribute("class", "post-title");

  const postUser = document.createElement("div");
  postUser.setAttribute("class", "post-user");

  const postContent = document.createElement("div");
  postContent.setAttribute("class", "post-content");

  socialCard.append(icon, postTitle, postUser, postContent);

  postTitle.innerHTML = title;
  postUser.innerHTML = "Joe Mockery";
  postContent.innerHTML = content;

  document.body.prepend(socialCard);
};

createPost({
  title: "Crazy Summer",
  content: `This week was crazy with temperatures shooting up all the way to 47 degrees Celsius. At this rate, we'll be BBQed the moment we step out of our houses...`,
});

createPost({
  title: "Remember, Tell me Why??",
  content: `Back in the 80s, there were a series of books for kids known as the 'Tell Me Why' series from Hamlyn. These were the first few books that I ever got as a child. Pretty amazing. I still have some of em lying around.`,
});
