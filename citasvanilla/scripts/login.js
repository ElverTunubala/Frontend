let formularioInicial = document.getElementById('formulario-inicial');
let formularioRegistro = document.getElementById('formulario-registro');
let formularioLogin = document.getElementById('formulario-login');
let formularioBienvenida = document.getElementById('formulario-bienvenida');
let botonesBienvenida = document.querySelector('.btns-bienvenida')
let getDatosRegistro = JSON.parse(localStorage.getItem('datosRegistro'))
let datosRegistro = []

let mensajeSolicitar = document.getElementById('mensaje-solicitar')
botonesBienvenida.addEventListener('click', e => {
    e.preventDefault()
    pasoInicial(e);
})

pasoInicial = e => {
    console.log(e.target)
    console.log(e.target.classList.contains('registro'))
    if (e.target.classList.contains('registro')) {
        formularioRegistro.style.display = ''
        formularioLogin.style.display = 'none'
        formularioInicial.style.display = 'none'
    } else if (e.target.classList.contains('inicio-sesion')) {
        formularioRegistro.style.display = 'none'
        formularioLogin.style.display = ''
        formularioInicial.style.display = 'none'
    }
}

const capturaDatos = () => {

    console.log(document)
    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;

    let registro = {
        usuario,
        contraseña
    }

    datosRegistro.unshift(registro)

    localStorage.setItem('datosRegistro', JSON.stringify(datosRegistro))

    cambioLogin()
}


formularioRegistro.addEventListener('submit', e => {
    e.preventDefault();


    capturaDatos();
})


const cambioLogin = () => {
    console.log(getDatosRegistro[0])

    if (getDatosRegistro == '' || getDatosRegistro == undefined || getDatosRegistro == null) {
        return
    } else {
        formularioRegistro.style.display = 'none'
        formularioLogin.style.display = ''
    }

}

formularioLogin.addEventListener('submit', e => {
    e.preventDefault();
    acceso(e);
})

acceso = (e) => {

    mensajeSolicitar.innerHTML = ''

    console.log(e.target)
    let usuarioLogin = document.getElementById('usuarioLogin').value
    let contraseñaLogin = document.getElementById('contraseñaLogin').value

    let usuarioRegistrado = getDatosRegistro[0].usuario

    if (getDatosRegistro[0].usuario !== usuarioLogin || getDatosRegistro[0].contraseña !== contraseñaLogin) {
        alert('El usuario ingresado no es valido')
    } else {
        formularioLogin.style.display = 'none'
        formularioBienvenida.style.display = ''
    }

    mensajeSolicitar.innerHTML = `Bienvenido(a) ${usuarioRegistrado} da click abajo para solicitar cita`
}