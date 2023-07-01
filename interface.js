"use strict";
class Prod {
    constructor() {
        this.cod = 0;
        this.descricao = '';
        this.valor = 0;
        this.controlestoque = false;
    }
    setDescricao(pvalor) {
        this.descricao = pvalor;
    }
    setvalor(pvalor) {
        this.valor = pvalor;
    }
    getdescricao() {
        return this.descricao;
    }
    getvalor() {
        return this.valor;
    }
    getcontrole() {
        return false;
    }
}
class Servico {
    constructor(prod) {
        this.cod = 0;
        this.descricao = '';
        this.valor = 0;
        this.controlestoque = false;
    }
    setDescricao(pvalor) {
        this.descricao = pvalor;
    }
    setvalor(pvalor) {
        this.valor = pvalor;
    }
    getdescricao() {
        return this.descricao;
    }
    getvalor() {
        return this.valor;
    }
    getcontrole() {
        return false;
    }
}
