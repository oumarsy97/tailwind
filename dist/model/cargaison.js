"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aerienne = exports.Routiere = exports.Maritime = exports.Cargaison = void 0;
var Cargaison = /** @class */ (function () {
    function Cargaison(libelle, poids, dateDepart, dateArrivee, distance) {
        this.produits = [];
        this.libelle = libelle;
        this.poids = poids;
        this.dateDepart = dateDepart;
        this.dateArrivee = dateArrivee;
        this.distance = distance;
    }
    Cargaison.prototype.ajouterProduit = function (produit) {
        this.produits.push(produit);
    };
    Cargaison.prototype.retirerProduit = function (produit) {
        this.produits = this.produits.filter(function (p) { return p !== produit; });
    };
    Cargaison.prototype.sommeTotale = function () {
        var _this = this;
        var somme = 0;
        this.produits.forEach(function (produit) {
            somme += _this.calculFrais(produit);
        });
        return somme;
    };
    Cargaison.prototype.nbreProduits = function () {
        return this.produits.length;
    };
    Cargaison.prototype.getLibelle = function () {
        return this.libelle;
    };
    Cargaison.prototype.getPoids = function () {
        return this.poids;
    };
    Cargaison.prototype.getDateDepart = function () {
        return this.dateDepart;
    };
    Cargaison.prototype.getDateArrivee = function () {
        return this.dateArrivee;
    };
    Cargaison.prototype.getDistance = function () {
        return this.distance;
    };
    Cargaison.prototype.setLibelle = function (libelle) {
        this.libelle = libelle;
    };
    Cargaison.prototype.setPoids = function (poids) {
        this.poids = poids;
    };
    Cargaison.prototype.setDateDepart = function (dateDepart) {
        this.dateDepart = dateDepart;
    };
    Cargaison.prototype.setDateArrivee = function (dateArrivee) {
        this.dateArrivee = dateArrivee;
    };
    Cargaison.prototype.setDistance = function (distance) {
        this.distance = distance;
    };
    Cargaison.prototype.getProduits = function () {
        return this.produits;
    };
    return Cargaison;
}());
exports.Cargaison = Cargaison;
var Maritime = /** @class */ (function (_super) {
    __extends(Maritime, _super);
    function Maritime(libelle, poids, dateDepart, dateArrivee, distance) {
        return _super.call(this, libelle, poids, dateDepart, dateArrivee, distance) || this;
    }
    Maritime.prototype.calculFrais = function (produit) {
        switch (produit.type) {
            case "alimentaire":
                return (90 * produit.poids * this.distance + 5000);
            case "chimique":
                return (500 * produit.poids * produit.degres);
            case "materiel":
                return 400 * produit.poids * this.distance;
            default:
                return 0;
        }
    };
    return Maritime;
}(Cargaison));
exports.Maritime = Maritime;
var Routiere = /** @class */ (function (_super) {
    __extends(Routiere, _super);
    function Routiere(libelle, poids, dateDepart, dateArrivee, distance) {
        return _super.call(this, libelle, poids, dateDepart, dateArrivee, distance) || this;
    }
    Routiere.prototype.calculFrais = function (produit) {
        switch (produit.type) {
            case "alimentaire":
                return 100 * produit.poids * this.distance;
            case "materiel":
                return 200 * produit.poids * this.distance;
            default:
                return 0;
        }
    };
    return Routiere;
}(Cargaison));
exports.Routiere = Routiere;
var Aerienne = /** @class */ (function (_super) {
    __extends(Aerienne, _super);
    function Aerienne(libelle, poids, dateDepart, dateArrivee, distance) {
        return _super.call(this, libelle, poids, dateDepart, dateArrivee, distance) || this;
    }
    Aerienne.prototype.calculFrais = function (produit) {
        switch (produit.type) {
            case "alimentaire":
                return 300 * produit.poids * this.distance;
            case "materiel":
                return 1000 * produit.poids;
            default:
                return 0;
        }
    };
    return Aerienne;
}(Cargaison));
exports.Aerienne = Aerienne;
