 // Define Variables inpu assBtn y ul 
const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector("ul");
const empty = document.querySelector('.empty');

// Funcion flecha
addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value;

    if (text !== "" && text !== " "){
    
        // Si el valor ingresado no es vacio NI espcio en blanco Agrega Item a li     
        const li=document.createElement('li');
        const p= document.createElement('p');
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value = "";
        empty.style.display = "none";
    }
});

// Borrar Item
function addDeleteBtn() {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    
    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll('li');
        if (items.length === 0){
            empty.style.display = "block"
        }

    });
    return deleteBtn;
}
