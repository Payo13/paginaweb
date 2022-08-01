import FormLine from './FormLine';
import React from 'react';

function FormTextArea({label,rows}){
    return(
        <>
        <FormLine label={label}/>
        <textarea className="fullWidth bigger" rows={rows} required></textarea>
        </>
    )

}

export default FormTextArea;