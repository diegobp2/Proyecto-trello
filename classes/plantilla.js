class Plantilla {
    constructor(){
        this.id= this.createIdunique(8)
    }
    createIdunique(n){
        let id= ""
        for (let i = 0; i < n; i++) {
            id += parseInt(Math.random()*36).toString(36)
            
        }
        return id
    }
}
export default Plantilla