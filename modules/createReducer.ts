import { AddItemType, StateType, ActionType, DeleteItemType } from "./type";

export const createReducer = (
  initialState: StateType,
  ADD_ITEM: AddItemType,
  DELETE_ITEM: DeleteItemType
) => {
  const reducer = (
    state: StateType = initialState,
    action: ActionType
  ): StateType => {
    switch (action.type) {
      case ADD_ITEM:
        return {
          list: state.list.concat({
            text: action.item,
            id: state.nextId + 1,
          }),
          nextId: state.nextId + 1,
        };
      case DELETE_ITEM:
        return {
          ...state,
          list: state.list.filter((item) => item.id !== action.id),
        };
      default:
        return state;
    }
  };
  return reducer;
};
