import { Alimentaire, Chimique } from './model/produit.js';
import { Maritime } from './model/cargaison.js';
const cargaison = new Maritime("Cargaison 1", 10, new Date(), new Date(), 100);
const p = new Alimentaire("pomme", 5);
cargaison.ajouterProduit(p);
cargaison.ajouterProduit(new Chimique("pomme2", 5, 5));
console.log(cargaison.getProduits());
