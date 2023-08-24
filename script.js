let input = document.getElementsById("input");
let btn = document.getElementsById("btn");
let tasklist = document.getElementsById("tasklist");


btn.addEventListener("click", function () {
    let inputValue = input.value;
    let listItem = document.createElement("li");
    listItem.className = "item";


    tasklist.appendChild(listItem);
    listItem.textContent = inputValue;
})