// Import the elements.js module: This allows access to DOM elements defined in elements.js, such as input fields for the note title and description.
import elements from "./elementos.js";
// Import the user object: This allows you to access the current user's information, such as their name and email, from the systemuser.js module.
import { user } from "./systemuser.js";
// Import the Note class: This allows you to create new note instances using the class defined in note.js.
import Note from "../classes/note.js";
// Import the viewcontroller: This allows the UI to be updated after a note is created, using the functions defined in controller.js.
import view_control from "./controlador.js";

export function createNote(event) {
    event.preventDefault()


    // Initialize the title and description variables: These variables will be used to store the title and description of the note.
    let title = "";
    let description = "";

    // Assign input field values: The values ​​of the input fields are obtained from the DOM and assigned to the title and description variables.
    title = elements.inputTitleNote.value;
    description = elements.inputNoteDescription.value;

    // Check if fields are empty: Blank spaces are removed and the title or description is checked for empty fields.
    if (
        title.replaceAll(" ", "") == "" || description.replaceAll(" ", "") == ""
    ) {
        // alert message
        alert(`please Make sure to fill out all the fields ${user.actual.name}`)
        return
    }
    // Check if notes exist in local storage: Attempts to get the "notes" item from localStorage. 
    const noteDatabaseExist = localStorage.getItem("notes")
    let databaseNotes = []

    // Load existing notes: If there are notes in local storage, they are converted from JSON to a JavaScript object and added to the databaseNotes array.
    if (noteDatabaseExist) {
        databaseNotes = databaseNotes.concat(JSON.parse(noteDatabaseExist))
    }


    // Create a new Note instance: A new note is created using the Note class, passing the index (array length), title, description, and the current user's email.
    const newNote = new Note(
        // databaseNotes.length,
        title.replaceAll("<", "&#60").replaceAll(">", "&#62"),
        description.replaceAll("<", "&#60").replaceAll(">", "&#62"),
        user.actual.email
    )
    databaseNotes.push(newNote)
    // Save notes to local storage: Convert the notes array to a JSON string and save it to localStorage under the key "notes".
    localStorage.setItem("notes", JSON.stringify(databaseNotes))
    alert("note was added successfully")
    view_control.update_view(3)
    // Reset the form after a short delay: setTimeout is used to wait 500 milliseconds before resetting the form, allowing the user to see the success message before the fields are cleared.
    setTimeout(() => {
        elements.formNotes.reset()
        createHTMLnote(newNote)
    }, 500)
}

