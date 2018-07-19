"use strict";
exports.__esModule = true;
var Rectangle = /** @class */ (function () {
    function Rectangle(longueur, largeur) {
        this.longueur = longueur;
        this.largeur = largeur;
    }
    Rectangle.prototype.getLongueur = function () {
        return this.longueur;
    };
    Rectangle.prototype.setLongueur = function (longueur) {
        this.longueur = longueur;
    };
    Rectangle.prototype.getLargeur = function () {
        return this.largeur;
    };
    Rectangle.prototype.setlargeur = function (largeur) {
        this.largeur = largeur;
    };
    Rectangle.prototype.aire = function () {
        return (this.longueur * this.largeur);
    };
    Rectangle.prototype.perimetre = function () {
        return ((this.longueur + this.largeur) * 2);
    };
    Rectangle.prototype.isCarre = function () {
        if (this.longueur == this.largeur) {
            return ("c'est un carre");
        }
        else {
            return ("ce n'est pas un carre");
        }
    };
    Rectangle.prototype.toString = function () {
        return ("Longueur : " + this.longueur + " - Largeur : " + this.largeur + " - Perimetre : " + this.perimetre() + " - Aire : " + this.aire() + " - " + this.isCarre());
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var Figure = /** @class */ (function () {
    function Figure() {
    }
    return Figure;
}());
