

import { shallow } from 'enzyme';

// Componente
import { ToDoList } from '../../../components/reducers/ToDoList.jsx';

// Datos de prueba
import { demoTodos } from '../../fixtures/demoTodos';

describe(`Pruebas en el componente 'ToDoList.jsx'.`, () => {


    const removeTask = jest.fn();
    const handleToggle = jest.fn();
    const component = shallow(
        <ToDoList
            todos={demoTodos}
            handleToggle={handleToggle}
            removeTask={removeTask}
        />
    );

    test(`Debe renderizar el componente ToDoListItem correctamente.`, () => {
        expect(component).toMatchSnapshot();
        expect(component.find('ToDoListItem')).toHaveLength(demoTodos.length);
    });


    test(`Debe renderizar el listado de tareas correctamente.`, () => {
        expect(component.find('ToDoListItem')).toHaveLength(demoTodos.length);
    });

    test(`Debe de establecer las propieades del componente ToDoListItem.`, () => {

        const index = 0;
        const item = component.find('ToDoListItem').at(index);

        expect(item.prop('handleToggle')).toEqual(expect.any(Function));
        expect(item.prop('removeTask')).toEqual(expect.any(Function));
        expect(item.prop('index')).toBe(index);
        expect(item.prop('todo')).toEqual(demoTodos[index]);

    });

});
