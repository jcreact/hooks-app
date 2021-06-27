import React from 'react';
import { shallow } from 'enzyme';

import { RealExampleRef } from '../../../components/use-ref/RealExampleRef.jsx';


describe(`Pruebas en el componente 'RealExampleRef.jsx'.`, () => {

    const component = shallow(<RealExampleRef />);

    test(`Debe renderizar el componente RealExampleRef correctamente.`, () => {

        expect(component).toMatchSnapshot();
        expect(component.find('button').exists()).toBeTruthy();
        expect(component.find('button').text()).toBe('Mostar Citas');
        expect(component.find('MultipleHooks').exists()).toBeFalsy();
    });

    test(`Debe mostrar el componente 'MultipleHooks'.`, () => {
        component.find('button').simulate('click');
        expect(component.find('MultipleHooks').exists()).toBe(true);
    });

});
