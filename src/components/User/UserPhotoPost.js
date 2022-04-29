import style from './UserPhotoPost.module.css'
import Input from '../Form/Input'
import Button from '../Form/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import Error from '../Help/Error'
import { useEffect, useState } from 'react'
import { PHOTO_POST } from '../../api'
import { useNavigate } from 'react-router-dom'


const UserPhotoPost = () =>{
    const nome = useForm();
    const peso = useForm('number');
    const idade = useForm('number');
    const [img, setImg] = useState({});
    const {data, error, loading, request} = useFetch();
    const navigate = useNavigate();

    useEffect(()=>{
        console.log('teste')
        if(data){
            console.log('teste2')
            navigate('/conta');
        }
    }, [data, navigate]);

    function handleSubmit(event){
        event.preventDefault();
        // FormData será preenchido com as chaves/valores atuais do formulário usando a propriedade name de cada elemento para as chaves e seu valor enviado para os valores.
        const formData = new FormData();
        formData.append('img', img.raw);
        formData.append('nome', nome.value);
        formData.append('peso', peso.value);
        formData.append('idade', idade.value);

        const token = window.localStorage.getItem('token');
        const {url, options} = PHOTO_POST(formData, token);
        request(url, options);
    }

    function handleImgChange({target}){
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
        });
    }
    console.log('data', data)
    return(

        <section className={`${style.photoPost} animeLeft`}>
            <form onSubmit={handleSubmit}>
                <Input label="Nome" type="text" name="nome" {...nome}/>
                <Input label="Peso" type="text" name="peso" {...peso}/>
                <Input label="Idade" type="text" name="idade" {...idade}/>
                <input className={style.file} type="file" name="img" id="img" onChange={handleImgChange}/>
                {loading ? <Button disabled>...Carregar</Button>: <Button>Enviar</Button>}
                <Error error={error}/>
            </form>
            {img.preview && (
                    <div 
                        className={style.preview} 
                        style={{backgroundImage: `url('${img.preview}')`}}
                        >
                            
                    </div>
                )}
        </section>
    )
}

export default UserPhotoPost;