'use client'
import TodoItem from '@/app/components/todoItem/TodoItem'

const TodoList = ({ data, update }) => {

    const todoList = data.map(todo => {
        const {id, ...Props} = todo;

        return (
            <TodoItem
                key={id}
                id={id}
                {...Props}
                update={update}
            />
        )
    })
    return (
        <ul>
            {todoList}
        </ul>
    )
}

export default TodoList