// this files save many of the datas that are in the others files
import elements from "./utils/elementos.js"
import view_control from "./utils/controlador.js"
import { register_user, enteruser } from "./utils/systemuser.js"
import { aceptModifiedPhoto, cancelModifiedPhoto, changePhoto, changePhotoFile, changePhotoURL } from "./utils/photoSystem.js"
import * as goTo from "./utils/system_simple_view.js"
import { changeNoteState, createNote, filterNotes, changeNote, modifiedNote, cancelNoteModified } from "./utils/notesystem.js"
import { saveDatas, cancelDatas, changeDatas, cancelModified, aceptModified} from "./utils/system_modified.js";

window.addEventListener("resize", () => {
    const mediaQuery = window.matchMedia("(max-aspect-ratio: 4/5)")
    elements.header.querySelector("#user-img ul").style.display = mediaQuery
    setTimeout(() => {
        elements.header.querySelector("#user-img ul").style.display = "flex"; "none"
    }, 1)
})
//the firts page of the app and the main page that the user see when he enter in the app
view_control.update_view(0)
// buttons
elements.alinkregis.addEventListener("click", goTo.regis)

elements.alinkToLogin.addEventListener("click", goTo.login)
elements.formregis.addEventListener("submit", register_user)
elements.formlogin.addEventListener("submit", enteruser)

elements.btnDataCancel.addEventListener(
    "click", cancelDatas)

elements.imgphoto.addEventListener("click", changePhoto)

elements.btnCancelChangeImage.addEventListener("click",cancelModifiedPhoto)

elements.btnChangeUrlPhoto.addEventListener("click",changePhotoURL)

elements.formModalPhoto.addEventListener("submit", aceptModifiedPhoto)

elements.btnChangeFilePhoto.addEventListener("change",changePhotoFile)

elements.btnDatachange.addEventListener("click", changeDatas)

elements.cancelModified.addEventListener("click", cancelModified)

elements.formModalDatas.addEventListener("submit", aceptModified)


elements.btnDataSave.addEventListener(
    "click", saveDatas)
elements.btnDataSave.addEventListener("click",saveDatas)
elements.headerliconfi.addEventListener(
    "click", goTo.config
)
elements.btn
elements.headerout.addEventListener("click", goTo.out)
elements.formNotes.addEventListener("submit", createNote)
elements.groupnotes.addEventListener("change", changeNoteState)
elements.notesCategories.addEventListener("change", filterNotes)
elements.groupnotes.addEventListener("click", changeNote)
elements.formModalNotes.addEventListener("submit", modifiedNote)
elements.cancelNoteModified.addEventListener("click", cancelNoteModified)
// patchDeleteNotes()
// function patchDeleteNotes(){
  
// let base_Note= localStorage.getItem("notes")
// if(!base_Note) return

// base_Note.forEach(note => {
//     if(note.eliminated == undefined){
//         note.eliminated = false
//     }
// });

// localStorage.setItem("notes",JSON.stringify(base_Note))
// }