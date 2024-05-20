import { IModel } from "./interfaces";

 export class Produit implements IModel {
   public libelle : string
   public  poids : number
   private  type: string = "materiel"
   private degres: number = 0;
    constructor(libelle : string, poids : number) {
        this.libelle = libelle
        this.poids = poids
    }

    info(){
        console.log(this.libelle + " " + this.poids)
    }

    getLibelle() {
        return this.libelle
    }

    getPoids() {
        return this.poids
    }

    getType() {
        return this.type
    }

    getDegres() {
        return this.degres
    }

    setLibelle(libelle : string) {
        this.libelle = libelle
    }

    setPoids(poids : number) {
        this.poids = poids
    }

    setType(type : string) {
        this.type = type
    }

    setDegres(degres : number) {
        this.degres = degres
    }


}

export class Alimentaire extends Produit {

    constructor(libelle : string, poids : number) {
        super(libelle, poids)
        this.setType("alimentaire") 
    }
}

export class Chimique extends Produit {
 

    constructor(libelle : string, poids : number, degres : number) {
        super(libelle, poids, )
        this.setType("chimique")
        this.setDegres(degres)
       
    }
}

abstract class Materiel extends Produit {

    constructor(libelle : string, poids : number) {
        super(libelle, poids)
        this.setType("materiel")
    }
}

export class Fragile extends Materiel {

    constructor(libelle : string, poids : number) {
        super(libelle, poids)
        this.setType("fragile")

    }
}

export class Incassable extends Materiel {

    constructor(libelle : string, poids : number) {
        super(libelle, poids)
        this.setType("incassable")
    }
}

