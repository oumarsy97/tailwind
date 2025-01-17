export class Cargaison {
    constructor(libelle, poids, dateDepart, dateArrivee, distance) {
        this.produits = [];
        this.libelle = libelle;
        this.poids = poids;
        this.dateDepart = dateDepart;
        this.dateArrivee = dateArrivee;
        this.distance = distance;
    }
    ajouterProduit(produit) {
        this.produits.push(produit);
    }
    retirerProduit(produit) {
        this.produits = this.produits.filter(p => p !== produit);
    }
    sommeTotale() {
        let somme = 0;
        this.produits.forEach(produit => {
            somme += this.calculFrais(produit);
        });
        return somme;
    }
    nbreProduits() {
        return this.produits.length;
    }
    getLibelle() {
        return this.libelle;
    }
    getPoids() {
        return this.poids;
    }
    getDateDepart() {
        return this.dateDepart;
    }
    getDateArrivee() {
        return this.dateArrivee;
    }
    getDistance() {
        return this.distance;
    }
    setLibelle(libelle) {
        this.libelle = libelle;
    }
    setPoids(poids) {
        this.poids = poids;
    }
    setDateDepart(dateDepart) {
        this.dateDepart = dateDepart;
    }
    setDateArrivee(dateArrivee) {
        this.dateArrivee = dateArrivee;
    }
    setDistance(distance) {
        this.distance = distance;
    }
    getProduits() {
        return this.produits;
    }
}
export class Maritime extends Cargaison {
    constructor(libelle, poids, dateDepart, dateArrivee, distance) {
        super(libelle, poids, dateDepart, dateArrivee, distance);
    }
    calculFrais(produit) {
        switch (produit.getType()) {
            case "alimentaire":
                return (90 * produit.poids * this.getDistance() + 5000);
            case "chimique":
                return (500 * produit.poids * produit.getDegres());
            case "incassable":
                return 400 * produit.poids * this.getDistance();
            default:
                return 0;
        }
    }
}
export class Routiere extends Cargaison {
    constructor(libelle, poids, dateDepart, dateArrivee, distance) {
        super(libelle, poids, dateDepart, dateArrivee, distance);
    }
    calculFrais(produit) {
        switch (produit.getType()) {
            case "alimentaire":
                return 100 * produit.poids * this.getDistance();
            case "incassable":
            case "fragile":
                return 200 * produit.poids * this.getDistance();
            default:
                return 0;
        }
    }
}
export class Aerienne extends Cargaison {
    constructor(libelle, poids, dateDepart, dateArrivee, distance) {
        super(libelle, poids, dateDepart, dateArrivee, distance);
    }
    calculFrais(produit) {
        switch (produit.getType()) {
            case "alimentaire":
                return 300 * produit.poids * this.getDistance();
            case "fragile":
            case "incassable":
                return 1000 * produit.poids;
            default:
                return 0;
        }
    }
}
