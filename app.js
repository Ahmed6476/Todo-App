var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");    
        if(todo_item.value.length > 0){
            var li =document.createElement('li')
            li.setAttribute("class","li1")
            var liText = document.createTextNode(todo_item.value)
            li.appendChild(liText) 
        }
        else{
           alert("Enter Some Activity") 
        }

    var delBtn = document.createElement("img")
    var delText = document.createTextNode("")
    delBtn.setAttribute("src","https://logodix.com/logo/435803.png")
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText) 

    var editBtn = document.createElement("img");
    var editText = document.createTextNode("")
    editBtn.setAttribute("src","https://img.icons8.com/cotton/2x/edit.png")
    editBtn.setAttribute("class", "btn2")
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.appendChild(editText)

    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todo_item.value = ""
}

function deleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
  var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue = val;
}

function deleteAll() {
    list.innerHTML = ""
}