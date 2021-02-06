delete_all = function(){
    lista.parentNode.removeChild(lista)
    localStorage.removeItem("dadosTarefa")
    dados = []

    lista = document.createElement('ul')
    lista.setAttribute('id', 'my-lyst')
    content_list.appendChild(lista)
    
    res.style.transform='translateY(0)'
    content_principal.style.top='50%'
    erro.style.display='none'
    document.getElementById('task').style.borderColor='grey'
    document.getElementById('time').style.borderColor='grey'
}