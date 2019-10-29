import React, {FormEvent} from 'react';
import styled from "styled-components";
import useInput from '../../common/hooks/useInput';

const LoginForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
`;

const Input = styled.input<{ valid: boolean }>`
    border-color: ${props => props.valid ? "none" : "red"}
`;

const LoginPage = () => {
    const {value: username, pristine: usernamePristine, valid: validUsername, validate: validateUsername, bind: bindUsername, reset: resetUsername} = useInput({
        initialValue: '',
        validate: (value) => value === 'username'
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {value: password, pristine: passwordPristine, valid: validPassword, validate: validatePassword, bind: bindPassword, reset: resetPassword} = useInput({});

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validUsername = validateUsername();
        const validPassword = validatePassword();
        const validForm = validUsername && validPassword;

        if (!validForm) {
            return alert('errors');
        }
    };

    return (
        <LoginForm onSubmit={handleOnSubmit}>
            <label>Username: </label>
            <Input type={'text'} valid={validUsername} {...bindUsername}/>
            <label>Password: </label>
            <Input type={'password'} valid={validPassword} {...bindPassword}/>
            <button type={'submit'}>Submit</button>
        </LoginForm>
    );
};


export default LoginPage;
