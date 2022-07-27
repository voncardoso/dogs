import { useEffect, useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import Button from '../Form/Button';
import Input from '../Form/Input';
import useForm from '../../Hooks/useForm'
import Error from '../Help/Error';
import {TOKEN_POST, USER_GET} from '../../api';
import {UserContex} from '../../UserContext';
import styles from './LoginForm.module.css'
import stylesBtn from '../Form/Button.module.css';


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
        <section className='animeLeft'>
            <h1 className='title'>Login</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                <Input name="username" type="text" label="Usuário" {...username}/>
                <Input name="password" label="Senha" type="password" {...password}/>
                {loading ? (
                    <Button disabled>Carregando...</Button>
                ): (
                    <Button>Entrar</Button>
                )}
                <Error error={error}/>
            </form>
            <Link className={styles.perdeu} to="/login/perdeu"> Perdeu a Senha </Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastra-se</h2>
                <p>ainda não possui conta? Cadastre-se no site</p>

                <Link className={stylesBtn.button} to="/login/criar"> Cadastro </Link>
            </div>
        </section>
    )
    }


export default LoginForm;