let formulario = document.querySelector('form');
let listarCita = document.getElementById('listarCita');
let buscar = document.getElementById('btnBuscar');
let busqueda = document.getElementById('busqueda');
let citas = [];
let registroAntiguo = [];
let registroActual = JSON.parse(localStorage.getItem('Citas'))

console.log(registroActual)

const capturaDatos = () => {
    let nombre = document.getElementById('nombre').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let sintomas = document.getElementById('sintomas').value;
    let id = nombre

    let registro = {
        nombre,
        fecha,
        hora,
        sintomas,
        id
    }

    if (registroActual = 'null') {
        citas.unshift(registro);
        localStorage.setItem('Citas', JSON.stringify(citas));
    } else {
        registroAntiguo = JSON.parse(localStorage.getItem('Citas'));
        registroAntiguo.unshift(registro);
        console.log(registroAntiguo);
        localStorage.setItem('Citas', JSON.stringify(registroAntiguo));
    }

    getLocalStorage();
}

formulario.addEventListener('submit', e => {
    e.preventDefault();
    capturaDatos();
})


const getLocalStorage = () => {
    listarCita.innerHTML = '';
    let citasLocalStorage = JSON.parse(localStorage.getItem('Citas'));
    console.log(citasLocalStorage);
    citasLocalStorage.map(cita => {
        console.log(cita)
        const {
            nombre,
            fecha,
            hora,
            sintomas,

        } = cita;
        listarCita.innerHTML += `
                            <td>${nombre}</td>
                            <td>${fecha}</td>
                            <td>${hora}</td>
                            <td>${sintomas}</td>
        `
    })
}

document.addEventListener('DOMContentLoaded', getLocalStorage);


buscar.addEventListener('click', e => {
    e.preventDefault();
    let input = document.getElementById('inputBuscar').value;
    let data = JSON.parse(localStorage.getItem('Citas'));
    let filtro = data.filter(cita => cita.nombre.toLowerCase() === input.toLowerCase())
    busqueda.innerHTML = '';
    console.log(filtro)

    filtro.length === 0 ?
        busqueda.innerHTML += `<div style="color:white;">El nombre ${input} no existe</div>` :
        (
            filtro.map(cita => {
                const {
                    nombre,
                    fecha,
                    hora,
                    sintomas,
                    id
                } = cita;


                busqueda.innerHTML += `
                                    <div style="color:white;">${nombre}</div>
                                    <div style="color:white;">${fecha}</div>
                                    <div style="color:white;">${hora}</div>
                                    <div style="color:white;">${sintomas}
                                    <button id="${id}">Borrar</Button></div><br>             
                `
            })
        )

    busqueda.addEventListener('click', e => {
        e.preventDefault

        let id = e.target.id

        borrarBtn(id)
    })
})


const borrarBtn = (idI) => {

    let registroBorrar = JSON.parse(localStorage.getItem('Citas'))
    console.log(registroBorrar)

    let indexArreglo;

    registroBorrar.forEach((elemento, index) => {


        console.log(idI)

        if (elemento.id == idI) {
            indexArreglo = index;
        }
    })

    registroBorrar.splice(indexArreglo,1);
    localStorage.setItem('Citas', JSON.stringify(registroBorrar));

    console.log(registroBorrar)
    busqueda.innerHTML = ''
    getLocalStorage()


}