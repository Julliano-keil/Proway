interface IItem{
cod : number
descricao : string
valor : number
controlestoque : boolean ;

setDescricao(pvalor : string ) : void
setvalor(pvalor : number) : void 

getdescricao() : string
getvalor() : number 
getcontrole() : boolean

}

class Prod implements IItem{
    cod : number = 0
    descricao : string = ''
    valor : number = 0
   controlestoque: boolean = false



    setDescricao(pvalor : string){
        this.descricao = pvalor
    }

    setvalor(pvalor : number){
        this.valor = pvalor
    }

    getdescricao(): string {
        return this.descricao
    }

    getvalor(): number {
        return this.valor
    }
    getcontrole(): boolean {
        return  false
    }

}

class Servico implements IItem{
    cod : number = 0
    descricao : string = ''
    valor : number = 0
   controlestoque: boolean = false

    constructor(prod : number, ){

    }

    
    setDescricao(pvalor : string){
        this.descricao = pvalor
    }

    setvalor(pvalor : number){
        this.valor = pvalor
    }

    getdescricao(): string {
        return this.descricao
    }

    getvalor(): number {
        return this.valor
    }
    getcontrole(): boolean {
        return  false
    }
}