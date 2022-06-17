import React, { createContext, useEffect, useReducer, useRef } from "react";
import { getData, storeData } from "../utils";
import {
  add,
  remove,
  set,
  reducer,
  initialDispatchContextValue,
  Item,
  toggle,
  edit,
} from "./common";

export const todosStateContext = createContext([] as Item[]);

export const todosDispatchContext = createContext(initialDispatchContextValue);

const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, [] as Item[]);
  const nextId = useRef(0);

  useEffect(() => {
    getData("@todos").then((value: Item[] | null) => {
      if (value) {
        dispatch(set(value));
        if (value.length == 0) return;
        nextId.current = value[0].id + 1;
      }
    });
  }, []);

  useEffect(() => {
    storeData(state, "@todos");
  }, [state]);

  const addItem = (text: string) => {
    dispatch(add(text, nextId.current));
    nextId.current++;
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const toggleItem = (id: number) => {
    dispatch(toggle(id));
  };

  const editItem = (id: number, text: string) => {
    dispatch(edit(id, text));
  };

  const value = { addItem, removeItem, toggleItem, editItem };
  return (
    <todosDispatchContext.Provider value={value}>
      <todosStateContext.Provider value={state}>
        {children}
      </todosStateContext.Provider>
    </todosDispatchContext.Provider>
  );
};

export default TodosProvider;
