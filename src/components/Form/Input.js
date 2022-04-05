import style from './Input.module.css';

const Input = ({label, type, name, value, onChange, error, onBlur}) =>{
    return(
        <div className={style.wrapper}>
            <label htmlFor={name} className={style.label}>{label}</label>
            <input 
                id={name} 
                type={type} 
                value={value}
                className={style.input}
                onChange={onChange} 
                onBlur={onBlur}
            />
            {error && <p className={style.error}>{error}</p>}
        </div>
    )
}

export default Input;