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
exports.Incassable = exports.Fragile = exports.Materiel = exports.Chimique = exports.Alimentaire = exports.Produit = void 0;
var Produit = /** @class */ (function () {
    function Produit(libelle, poids) {
        this.libelle = libelle;
        this.poids = poids;
    }
    Produit.prototype.info = function () {
        console.log(this.libelle + " " + this.poids);
    };
    return Produit;
}());
exports.Produit = Produit;
var Alimentaire = /** @class */ (function (_super) {
    __extends(Alimentaire, _super);
    function Alimentaire(libelle, poids) {
        var _this = _super.call(this, libelle, poids) || this;
        _this.type = "alimentaire";
        return _this;
    }
    return Alimentaire;
}(Produit));
exports.Alimentaire = Alimentaire;
var Chimique = /** @class */ (function (_super) {
    __extends(Chimique, _super);
    function Chimique(libelle, poids, degres) {
        var _this = _super.call(this, libelle, poids) || this;
        _this.type = "chimique";
        _this.degres = degres;
        return _this;
    }
    return Chimique;
}(Produit));
exports.Chimique = Chimique;
var Materiel = /** @class */ (function (_super) {
    __extends(Materiel, _super);
    function Materiel(libelle, poids) {
        var _this = _super.call(this, libelle, poids) || this;
        _this.type = "materiel";
        return _this;
    }
    return Materiel;
}(Produit));
exports.Materiel = Materiel;
var Fragile = /** @class */ (function (_super) {
    __extends(Fragile, _super);
    function Fragile(libelle, poids) {
        return _super.call(this, libelle, poids) || this;
    }
    return Fragile;
}(Materiel));
exports.Fragile = Fragile;
var Incassable = /** @class */ (function (_super) {
    __extends(Incassable, _super);
    function Incassable(libelle, poids) {
        return _super.call(this, libelle, poids) || this;
    }
    return Incassable;
}(Materiel));
exports.Incassable = Incassable;
