import Card from '../components/Card';
import Footer from '../components/Footer';
import LoginForm from '../containers/LoginForm';
import Navbar from '../components/Navbar';
import React from 'react';

const links_Login=[
    {href:'/register',label:'Registrarse'},
    {href:'/about', label:'Acerca de'},
    {href:'/contact',label:'Contacto'}
];

function Login(){
    return(
        <>
        
            <Navbar links={links_Login}/>
            <section>
                <Card title="Ingreso">
                    <LoginForm/>
                </Card> 
            </section>
            <Footer/>
        
    </>
    
    )

}

export default Login;