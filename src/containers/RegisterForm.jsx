import FormDataList from '../components/FormDataList';
import FormInput from '../components/FormInput';
import FormOutput from '../components/FormOutput';
import FormSelect from '../components/FormSelect';
import FormTextArea from '../components/FormTextArea';
import React from 'react';

const browser_Options=[
    {value:"firefox", label:"Mozilla Firefox"},
    {value:"chrome", label:"Google Chrome"},
    {value:"edge", label:"Microsoft Edge"},
    {value:"safari", label:"Safari"},
    {value:"opera", label:"Opera"},
    
];

const cursoOptions=["Calculo I","Base de Datos","Especialidad I"];

function RegisterForm(props){
    return(
        <form id="datos_usuario">
                        <FormInput label="Nombre y Apellido" type="text" required="True" />
                        <FormInput label="Correo" placeholder="Su direcci&oacute;n de correo" type="email" required="True"/>
                        <FormInput label="Contrase&ntilde;a" type="password" required="True"/>
                        <FormInput label="Confirmaci&oacute;n de contrase&ntilde;a" type="password" required="True"/>

                        <FormSelect 
                            placeholder="Seleccione su navegador favorito"
                            label="Navegador preferido"
                            options={browser_Options}/>

                        <FormTextArea
                            label="Informaci&oacute;n adicional"
                            rows="5"/>

                        <FormDataList label="Curso actual" type="text" idList="cursos" required="True" options={cursoOptions}/>

                        <FormOutput label="Fecha registro" value={new Date().toLocaleDateString()}/>

                        <div className="centered">
                            <input type="submit" value="Registrarse" />
                        </div>
                    </form>

    )

}

export default RegisterForm;

