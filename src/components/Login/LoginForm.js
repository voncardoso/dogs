import { useEffect, useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import Button from '../Form/Button';
import Input from '../Form/Input';
import useForm from '../../Hooks/useForm'
import {TOKEN_POST, USER_GET} from '../../api';
import {UserContex} from '../../UserContext';

const LoginForm = () => {
    const username = useForm();
    const password = useForm();
    const {userLogin, error, loading} =  useContext(UserContex)
    
    console.log(username)
    console.log(password.value);
    console.log(username.value)


    
    // função para pegar dados do usuario


    
    async function handleSubmit(event){
        event.preventDefault();

        if(username.validate() && password.validate()){
            userLogin(username.value, password.value);
        }
    }

    return(
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input name="username" type="text" label="Usuário" {...username}/>
                <Input name="password" label="Senha" type="password" {...password}/>
                {loading ? (
                    <Button disabled>Carregando...</Button>
                ): (
                    <Button>Entrar</Button>
                )}
                
                {error && <p>{error}</p>}
            </form>
            <Link to="/login/criar"> Cadastro </Link>
        </section>
    )
    }


export default LoginForm;