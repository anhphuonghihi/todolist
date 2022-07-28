import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import 'antd/dist/antd.css';

import {
  getPendingSelector,
  getTodosSelector,
  getErrorSelector,
} from "./store/todo/selectors";
import { fetchTodoRequest } from "./store/todo/actions";
import LayoutTodo from "./app/LayoutTodo";
const Home = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);

  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, [dispatch]);
  return (
    <div style={{ padding: "15px" }}>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <LayoutTodo />
      )
      }
    </div>
  )
}

export default Home
