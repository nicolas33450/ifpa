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
var Batiment = /** @class */ (function () {
    function Batiment(adresse) {
        this.adresse = adresse;
    }
    Batiment.prototype.getAdresse = function () {
        return this.adresse;
    };
    Batiment.prototype.setAdresse = function (adresse) {
        this.adresse = adresse;
    };
    Batiment.prototype.toString = function () {
        return ("L'adresse du batiment : " + this.adresse);
    };
    return Batiment;
}());
exports.Batiment = Batiment;
var Maison = /** @class */ (function (_super) {
    __extends(Maison, _super);
    function Maison(adresse, nbPieces) {
        var _this = _super.call(this, adresse) || this;
        _this.nbPieces = nbPieces;
        return _this;
    }
    Maison.prototype.getNbPieces = function () {
        return this.nbPieces;
    };
    Maison.prototype.setNbPieces = function (nbPieces) {
        this.nbPieces = nbPieces;
    };
    Maison.prototype.toString = function () {
        return (_super.prototype.toString.call(this) + " - Le nombres de pieces est de : " + this.nbPieces);
    };
    return Maison;
}(Batiment));
exports.Maison = Maison;
var Immeuble = /** @class */ (function (_super) {
    __extends(Immeuble, _super);
    function Immeuble(adresse, nbAppart) {
        var _this = _super.call(this, adresse) || this;
        _this.nbAppart = nbAppart;
        return _this;
    }
    Immeuble.prototype.getNbAppart = function () {
        return this.nbAppart;
    };
    Immeuble.prototype.setNbAppart = function (nbAppart) {
        this.nbAppart = nbAppart;
    };
    Immeuble.prototype.toString = function () {
        return (_super.prototype.toString.call(this) + " - Le nombres d'appart est de : " + this.nbAppart);
    };
    return Immeuble;
}(Batiment));
exports.Immeuble = Immeuble;
var maison1 = new Maison("2 rue de toto", 12);
console.log(maison1.toString());
var immeuble1 = new Immeuble("8 reu de tyty", 10);
console.log(immeuble1.toString());
