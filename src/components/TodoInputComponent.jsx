import React, { useState } from 'react';
import { toast } from 'react-toastify';

function TodoInputComponent({ todoItems, setTodoItems }) {

	const [currentTodo, setCurrentTodo] = useState('');

	function handleTodoInput(e) {
		//console.log(e.target.value);
		setCurrentTodo(e.target.value);
	}
	function handleTodo() {
		if(currentTodo){
            setTodoItems([
                ...todoItems,
                { title: currentTodo, id: new Date().getTime() }
            ]);
            setCurrentTodo('')
            toast.success('Task added')
        } else {
            toast.warn('Please enter your Task')
        }
		
	}

	return (
		<div className='flex gap-5'>
			<input
				type='text'
				placeholder='Insert your task...'
				className='border rounded-lg px-[20px] py-[10px] outline-none'
				onChange={handleTodoInput}
				value={currentTodo}
			/>
			<button
				onClick={handleTodo}
				className='px-5 py-3 bg-green-500 rounded-xl text-white'>
				Add Task
			</button>
		</div>
	);
}

export default TodoInputComponent;
