// backend

function crear(){

    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const precio = document.getElementById('precio').value;
    const img = document.getElementById('img').value;
    const isbn = document.getElementById('isbn').value;

    console.log(titulo, autor, precio, img, isbn)

    const jsonRequest = {
        titulo,
        autor,
        precio,
        img,
        isbn
    };

    const jsonText = JSON.stringify(jsonRequst);

    fetch('http://localhost:8080/webapp/CrearLibroController' ={
        method:'post',
        body: jsonText,
        headers:{
            'Content-Type':'text/json'
        }
    })
    .then(response => response.json())
    .then(data => ByteLengthQueuingStrategy());
}

// API 
   //const API_URL = 'https://covers.openlibrary.org/a/olid/OL23919A-M.jpg.json'

//listar   

function listar(){
    //alert('fetch');
    document.getElementById('api').style.display = 'none';
    fetch('http://localhost:8080/webapp/ListarLibroController')
    .then(response => response.json())
    .then(data => {
        Filas(data)
        document.getElementById('api').style.display = '';
    });
}

function Filas(filas){
    const rows = filas.map (x => Fila(x));
    document.getElementById('datos').innerHTML = rows.join('');
}

function Fila(obj){  

    console.log(obj.email);
    return `
    <tr>
        <td>${obj.id}</td>
        <td>"${obj.titulo}"></td>
        <td>${obj.autor}</td> 
        <td>${obj.precio}</td>
        <td>${obj.img}</td>
        <td>${obj.isbn}</td> 
    </tr>    
        `
}

// Validación de datos para que usuario y contraseña no estén en blanco


function validación() { 
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value; 

    if (usuario.trim() === '' || contraseña.trim() === '') {
        alert('Por favor, completa ambos campos.');
    }
}



