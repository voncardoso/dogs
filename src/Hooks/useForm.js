const { useState } = require("react")

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        , message : 'Prencha um e-mail valido'
    }
};

const useForm = (type) =>{
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    function onChange({target}){
        if(error){
            validate(target.value);
        }
        setValue(target.value);
    }

    function validate(value){
        // verifica se foi passado o tipo
        if(type === false){
            return true;
        }else

        if(value.length === 0){
            setError('Prencha um valor');
            return false;
        } else if(types[type] && !types[type].regex.test(value)){
            setError(types[type].message);
            return false
        }else{
            setError(null)
            return true;
        }
    }

    return{
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    }
}

export default useForm;