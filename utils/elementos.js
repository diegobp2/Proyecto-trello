// we create a variable called elements that will contain and receive the elements from de DOM in html
const elements={
    // header-elements
    // main container
    header : document.querySelector("#header-h"),
    namePerfilHeader: document.querySelector("#user-img span"),
    imgheader : document.querySelector("#header-h #user-img .imgPerfil"),
    headerMobileCheck : document.querySelector("#header-h .perfil label input"),
    headerliconfi : document.getElementById("lis-confi"),
    headerout : document.getElementById("lis-out"),
    divmain: document.getElementById("formularios"),
    formlogin: document.getElementById("iniciar_sesion"),
    emaillogin: document.getElementById("email"),
    passwordlogin: document.getElementById("password"),
    perrorlogin: document.getElementById("error"),
    alinkregis: document.getElementById("linktoReg"),
    
    // container and element record
    formregis: document.getElementById("registrarse"),
    nameregis: document.getElementById("name_reg"),
    lastnameregis: document.getElementById("Apellido_reg"),
    agereg: document.getElementById("edad_reg"),
    emailregis: document.getElementById("email_reg"),
    passwordregis: document.getElementById("password_reg"),
    passwordregisconfirm: document.getElementById("confirm"),
    perrorRegis: document.getElementById("errorregis"),
    alinkToLogin: document.getElementById("linktoLogin"),
    
    // profile photos elements
    profile: document.getElementById("perfil"),
    imgphoto: document.getElementById("change_img"),
    namePerfil: document.querySelector("#h2-perfil"),
    btnchangeprofile: document.getElementById("btn_change"),
    btncancelprofile: document.getElementById("btn_cancelar"),
    btnsaveprofile: document.getElementById("btn_guardar"),


// notes
 divnotes:document.getElementById("cont-notes"),
 formNotes:document.getElementById("form-notes"),
 groupnotes:document.getElementById("notes"),
 notesCategories: document.getElementById("agruparNotas"),
 inputTitleNote: document.getElementById("note-input"),
 inputNoteDescription: document.getElementById("note-desc-input"),

}

export default elements

