import './style.css'



const inputfield = document.getElementById('inputfield');
const list = document.getElementById('to-do-list-items');
const span = document.getElementById('span');



function updateTime() {
    const now = new Date();
    const time = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = now.toLocaleTimeString('en-US', time);
    document.getElementById('current-time').textContent = `Time: ${formattedTime}`;

    const hours = now.getHours();
    let greeting = document.getElementById('greeting');
    if (hours < 12) {
        greeting.textContent = " Good Morning ! ";
    } else if (hours < 18) {
        greeting.textContent = " Good Afternoon ! ";
    } else {
        greeting.textContent = "Good Evening ! ";
    }

    
}

setInterval(updateTime, 1000);
updateTime();  



class ToDo {
    constructor(name) {
        this.name = name;
        this.id = self.crypto.randomUUID();
        this.completed = false;
        this.date = new Date();
    }

    logmyname() {
        console.log(this.name);
    }

    changeIsCompleted(){
        this.completed = !this.completed;
    }
}

class ToDoList {
    constructor() {
        this.ToDoListArray = [];
    }

    addItem(item) {
        this.ToDoListArray.push(item);
    }

    deleteItem(id){
       this.ToDoListArray = this.ToDoListArray.filter(toDo => toDo.id !== id);
       this.displayItem();
    }

    

    addItemToList(element) {

        const html = `<li id="${element.id}" class="${element.completed ? 'completed' : ""}">
            <div class="checker"></div>
            <div class="span">${element.name}</div>
            <img class="trash" src="img/trash.png">
        </li>`;
        
        list.insertAdjacentHTML("afterbegin", html);

        const itemElement = document.getElementById(element.id);
        
        const trash = itemElement.querySelector('.trash');
        trash.addEventListener('click', (ev) => {

            const id = ev.target.closest('li').id;
            console.log(id);
            this.deleteItem(id);
        });

        const checker = itemElement.querySelector('.checker');
        checker.addEventListener('click', (ev) => {

            const id = ev.target.closest('li').id;
            console.log(id);

            const foundElement = this.ToDoListArray.find(item => item.id === id);
            foundElement.changeIsCompleted();
            console.log(foundElement);
           this.displayItem();
           

        });
        
    }

    displayItem() {
        list.innerHTML = "";
        this.ToDoListArray.forEach(element => {
            
            this.addItemToList(element);

        });
    }
}

const ToDoList1 = new ToDoList();

const Add = document.getElementById('submit');
Add.addEventListener('click', function() {

   
   

    const toDo = new ToDo(inputfield.value);
    console.log(toDo);

    ToDoList1.addItem(toDo);
    ToDoList1.displayItem();

    inputfield.value="";

    
});


