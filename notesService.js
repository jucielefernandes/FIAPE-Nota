 /**
 * Realize o carregamento da listaa do localstorage
 * para tal, percorra a lista recuperada e utiliza a função ja criada
 * para criar os elemnetis das notas
 */
  import {formatDate} from "./utils.js";

  const sectionListNotes = document.querySelector("#list-notes");
   const KEY_STORAGE = "@NotesAvanade";
  
   let listNotes = [];
 
   export const loadNotesFromStorage = () => {
     const listStorage = JSON.parse(localStorage.getItem(KEY_STORAGE)) || [];
   
     listStorage.forEach(note => {
       note.date = new Date(note.date); //convertendo a data string para Date()
       addNoteToList(note);
     });
   }
   
  const createNewNoteElement = ({id,date,text}) => {
     //criarmos o article com  esta nota 
  const newNoteElement = document.createElement("article");
 
  const pDateElement = document.createElement("p");
  pDateElement.textContent = formatDate(date);
  newNoteElement.appendChild(pDateElement);
 
  const pElement = document.createElement("p");
  pElement.text = text;
  newNoteElement.appendChild(pElement);
 
  const trashElement = document.createElement("span");
  trashElement.className = "material-icons";
  trashElement.textContent = "delete_forever";
 
  trashElement.addEventListener("click", (event) => removeNote(event, id));
 
  newNoteElement.appendChild(trashElement);
 
  return newNoteElement;
 }
 
 export const addNoteToList = (newNote) => { //cria o elemento
     const newNoteElement = createNewNoteElement(newNote); // mostra o element
   //adicionar o article na section
     sectionListNotes.appendChild(newNoteElement);
 
     listNotes.push(newNote);
   }
 
   const removeNote = (event, idNoteToRemove) => {
     const noteToRemove = event.target.parentNode;
     sectionListNotes.removeChild(noteToRemove);
   
     listNotes = listNotes.filter(note => note.id !== idNoteToRemove); //[nota1, nota2, nota3] = [nota1, nota3]
   }