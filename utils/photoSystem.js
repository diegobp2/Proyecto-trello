import elements from "./elementos.js";
import { user } from "./systemuser.js";
import extractFrom from "extract-uri-image";
export function changePhoto(){
  elements.changeImagePreview.src= elements.imgphoto.src
  elements.modalPhoto.classList.remove("modal-hidden")
}
export function cancelModifiedPhoto(){
  elements.modalPhoto.classList.add("modal-hidden")
  setTimeout(() => {
    elements.changeImagePreview.src= "./images/user-default.svg"
    elements.formModalPhoto.reset()
  }, 300);
}
export function changePhotoURL(){
  let newphoto= prompt("enter the link to the new photo")
  if(newphoto == null || newphoto.replaceAll(" ", "") == "" ){
      alert("you must enter a link, url no valid")
      return
  }

  const Photoprove= new Image()
  Photoprove.src = newphoto
  Photoprove.onload= async ()=>{
    try {
      const result = await extractFrom.url(newphoto)
      elements.changeImagePreview.src= result
    } catch (error) {
      elements.changeImagePreview.src= error
      
    }
  };
  Photoprove.onerror = ()=>{
    alert("error to load the photo, url no valid")
  }
  Photoprove.src = newphoto

}

export async function changePhotoFile(event){
  
  const input = event.target
if(input.files[0]== undefined) return
  try {
    const result = await extractFrom.input(input)
    elements.changeImagePreview.src= result
  } catch (error) {
    elements.changeImagePreview.src= error
    
  }

}

export function aceptModifiedPhoto(event){
  event.preventDefault()
  // elements.changeImagePreview.src= "./images/user-default.svg"
  // user.photo= elements.changeImagePreview.src
  const databaseuserexist= localStorage.getItem("users");
  let baseUsers=[]
  if(!databaseuserexist){
      alert("error")
      return
  }
  baseUsers = baseUsers.concat(JSON.parse(databaseuserexist))
  
  const userExistent= baseUsers.find(
    userfind => userfind.email.toLowerCase() == user.actual.email.toLowerCase()
)
if(!userExistent){
  alert("error")
}
user.temporal.photo=elements.changeImagePreview.src
elements.imgphoto.src=user.temporal.photo
elements.modalPhoto.classList.add("modal-hidden")
alert("the profile photo has been modified")

setTimeout(() => {
  elements.formModalPhoto.reset()
}, 300);
}
// export function saveChangePhoto(){
//     let geturl=elements.imgphoto.src
//         //    search in the localstorage the database off users
//            const databaseUserExists= localStorage.getItem("users")
//            let datauser_=[] 
//         //    if doesn't exists, error
//           if(!databaseUserExists){
//             alert("error to get into the database")
//             return
//           }
//           datauser_=datauser_.concat(JSON.parse(databaseUserExists))
//           const indiUserExistent= datauser_.findIndex(userfind=>userfind.email == user.actual.email)
          
//           if(indiUserExistent == -1){
//             alert("error to change the photo")
//             return
//           }
//           datauser_[indiUserExistent].photo= geturl
//           elements.imgheader.src= geturl
//           user.actual.photo = geturl
//           elements.namePerfilHeader.textContent=  user.actual.name.replaceAll("&#60", "<").replaceAll("&#62", ">") + " " + user.actual.lastname.replaceAll("&#60", "<").replaceAll("&#62", ">")
//           localStorage.setItem("users",JSON.stringify(datauser_))
    
//           view_control.update_view(3)
//           setTimeout(()=>{
//             getNotes(user.actual.email)
//           },500)
// }
// export function cancelChangePhoto(){
//     elements.imgheader.src=user.actual.photo
//     view_control.update_view(3)
//     elements.namePerfilHeader.textContent=  user.actual.name.replaceAll("&#60", "<").replaceAll("&#62", ">") + " " + user.actual.lastname.replaceAll("&#60", "<").replaceAll("&#62", ">")
//     setTimeout(()=>{
//       getNotes(user.actual.email)
//     },500)
// }
