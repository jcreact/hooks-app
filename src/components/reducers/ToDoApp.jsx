import React, { useEffect, useReducer } from 'react';

//Componentes
import { ToDoAdd } from './ToDoAdd.jsx';
import { ToDoList } from './ToDoList.jsx';

// Reducer
import { todoReducer } from './todoReducer';

const initializerToDos = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const ToDoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], initializerToDos);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    /**
     *
     * @param {{id: number, project:string, task:string, done:boolean}} todo - Nueva tarea.
     */
    const handleAdd = (todo) => {
        dispatch({
            type: 'add',
            payload: todo,
        });
    };

    /**
     * Elimina una tarea de la lista.
     * @param {number} id - Identificardor de la tarea.
     */
    const removeTask = (id) => {
        dispatch({
            type: 'remove',
            payload: id,
        });
    };

    /**
     * Cambia el estado de la tarea.
     * @param {number} id - Identificador de la tarea.
     */
    const handleToggle = (id) => {
        dispatch({
            type: 'toggle',
            payload: id,
        });
    };

    return (
        <div className="container-fluid">
            <div className="mt-3 d-flex justify-content-start align-items-start">
                <h1>To-Do App</h1>
                <span className="badge bg-danger rounded-pill">
                    {todos.filter((t) => !t.done).length}
                </span>
            </div>
            <hr />

            <ToDoAdd handleAdd={handleAdd} />

            <ToDoList
                todos={todos}
                removeTask={removeTask}
                handleToggle={handleToggle}
            />
        </div>
    );
};
