import { getTodos } from "../../api";
import { TodoList } from "./list/page";
import NewTodo from "./new-todo/page";

export default async function Home() {
    const todos = await getTodos();
    return <>
    {/* <NewTodo /> */}
    <TodoList todos={ todos }/>
  </>
}
