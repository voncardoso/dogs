import {Routes, Route} from 'react-router-dom'
import UserHeader from "./UserHeader";
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { useContext } from 'react';
import { UserContex } from '../../UserContext';
import NotFound from '../NotFound';

const User = () =>{
    const {data} = useContext(UserContex);


    return(
        <section className="container">
            <UserHeader/>
            <Routes>
                <Route path='/' element={<Feed user={data.id}/> }/>
                <Route path='postar' element={<UserPhotoPost /> }/>
                <Route path='estatisticas' element={<UserStats/> }/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </section>
    )
}

export default User;