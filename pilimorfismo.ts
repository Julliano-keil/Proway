class Animal{
    public nome? : string
}

class Cachorro extends Animal{
    public emitsom() : string{
        return 'late'
         
    }

}

class Gato extends Animal{
    public emitesom() : string{
        return 'mia'
    }
}

class Pet {
    public som :  Animal = new Animal()
}
    
console.log('cao')
let cao = new Pet()

//let ruido :Cachorro.som = new Cachorro
//console.log(ruido.emitesom())
