import React from 'react';
import { shallow } from 'enzyme';

import { HookApp } from '../HookApp.jsx';

describe('Pruebas en "HookApp.jsx".', () => {

    const component = shallow(<HookApp />);

    test('Debe mostrar HookApp correctamente', () => {

        expect(component).toMatchSnapshot();
    });

    test(`Debe contener un h1 con 'Hooks App'.`, () => {
        expect(component.find('h1').exists()).toBeTruthy();
        expect(component.find('h1').text()).toBe('Hooks App');
    });
});
