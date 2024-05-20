import { IModel } from "./interfaces";
import { Produit } from "./produit";

export abstract class Cargaison implements IModel {
  public   libelle : string
   public poids : number
   private dateDepart : Date
   private dateArrivee : Date
   private distance : number
    protected produits: Produit[] = [];

     constructor(libelle : string, poids : number,  dateDepart : Date, dateArrivee : Date, distance : number) {
        this.libelle = libelle
        this.poids = poids
        this.dateDepart = dateDepart
        this.dateArrivee = dateArrivee
        this.distance = distance
    }

    ajouterProduit(produit : Produit) {
        this.produits.push(produit)
        
    }

    retirerProduit(produit : Produit) {
        this.produits = this.produits.filter(p => p !== produit)
    }

   abstract  calculFrais( produit : Produit):number

   sommeTotale() {
    let somme = 0
    this.produits.forEach(produit => {
        somme += this.calculFrais(produit)
    })

        return somme
    }

    nbreProduits() {
        return this.produits.length
    }

public getLibelle() {
    return this.libelle
}

public getPoids() {
    return this.poids
}

public getDateDepart() {
    return this.dateDepart
}

public getDateArrivee() {
    return this.dateArrivee
}

public getDistance() {
    return this.distance
}

public setLibelle(libelle : string) {
    this.libelle = libelle
}

public setPoids(poids : number) {
    this.poids = poids
}

public setDateDepart(dateDepart : Date) {
    this.dateDepart = dateDepart
}

public setDateArrivee(dateArrivee : Date) {
    this.dateArrivee = dateArrivee
}

public setDistance(distance : number) {
    this.distance = distance
}

public getProduits() {
    return this.produits
}


}

export class Maritime extends Cargaison {
    constructor(libelle : string, poids : number, dateDepart : Date, dateArrivee : Date, distance : number) {
        super(libelle, poids,  dateDepart, dateArrivee, distance)

    }

    calculFrais( produit : Produit):number {
       switch (produit.getType()) {
           case "alimentaire":
               return (90*produit.poids*this.getDistance() + 5000)
           case "chimique":
               return (500*produit.poids*produit.getDegres())
           case "incassable":
               return 400*produit.poids*this.getDistance()
          default:
               return 0
       }
 
    }

    
}

export class Routiere extends Cargaison {
    constructor(libelle : string, poids : number, dateDepart : Date, dateArrivee : Date, distance : number) {
        super(libelle, poids,  dateDepart, dateArrivee, distance)
    }

    calculFrais( produit : Produit) {
        switch (produit.getType()) {
            case "alimentaire":
                return 100*produit.poids*this.getDistance() 
            case "incassable":
            case "fragile":
                return 200*produit.poids*this.getDistance()
            default:
                return 0
        }

    }

}

export class Aerienne extends Cargaison {
    constructor(libelle : string, poids : number, dateDepart : Date, dateArrivee : Date, distance : number) {
        super(libelle, poids,  dateDepart, dateArrivee, distance)
    }

    calculFrais( produit : Produit) {
        switch (produit.getType()) {
            case "alimentaire":
                return 300*produit.poids*this.getDistance() 
            case "fragile":
            case "incassable":
                return 1000*produit.poids
            default:
                return 0
        }
 
    }

}


