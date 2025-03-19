import { useEffect, useState } from "react"
import TodoInputComponent from "./components/TodoInputComponent"
import TodoListComponent from "./components/TodoListComponent"
import { ToastContainer } from "react-toastify"




function App() {
    //save all todo list items (array):
    const [todoItems, setTodoItems] = useState([])
    useEffect(() => {
      console.log(todoItems);
      
    }, [todoItems])
    
    return (
    <div className="container mx-auto flex flex-col items-center justify-center">
         <h1 className="text-[50px] font-extrabold text-green-400 my-[30px]">TODO APP</h1>
         <TodoInputComponent todoItems={todoItems} setTodoItems={setTodoItems}/>
         <TodoListComponent todoItems={todoItems} setTodoItems={setTodoItems}/>
         <ToastContainer />
    </div>
  )
}

export default App
