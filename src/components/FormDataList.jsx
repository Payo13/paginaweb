import FormLine from './FormLine';
import React from 'react';

function FormDataList({label,type,idList,required,options}){
    return(
        <>
        <FormLine label={label}/>
        <input type={type} list={idList} className="fullWidth bigger" required={required} />
                            <datalist id={idList}>
                            {
                                options.map((option,key)=>(
                                <option key={key}>{option}</option>
                                ))
                            }
                            </datalist>
        </>
    )

}

export default FormDataList;