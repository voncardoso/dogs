import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import PropTypes from 'prop-types';

const Feed = ({user}) =>{
    const [modalPhoto, setModalPhoto] = useState(null);
    const [pages, setPages] = useState([1,2,3]);
     // vai verificar e retorna quando ão tem mais pagina      
     const [infinit, setInfinit] = useState(true);
    
    useEffect(()=>{
        let wait = false;
        
        function infiteScroll(){
            if(infinit){
            //pega o total de scroll que aconteceu
            const scroll = window.scrollY;
            // a aulta da pagina
            const heigth = document.body.offsetHeight - window.innerHeight
            // se scroll for maior que 75% da pagina
            if(scroll > heigth * .75 && !wait){
                setPages((pages) => [...pages, pages.length = 1]);
                wait = true;

                // vai desativar o wait depois dee 500 milisegundos
                setTimeout(() =>{
                    wait = false
                }, 500)
            }
        }
    }
        
        // pega apenas o acionament da rodinha do mouse
        window.addEventListener('wheel', infiteScroll);
        window.addEventListener('scroll', infiteScroll);

        // linpa a função
        return() => {
            window.removeEventListener('wheel', infiteScroll);
            window.removeEventListener('scroll', infiteScroll);
        }
    }, [infinit]);

    return(
        <div>
            {modalPhoto &&  <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
            {pages.map(page => <FeedPhotos key={page} user={user} page={page} setModalPhoto={setModalPhoto} setInfinit={setInfinit}/>)}
        </div>
    )
}

Feed.defaultProps ={
    user: 0,
}

Feed.prototype = {
    user: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
}


export default Feed;