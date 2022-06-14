export const createAddItemAction = (module: string) => {
  const ADD_ITEM = `${module}/ADD_ITEM` as const;

  const addItem = (item: string) => ({
    type: ADD_ITEM,
    item,
  });

  return {
    ADD_ITEM,
    addItem,
  };
};

export const createDeleteItemAction = (module: string) => {
  const DELETE_ITEM = `${module}/DELETE_ITEM` as const;

  const deleteItem = (id: number) => ({
    type: DELETE_ITEM,
    id,
  });

  return {
    DELETE_ITEM,
    deleteItem,
  };
};
