import { createAddItemAction, createDeleteItemAction } from "./createAction";
import { createReducer } from "./createReducer";

export const { ADD_ITEM: TODO_ADD_ITEM, addItem: addTodoItem } =
  createAddItemAction("todos");

export const { DELETE_ITEM: TODO_DELETE_ITEM, deleteItem: deleteTodoItem } =
  createDeleteItemAction("todos");

const initialState = {
  list: [],
  nextId: 0,
};

export type TodosActionType =
  | ReturnType<typeof addTodoItem>
  | ReturnType<typeof deleteTodoItem>;

const todos = createReducer(initialState, TODO_ADD_ITEM, TODO_DELETE_ITEM);

export default todos;
