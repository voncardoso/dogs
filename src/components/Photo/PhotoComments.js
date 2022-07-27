import { useContext, useEffect, useRef, useState } from "react";
import {UserContex} from '../../UserContext'
import PhotoCommentsForm from "./PhotoCommentsForm";
import style from './PhotoComments.module.css';

const PhotoComments = (props) =>{
    const [comments, setComments] = useState(()=> props.comments);
    const {login} = useContext(UserContex);
    // escroll nos comentarios
    const commentsSection = useRef(null) // pegando a referencia

    // função para dar o scroll
    useEffect(()=>{
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }, [comments]);
    return(
        <>
           <ul ref={commentsSection} className={`${style.comments} ${props.single ? style.single : ''}`}>
            {comments.map((comment)=>(
                <li key={comment.comment_ID}>
                    <b>{comment.comment_author}: </b>
                    <span>{comment.comment_content}</span>
                </li>
            ))}
           </ul>
            {login && <PhotoCommentsForm single={props.single} id={props.id} setComments={setComments}/> }
        </>
    )
}

export default PhotoComments;