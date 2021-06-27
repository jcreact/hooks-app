
import React from 'react';
import { mount } from 'enzyme';

//Componente
import { HomePage } from '../../../components/use-context/HomePage.jsx';

//Hook
import { UserContext } from '../../../components/use-context/UserContext.js';

describe(`Pruebas en el componente 'HomePage.jsx'.`, () => {

    const user = {
        name: 'José Palma',
        email: 'test@correo.com'
    };

    const component = mount(
        <UserContext.Provider
            value={{ user }}
        >
            <HomePage />
        </UserContext.Provider>
    );

    test(`Debe renderizar el componente HomePage correctamente.`, () => {
        expect(component).toMatchSnapshot();
        expect(component.find('pre').text()).toBe(JSON.stringify(user, null, 3));
    });

});
