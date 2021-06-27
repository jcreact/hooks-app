import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renderiza una tarea.
 * @param {Object} props - Propiedades del componente.
 * @param {number} props.index - La posición de la tarea en el listado de tareas.
 * @param {{id: number, project:string, task:string, done:boolean}} props.todo - Una Tarea.
 * @param {(id: number) => void} props.removeTask - Referencia a la función para remover una tarea.
 * @param {(id: number) => void} props.handleToggle - Referencia a la función para cambiar el estado de la tarea.
 * @returns
 */
export const ToDoListItem = ({
    index,
    todo: { id, project, task, done },
    removeTask,
    handleToggle,
}) => {
    return (
        <li
            className="list-group-item d-flex justify-content-between align-items-center pointer"
            onClick={() => handleToggle(id)}
        >
            <i
                className={`bi bi-check-circle-fill ${
                    done ? 'text-success' : 'text-black-50'
                }`}
            />

            <div className="ms-2 me-auto">
                <div className="fw-bold">[{project}]</div>
                <span className={`${done && 'text-decoration-line-through'}`}>
                    {index}. {task}
                </span>
            </div>

            <div>
                <button
                    className="btn btn-outline-danger shadow-none btn-circle"
                    onClick={() => removeTask(id)}
                >
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </li>
    );
};

// Especificación de tipos de las propiedades.
ToDoListItem.propTypes = {
    index: PropTypes.number.isRequired,
    todo: PropTypes.exact({
        id: PropTypes.number.isRequired,
        project: PropTypes.string.isRequired,
        task: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
    }),
    removeTask: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
};
