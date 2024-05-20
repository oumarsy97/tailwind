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
    getLibelle() {
        return this.libelle;
    }
    getPoids() {
        return this.poids;
    }
    getType() {
        return this.type;
    }
    getDegres() {
        return this.degres;
    }
    setLibelle(libelle) {
        this.libelle = libelle;
    }
    setPoids(poids) {
        this.poids = poids;
    }
    setType(type) {
        this.type = type;
    }
    setDegres(degres) {
        this.degres = degres;
    }
}
export class Alimentaire extends Produit {
    constructor(libelle, poids) {
        super(libelle, poids);
        this.setType("alimentaire");
    }
}
export class Chimique extends Produit {
    constructor(libelle, poids, degres) {
        super(libelle, poids);
        this.setType("chimique");
        this.setDegres(degres);
    }
}
class Materiel extends Produit {
    constructor(libelle, poids) {
        super(libelle, poids);
        this.setType("materiel");
    }
}
export class Fragile extends Materiel {
    constructor(libelle, poids) {
        super(libelle, poids);
        this.setType("fragile");
    }
}
export class Incassable extends Materiel {
    constructor(libelle, poids) {
        super(libelle, poids);
        this.setType("incassable");
    }
}
