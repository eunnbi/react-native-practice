import React, { createContext, useEffect, useReducer, useRef } from "react";
import { getData, storeData } from "../utils";
import {
  add,
  remove,
  toggle,
  edit,
  Item,
  reducer,
  initialDispatchContextValue,
  set,
} from "./common";

export const travelsStateContext = createContext([] as Item[]);

export const travelsDispatchContext = createContext(
  initialDispatchContextValue
);

const TravelsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, [] as Item[]);
  const nextId = useRef(0);

  useEffect(() => {
    getData("@travels").then((value: Item[] | null) => {
      if (value) {
        dispatch(set(value));
        if (value.length == 0) return;
        nextId.current = value[0].id + 1;
      }
    });
  }, []);

  useEffect(() => {
    storeData(state, "@travels");
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
    <travelsDispatchContext.Provider value={value}>
      <travelsStateContext.Provider value={state}>
        {children}
      </travelsStateContext.Provider>
    </travelsDispatchContext.Provider>
  );
};

export default TravelsProvider;
