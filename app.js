'use strict'

const disciplinas = [
    {nome: 'PWBE', cor: 'red', icon: 'bwbe.png'},
    {nome: 'PWFE', cor: 'blue', icon:'front.png'},
    {nome: 'PPDM', cor: 'yellow', icon: 'dm.png'},
    {nome: 'PRO',  cor: 'pink', icon: 'pro.png'}
   

 
]

function criarItemMenu(disciplinas){
    const listaMenu = document.getElementById('menu')
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const novoImagem = document.createElement('img')

    novoLink.href = '#'
    novoLink.textContent = disciplinas.nome/*'PWBE' o texto dessa linha é mutável*/
    //document.documentElement.style.setProperty('--cor-hover', disciplinas.cor)
    novoLink.style = `--cor-hover: ${disciplinas.cor}`

    novoImagem.src = `./icon/${disciplinas.icon}`

    novoItem.appendChild(novoImagem)

    novoItem.appendChild(novoLink)

    listaMenu.appendChild(novoItem)
}
//criarItemMenu()
disciplinas.forEach(criarItemMenu)



/*
//botao que cria outro botao
const botaoTeste = document.getElementById('teste')

function criarElementos(){
    const body = document.querySelector('body')
    const novoBotao = document.createElement('button')
    novoBotao.textContent = 'Botão criado pelo JS'

    body.appendChild(novoBotao)
    //console.log('teste')
}

//criarElementos() -> Para o botao ja aparecer na tela sem ter que clicar em outro antes
botaoTeste.addEventListener('click', criarElementos)*/