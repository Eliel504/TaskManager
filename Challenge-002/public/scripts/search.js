search = function(){

    list_search.parentNode.removeChild(list_search)
    list_search = document.createElement('ul')
    list_search.setAttribute('id', 'my-lyst-search')
    content_list_search.appendChild(list_search)
    
    document.getElementById('task').style.borderColor='grey'
    
    var valid_seach = false;
    var item_search = document.getElementById('task').value

    if(lista.children.length == 0){
          
        erro.innerHTML="The list has no tasks added"
        erro.style.display='block'
        erro.style.color='red'
 
    }else{
        for(c = 0; c < lista.children.length; c ++){
            if(item_search == JSON.stringify(dados[c].tarefa).replace(/"/g,'')){
                
                content_principal.style.top='32%'
                search_box.style.transform='translateY(350px)'
                res.style.transform='translateY(0)'
                erro.style.display='none'
                valid_seach = true;
                
                box = document.createElement('div')
                box.setAttribute('class', 'box-task is-flex')
                
                box.setAttribute('index', JSON.stringify(dados[c].id).replace(/"/g,''))
    
                var content = document.createElement('div')
                content.setAttribute('class', 'content-task')
                            
                var box_time = document.createElement('div')
                box_time.setAttribute('class','box_time')
                box_time.appendChild(document.createTextNode(JSON.stringify(dados[c].hora).replace(/"/g,'')))
                
                li = createItem(JSON.stringify(dados[c].tarefa).replace(/"/g,''))
                
                var btn = createBtn(JSON.stringify(dados[c].id).replace(/"/g,''))
                
                list_search.appendChild(box)
                
                box.appendChild(box_time)
                box.appendChild(content)
                box.appendChild(btn)
                content.appendChild(li)
            }
        }

        if(valid_seach == false){
            erro.innerHTML="The item was not found in the list"
            erro.style.display='block'
            erro.style.color='red'
            search_box.style.transform='translateY(0)'
        }
    }
}