import React, { useState } from 'react'
import RegisterForm from './RegisterForm'
import Swal from 'sweetalert2'

import axios from 'axios'
import md5 from 'md5'
import uuid from 'react-uuid'

import { Contenedor } from '../Styled/Styles'
import { useHistory } from 'react-router-dom'

const url = 'https://api-blockmaster.herokuapp.com/users' 

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        id: '',
        nombre: '',
        apellido: '',
        email: '',
        username: '',
        password: ''
    })

    const [error, setError] = useState('')

    const Registro = async datos => {
        console.log(datos)
        await axios.post(url, {
            id: uuid,
            nombre: datos.nombre,
            apellido: datos.apellido,
            email: datos.email,
            username: datos.username,
            password: md5(datos.password),
            ImgPerfil: datos.ImgPerfil
        }).then(Respuesta => {
            Swal.fire(`Usuario registrado con exito`)
                    .then(response=>{
                        console.log(response)
                        if(response.isConfirmed === true){
                            handleRedirect()
                        }
                    });
        }).catch(error => {
            console.log(error.message);
        })
    }

    const handleRedirect = () => {
        history.push('/blockmaster/')
    }
    
    return (
        
            <Contenedor>
                <RegisterForm Registro={Registro} error={error} />
            </Contenedor>
        
    )
}

export default Register
