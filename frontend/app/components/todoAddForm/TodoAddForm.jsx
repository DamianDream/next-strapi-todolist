'use client'
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

const TodoAddForm = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const onChangeHandler = e => {
        setInputValue(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();

        const  newTodo = {
            id: uuidv4,
            textvalue: inputValue,
            complete: false
        }

        addTodo(newTodo);

        //clear the form input
        setInputValue('');
    }

    const buttonElement = () => {
        const isButtonActive = inputValue <= 1
        return (
            <button type="dubmit"
                    className={`${style.button} + disabled:bg-red-500, disabled:opacity-50 transition ease-in-out`}
                    disabled={isButtonActive}>
                Add
            </button>
        )
    }
    const btn = buttonElement();

    return (
        <form
            onSubmit={onSubmit}
            className={style.form}
        >
            <input
                className={style.input}
                onChange={onChangeHandler}
                value={inputValue}
                type="text"
                placeholder="Write me..." />
            {btn}
        </form>
    )
}

export default TodoAddForm

// Tailwind Styles
const style = {
    form: `flex justify-between`,
    input: `border p-2 w-full text-xl`,
    button: `border p-4 ml-2 bg-accent text-slate-100 font-bold rounded"`,
}