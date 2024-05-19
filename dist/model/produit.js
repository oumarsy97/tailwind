export class Produit {
    libelle;
    poids;
    type = "materiel";
    degres = 0;
    constructor(libelle, poids) {
        this.libelle = libelle;
        this.poids = poids;
    }
    info() {
        console.log(this.libelle + " " + this.poids);
    }
}
export class Alimentaire extends Produit {
    constructor(libelle, poids) {
        super(libelle, poids);
        this.type = "alimentaire";
    }
}
export class Chimique extends Produit {
    degres;
    constructor(libelle, poids, degres) {
        super(libelle, poids);
        this.type = "chimique";
        this.degres = degres;
    }
}
class Materiel extends Produit {
    constructor(libelle, poids) {
        super(libelle, poids);
        this.type = "materiel";
    }
}
export class Fragile extends Materiel {
    constructor(libelle, poids) {
        super(libelle, poids);
    }
}
export class Incassable extends Materiel {
    constructor(libelle, poids) {
        super(libelle, poids);
    }
}
