import { useState } from 'react';


export const useForm = (formValues = {}) => {
    const [values, setValues] = useState(formValues);

    /**
     * Maneja el evento onChange de los valores del formulario.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} evt
     */
    const handleInputChange = ({ target }) => {
        setValues({ ...values, [target.name]: target.value });
    };

    const reset = () => {
        setValues(formValues);
    };

    return [values, handleInputChange, reset];

};