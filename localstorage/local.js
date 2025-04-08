const frutas= ["manzana","ciruela","durazno"]

let personas={
    nombre: "diego",
    edad:"30",
    coach: true
}
let frutasJSON= JSON.stringify(frutas)
console.log(frutasJSON)
console.log(frutasJSON.toLocaleUpperCase())
console.log(frutasJSON.toLowerCase())
let personal= JSON.stringify(personas)
console.log(personal.toLocaleUpperCase())
console.log(personal.toLocaleLowerCase())
localStorage.setItem("frutas",frutasJSON)
localStorage.setItem("personas",personal)

let frutasob= localStorage.getItem("frutas")
let personassob= localStorage.getItem("personas")
console.log(frutasob)
console.log(personassob)
let frutas_arreglos= JSON.parse(frutasob)
let persona_objeto= JSON.parse(personassob)
console.log(frutas_arreglos[0])
console.log(persona_objeto.nombre)

class User{
    #id_user
    #password
    #email
    constructor(id_unique,name,lastname,age,email,password,photo){
        this.#id_user=id_unique
        this.name=name
        this.lastnamename=lastname
        this.age=age
        this.#email=email
        this.#password=password
        this.photo=photo
    }
    delete(delete_,your_id_unique){

    }
}
class costumer extends User{
    #tasks= []
    add_tasks(id_unique,title,description){
      this.#tasks.push(new notes(id_unique,title,description, this))
    }
    delete_task(id_unique){
        super.delete(this.#tasks, id_unique)
    }
}

class admi extends User{
    #costumers=[]
    delete_costumer(id_unique){
        super.delete(this.#costumers,id_unique)
    }
}
class notes{
    #id_task
    #costumer
    #status
    constructor(id_unique,title,description,costumer){
        this.#id_task=id_unique
        this.title=title
        this.description=description
        this.#costumer=costumer
        this.#status="waiting"
    }
}

// function registerUser() {
//     const userData = {
//         name: document.getElementById('name_reg').value,
//         email: document.getElementById('email_reg').value,
//         password: document.getElementById('password_reg').value
//     };

//     localStorage.setItem(userData.email, JSON.stringify(userData));
// }

// function loginUser() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const userData = JSON.parse(localStorage.getItem(email));

//     if (userData === null) {
//         document.getElementById('error').innerText = "No encontrado";
//         alert("No encontrado");
//     } else if (userData.password === password) {
//         document.getElementById('error').innerText = "Acceso concedido";
//         alert("Acceso concedido");
//     } else {
//         document.getElementById('error').innerText = "Acceso denegado, contraseña incorrecta";
//         alert("Acceso denegado, contraseña incorrecta");
//     }
// }


// document.getElementById('btn_reg').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent form submission
//     registerUser();
// });

// document.getElementById('btn_sesion').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent form submission
//     loginUser();
// });