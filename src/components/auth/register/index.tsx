import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const {setEmail, setPassword, setRepeatPassword, setFirstName, setUsername, navigate} = props
    return (
        <>
            <Typography variant="h2" fontFamily="Poppins" textAlign="center">Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily="Poppins" textAlign="center">Введите данные для регистрации</Typography>
            <TextField fullWidth={true} margin="normal" label="Name" variant="outlined" placeholder="Введите ваше имя" onChange={(event) => setFirstName(event.target.value)}/>
            <TextField fullWidth={true} margin="normal" label="Username" variant="outlined" placeholder="Введите ваш username" onChange={(event) => setUsername(event.target.value)}/>
            <TextField fullWidth={true} margin="normal" label="Email" variant="outlined" placeholder="Введите ваш email" onChange={(event) => setEmail(event.target.value)}/>
            <TextField type="password" fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder="Введите ваш пароль" onChange={(event) => setPassword(event.target.value)}/>
            <TextField type="password" fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder="Повторите ваш пароль" onChange={event => setRepeatPassword(event.target.value)}/>
            <Button type='submit' sx={{fontFamily: "Poppins", marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Регистрация</Button>
            <Typography variant="body1" sx={{fontFamily: "Poppins"}}>У вас есть аккаунт? <span className="incitingText" onClick={() => navigate('/login')}>Авторизация</span></Typography>
        </>
    );
};

export default RegisterPage;