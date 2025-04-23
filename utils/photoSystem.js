import elements from "./elementos.js";
import { user } from "./systemuser.js";

export function changePhoto(){
  let newphoto= prompt("enter the link to the new photo")
  if(newphoto == null || newphoto.replaceAll(" ", "") == "" ){
      alert("you must enter a link, url no valid")
      return
  }
  const Photoprove= new Image()
  Photoprove.src = newphoto
  Photoprove.onload= ()=>{
    elements.imgphoto.src= newphoto
    user.temporal.photo= newphoto
  }
  Photoprove.onerror = ()=>{
    alert("error to load the photo, url no valid")
  }
  Photoprove.src = newphoto
}

// export function cancelChangePhoto(){
//     elements.imgheader.src=user.actual.photo
//     view_control.update_view(3)
//     elements.namePerfilHeader.textContent=  user.actual.name.replaceAll("&#60", "<").replaceAll("&#62", ">") + " " + user.actual.lastname.replaceAll("&#60", "<").replaceAll("&#62", ">")
//     setTimeout(()=>{
//       getNotes(user.actual.email)
//     },500)
// }
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
