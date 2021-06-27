import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Hooks
import { useForm } from '../../hooks/useForm';

/**
 * Formulario para agregar una nueva tarea a la lista.
 * @param {Object} props - Propiedades del componente.
 * @param {(todo: {id: number, project:string, task:string, done:boolean}) => void} props.handleAdd - Referencia a la función para agregar una tarea.
 */
export const ToDoAdd = ({ handleAdd }) => {
    const [{ task, project }, handleInputChange, reset] = useForm({
        task: '',
        project: 'Personal',
    });

    /**
     * @param {React.FormEvent<HTMLFormElement>} evt
     */
    const handleSubmint = (evt) => {
        evt.preventDefault();

        if (!task || !task.trim()) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            project: project.trim() || 'Personal',
            task,
            done: false,
        };

        handleAdd(newTodo);
        reset();
        document.querySelector(`input[name='task']`)?.select();
    };

    return (
        <form className="mb-3" onSubmit={handleSubmint}>
            <fieldset>
                <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        name="task"
                        placeholder="..."
                        value={task}
                        onChange={handleInputChange}
                        autoComplete="off"
                        autoFocus
                    />
                    <label>New Task</label>
                </div>

                <div className="input-group mb-2"></div>
                <div id="collapseInfo" className="">
                    <div className="input-group mb-2">
                        <span className="input-group-text">Project Name</span>
                        <input
                            type="text"
                            className="form-control"
                            name="project"
                            value={project}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn btn-primary shadow-none"
                            disabled={!task}
                        >
                            <i className="bi bi-journal-plus me-2"></i>
                            Add
                        </button>
                    </div>

                    <div className="d-flex justify-content-end"></div>
                </div>
            </fieldset>
        </form>
    );
};

// Especificación de tipos de las propiedades.
ToDoAdd.propTypes = {
    handleAdd: PropTypes.func.isRequired,
};
