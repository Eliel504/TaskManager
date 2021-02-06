add_task = function(){
    var valid_task = false;
    var horario_list;
    var item_list = document.getElementById('task').value;

    if(document.getElementById('time').value == ""){
        horario_list = "--:--"
    }else{
        horario_list = document.getElementById('time').value
    } 

    for(i = 0; i < lista.children.length; i ++){
        if(item_list == JSON.stringify(dados[i].tarefa).replace(/"/g,'') && horario_list == JSON.stringify(dados[i].hora).replace(/"/g,'')){
            valid_task = true;
        }
    }
    if(valid_task == true){
        erro.style.display='block'
        erro.style.color='red'
        document.getElementById('task').style.borderColor='red'                  
        erro.innerHTML='This item already exists in the list.'
    }else{
        if(document.getElementById('task').value != "" ){
            document.getElementById('task').style.borderColor='grey'
            document.getElementById('time').style.borderColor='grey'
            erro.style.display='none'
            content_principal.style.top='32%'
            res.style.transform='translateY(350px)'
            search_box.style.transform='translateY(0)'

            
            item = document.getElementById('task').value                  
            idItem = lista.childElementCount;
    
            if(document.getElementById('time').value == ""){
                horario = "--:--"
            }else{
                horario = document.getElementById('time').value
            }   
    
            if(dados == null){
                localStorage.setItem("dadosTarefa", "[]");
                dados = []
            }
    
            auxiliar = {
                tarefa: item,
                id: idItem,
                hora:horario
            }
    
            dados.push(auxiliar)
    
            localStorage.setItem("dadosTarefa", JSON.stringify(dados))
    
    
            box = document.createElement('div')
            box.setAttribute('class', 'box-task is-flex')
            
            box.setAttribute('index', idItem)
    
            var content = document.createElement('div')
            content.setAttribute('class', 'content-task')
                        
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
            document.getElementById('task').style.borderColor='red'                  
            erro.innerHTML='MISTAKE! enter a task.'
    
        }
    }

}