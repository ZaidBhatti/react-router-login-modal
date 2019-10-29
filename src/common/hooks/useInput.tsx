import {ChangeEvent, useState} from 'react';

type InputProps = {
    initialValue: string;
    validate: (value: string) => boolean;
};

const useInput = (input?: InputProps) => {
    const {initialValue = '', validate = (value: string) => true}: InputProps = input;
    const [value, setValue] = useState(initialValue);
    const [valid, setValid] = useState(true);
    const [pristine, setPristine] = useState(true);
    return {
        value,
        valid,
        setValue,
        pristine,
        reset: () => setValue(''),
        validate: () => {
            const valid = validate(value) && value.trim().length > 0;
            setValid(valid);
            return valid;
        },
        bind: {
            value,
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
                if (event.target.value !== initialValue) {
                    setPristine(false);
                }
                setValid(true);
                setValue(event.target.value);
            }
        }
    }
};

export default useInput;
