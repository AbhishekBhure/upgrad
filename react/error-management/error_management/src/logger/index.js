const logger = error => {
  const date = new Date();
  const content = `
    ERROR LOG
    ---------
    Date: ${date.toDateString()}
    Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
    ------------------------------------------------------------
    Error: ${error}
    ------------------------------------------------------------
  `;

  console.error(content);
};

export default logger;
