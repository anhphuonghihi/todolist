import React,{useState} from "react";
import { useSelector } from "react-redux";
type Props = {}
import { Button, Form, Input } from 'antd';
import { getTodosSelector } from "../store/todo/selectors";
import { useDispatch } from "react-redux";
import { addList,deleteList } from "../store/todo/actions";
const TodoList = (props: Props) => {
    const todos = useSelector(getTodosSelector);
    const dispatch = useDispatch();
    const [name,setName]=useState("")
    const addTodo= () => {
        dispatch(addList(name));
      };
      const deleteTodo= (id) => {
        dispatch(deleteList(id));
      };
    return (
        <div>
           <div>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
           </div>
           <div>
           
           {todos.map((todo, index) => (
               <div key={index}>
                   {todo.name}
                   <button onClick={()=>deleteTodo(todo._id)}>delete</button>
               </div>
           ))}
           
       </div>
        </div>
    );
};

export default TodoList;
