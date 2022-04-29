import { useEffect, useState } from "react";


const useMedia = (media) => {
    const [match, setMatch] = useState(null);

    useEffect(() =>{
        function changeMacth(){
            const {matches} = window.matchMedia(media)
            setMatch(matches);
        }
        changeMacth();
        window.addEventListener('resize', changeMacth);

        return() =>{
            window.removeEventListener('risize', changeMacth);
        };
    }, [media])
    return match;
}

export default useMedia;