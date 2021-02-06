createItem = function(itemValue){
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(`${itemValue}`))
    return li;
}
