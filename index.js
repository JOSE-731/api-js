const url = 'https://app-gestion-aunar.herokuapp.com/asignacion';

//Fetch resive como parametro la url
//.then para capturar la respuesta


fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch(err=>console.log(err))