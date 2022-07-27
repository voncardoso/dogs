import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Loading from "../Help/Loading";
import Error from '../Help/Error';
import PhotoContent from "./PhotoContent";


const Photo = () =>{

    // params da acesso ao id da foto
    const {id} = useParams();

    const {data, loading, error, request} = useFetch();

        useEffect(() =>{
            const {url, options} = PHOTO_GET(id);
            request(url, options);

        }, [request, id]);

        if(error) return <Error error={error}/>
        if(loading) return <Loading />
        if(data){
            return(
                <section className="container mainContainer">
                   <PhotoContent single={true} data={data}/>
                </section>
            )
        }  else return null
};

export default Photo;