import FormLine from './FormLine';
import React from 'react';

function FormInput({label,type,placeholder,required,onChange}){
    return(
        <>
        <FormLine label={label}/>
            <input
            type={type}
            placeholder={placeholder}
            className="fullWidth bigger"
            required={required}
            onChange={onChange}/>
            
            
        </>
    )

}

export default FormInput;