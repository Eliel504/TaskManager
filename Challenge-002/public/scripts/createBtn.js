createBtn = function(id){
        
    var btn = document.createElement('div')
    btn.setAttribute('onclick', `removeItem(${id})`)
    btn.setAttribute('class', 'bnt-remove th-icon-remove-red')
    return btn;
}


