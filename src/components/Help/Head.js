import { useEffect } from "react";

const Head = (props) =>{
    useEffect(()=>{
        document.title = props.title + ' | dogs';
        document.querySelector("meta[name='description'")
        .setAttribute('content', props.description)
    }, [props])
    return(
        <>
        </>
    )
}

export default Head;