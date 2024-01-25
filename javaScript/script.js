const botao = document.querySelector('button');
const url = 'https://api.chucknorris.io/jokes/random';


botao.addEventListener('click', getData);

async function getData(){
    try{
        const data = await fetch(url);
        const json = await data.json();
        mensage(json.value);
    }
    catch(e){
        console.error(e);
    }
}

function mensage(msg) {
    document.querySelector('.titulo').innerHTML = msg;
}


