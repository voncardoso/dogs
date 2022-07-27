import Input from '../Form/Input';
import Button from '../Form/Button';
import UserForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import Error from '../Help/Error'
import { PASSWORD_LOST } from '../../api';


const LoginPasswordLost = () =>{
    const login = UserForm();
    const {data, error,loading,request} = useFetch();
    function handleSubmit(event){
        event.preventDefault();
        if(login.validate()){
            const {url, options} = PASSWORD_LOST({login: login.value, url:window.location.href.replace('perdeu', 'resetar')})
            const json = request(url, options)
        }
    }
    return(
        <section>
            <h1 className="title"> Perdeu a senha</h1>
            {data ? (
                <p style={{color:' #4c1'}}>{data}</p>
            ): (
                <form onSubmit={handleSubmit}>
                    <Input label="Email/ Usúario" type="text" name="login" {...login}/>
                    {loading ? <Button disabled>...Enviando</Button> :  <Button>Enviar e-mail</Button>}
                </form>
            )}
           <Error error={error} />
        </section>
    )       
}

export default LoginPasswordLost;