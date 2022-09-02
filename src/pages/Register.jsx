import { useEffect, useState } from 'react';

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
    const [data,setData] = useState([{}])
    
    useEffect(()=>{
        fetch('/api/register').then(
            response=>response.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    },[])
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