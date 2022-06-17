export interface Item {
  text: string;
  id: number;
  done: boolean;
}

const ADD = "ADD" as const;
const DELETE = "DELETE" as const;
const TOGGLE = "TOGGLE" as const;
const EDIT = "EDIT" as const;
const SET = "SET" as const;

export const add = (text: string, nextId: number) => ({
  type: ADD,
  text,
  nextId,
});

export const remove = (id: number) => ({
  type: DELETE,
  id,
});

export const set = (list: Item[]) => ({
  type: SET,
  list,
});

export const toggle = (id: number) => ({
  type: TOGGLE,
  id,
});

export const edit = (id: number, text: string) => ({
  type: EDIT,
  id,
  text,
});

export const initialDispatchContextValue = {
  addItem: (text: string) => {},
  removeItem: (id: number) => {},
  toggleItem: (id: number) => {},
  editItem: (id: number, text: string) => {},
};

type ActionType =
  | ReturnType<typeof add>
  | ReturnType<typeof remove>
  | ReturnType<typeof set>
  | ReturnType<typeof toggle>
  | ReturnType<typeof edit>;

export const reducer = (state: Item[], action: ActionType) => {
  switch (action.type) {
    case SET:
      return action.list;
    case ADD:
      return [
        {
          text: action.text,
          id: action.nextId,
          done: false,
        },
        ...state,
      ];
    case DELETE:
      return state.filter((item) => item.id !== action.id);
    case TOGGLE:
      return state.map((item) =>
        item.id === action.id ? { ...item, done: !item.done } : item
      );
    case EDIT:
      return state.map((item) =>
        item.id === action.id ? { ...item, text: action.text } : item
      );

    default:
      return state;
  }
};
