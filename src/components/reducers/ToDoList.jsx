import React from 'react';
import PropTypes from 'prop-types';

//Componentes
import { ToDoListItem } from './ToDoListItem.jsx';

/**
 * Renderiza el listado de tareas.
 * @param {Object} props - Propiedades del componente.
 * @param {{id: number, project:string, task:string, done:boolean}[]} props.todos - Lista de tareas.
 * @param {(id: number) => void} props.removeTask - Referencia a la función para remover una tarea.
 * @param {(id: number) => void} props.handleToggle - Referencia a la función para cambiar el estado de la tarea.
 */
export const ToDoList = ({ todos, removeTask, handleToggle }) => {
    const showToDos = () =>
        todos.map((todo, i) => (
            <ToDoListItem
                key={todo.id}
                todo={todo}
                index={i}
                removeTask={removeTask}
                handleToggle={handleToggle}
            />
        ));

    return <ol className="list-group">{showToDos()}</ol>;
};

// Especificación de tipos de las propiedades.
ToDoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            project: PropTypes.string.isRequired,
            task: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired,
        })
    ),
    removeTask: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
};
