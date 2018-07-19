"use strict";
exports.__esModule = true;
var Livre = /** @class */ (function () {
    function Livre(titre, auteur, prix) {
        this.id = Livre.dernierId;
        Livre.dernierId++;
        this.titre = titre;
        this.auteur = auteur;
        this.prix = prix;
    }
    Livre.prototype.getId = function () {
        return this.id;
    };
    Livre.prototype.setId = function (id) {
        this.id = id;
    };
    Livre.prototype.getTitre = function () {
        return this.titre;
    };
    Livre.prototype.setTitre = function (titre) {
        this.titre = titre;
    };
    Livre.prototype.getAuteur = function () {
        return this.auteur;
    };
    Livre.prototype.setAuteur = function (auteur) {
        this.auteur = auteur;
    };
    Livre.prototype.getPrix = function () {
        return this.prix;
    };
    Livre.prototype.setPrix = function (prix) {
        this.prix = prix;
    };
    Livre.prototype.toString = function () {
        return (this.id + " - " + this.titre + " - " + this.auteur + " - " + this.prix);
    };
    Livre.dernierId = 1;
    return Livre;
}());
exports.Livre = Livre;
// début pgm
var livre1;
livre1 = new Livre();
livre1.setTitre("martine à la plage");
livre1.setAuteur("mr Dupont");
livre1.setPrix(25);
var livre2 = new Livre("martine à la montagne", "mr Dupont", 30);
console.log(livre1.toString());
console.log(livre2.toString());
