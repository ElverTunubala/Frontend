import React, { useState } from 'react'
import { Formulario, Labels, Inputs, Buttons} from '../Styled/Styles'
import { Link, NavLink } from 'react-router-dom'

const Login = ({Login}) => {

    const [datos, setDatos] = useState({email:"", password:""});
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        Login(datos)
    }
    
    
    return (
        <>
            <Formulario onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <Labels htmlFor="email">Email:</Labels>
                <Inputs 
                type="email" 
                id="email" 
                placeholder="Ingrese su email"
                onChange={e=>setDatos({...datos, email:e.target.value})} value={datos.email} 
                />

                <Labels htmlFor="password">Contraseña:</Labels>
                <Inputs 
                type="password" 
                id="password" 
                placeholder="Ingrese su Contraseña"
                onChange={e=>setDatos({...datos, password:e.target.value})} value={datos.password} 
                />

                <Buttons 
                type="submit" v
                alue="Enviar"
                />

                {/* <span>¿Aun no tienes una cuenta?, <Link to="/Register">Registrate</Link></span> */}

                
            </Formulario>
        </>
    )
}

export default Login