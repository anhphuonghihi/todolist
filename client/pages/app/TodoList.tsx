import React,{useState} from "react";
import { useSelector } from "react-redux";
type Props = {}
import { Button, Form, Input,Modal } from 'antd';
import { getTodosSelector } from "../store/todo/selectors";
import { useDispatch } from "react-redux";

import { addList,deleteList,getList } from "../store/todo/actions";
const TodoList = (props: Props) => {
    const todos = useSelector(getTodosSelector);
    const view = useSelector((state) =>state.todo.getOne);
    console.log(view)
    const dispatch = useDispatch();
    const [name,setName]=useState("")
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    const addTodo= () => {
        dispatch(addList(name));
      };
      const deleteTodo= (id) => {
        dispatch(deleteList(id));
      };
      const viewTodo= (id) => {
        setIsModalVisible(!isModalVisible);
        dispatch(getList(id));

      };
    return (
        <div>
           <div>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
           </div>
           <div>
           <Modal title="GET TODO" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>{view?view.name:""}</p>
      </Modal>
           {todos.map((todo, index) => (
               <div key={index}>
                   {todo.name}
                   <button onClick={()=>deleteTodo(todo._id)}>Delete</button>
                   <button onClick={()=>viewTodo(todo)}>View</button>
               </div>
           ))}
           
       </div>
        </div>
    );
};

export default TodoList;
