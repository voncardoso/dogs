import { Routes, Route} from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCriar from "./LoginCriar";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
const Login = () =>{
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