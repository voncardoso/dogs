import { useState } from "react";
import { COMMENT_POST } from "../../api";
import Error from '../Help/Error';
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import useFecth from '../../Hooks/useFetch';
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({id, setComments, single}) =>{
    const [comment, setComment] = useState('');
    const {request, error} = useFecth();

    async function handleSubmit(event){
        event.preventDefault();
        const {url, options} = COMMENT_POST(id, {comment});
        const {response, json} = await request(url, options);
        // adicionar o comentario novo de form atomatica

        if(response.ok){
            setComment('');
            setComments((comments) => [...comments, json])
        }
    }
    return(
        <form className={`${styles.form} ${single ? styles.single : ""}`} onSubmit={handleSubmit}>
            <textarea  
                className={styles.textarea}
                value={comment}
                placeholder="comment..."
                onChange={({target}) => setComment(target.value)}    
            />
            <button className={styles.button} type="submit"> 
                <Enviar />
            </button>

            <Error error={error}/>
        </form>

    )
}

export default PhotoCommentsForm;