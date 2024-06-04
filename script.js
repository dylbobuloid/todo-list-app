//Have to create variables for the elements input field and buttons

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    //if input is empty notify the user to enter something
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        //Whenever there is an input create a new list element given that input
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = "";
}