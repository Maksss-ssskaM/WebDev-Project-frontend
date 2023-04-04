import {Button, TextField, Typography} from '@mui/material';
import React, {Fragment} from 'react';
import {IPropsLogin} from "../../../common/types/auth";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {navigate, register, errors} = props
    return (
        <>
            <Typography variant="h2" fontFamily="Poppins" textAlign="center">Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily="Poppins" textAlign="center">Введите Ваш логин и пароль</Typography>
            <TextField
                error={!!errors.email}
                fullWidth={true}
                margin="normal"
                label="Email"
                variant="outlined"
                placeholder="Введите ваш email"
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email', {
                    required: 'Это обязательное поле',
                    pattern: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
                })}
            />
            <TextField
                error={!!errors.password}
                fullWidth={true}
                margin='normal'
                label="Password"
                variant="outlined"
                placeholder="Введите ваш пароль"
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password', {
                    required: 'Это обязательное поле',
                    minLength: 6
                })}
            />
            <Button type='submit' sx={{fontFamily: "Poppins", marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Войти</Button>
            <Typography variant="body1" sx={{fontFamily: "Poppins"}}>У вас нет аккаунта? <span className="incitingText" onClick={() => navigate('/register')}>Регистрация</span></Typography>
        </>
    );
};

export default LoginPage;