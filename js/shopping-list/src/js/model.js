let shoppingList = [];
let completedList = [];

export const addToShoppingList = (item) => {
  const itemId = `${parseInt(
    Math.random() * 1000000
  )} - ${new Date().getTime()}`;

  shoppingList.push({
    id: itemId,
    item,
    priority: "normal",
  });
};

export const getShoppingList = () => shoppingList;

export const setPriority = (itemId, priority) => {
  shoppingList = shoppingList.map((item) => {
    if (item.id === itemId) {
      return {
        ...item,
        priority,
      };
    }

    return item;
  });
};

export const removeItem = (itemId) => {
  shoppingList = shoppingList.filter(({ id }) => id !== itemId);
};

export const addToCompletedList = (itemId) => {
  const getItem = shoppingList.find(({ id }) => id === itemId);
  shoppingList = shoppingList.filter(({ id }) => id !== itemId);
  completedList = [getItem, ...completedList];
};

export const getCompletedList = () => completedList;

export const clearCompleted = () => {
  return (completedList = []);
};
