import styles from './PhotoContent.module.css'
import {Link} from 'react-router-dom'
import PhotoComments from './PhotoComments';

const PhotoContent = ({data}) =>{
    console.log(data)
    const {photo, comments} = data;
    return(
        <div className={styles.photo}>
            <div className={styles.img}>
                <img src={photo.src} alt={photo.title} />
            </div>
            <div className={styles.details}>
                <div>
                    <p>
                        <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
                        <span className={styles.visualizacoes}>{photo.acessos}</span>
                    </p>
                    <h1>
                        <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                    </h1>

                    <ul className={styles.attributes}>
                        <li>{photo.peso}</li>
                        <li>{photo.idade}</li>
                    </ul>
                </div>
            </div>
            <PhotoComments id={photo.id} comments={comments}/>
        </div>
    )
}

export default PhotoContent;