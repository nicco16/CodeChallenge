function enviarFormulario() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  
    const data = {
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento
    };
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
       
      })
      
    };
  