const usuario = document.querySelector('#usuario');

const url = 'https://jsonplaceholder.typicode.com/users'
const query = fetch(url)
                    .then((response) => response.json()) //return implicito
                    .then((data) => mostrarDOM(data));
// console.log(query)

function mostrarDOM(data){
    console.log(data)
    data.forEach(element => {
        console.log(element.name);
    })
}