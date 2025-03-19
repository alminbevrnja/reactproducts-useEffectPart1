import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

function TodoListComponent({todoItems, setTodoItems}) {

    function removeTodo(id){
        let removeTodo = todoItems.filter((item) => item.id !== id)
            setTodoItems(removeTodo)
    }

  return (
    <div className='container flex mx-auto flex-col  items-center justify-center mt-5'>
        {todoItems.map((item) => {
            return <div key={item.id} className='bg-slate-300 w-[50%] rounded-lg p-[15px] border border flex justify-between items-center border-green-300 mt-5'>
                <h2 >{item.title}</h2>
                <FaTrashAlt onClick={() => removeTodo(item.id)} size={20} color='red' className='cursor-pointer' />

            </div>
        })}
    </div>
  )
}

export default TodoListComponent