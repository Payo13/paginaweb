import Card from '../components/Card';
import Navbar from '../components/Navbar';
import React from 'react';
import RegisterForm from '../containers/RegisterForm';

const links_Register=[
{href:'/login',label:'Ingresar'},
{href:'/about', label:'Acerca de'},
{href:'/contact',label:'Contacto'}
];


function Register(){
    return(
    
        <>
            <Navbar links={links_Register}/>
            <section>
                <Card title="Registrarse">
                    <RegisterForm/>
                </Card>
            
        </section>
        </>
    
    )

}

export default Register;