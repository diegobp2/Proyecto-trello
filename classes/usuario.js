import Plantilla from "./plantilla.js"

// create a class called user with a constructor that have different parameters and then we export it 
class User extends Plantilla
{
    constructor(name, lastname, age, email, password, foto) {
        super()
        this.name = name
        this.lastname = lastname
        this.age = age
        this.email = email
        this.password = password
        this.photo = foto
    }
}
export default User 

