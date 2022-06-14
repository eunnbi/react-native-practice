import { createAddItemAction, createDeleteItemAction } from "./createAction";
import { createReducer } from "./createReducer";

export const { ADD_ITEM: TRAVEL_ADD_ITEM, addItem: addTravelItem } =
  createAddItemAction("travel");
export const { DELETE_ITEM: TRAVEL_DELETE_ITEM, deleteItem: deleteTravelItem } =
  createDeleteItemAction("travel");

const initialState = {
  list: [],
  nextId: 0,
};

export type TravelsActionType =
  | ReturnType<typeof addTravelItem>
  | ReturnType<typeof deleteTravelItem>;

const travels = createReducer(
  initialState,
  TRAVEL_ADD_ITEM,
  TRAVEL_DELETE_ITEM
);

export default travels;
