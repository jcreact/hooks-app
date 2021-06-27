import React from 'react';
import { mount } from 'enzyme';

//Componente
import { LoginPage } from '../../../components/use-context/LoginPage.jsx';

//Hook
import { UserContext } from '../../../components/use-context/UserContext.js';

describe(`Pruebas en el componente 'LoginPage.jsx'.`, () => {

    const setUser = jest.fn();

    const user = {
        id: expect.any(Number),
        email: 'palmahn@gmail.com',
        name: 'José Palma'
    };

    const component = mount(
        <UserContext.Provider value={{ setUser }} >
            <LoginPage />
        </UserContext.Provider>
    );

    test(`Debe renderizar el componente HomePage correctamente.`, () => {
        expect(component).toMatchSnapshot();
    });

    test(`Debe ejecutar la función 'setUser' con el usuario por defecto.`, () => {
        component.find('form').simulate('submit', { preventDefault() { } });
        expect(setUser).toBeCalled();
        expect(setUser).toBeCalledWith(user);
    });

});
