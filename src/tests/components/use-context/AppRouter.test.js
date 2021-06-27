
import { mount } from 'enzyme';
import React from 'react';

//Componente
import { AppRouter } from '../../../components/use-context/AppRouter.jsx';

//Hook
import { UserContext } from '../../../components/use-context/UserContext.js';

describe(`Pruebas en el componente 'HomePage.jsx'.`, () => {


    const user = {
        name: 'José Palma',
        email: 'test@correo.com'
    };

    const setUser = jest.fn();


    const app = mount(
        <UserContext.Provider
            value={{ user, setUser }}
        >
            <AppRouter />
        </UserContext.Provider>
    );

    test(`Debe renderizar el componente HomePage correctamente.`, () => {
        expect(app).toMatchSnapshot();
    });

});
