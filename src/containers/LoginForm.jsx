import React, {useState} from 'react';

import FormInput from '../components/FormInput';

/*function handleEmailOnChange(event){
    console.log("Email:" , event.target.value);
}

function handlePasswordOnChange(event){
    console.log("Password:" , event.target.value);
}

function handleSubmitOnClick(event){
    console.log("Submiting");
}
*/

function LoginForm(props){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmitOnClick=(event)=>{
        console.log("Datos enviados",{
            email,
            password
        });
    }
    return(
        <form>
                    <FormInput 
                        label="Correo" 
                        placeholder="Su direcci&oacute;n de correo" 
                        type="email"
                        value={email}
                        onChange={(event)=>setEmail(event.target.value)}/>
                    <FormInput 
                        label="Contrase&ntilde;a" 
                        type="password"
                        value={password}
                        onChange={(event)=>setPassword(event.target.value)}/>

                    <div className="centered">
                        <input 
                            type="submit" 
                            value="Ingresar" 
                            onClick={handleSubmitOnClick}
                            
                        />
                    </div>
                </form>

    )

}

export default LoginForm;