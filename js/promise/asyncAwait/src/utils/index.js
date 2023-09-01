const createComment = (user, message) => `<div class="comment">
  <p class="user-name">${user}</p>
  <p class="message-text">
    ${message}
  </p>
</div>`;

const createMessage = ({ id, user, message }, commentsArr) => {
  const getComments = commentsArr?.filter((e) => e.forId === id);
  const baseTemplate = `<div class="message">
  <p class="user-name">${user}</p>
  <p class="message-text">
    ${message}
  </p>
  <div class="comments">
    ${getComments?.map((e) => createComment(e.user, e.message)).join('') ?? 'No Comments'}
  </div>
</div>`;

  return baseTemplate;
};

export const renderContent = (messages, comments, container) => {
  const createElems = messages.map((e) => createMessage(e, comments));
  container.innerHTML = createElems.join('');
};
