import { todoReducer } from '../../../components/reducers/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';


describe(`Pruebas en el Hook 'todoReducer.js'.`, () => {

    test(`Debe retorar el estado por defecto.`, () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test(`Debe agregar una nueva tarea.`, () => {

        const newTask = {
            id: 3,
            project: 'Personal',
            task: 'Tarea 1',
            done: false
        };
        const action = {
            type: 'add',
            payload: newTask
        };
        const state = todoReducer(demoTodos, action);

        expect(state).toHaveLength(demoTodos.length + 1);
        expect(state).toContain(newTask);
        expect(state).toEqual([...demoTodos, newTask]);
    });

    test(`Debe de remover una tarea.`, () => {
        const id = 2;
        const action = {
            type: 'remove',
            payload: id
        };
        const state = todoReducer(demoTodos, action);

        expect(state).toHaveLength(demoTodos.length - 1);
        expect(state).not.toContain(demoTodos.find(todo => todo.id === id));
    });

    test(`Debe de cambiar el estado de una tarea.`, () => {
        const id = 2;
        const action = {
            type: 'toggle',
            payload: id
        };
        const state = todoReducer(demoTodos, action);

        expect(state).not.toEqual(demoTodos);

        // Que la tarea haya cambiado su estado (done).
        expect(state.find(t => t.id === id))
            .not
            .toEqual(demoTodos.find(t => t.id === id));

        // Que las otras tareas no hayan cambiado
        expect(state.filter(t => id.id === id))
            .toEqual(demoTodos.filter(t => id.id === id));

    });

});
