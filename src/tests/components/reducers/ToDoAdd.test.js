import { shallow } from 'enzyme';

//Componente
import { ToDoAdd } from '../../../components/reducers/ToDoAdd.jsx';

describe(`Pruebas en el componente 'ToDoList.jsx'.`, () => {

    const handleAdd = jest.fn();
    const component = shallow(
        <ToDoAdd handleAdd={handleAdd} />
    );

    test(`Debe renderizar el componente ToDoListItem correctamente.`, () => {
        expect(component).toMatchSnapshot();
    });

    test(`No debe se ejecutarse la función 'handleAdd' si el formulario está vacío`, () => {

        const formSubmit = component.find('form').prop('onSubmit');

        formSubmit({ preventDefault() { } });
        expect(handleAdd).toHaveBeenCalledTimes(0);
    });

    test(`Debe ejecutar la función 'handleAdd' y restablecer el formulario.`, () => {

        const todo = {
            id: expect.any(Number),
            project: 'Demo',
            task: 'Tarea 1',
            done: false
        };

        component.find(`input[name='task']`).simulate('change', {
            target: {
                value: todo.task,
                name: 'task'
            }
        });
        component.find(`input[name='project']`).simulate('change', {
            target: {
                value: todo.project,
                name: 'project'
            }
        });

        const formSubmit = component.find('form').prop('onSubmit');
        formSubmit({ preventDefault() { } });

        expect(handleAdd).toBeCalled();
        expect(handleAdd).toHaveBeenCalledWith(todo);

        // Revisa que se haya restablecido el formulario.
        expect(component.find(`input[name='task']`).prop('value')).toBe('');
        expect(component.find(`input[name='project']`).prop('value')).toBe('Personal');
    });

});
