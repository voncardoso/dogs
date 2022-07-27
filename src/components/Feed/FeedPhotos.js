import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { useEffect } from "react";
import {PHOTOS_GET} from '../../api'
import Error from '../Help/Error';
import Loading from "../Help/Loading";
import styles from './FeedPhotos.module.css';


const FeedPhotos = ({page, user, setModalPhoto, setInfinit}) =>{
     const {data, error, loading, request} = useFetch();

     useEffect(()=>{
         async function fetchPhotos(){
             const total = 3;
             // user: 0 pega todos os usarios
             const {url, options} = PHOTOS_GET({page, total, user});
             const {response, json} = await request(url, options);
             console.log(json)
             // se esistir uma resposta
             if(response && response.ok && json.length < total){
                setInfinit(false);
             }
         }
         fetchPhotos();
     }, [request, user, page, setInfinit]);

     if(error){
         return(
             <Error error={error}/>
         )
     }

     if(loading){
         return(
             <Loading />
         )
     }

     if(data){
        return(
            <ul className={`${styles.feed} animeLeft`}>
                {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/> )}
            </ul>
        )
     }else return null;
     

}

export default FeedPhotos;