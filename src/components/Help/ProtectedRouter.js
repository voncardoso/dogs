import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContex } from "../../UserContext";


const ProtectedRouter = ({children}) =>{
    const {login} = useContext(UserContex);
    return login ? children : <Navigate to="/login"/>
}

export default ProtectedRouter;