import React from 'react';
import { shallow } from 'enzyme';

import { MultipleHooks } from '../../../components/examples/MultipleHooks.jsx';

import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

// Mock Hook
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe(`Pruebas en el componente 'MultipleHooks.jsx'.`, () => {

    const increment = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
        useCounter.mockReturnValue({
            counter: 1,
            increment
        });
    });

    test(`Debe renderizar el componente MultipleHooks correctamente.`, () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const component = shallow(<MultipleHooks />);
        expect(component).toMatchSnapshot();
        expect(component.find('Spinner').exists()).toBeTruthy();
        expect(component.find('button').prop('disabled')).toBeTruthy();

    });

    test(`Debe renderizar una cita.`, () => {

        const author = 'José Palma';
        const quote = '!Es todo un show!';
        const series = 'La Vida';

        // Simulando la información del hook.
        useFetch.mockReturnValue({
            data: [{
                author,
                quote,
                series
            }],
            loading: false,
            error: null
        });

        const component = shallow(<MultipleHooks />);
        expect(component).toMatchSnapshot();
        expect(component.find('Spinner').exists()).toBeFalsy();

        expect(component.find('blockquote').exists()).toBeTruthy();
        expect(component.find('blockquote').find('p').text()).toContain(quote);

        expect(component.find('figcaption').exists()).toBeTruthy();
        expect(component.find('figcaption').text()).toContain(author);
        expect(component.find('figcaption').text()).toContain(series);

        expect(component.find('button').prop('disabled')).toBeFalsy();
        component.find('button').simulate('click');
        expect(increment).toBeCalled();

    });

});
