import Styles from "./Styles";
import Classes from "./Classes";
import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./HighLight";
import Add from "./Add";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";
import { LabState } from "../store";

function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);

  return (
    <div className="">
      <h1>Assignment 3</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <TodoList />
      <Add a={5} b={10} />
      <Highlight>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
        aspernatur alias, nesciunt maiores libero et accusamus, voluptate totam
        quod, eaque a dignissimos unde at repellendus minima repudiandae nulla
        nihil dolore.
      </Highlight>
      <ConditionalOutput />
      <Styles />
      <Classes />
      <PathParameters />
      <JavaScript />
    </div>
  );
}
export default Assignment3;
