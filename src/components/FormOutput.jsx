import FormLine from './FormLine';
import React from 'react';

function FormOutput({label,value}){
    return(
        <>
        <FormLine label={label}/>
        <output className="fullWidth bigger">{value}</output>
        </>
    )

}

export default FormOutput;