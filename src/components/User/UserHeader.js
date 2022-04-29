import UserHeaderNav   from "./UserHeaderNav";
import style from './UserHeader.module.css'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const UserHeader = () =>{
    const [title, setTitle] = useState('');

    // verifica qual é o caminho da rota
    const location = useLocation();

    useEffect(()=>{
        const {pathname} = location;
        switch(pathname){
            case '/conta':
                setTitle('Minha conta');
                break;
            case '/conta/estatisticas':
                setTitle('Estatisticas')
                break;
            case '/conta/postar':
                setTitle('Poste sua foto')
                break;
            default: 
                setTitle('Minha conta');
        }

        
    }, [location]);

    return(
        <header className={style.header}>
            <h1 className="title">{title}</h1>
            <UserHeaderNav />
        </header>
    )
}

export default UserHeader;