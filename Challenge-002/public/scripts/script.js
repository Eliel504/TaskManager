
    var content_list = document.getElementById('content-list')
    var horario;
    var erro = document.getElementById('erro_task')
    var lista = document.getElementById('my-lyst')
    var capa = document.getElementById('box-one')
    var res = document.getElementById('box-two')
    var box;
    var item;
    var li;
    var idItem;
    var i;

    add_task = function(){
        if(document.getElementById('task').value != ""){
            document.getElementById('task').style.borderColor='grey'
            document.getElementById('time').style.borderColor='grey'
            erro.style.display='none'
            res.style.transform='translateY(350px)'
                    
            item = document.getElementById('task').value
            idItem = lista.childElementCount;

            box = document.createElement('div')
            box.setAttribute('class', 'box-task is-flex')
            
            box.setAttribute('index', idItem)

            var content = document.createElement('div')
            content.setAttribute('class', 'content-task')
            
            if(document.getElementById('time').value == ""){
                horario = "--:--"
            }else{
                horario = document.getElementById('time').value
            }               
            
            var box_time = document.createElement('div')
            box_time.setAttribute('class','box_time')
            box_time.appendChild(document.createTextNode(horario))
            
            li = createItem(item)
            
            var btn = createBtn(idItem)
            
            lista.appendChild(box)
            
            box.appendChild(box_time)
            box.appendChild(content)
            box.appendChild(btn)
            content.appendChild(li)

            document.getElementById('task').value = ""
            document.getElementById('time').value = ""
            erro.style.display='block'
            erro.style.color='green'
            erro.innerHTML='Task successfully added !!'
        }else{
            erro.style.display='block'
            erro.style.color='red'
            document.getElementById('time').style.borderColor='grey'
            document.getElementById('task').style.borderColor='red'                  
            erro.innerHTML='MISTAKE! enter a task.'

        }

    }

    createItem = function(itemValue){
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(`${itemValue}`))
        return li;
    }

    removeItem = function(id){
        for(i = 0; i < lista.children.length; i ++){
            if (lista.children[i].getAttribute('index') == id){
                lista.children[i].remove()
            }
        }
        if(lista.children.length == 0){
            res.style.transform='translateY(0)'
            erro.style.display='none'
            document.getElementById('task').style.borderColor='grey'
            document.getElementById('time').style.borderColor='grey'
        }
    }

    createBtn = function(id){
        var btn = document.createElement('div')
        btn.setAttribute('onclick', `removeItem(${id})`)
        btn.setAttribute('class', 'bnt-remove th-bnt-remove')
        return btn;
    }

    delete_all = function(){
        lista.parentNode.removeChild(lista)

        lista = document.createElement('ul')
        lista.setAttribute('id', 'my-lyst')
        content_list.appendChild(lista)
        
        res.style.transform='translateY(0)'
        erro.style.display='none'
        document.getElementById('task').style.borderColor='grey'
        document.getElementById('time').style.borderColor='grey'
    }
