import {Button, TextField, Typography} from '@mui/material';
import React, {Fragment} from 'react';
import {IPropsLogin} from "../../../common/types/auth";
import {useStyles} from "../styles";
import AppButton from "../../app-button";


const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {navigate, register, errors} = props
    const classes = useStyles()
    return (
        <>
            <Typography variant="h2" textAlign="center" fontSize="32px">Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} textAlign="center">Введите Ваш логин и пароль</Typography>
            <TextField
                error={!!errors.email}
                fullWidth={true}
                margin="normal"
                label="Email"
                variant="outlined"
                placeholder="Введите ваш email"
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email')}
            />
            <TextField
                error={!!errors.password}
                fullWidth={true}
                margin='normal'
                label="Пароль"
                variant="outlined"
                placeholder="Введите ваш пароль"
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password')}
            />
            <AppButton type='submit' sx={{marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Войти</AppButton>
            <Typography variant="body1">У вас нет аккаунта? <span className={classes.incitingText} onClick={() => navigate('/register')}>Регистрация</span></Typography>
        </>
    );
};

export default LoginPage;