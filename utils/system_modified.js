
// import view_control from "./controlador.js"
// import {User} from "../classes/usuario.js";
// import User from "../classes/usuario.js";

import view_control from "./controlador.js";
import elements from "./elementos.js"
import { getNotes } from "./notesystem.js";
import { user } from "./systemuser.js";

export function saveDatas(){
// console.log("save")
const databaseuserexist= localStorage.getItem("users")
let baseUsers=[]
if(databaseuserexist){
    alert("error")
    return
}
baseUsers = baseUsers.concat(JSON.parse(databaseuserexist))

const baseNotesExists= localStorage.getItem("notes")
let baseNotes= []
if(baseNotesExists){
    baseNotes = baseNotes.concat(JSON.parse(baseNotesExists))
}
const indexUserExists= baseUsers.findIndex(userfind => userfind.email = user.actual.email)

if(indexUserExists == -1){
    alert("error")
    return
}
const emailTemporal= user.actual.email

for(const clave in user.temporal){
    user.actual[clave] = user.temporal[clave]
    baseUsers[indexUserExists][clave] = user.actual[clave]
}
baseNotes.forEach(
    (note)=>{
        if(note.email == emailTemporal){
            note.email = user.actual.email
        }
    }
)
elements.imgheader.src= user.actual.photo
elements.namePerfilHeader.textContent = user.actual.name.replaceAll("&#60;","<").replaceAll("&#62;",">")

localStorage.setItem("users",JSON.stringify(baseUsers))
localStorage.setItem("notes",JSON.stringify(baseNotes))
view_control.update_view(3)

setTimeout(()=>{
    getNotes(user.actual.email)
    elements.contCategorias.className= "cont-categorias show-category"
},500)

user.temporal= {}

}
export function cancelDatas(){
// console.log("cancel")
user.temporal={}
    elements.imgheader.src = user.actual.photo;
    elements.namePerfilHeader.textContent= user.actual.name.replaceAll("&#60;","<").replaceAll("&#62;",">")
    view_control.update_view(3)
    setTimeout(()=>{
        getNotes(user.actual.email)
    },500)

}
export function changeDatas(){
    elements.nameModified.value= user.temporal.name
    elements.lastNameModified.value= user.temporal.lastname
    elements.ageModified.value= user.temporal.age
    elements.emailModified.value= user.temporal.email
    elements.modalDatas.classList.remove("modal-hidden");
    // elements.modalDatas.value= user.temporal.email
}
export function cancelModified(){
    elements.modalDatas.classList.add("modal-hidden");
    setTimeout(()=>{
        elements.formModalDatas.reset()
    },300)
    
}
export function aceptModified(event){
    event.preventDefault()

    const DataUserExits= localStorage.getItem("users")
    let dataUsers=[]

    if(!DataUserExits){
        elements.pErrorModified.textContent="error"
        return
    }
    dataUsers= dataUsers.concat(JSON.parse(DataUserExits))

    let campEmail= elements.emailModified.value.replaceAll("<","&#60").replaceAll(">","&#62;")
    const userExistent= dataUsers.find(userfound => userfound.email)
    

    elements.modalDatas.classList.add("modal-hidden");

}