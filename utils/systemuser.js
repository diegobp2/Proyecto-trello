import elements from "./elementos.js";
import view_control from "./controlador.js";
import User from "../classes/usuario.js";

export const user = { 
    actual: {},
    temporal: {}
}
export function register_user(event) {
    event.preventDefault()
    // we certified if the array user exits
    const databaseuserexist = localStorage.getItem("users")
    let databaseuser = []
    // If the array exists it means that it probably already has registered users within
    if (databaseuserexist) {
        // we merge the empty array with the array brought from localstorage
        databaseuser = databaseuser.concat(JSON.stringify(databaseuserexist))

        // We search in this array if there is a user already registered with the email that we put in the registration field
        const userexistent = databaseuser.find(usuario => usuario.email.toLowerCase() == elements.emailregis.value.toLowerCase());

        // if user exists, throw an error
        if (userexistent) {
            elements.perrorRegis.textContent = "This email is already registered."
            return; // Detener el flujo si el usuario ya está registrado

        }

    }

    // Regardless of whether the array exists or not, we ask if the commit key is the same
    if (elements.passwordregis.value != elements.passwordregisconfirm.value) {

        elements.perrorRegis.textContent = "Passwords do not match"
        return
    }
    // If there is no error, we empty the error paragraph
    elements.perrorRegis.textContent = ""
    // we also create an object with the data for save
    const usersave = new User(
    
        elements.nameregis.value.replaceAll("<", "&#60").replaceAll(">", "&#62"),
        elements.lastnameregis.value.replaceAll("<", "&#60").replaceAll(">", "&#62"),
        elements.agereg.value.replaceAll("<", "&#60").replaceAll(">", "&#62"),
        elements.emailregis.value.toLowerCase().replaceAll("<", "&#60").replaceAll(">", "&#62"),
        elements.passwordregis.value.replaceAll("<", "&#60").replaceAll(">", "&#62"),
    )

    databaseuser.push(usersave)

    // we save the array in localstorage
    const strignbaseUserSave = JSON.stringify(databaseuser)

    // After saving to localstorage, we congratulate the user
    localStorage.setItem("users", strignbaseUserSave)
    alert("User registered successfully")
    // we delete the values 
    setTimeout(() => {
        elements.formregis.reset();

    }, 500)
    elements.emaillogin.value = elements.emailregis.value;
    // we comeback to the login
    view_control.update_view(0)
}
export function enteruser(event) {
    event.preventDefault()
    // check if the user database exists
    const DatabaseExits = localStorage.getItem("users")
    let baseusers = []
    // If it does not exist, it throws an error saying that it is not registered or found.
    if (!DatabaseExits) {
        elements.perrorlogin.textContent = "user not found"
        return
    }
    // if it exits, merge it with the empty array
    baseusers = baseusers.concat(JSON.parse(DatabaseExits))

    let emailCamp = elements.emaillogin.value.replaceAll("<", "&#60").replaceAll(">", "&#62")
    const userexistent = baseusers.find(usuario => usuario.email.toLowerCase() == emailCamp.toLowerCase())

    // if user doesn't exits, we get an error
    if (!userexistent) {
        elements.perrorlogin.textContent = "user not found";
        return
    }
    let claveCamp= elements.passwordlogin.value.replaceAll("<", "&#60").replaceAll(">", "&#62")
    // Check if the registered key is the same as in the text field
    if (userexistent.password != claveCamp) {

        elements.perrorlogin.textContent = "incorrect password";
        return
    }
    elements.perrorlogin.textContent = ""
    alert(`!BIENVENIDO ${userexistent.name.replaceAll("&#60", "<").replaceAll("&#62", ">")}`)
    user.actual = userexistent
    elements.imgphoto.src= user.actual.photo
    elements.namePerfil.textContent = user.actual.name.replaceAll("&#60", "<").replaceAll("&#62", ">") + " " + user.actual.lastname.replaceAll("&#60", "<").replaceAll("&#62", ">")

    setTimeout(() => {
        elements.formlogin.reset()
    }, 500)
    view_control.update_view(2);
    for(const clave in user.actual){
        user.temporal[clave] = user.actual[clave]
    }
}

