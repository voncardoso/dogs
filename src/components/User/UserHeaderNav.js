import { useContext, useEffect, useState } from 'react';
import {NavLink, useLocation } from 'react-router-dom'
import {UserContex } from '../../UserContext'
import {ReactComponent as AdicionarFoto} from '../../Assets/adicionar.svg';
import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg';
import {ReactComponent as Estatisticas} from '../../Assets/estatisticas.svg';
import {ReactComponent as Sair} from '../../Assets/sair.svg';

import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';


const UserHeaderNav  = () =>{
    const {userLogout} = useContext(UserContex);
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = useState(false);
    // vai setar o menu mobile quando clicado no butão;
    const {pathname} = useLocation();
    // toda vez que o pathname for alterado a função funciona
    useEffect(()=>{
        setMobileMenu(false);
    }, [pathname])
    return(
        <>
        {mobile && 
            <button 
                aria-label='Menu' 
                className={`${styles.mobileMenu} ${mobileMenu && styles.mobileButtonActive}`}
                onClick={()=>setMobileMenu(!mobileMenu)}>
            </button>
        }
            <nav className={`
                ${mobile ? styles.navMobile : styles.nav}
                ${mobileMenu && styles.navMobileActive }
                `}>
                <NavLink to='/conta' end>
                    <MinhasFotos />
                    {mobile && 'Minhas fotos'}
                </NavLink>
                <NavLink to='/conta/estatisticas'>
                    <Estatisticas/>
                    {mobile && 'Estatisticas'}
                </NavLink>
                <NavLink to='/conta/postar'>
                    <AdicionarFoto />
                    {mobile && 'Adicionar foto'}
                </NavLink>
                <button onClick={userLogout}>
                    <Sair />
                    {mobile && 'Sair'}
                </button>
            </nav>
        </>
    )
}

export default UserHeaderNav;