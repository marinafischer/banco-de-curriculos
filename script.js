'use strict';

const limparFormulario =(endereco) => {
    document.getElementById('endereco').value = ''; 
    document.getElementById('bairro').value = ''; 
    document.getElementById('cidade').value = ''; 
    document.getElementById('estado').value = '';  
}


const preencherFormulario =(endereco) => {
    document.getElementById('endereco').value = endereco.logradouro; 
    document.getElementById('bairro').value = endereco.bairro; 
    document.getElementById('cidade').value = endereco.localidade; 
    document.getElementById('estado').value = endereco.uf;  
}


function displayAbout () {
    var arrow = document.getElementById('animation');
    arrow.classList.toggle('rotate');
    var display = document.getElementById('about');
    display.classList.toggle('active');
}

const pesquisarCep = async() => {
    limparFormulario();
    const cep = document.getElementById('cep').value;
    const url = ` http://viacep.com.br/ws/${cep}/json/`;
    if (cep.length == 8) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if(endereco.hasOwnProperty('erro')) {
            document.getElementById('endereco').value = 'CEP não encontrado';
        } else {
            preencherFormulario(endereco);
        }
    } else {
        document.getElementById('endereco').value = 'CEP incorreto';
    } 
}

document.getElementById('cep').addEventListener('focusout',pesquisarCep);


