import React from 'react';
import { act } from '@testing-library/react';
import { shallow, mount } from 'enzyme';


// Componente
import { ToDoApp } from '../../../components/reducers/ToDoApp.jsx';
import { demoTodos } from '../../fixtures/demoTodos.js';

describe(`Pruebas en la aplicación 'ToDoApp.jsx'.`, () => {

    beforeEach(() => {
        Storage.prototype.setItem = jest.fn((k, v) => { });
        Storage.prototype.getItem = jest.fn((k) => null);
    });

    test(`Debe renderizar la aplicación 'TodoApp.jsx' correctamente.`, () => {
        const app = shallow(<ToDoApp />);
        expect(app).toMatchSnapshot();
        expect(app.find('ToDoAdd').exists()).toBeTruthy();
        expect(app.find('ToDoList').exists()).toBeTruthy();
        expect(app.find('span.badge').text()).toBe('0');
    });

    test('Debe agregar los todos de prueba y usar el LocalStorage.', () => {

        const app = mount(<ToDoApp />);

        let pending = 0;
        act(() => {
            demoTodos.forEach(t => {
                app.find('ToDoAdd').prop('handleAdd')(t);
                pending += (t.done ? 0 : 1);
            });
        });

        expect(app.find('span.badge').text()).toBe(pending.toString());
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        expect(localStorage.setItem).toHaveBeenNthCalledWith(1, 'todos', '[]');
        expect(localStorage.setItem).toHaveBeenNthCalledWith(2, 'todos', JSON.stringify(demoTodos));
    });

    test(`Debe eliminar un todo.`, () => {
        const app = shallow(<ToDoApp />);

        app.find('ToDoAdd').prop('handleAdd')(demoTodos[0]);
        expect(app.find('span.badge').text()).toBe('1');

        app.find('ToDoList').prop('removeTask')(demoTodos[0].id);
        expect(app.find('span.badge').text()).toBe('0');
    });

});
