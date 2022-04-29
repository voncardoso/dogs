import { Routes, Route, useNavigate} from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCriar from "./LoginCriar";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import { useContext } from "react";
import { UserContex } from "../../UserContext";
import styles from './Login.module.css'


const Login = () =>{
    const {login} = useContext(UserContex);
    const navigate = useNavigate()
    if(login === true){
        navigate("/conta")
    }
    return(
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path="/" element={<LoginForm />}/>
                    <Route path="criar" element={<LoginCriar />}/>
                    <Route path="perdeu" element={<LoginPasswordLost />}/>
                    <Route path="resetar" element={<LoginPasswordReset />}/>
                </Routes>
            </div>
        </section>
    )
}

export default Login;