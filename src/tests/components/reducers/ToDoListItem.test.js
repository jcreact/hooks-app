
import { shallow } from 'enzyme';

import { ToDoListItem } from '../../../components/reducers/ToDoListItem.jsx';
import { demoTodos } from '../../fixtures/demoTodos';


describe(`Pruebas en el componente 'ToDoListItem.jsx'.`, () => {

    const id = 2;
    const index = 2;
    const todo = demoTodos.find(t => t.id === id);
    const removeTask = jest.fn();
    const handleToggle = jest.fn();

    const component = shallow(
        <ToDoListItem
            index={index}
            todo={todo}
            removeTask={removeTask}
            handleToggle={handleToggle}
        />
    );

    test(`Debe renderizar el componente ToDoListItem correctamente.`, () => {
        expect(component).toMatchSnapshot();
    });

    test(`Debe llamar la función 'removeTask' para remover una tarea.`, () => {
        component.find('button').simulate('click');
        expect(removeTask).toBeCalled();
        expect(removeTask).toBeCalledWith(id);
    });

    test(`Debe llamar la función 'handleToggle' para cambiar el estado de una tarea.`, () => {
        component.find('li').simulate('click');
        expect(handleToggle).toBeCalled();
        expect(handleToggle).toBeCalledWith(id);
    });

    test(`Debe mostrar la descripción y el proyecto de la tarea correctamente.`, () => {
        expect(component.find('span').text()).toBe(`${index + 1}. ${todo.task}`);
        expect(component.find('div.fw-bold').text()).toBe(`[${todo.project}]`);
        expect(component.find('span').hasClass('text-decoration-line-through')).toBe(todo.done);
    });

});
