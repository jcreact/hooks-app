import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe(`Pruebas en el Hook 'useForm.js'.`, () => {

    const initValues = {
        name: 'Jose',
        email: 'jose@correo.com'
    };

    test('Debe retorar los valores por defecto.', () => {

        const { result } = renderHook(() => useForm(initValues));
        const [values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initValues);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test(`Debe cambiar sólo el valor de 'name'.`, () => {
        const { result } = renderHook(() => useForm(initValues));
        const [, handleInputChange] = result.current;

        const name = 'José Palma';
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: name
                }
            });
        });
        const [formValues] = result.current;
        expect(formValues).toEqual({ ...initValues, name });
    });

    test(`Debe cambiar sólo el valor de 'email'.`, () => {
        const { result } = renderHook(() => useForm(initValues));
        const [, handleInputChange] = result.current;

        const email = 'test@correo.com';
        act(() => {
            handleInputChange({
                target: {
                    name: 'email',
                    value: email
                }
            });
        });
        const [formValues] = result.current;
        expect(formValues).toEqual({ ...initValues, email });
    });

    test('Debe restablecer todos los valores a sus valores por defecto.', () => {
        const { result } = renderHook(() => useForm(initValues));
        const [, handleInputChange, reset] = result.current;

        //Realiza cambio en el email
        const email = 'test@correo.com';
        act(() => {
            handleInputChange({
                target: {
                    name: 'email',
                    value: email
                }
            });
            act(reset);
        });

        const [formValues] = result.current;
        expect(formValues).toEqual(initValues);

    });

});
