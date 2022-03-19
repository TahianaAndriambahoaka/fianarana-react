import Header from 'Components/Header';
import TodoList from 'Components/TodoList';
import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
const LOCAL_STORAGE_KEY = 'todoApp.todos';
function App() {
    const [todos, setTodos] = useState([{
        id: 1,
        name: 'Todo1',
        complete: false
    }
    ]);
    const todoNameRef = useRef();
    function toggleTodo(id){
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id )
        todo.complete = !todo.complete
        setTodos(newTodos)
    }
    useEffect(() =>{
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])
    function handleAddToDo(e){
        const name = todoNameRef.current.value;
        setTodos(prevToddos =>{
            return [...prevToddos , {id:uuidv4(), name:name, complete:false}]
        })
        todoNameRef.current.value = null;
    }
    function handleClearTodos(){
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }
    return (
        <>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <input ref={todoNameRef} type="text" />
            <button onClick={handleAddToDo}>Add Todo</button>
            <button onClick={handleClearTodos}>Clear complete</button>
            <div>{todos.filter(todo => !todo.complete).length} left todo</div>
        </>
    )
}

export default App