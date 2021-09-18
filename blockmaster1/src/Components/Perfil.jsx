import React, { useEffect, useState } from 'react'
import { Modal } from 'reactstrap'
import { ContenedorPerfil, ContenedorSpans, ReturnHome, FormPerfil, InputFormPerfil, ButtonFormPerfil, ImgPerfil, InputClose, ModalHeader, LabelFormPerfil, SpanEditar, SpanEliminar } from './Styled/Styles'
import axios from 'axios'
import md5 from 'md5'
import { Link, NavLink, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

import { FaHome } from 'react-icons/fa';

const Perfil = () => {
    const url = 'https://api-blockmaster.herokuapp.com/users'
    const sesionUnaVez = JSON.parse(sessionStorage.getItem('datosSesion'))
    const mantenerSesion = JSON.parse(localStorage.getItem('datosSesion'))
    const [datosSesion, setDatosSesion] = useState('')
    const [datosPerfil, setDatosPerfil] = useState('')
    const [datosEditados, setDatosEditados] = useState('')
    const [modal, setModal] = useState(false)
    const history = useHistory()


    useEffect(() => {
        DatosDeSesion()
    }, [])


    const DatosDeSesion = () => {
        if (sesionUnaVez === null) {
            setDatosSesion(mantenerSesion)
        } else {
            setDatosSesion(sesionUnaVez)
        }
    }

    useEffect(() => {
        getUser()
    }, [datosSesion])

    console.log(mantenerSesion)
    const getUser = async () => {
        const res = await fetch(`${url}/${datosSesion.id}`)
        const data = await res.json()

        setDatosPerfil(data)
    }

    const openModal = () => { setModal(!modal) }


    const handleSubmit = (e) => {
        e.preventDefault()
        actualizarPerfil()
        setModal(!modal)
    }

    const actualizarPerfil = async () => {
        await axios.put(`${url}/${datosSesion.id}`, {
            nombre: datosEditados.nombre,
            apellido: datosEditados.apellido,
            email: datosEditados.email,
            username: datosEditados.username,
            password: md5(datosEditados.password)
        }).then(Respuesta => {
            Swal.fire('Datos actualizados')
        }).catch(error => {
            console.log(error.message);
        })
    }

    const eliminarPerfil = async () => {
        await axios.delete(`${url}/${datosSesion.id}`)
            .then(Respuesta => {
                Swal.fire({title:'Cuenta eliminada',icon:'warning'});
                handleRedirect()
            })
    }


    const handleRedirect = () => {
        history.push('/blockmaster/')
    }

    console.log(datosSesion)

    const styleLinkHome = {
        color: 'white',
        textDecoration: 'none',
        width:'30px',
        height: '30px'
    }

    return (

        <>
            <ReturnHome>
                <Link to="/blockmaster/peliculas"><FaHome style={styleLinkHome} /></Link>
            </ReturnHome>
            <ContenedorPerfil>

                <ImgPerfil src={datosPerfil.ImgPerfil} alt="" />

                <h5>{datosPerfil.nombre}</h5>
                <h5>{datosPerfil.apellido}</h5>
                <h5>{datosPerfil.email}</h5>
                <h5>{datosPerfil.username}</h5>
                <ContenedorSpans>
                    <SpanEditar
                        onClick={openModal}
                    >Editar perfil</SpanEditar>
                    <SpanEliminar
                        onClick={eliminarPerfil}
                    >Eliminar mi cuenta</SpanEliminar>
                </ContenedorSpans>
                <Modal isOpen={modal} size={'lg'} contentClassName="bg-dark bg-opacity-100">
                    <ModalHeader>
                        <InputClose
                            type="button"
                            value="X"
                            onClick={openModal}
                        />
                    </ModalHeader>


                    <FormPerfil action="" onSubmit={handleSubmit}>
                        <LabelFormPerfil htmlFor="nombre">Nombre</LabelFormPerfil>
                        <InputFormPerfil
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder="Ingrese su nombre completo"
                            required=""
                            onChange={e => setDatosEditados({ ...datosEditados, nombre: e.target.value })} value={datosEditados.nombre}
                        />
                        <LabelFormPerfil htmlFor="apellido">Apellido</LabelFormPerfil>
                        <InputFormPerfil
                            type="text"
                            name="apellido"
                            id="apellido"
                            placeholder="Ingrese su apellido completo"
                            required=""
                            onChange={e => setDatosEditados({ ...datosEditados, apellido: e.target.value })} value={datosEditados.apellido}
                        />
                        <LabelFormPerfil htmlFor="Email">Email</LabelFormPerfil>
                        <InputFormPerfil
                            type="email"
                            name="Email"
                            id="Email"
                            placeholder="Ingrese su Email"
                            required=""
                            onChange={e => setDatosEditados({ ...datosEditados, email: e.target.value })} value={datosEditados.email}
                        />
                        <LabelFormPerfil htmlFor="Username">Username</LabelFormPerfil>
                        <InputFormPerfil
                            type="text"
                            name="Username"
                            id="Username"
                            placeholder="Ingrese su Username"
                            required=""
                            onChange={e => setDatosEditados({ ...datosEditados, username: e.target.value })} value={datosEditados.username}
                        />
                        <LabelFormPerfil htmlFor="password">Contraseña</LabelFormPerfil>
                        <InputFormPerfil
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Ingrese su Contraseña"
                            required=""
                            onChange={e => setDatosEditados({ ...datosEditados, password: e.target.value })} value={datosEditados.password}
                        />
                        <ButtonFormPerfil
                            type="submit"
                            value="Confirmar"
                        />
                    </FormPerfil>


                </Modal>
            </ContenedorPerfil>
        </>
    )
}

export default Perfil
