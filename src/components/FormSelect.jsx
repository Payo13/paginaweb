import FormLine from './FormLine';
import React from 'react';

function FormSelect({label,placeholder,options}){
    return(
        <>
        <FormLine label={label}/>
            <select multiple className='fullWidth bigger' required defaultValue={[""]}>
                <option value="" disabled>{placeholder}</option>
                {
                options.map((option,key)=>(
                <option key={key} value={option.value}>{option.label}</option>
                ))
                }
            </select>
            
            
        </>
    )

}

export default FormSelect;