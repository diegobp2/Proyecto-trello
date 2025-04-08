import Plantilla from "./plantilla.js"

class Note extends Plantilla{
    constructor(title= new String(), description= new String(), email = new String()){
//    this.id = id
   super()
   this.title = title
   this.description = description
   this.email = email
   this.state = 1
    }

changeState(new_state){
    switch (new_state){
        case "pendiente":
            this.state = 1
            break
            case "completo":
                this.state = 2
                break
                case "incompleto":
                    this.state = 3
                    break
                    default:
                    throw new Error(`error : You're tried to login '${new_state}',but the valid values are 'earring','complete' or 'incomplete'`);
                    
    }
}
addValues(object){
    for(const clave in this){
        this[clave]= object[clave]
    }
}
}
// let notes= new Note(999,title,description,user.actual.email)
export default Note