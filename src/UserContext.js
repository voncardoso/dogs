import { createContext, useCallback, useEffect, useState } from "react";
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST} from "./api";
import { useNavigate } from "react-router-dom";



export const UserContex = createContext();

export const UserStorage = ({children}) =>{
    const [data, setDada] = useState(null);
    const [login, setLogin] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();


    const userLogout = useCallback(
        async function (){
            setDada(null)
            setError(null)
            setLoading(false);
            setLogin(false);
            window.localStorage.removeItem('token');
            navigate('/login');
        },
        [navigate]
    );

   

    // função para pegar dados do usuario
    async function getUser(token){
        const {url, options} = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setDada(json);
        setLogin(true);
    }

    // função logar
    async function userLogin(username, password){
       try{
            setError(null);
            setLoading(true);
            const {url, options} = TOKEN_POST({username, password})
            const tokenRes = await fetch(url, options);
            if(!tokenRes.ok) throw new Error(`Error: ussuario invalido`)
            const {token} = await tokenRes.json();
            window.localStorage.setItem('token', token);
            await getUser(token);
            navigate('/conta')
       }catch(err){
        setError(err.message)
        setLogin(false)
       }finally{
        setLoading(false);
       }
    }

    useEffect(()=>{
        async function autoLogin(){
         const token = window.localStorage.getItem('token');
         if(token){
             try{
                 setError(null);
                 setLoading(true);
                 const {url, options} = TOKEN_VALIDATE_POST(token);
                 const response = await fetch(url, options);
                 if(!response.ok) throw new Error('Token invalido');
                 await getUser(token);
             }catch(err){
                userLogout();
             } finally{
                 setLoading(false)
             }
         }else{
            setLogin(false) 
         }
        }
        autoLogin();
     },[userLogout]);

     

    return(
        <UserContex.Provider value={{userLogin, userLogout, data, error, loading, login}}>
            {children}
        </UserContex.Provider>
    )
}


