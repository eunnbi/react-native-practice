import { TodosActionType, TODO_ADD_ITEM, TODO_DELETE_ITEM } from "./todos";
import {
  TravelsActionType,
  TRAVEL_ADD_ITEM,
  TRAVEL_DELETE_ITEM,
} from "./travels";

export interface Item {
  text: string;
  id: number;
}

export type StateType = {
  list: Item[];
  nextId: number;
};

export type ActionType = TodosActionType | TravelsActionType;
export type AddItemType = typeof TODO_ADD_ITEM | typeof TRAVEL_ADD_ITEM;
export type DeleteItemType =
  | typeof TODO_DELETE_ITEM
  | typeof TRAVEL_DELETE_ITEM;
