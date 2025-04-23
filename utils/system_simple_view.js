import elements from "./elementos.js";
import view_control from "./controlador.js";
import { user } from "./systemuser.js";
import { cleanNotes } from "./notesystem.js";

export function config(){
    for(const clave in user.actual){
        user.temporal[clave] = user.actual[clave]
    }
    console.log(user)
    elements.imgphoto.src= user.actual.photo
    elements.namePerfil.textContent =  user.actual.name.replaceAll("&#60", "<").replaceAll("&#62", ">") + " " + user.actual.lastname.replaceAll("&#60", "<").replaceAll("&#62", ">")
    cleanNotes()
    elements.header.querySelector("#user-img").classList.add("hide-list")
    elements.headerMobileCheck.checked= false
    setTimeout(()=>{
        view_control.update_view(2)
        elements.groupnotes.innerHTML =""

        setTimeout(()=>{
            elements.header.querySelector("#user-img").classList.remove("hide-list")
        },600)
    },600)
    // for (const )
}
export function out(){
    user.actual={}
    elements.namePerfil.textContent = ""
    elements.imgphoto.src = ""
    cleanNotes()
    elements.header.querySelector("#user-img").classList.add("hide-list")
    elements.headerMobileCheck.checked= false
    elements.formNotes.reset()
    setTimeout(()=>{
        elements.formNotes.reset()
        view_control.update_view(0)
        elements.groupnotes.innerHTML=""

        setTimeout(()=>{
            elements.namePerfilHeader.textContent= ""
            elements.header.querySelector("#user-img").classList.remove("hide-list")
        },600)
    },600)
}
export function login(){
    view_control.update_view(0)
    setTimeout(()=>{
        
        elements.formregis.reset()
    },500)
}
export function regis(){
    view_control.update_view(1)
    setTimeout(()=>{

        elements.formlogin.reset()
    })
}