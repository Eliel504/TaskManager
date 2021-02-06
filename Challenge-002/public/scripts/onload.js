window.onload = function(){
    let tam = dados.length
    
    for(i = 0; i < tam; i++){

        
        box = document.createElement('div')
        box.setAttribute('class', 'box-task is-flex')
        
        box.setAttribute('index', JSON.stringify(dados[i].id).replace(/"/g,''))

        var content = document.createElement('div')
        content.setAttribute('class', 'content-task')
                    
        var box_time = document.createElement('div')
        box_time.setAttribute('class','box_time')
        box_time.appendChild(document.createTextNode(JSON.stringify(dados[i].hora).replace(/"/g,'')))
        
        li = createItem(JSON.stringify(dados[i].tarefa).replace(/"/g,''))
        
        var btn = createBtn(JSON.stringify(dados[i].id).replace(/"/g,''))
        
        lista.appendChild(box)
        
        box.appendChild(box_time)
        box.appendChild(content)
        box.appendChild(btn)
        content.appendChild(li)
    }
}
