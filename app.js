
const ul = document.querySelector(".todo-list");
const form = document.querySelector("form");
const subBtn = document.querySelector("#add");
const todoLi = document.querySelector("#todo");
//const listItems = ul.getElementsByTagName('li');
const reset = document.querySelector("#reset");

if (localStorage.getItem('completed')) {
    todoLi.classList.add("done");
}
if (localStorage.getItem('updatedList')) {
    ul.innerHTML = localStorage.getItem("updatedList");
}


    ul.addEventListener("click", function(e) {  
    e.target.classList.toggle("done")
   if (e.target.classList.contains("done")) {
       localStorage.setItem('completed', true);
   } 
   else {
       e.target.classList.remove("done");
       localStorage.removeItem('completed');
   }
})

function createListItem (text) {
    if (text) {
    const newLi = document.createElement("li");
    newLi.innerText = text;
    newLi.setAttribute("id","todo");
    newLi.addEventListener("click", function(e) {  
        e.target.classList.toggle("done")
   if (e.target.classList.contains("done")) {
       localStorage.setItem('completed', true);
   } 
   else {
       e.target.classList.remove("done");
       localStorage.removeItem('completed');
   }
    });
    ul.append(newLi);
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const input = document.querySelector("#todo-text").value;
    createListItem(input);
    localStorage.setItem('updatedList', ul.innerHTML);
})

reset.addEventListener("click", function() {
    localStorage.clear();
    window.location.reload();
})
