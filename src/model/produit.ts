import { IModel } from "./interfaces";

 export class Produit implements IModel {
    libelle : string
    poids : number
    type: string = "materiel"
    degres: number = 0;
    constructor(libelle : string, poids : number) {
        this.libelle = libelle
        this.poids = poids
    }

    info(){
        console.log(this.libelle + " " + this.poids)
    }
}

export class Alimentaire extends Produit {

    constructor(libelle : string, poids : number) {
        super(libelle, poids)
        this.type = "alimentaire"
    }
}

export class Chimique extends Produit {
    degres : number

    constructor(libelle : string, poids : number, degres : number) {
        super(libelle, poids)
        this.type = "chimique"
        this.degres = degres
    }
}

abstract class Materiel extends Produit {

    constructor(libelle : string, poids : number) {
        super(libelle, poids)
        this.type = "materiel"
    }
}

export class Fragile extends Materiel {

    constructor(libelle : string, poids : number) {
        super(libelle, poids)

    }
}

export class Incassable extends Materiel {

    constructor(libelle : string, poids : number) {
        super(libelle, poids)
    }
}

