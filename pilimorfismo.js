"use strict";
class Animal {
}
class Cachorro extends Animal {
    emitsom() {
        return 'late';
    }
}
class Gato extends Animal {
    emitesom() {
        return 'mia';
    }
}
class Pet {
    constructor() {
        this.som = new Animal();
    }
}
console.log('cao');
let cao = new Pet();
//let ruido :Cachorro.som = new Cachorro
//console.log(ruido.emitesom())
