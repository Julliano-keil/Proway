"use strict";
class ClasseAbstrta {
    constructor() {
        this.atributo2 = false;
    }
}
class Herdeira extends ClasseAbstrta {
    constructor() {
        super(...arguments);
        this.atributo = '';
        this.atributo1 = 0;
    }
    setAtr(pvalor) {
        this.atributo = pvalor;
    }
    setatt1(pvalor) {
        this.atributo1 = pvalor;
    }
    setatt2(pvalor) {
        this.atributo2 = pvalor;
    }
}
class segundaclass extends ClasseAbstrta {
    constructor() {
        super(...arguments);
        this.atributo = "";
        this.atributo1 = 0;
    }
}
