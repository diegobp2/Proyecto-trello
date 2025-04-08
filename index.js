// this files save many of the datas that are in the others files
import elements from "./utils/elementos.js"
import view_control from "./utils/controlador.js"
import { register_user, enteruser } from "./utils/systemuser.js"
import { changePhoto, cancelChangePhoto, saveChangePhoto } from "./utils/photoSystem.js"
import * as goTo from "./utils/system_simple_view.js"
import { changeNoteState, createNote, filterNotes,changeNote } from "./utils/notesystem.js"

window.addEventListener("resize", () => {
    const mediaQuery = window.matchMedia("(max-aspect-ratio: 4/5)")
    elements.header.querySelector("#user-img ul").style.display = mediaQuery
    setTimeout(() => {
        elements.header.querySelector("#user-img ul").style.display = "flex"; "none"
    }, 1)
})
//the firts page of the app and the main page that the user see when he enter in the app
view_control.update_view(2)
// buttons
elements.alinkregis.addEventListener("click", goTo.regis)

elements.alinkToLogin.addEventListener("click", goTo.login)
elements.formregis.addEventListener("submit", register_user)
elements.formlogin.addEventListener("submit", enteruser)

elements.btncancelprofile.addEventListener(
    "click", cancelChangePhoto)

elements.headerliconfi.addEventListener(
    "click", goTo.config
)
elements.headerout.addEventListener("click", goTo.out)
elements.btnchangeprofile.addEventListener("click", changePhoto)
elements.btnsaveprofile.addEventListener(
    "click", saveChangePhoto)
elements.formNotes.addEventListener("submit", createNote)
elements.groupnotes.addEventListener("change", changeNoteState)
elements.notesCategories.addEventListener("change", filterNotes)
elements.groupnotes.addEventListener("click", changeNote)
// patchDeleteNotes()
// function patchDeleteNotes(){
//     // verify if the database exists
// let base_Note= localStorage.getItem("notes") 
// if(!base_Note) return
// base_Note

// // if they doesn't have the property "eliminated", we add it 
// base_Note.forEach(note => {
//     if(note.eliminated == undefined){
//         note.eliminated = false
//     }
// });
// // save and update the changes in the database
// localStorage.setItem("notes",JSON.stringify(base_Note))
// }