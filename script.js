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
        //Adds an inline style to the text but adds an X at the end pf the list element
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savaData();
}

listContainer.addEventListener("click", function(e){
    //Checks where the cursor is on the screen if LI element is clicked
    // If the list element is toggled it is cycled between checked and unchecked
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savaData();

    }
   //If the X is pressed beside the list element the element is removed
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        savaData();
    }
}, false);


function savaData(){
    //Saves the container into local storage as "data"
    localStorage.setItem("data", listContainer.innerHTML);
}

//Function to display the saved data from the container
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

//calls the function to display the saved data
showTask()