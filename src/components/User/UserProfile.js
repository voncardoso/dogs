import { useParams } from "react-router-dom";
import Feed from '../Feed/Feed'
import Head from "../Help/Head";
const UserProfile = () =>{
    const {user} = useParams();

    return(
        <section className="container mainContainer">
            <Head title={user} description="Home do site dogs"/>
            <h1 className="title">{user}</h1>
            <Feed user={user}/>
        </section>
    )
}

export default UserProfile;