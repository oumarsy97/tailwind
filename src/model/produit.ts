import { IModel } from "./interfaces";

 class Produit implements IModel {
    libelle : string
    poids : number
    type: string
    degres: number;
    constructor(libelle : string, poids : number) {
        this.libelle = libelle
        this.poids = poids
    }

    info(){
        console.log(this.libelle + " " + this.poids)
    }
}

class Alimentaire extends Produit {

    constructor(libelle : string, poids : number) {
        super(libelle, poids)
        this.type = "alimentaire"
    }
}

class Chimique extends Produit {
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

class Fragile extends Materiel {

    constructor(libelle : string, poids : number) {
        super(libelle, poids)

    }
}

class Incassable extends Materiel {

    constructor(libelle : string, poids : number) {
        super(libelle, poids)
    }
}

export {Produit, Alimentaire, Chimique, Materiel, Fragile, Incassable}