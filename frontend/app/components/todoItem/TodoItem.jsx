'use client'
import { FaRegTrashAlt } from 'react-icons/fa'

const TodoItem = ({ attributes, id, update }) => {
    const { textvalue, complete } = attributes

    const apiUrl = `http://localhost:1337/api/strapitodos/${id}`

    //Toggle style and PUT on server update data
    const toggleTodo = () => {
        const body = {
            data: {
                id,
                textvalue,
                complete: !complete
            }
        };

        fetch(apiUrl, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(() => { update() })
    }


    // Delete todo item form the server and call update
    const deleteTodo = async(e) => {
        e.preventDefault();

        fetch(apiUrl, {
            method: "DELETE"
        })
            .then(() => { update() })
    }

    //Dynamic style
    const textStyle = complete ? style.textComplete : style.text
    const liStyle = complete ? style.liComplete : style.li

  return (
    <li className={liStyle}>
      <div className={style.row}>
        <input
            id="checkbox"
            className={style.checkbox}
            checked={complete}
            onChange={toggleTodo}
            type="checkbox" />
        <p className={textStyle}>{textvalue}</p>
      </div>
        <button onClick={deleteTodo}>
          {<FaRegTrashAlt />}
      </button>
    </li>
  )
}

export default TodoItem


// --- Tailwind ---
const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-accent opacity-25 p-4 my-2 capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex item-center bg-green-400`,
    checkbox: `peer relative w-5 h-5 border rounded-sm
        focus:outline-none 
        checked:bg-gray-900 
        hover:ring 
        hover:ring-green-300
       
        
        
        `
}