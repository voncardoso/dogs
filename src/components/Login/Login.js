import { Routes, Route, Navigate} from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCriar from "./LoginCriar";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import { useContext } from "react";
import { UserContex } from "../../UserContext";
const Login = () =>{
    const {login} = useContext(UserContex)

    if(login === true){
        <Navigate to="conta"/>
    }
    return(
        <div>
            <Routes>
                <Route path="/" element={<LoginForm />}/>
                <Route path="criar" element={<LoginCriar />}/>
                <Route path="perdeu" element={<LoginPasswordLost />}/>
                <Route path="resetar" element={<LoginPasswordReset />}/>
            </Routes>
        </div>
    )
}

export default Login;