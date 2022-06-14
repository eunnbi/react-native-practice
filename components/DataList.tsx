import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootReducerType } from "../modules";
import List from "./common/List";

export default function DataList({ header }: { header: string }) {
  const todos = useSelector((root: RootReducerType) => root.todos);
  useEffect(() => console.log(todos.list), [todos.list]);
  return <List data={todos.list} />;
}
