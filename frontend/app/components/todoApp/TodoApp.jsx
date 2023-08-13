'use client'
import { useState, useEffect } from "react"
import TodoList from "@/app/components/todoList/TodoList"
import TodoAddForm from "@/app/components/todoAddForm/TodoAddForm"
import Loader from "@/app/components/loader/Loader";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

    useEffect(() => {
        update();
    }, []);

    const update = () => {
        fetch(`http://localhost:1337/api/strapitodos?fields=textvalue&fields=complete`)
            .then(res => res.json())
            .then(todo => { setTodos(todo.data) })
    }

    // This function sends a new todo to the server
    const addTodo = (newTodo) => {
        const body = {
            data: { id, textvalue, complete } = newTodo
        };

        fetch("http://localhost:1337/api/strapitodos", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(() => { update() })
    }

    //Create counter for Todos
    // Note: count only for incomplete elements
    const Count = (todos) => {
        const incomplete = todos.slice().filter(item => item.attributes.complete !== true)
        return <p className={style.count}>You have {incomplete.length} todos</p>
    }
    const countElement = Count(todos);

  return (
      <div className={style.todo}>
        <div className={style.container}>
          <h3 className={style.heading}>Next ToDo</h3>
          <TodoAddForm
              addTodo={addTodo}
          />
          <TodoList
              update={update}
              data={todos} />
            {countElement}
        </div>
      </div>
  )
}

export default TodoApp


// --- Tailwind ---
const style = {
  todo: `pt-8`,
  container: `bg-slate-100 max-w-[800px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  count: `text-center p-2`
}