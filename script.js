const form = document.querySelector("#form-notes");
const inputCpf = document.querySelector("#input-cpf");
const SectionListNotes = document.querySelector("#list-notes");
 
const KEY_STORAGE = "@NotesAvanade";

const listNotes = [];

const saveNotesToStorage = () => {
    localStorage.setItem(KEY_STORAGE,JSON.stringify(listNotes));
/**
 * Realize o carregamento da listaa do localstorage
 * para tal, percorra a lista recuperada e utiliza a função ja criada
 * para criar os elemnetis das notas
 */
 const loadNotesFromStorage = () => {
     const listStorage = JSON.parse(localStorage.getItem(KEY_STORAGE));

     listNotes = listStorage;

     listNotes.forEach(note => addNoteToList(note));
 }
   
}

window.addEventListener("unload",saveNotesToStorage);

window.addEventListener("load",loadNotesFromStorage);

const removeNote = (event) => {
const noteToRemove = event.target.parentNode;
SectionListNotes.removeChild(noteToRemove);

listNotes = listNotes tutututut
}

const creatNewNoteElement = (newNote) => {
      //criarmos o article com  esta nota 
const newNoteElement = document.createElement("article");
const pElement = document.createElement("p");
pElement.textContent = newNote;
newNoteElement.appendChild(pElement);

const trashElement = document.createElement("span");
trashElement.className = "material-icons";
trashElement.textContent = "delete_forever";

trashElement.addEventListener("click", removeNote);

newNoteElement.appendChild(trashElement);

return newNoteElement;
}

const addNoteToList = (newNote) => { //cria o elemento
const newNoteElement = creatNewNoteElement(newNote); // mostra o element

 //adicionar o article na section
 SectionListNotes.appendChild(newNoteElement);
}

const cleanForm = () => form.reset();

const handleSubmit = (event) =>{
    event.preventDefault();

    //recuperaar a nota digitada pelo usuario 
const textNewNote = inputCpf.value;
   //add na lista
addNoteToList(textNewNote);

listNotes.push(textNewNote);

cleanForm();
    //atualizar o localStorage
}

form.addEventListener("submit", handleSubmit);