export function getNotes(who) {
    const notebaseExist = localStorage.getItem("notes")
    let basenotes = []
    if (!notebaseExist) {
        return
    }
    basenotes = basenotes.concat(JSON.parse(notebaseExist))
    let userNotes = basenotes.filter(note => note.email == who)
    if (userNotes.length == 0) {
        return
    }
    createHTMLnote(...userNotes)
    // userNotes.forEach(
    //     (note) => {
    //         createHTMLnote(note)
    //     }
    // )
}
export function cleanNotes() {
    let notesInGroupNotes = document.getElementsByClassName("memo")

    if (notesInGroupNotes.length == 0) {
        return
    }
    for (const noteHtml of notesInGroupNotes) {
        noteHtml.className = "memo hide-note"
    }
    // notesInGroupNotes = Array.from(notesInGroupNotes)
    // notesInGroupNotes.forEach(
    //     (htmlNote) =>{
    //         htmlNote.className = "memo hide-note"
    //     }
    // )
    // console.log(notesInGroupNotes)
}
function createHTMLnote(...notes) {

    let htmlText = ""
    for (const { id, title, description, state, eliminated } of notes) {
        let color_select = ""
        if (state == 1) color_select = "orange"
        if (state == 2) color_select = "green"
        if (state == 3) color_select = "red"
        if (!eliminated) {

            htmlText += `
                <div class="note memo show-note" id="notes${id}">
                <div>
                <div class="headerNote">
                <strong>${title}</strong>
                <div class="menuNote">
                <img src="imagenes/menu.svg" alt="options">
                <ul>
                 <li class= "btn-modified-note">modificar</li>
                 <li class= "btn-delete-note">borrar</li>
                </ul>
                </div>
                </div>
                <p>${description}</p>
                <select style="color: ${color_select};" class="opcion${state}">
                
                <option ${state == 1 ? 'selected' : ''} style="color: orange;" value="1">pendiente</option>
                <option ${state == 2 ? 'selected' : ''} style="color: green;" value="2">completo</option>
                <option ${state == 3 ? 'selected' : ''} style="color: red;" value="3">incompleto</option>
                </select>
                
                </div>
                </div>
            `
            setTimeout(() => {
                document.getElementById(`notes${id}`).className = "memo";
            }, 600)
        }
    }
    elements.groupnotes.innerHTML += htmlText

    const false_event = new Event("change")
    elements.notesCategories.dispatchEvent(false_event)
}
export function changeNoteState(event) {
    if (event.target.tagName != "SELECT") return

    const selectFromtheNote = event.target

    const NoteId = selectFromtheNote.closest(".memo").id.replace("notes", "");
    const newState = selectFromtheNote.value;
    const basenotesExists = localStorage.getItem("notes");
    let baseNotes = []

    if (!basenotesExists) {
        alert("error base datos")
        return
    }
    baseNotes = baseNotes.concat(JSON.parse(basenotesExists))
    // console.log(baseNotes)
    const noteGet = baseNotes.findIndex(note => note.id == (NoteId))
    // console.log(noteGet)
    if (noteGet == -1) {
        alert("error note")
        return
    }
    let state_before = selectFromtheNote.className.replace("opcion", "")
    selectFromtheNote.querySelector(`option:nth-child(${state_before})`).toggleAttribute("selected", false)
    const notemodified = new Note()
    notemodified.addValues(baseNotes[noteGet])
    let stateWord = selectFromtheNote.options[selectFromtheNote.selectedIndex].text
    notemodified.changeState(stateWord)
    baseNotes[noteGet] = notemodified
    localStorage.setItem("notes", JSON.stringify(baseNotes))
    selectFromtheNote.style.color = selectFromtheNote.querySelector(`option:nth-child(${newState})`).style.color
    selectFromtheNote.clasName = `opcion${newState}`
    selectFromtheNote.querySelector(`option:nth-child(${newState})`).toggleAttribute("selected", true)
    const false_event = new Event("change")
    elements.notesCategories.dispatchEvent(false_event)
}
export function filterNotes(event) {
    const selectOfTheNote = event.target
    const newSTATE = parseInt(selectOfTheNote.value)
    selectOfTheNote.style.color = selectOfTheNote.querySelector(`option:nth-child(${newSTATE + 1})`).style.color
    const notesGets = elements.groupnotes.getElementsByClassName("memo")

    if (notesGets.length == 0) {
        return
    }
    for (const note of notesGets) {
        const select_of_the_note = note.querySelector("select")
        const value_chosed = select_of_the_note.value
        // note.style.display = value_chosed == newSTATE ? "flex" : "none"

        if (newSTATE == 0) {

            animateEspecificNote(note, true)

        } else {
            animateEspecificNote(

                note,
                value_chosed == newSTATE
            )
        }
    }
}
export function changeNote(event) {
    const label = event.target;
    if (label.tagName != "LI") return

    // obtener la nota
    const note = label.closest(".note");
    const idNote = nota.id.replace("nota", "");
    // el replace es para eliminar la palabra "nota" de la cadena, ya que el id de la nota es "nota" seguido del número de la nota
    const baseNotasExiste = localStorage.getItem("Notas");
    let baseNotes = []
    // si no existe la base de datos de notas, crea una nueva
    if(!baseNotasExiste){
        alert("No hay notas guardadas, base de datos no existe");
        return;
    }
    // el JSON.parse es para convertir el string a un array de objetos
    baseNotes =  baseNotes.concat(JSON.parse(baseNotasExiste))
    // el concat es para agregar el objeto de la nota actual a la base de datos
    const indiceNotaExiste = baseNotes.findIndex(not => not.id == idNote);

    if(indiceNotaExiste == -1){
        alert("Nota no encontrada");
        return;
    }

    if (label.clasName == "btn-modified-note") {
        modifiedNote()
    }
    if (label.clasName == "btn-delete-note") {
        deleteNote(note, idNote,indiceNotaExiste,baseNotes)
    }
}
function modifiedNote(){
console.log("funciona");

}
function deleteNote(elementoNote, idDeLaNote, posicionNote, baseNote){

    // el elementoNota es el elemento que se ha seleccionado para borrar
    // el idDeLaNota es el id de la nota que se ha seleccionado para borrar
    // el posicionNota es la posición de la nota en la base de datos
    // el baseNota es la base de datos de notas

    baseNote.splice(posicionNote, 1);
    // el splice es para eliminar la nota de la base de datos y guardamos
    localStorage.setItem("Notas", JSON.stringify(baseNote));

    // ahora borramos en dom
    animarNotaEspecifica(elementoNote, false);
    // el false es para que la nota se borre de la pantalla
    setTimeout(()=>{
        document.getElementById(nota$,{idDeLaNote}).remove();
    },1000)

}
function animateEspecificNote(which_one, state) {
    if (state) {
        if (which_one.clasName == "memo mostrada") return

        which_one.className = "memo show-note"
        setTimeout(() => {
            which_one.className = "memo mostrada"
        }, 600)
    } else {

        which_one.className = "memo hide-note"
        setTimeout(() => {
            which_one.className = "memo oculta"
        }, 600)
    }
}