view_list = function(){
    document.getElementById('task').style.borderColor='grey'
    erro.style.display='none'
    
    if(lista.children.length == 0){
        erro.innerHTML="The list has no tasks added"
        erro.style.display='block'
        erro.style.color='red'
    }else{
        res.style.transform='translateY(350px)'
        search_box.style.transform='translateY(0)'
        content_principal.style.top='32%'
    }
}
