import React from "react";
import { useSelector } from "react-redux";
type Props = {}
import { getTodosSelector } from "../store/todo/selectors";
const TodoList = (props: Props) => {
    const todos = useSelector(getTodosSelector);
    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    {todo.name}
                </div>
            ))}
        </div>
    );
};

export default TodoList;
