import {Button, TextField, Typography} from '@mui/material';
import React, {Fragment} from 'react';
import {IPropsLogin} from "../../../common/types/auth";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {setEmail, setPassword, navigate} = props
    return (
        <>
            <Typography variant="h2" fontFamily="Poppins" textAlign="center">Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily="Poppins" textAlign="center">Введите Ваш логин и пароль</Typography>
            <TextField fullWidth={true} margin="normal" label="Email" variant="outlined" placeholder="Введите ваш email" onChange={(event) => setEmail(event.target.value)}/>
            <TextField fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder="Введите ваш пароль" onChange={(event) => setPassword(event.target.value)}/>
            <Button type='submit' sx={{fontFamily: "Poppins", marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Войти</Button>
            <Typography variant="body1" sx={{fontFamily: "Poppins"}}>У вас нет аккаунта? <span className="incitingText" onClick={() => navigate('/register')}>Регистрация</span></Typography>
        </>
    );
};

export default LoginPage;