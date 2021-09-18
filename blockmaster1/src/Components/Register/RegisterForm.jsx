import React, {useState} from 'react'
import { Formulario, Labels, Inputs, Buttons} from '../Styled/Styles'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { fileUpload } from '../../Helpers/fileUpload' 


const RegisterForm = ({Registro,error}) => {
    const history = useHistory()

    const [datos,setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        username: '',
        password: ''
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        Registro(datos)
    }

    const handleFileChange = (e) =>{
        const file = e.target.files[0]
        fileUpload(file)
        .then(response =>{
            console.log(response)
            setDatos({...datos,ImgPerfil:response})
        }).catch(error=>{
            console.log(error)
        })                
    } 

    const handleRedirect = () => {
        history.push('/blockmaster/')
    }

    
    
    return (
        <>
            <Formulario onSubmit={handleSubmit}>
            <h1>REGISTRO</h1>

                <Labels htmlFor="nombre">Nombre</Labels>
                <Inputs
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Ingrese su nombre completo"
                    required=""
                    onChange={e=>setDatos({...datos, nombre:e.target.value})} value={datos.nombre}
                />

                <Labels htmlFor="apellido">Apellido</Labels>
                <Inputs
                    type="text"
                    name="apellido"
                    id="apellido"
                    placeholder="Ingrese su apellido completo"
                    required=""
                    onChange={e=>setDatos({...datos, apellido:e.target.value})} value={datos.apellido}
                />

                <Labels htmlFor="Email">Email</Labels>
                <Inputs
                    type="email"
                    name="Email"
                    id="Email"
                    placeholder="Ingrese su Email"
                    required=""
                    onChange={e=>setDatos({...datos, email:e.target.value})} value={datos.email}
                />

                <Labels htmlFor="password">Contraseña</Labels>
                <Inputs
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Ingrese su Contraseña"
                    required=""
                    onChange={e=>setDatos({...datos, password:e.target.value})} value={datos.password}
                />

                <Labels htmlFor="password">Imagen de perfil</Labels>
                <Inputs
                    type="file"
                    name="password"
                    id="password"
                    placeholder="Ingrese su Contraseña"
                    required=""
                    onChange={handleFileChange}
                />

                <Buttons
                    type="submit" 
                    value="Registrarme"
                />

                <span>¿Ya tienes una cuenta? <Link to="/blockmaster/">Inicia Sesion</Link></span>
            </Formulario>
        </>
    )
}

export default RegisterForm
