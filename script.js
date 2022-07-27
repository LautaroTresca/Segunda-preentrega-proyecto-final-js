class Cliente{
    constructor (nombre, apellido, email, consulta){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.consulta = consulta;
    }
}

const clientes = [];

const idformulario = document.getElementById("formulario");

idformulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const consulta = document.getElementById("consulta").value;

    const cliente = new Cliente (nombre, apellido, email, consulta);

    clientes.push(cliente);
    console.log(clientes)
    localStorage.setItem("Cliente", JSON.stringify(clientes));

    idformulario.reset();

})

const informacion = document.getElementById("infoClientes")
const boton = document.getElementById("botonMostrarClientes")

boton.addEventListener("click", () =>{
    const clientes = JSON.parse(localStorage.getItem("Cliente"))
    let aux = ""
    clientes.forEach(cliente => {
        aux += `
            <ul>
                <li>Nombre: ${cliente.nombre}</li>
                <li>Apellido: ${cliente.apellido}</li>
                <li>Correo Electronico: ${cliente.email}</li>
                <li >Consulta: ${cliente.consulta}</li>
            </ul>
                `
        informacion.innerHTML = aux
    })
})