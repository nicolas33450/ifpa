"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Vehicule = /** @class */ (function () {
    function Vehicule(modele, annee, prix, type) {
        Vehicule.dernierMat++;
        this.matricule = Vehicule.dernierMat; /* autre version pour incrementer l'id*/
        this.modele = modele;
        this.annee = annee;
        this.prix = prix;
        this.type = type;
    }
    Vehicule.prototype.getMatricule = function () {
        return this.matricule;
    };
    Vehicule.prototype.setMatricule = function (matricule) {
        this.matricule = matricule;
    };
    Vehicule.prototype.getModele = function () {
        return this.modele;
    };
    Vehicule.prototype.setModele = function (modele) {
        this.modele = modele;
    };
    Vehicule.prototype.getAnnee = function () {
        return this.annee;
    };
    Vehicule.prototype.setAnnee = function (annee) {
        this.annee = annee;
    };
    Vehicule.prototype.getPrix = function () {
        return this.prix;
    };
    Vehicule.prototype.setPrix = function (prix) {
        this.prix = prix;
    };
    Vehicule.prototype.getType = function () {
        return this.type;
    };
    Vehicule.prototype.setType = function (type) {
        this.type = type;
    };
    Vehicule.prototype.toString = function () {
        return ("matricule : " + this.matricule + " // modele : " + this.modele + " // annee : " + this.annee + " // prix : " + this.prix + " // type : " + this.type);
    };
    Vehicule.dernierMat = 0;
    return Vehicule;
}());
exports.Vehicule = Vehicule;
var Voiture = /** @class */ (function (_super) {
    __extends(Voiture, _super);
    function Voiture(modele, annee, prix, type) {
        var _this = _super.call(this, modele, annee, prix, type) || this;
        Voiture.nbvoiture++;
        return _this;
    }
    Voiture.prototype.toString = function () {
        return (_super.prototype.toString.call(this) + " // nb de voitures : " + Voiture.nbvoiture);
    };
    Voiture.nbvoiture = 0;
    return Voiture;
}(Vehicule));
exports.Voiture = Voiture;
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(modele, annee, prix, type) {
        var _this = _super.call(this, modele, annee, prix, type) || this;
        Camion.nbcam++;
        return _this;
    }
    Camion.prototype.toString = function () {
        return (_super.prototype.toString.call(this) + " // nb de camion : " + Camion.nbcam);
    };
    Camion.nbcam = 0;
    return Camion;
}(Vehicule));
exports.Camion = Camion;
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(modele, annee, prix, type) {
        var _this = _super.call(this, modele, annee, prix, type) || this;
        Moto.nbmoto++;
        return _this;
    }
    Moto.prototype.toString = function () {
        return (_super.prototype.toString.call(this) + " // nb de moto : " + Moto.nbmoto);
    };
    Moto.nbmoto = 0;
    return Moto;
}(Vehicule));
exports.Moto = Moto;
var Tracteur = /** @class */ (function (_super) {
    __extends(Tracteur, _super);
    function Tracteur(modele, annee, prix, type) {
        var _this = _super.call(this, modele, annee, prix, type) || this;
        Tracteur.nbtrac++;
        return _this;
    }
    Tracteur.prototype.toString = function () {
        return (_super.prototype.toString.call(this) + " // nb de tracteur : " + Tracteur.nbtrac);
    };
    Tracteur.nbtrac = 0;
    return Tracteur;
}(Vehicule));
exports.Tracteur = Tracteur;
var voiture = new Voiture("fiat", 2000, 5000, "suv");
console.log(voiture.toString());
var voiture2 = new Voiture("ferrari", 2018, 65000, "sport");
console.log(voiture2.toString());
var camion = new Camion("renault", 2015, 50000, "remorque");
console.log(camion.toString());
var camion2 = new Camion("renault", 2015, 50000, "remorque");
console.log(camion2.toString());
var moto = new Moto("yamaha", 2005, 3000, "trail");
console.log(moto.toString());
var tracteur = new Tracteur("relou", 3015, 100552, "caraille");
console.log(tracteur.toString());
var tracteur1 = new Tracteur("azerty", 2015, 12300, "caraille");
console.log(tracteur1.toString());
console.log("nb total de vehicules : " + Vehicule.dernierMat);
console.log("nb de voitures : " + Voiture.nbvoiture + " // nb de camions : " + Camion.nbcam + " // nb de moto : " + Moto.nbmoto + " // nb de tracteur : " + Tracteur.nbtrac);
