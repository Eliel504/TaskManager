removeItem = function(id){

    for(i = 0; i < lista.children.length; i ++){
        if (lista.children[i].getAttribute('index') == id){
            lista.children[i].remove()
            
            JSON.stringify(dados.splice(i, 1))
            localStorage.setItem("dadosTarefa", JSON.stringify(dados))
            
        }

    }

    for (i = 0; i < list_search.children.length;i ++){
        if(list_search.children[i].getAttribute('index') == id){
            list_search.children[i].remove()
        }
    }

    if(list_search.children.length == 0){
        search_box.style.transform='translateY(0)'
        erro.style.display='none'
    }

    if(lista.children.length == 0){
        res.style.transform='translateY(0)'
        content_principal.style.top='50%'
        erro.style.display='none'
        document.getElementById('task').style.borderColor='grey'

    }

}