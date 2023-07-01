abstract class ClasseAbstrta{
    public abstract atributo : String
    public abstract atributo1 : number
    public atributo2 : boolean = false

    

}

class Herdeira extends ClasseAbstrta{
public atributo: String = ''
public atributo1: number = 0

public setAtr(pvalor : string ){
    this.atributo = pvalor
}

public setatt1(pvalor : number){
    this.atributo1 = pvalor
}

public setatt2(pvalor : boolean){
    this.atributo2 = pvalor
}
}

class segundaclass extends ClasseAbstrta{
    public  atributo : String  =""
    public atributo1 : number = 0


}