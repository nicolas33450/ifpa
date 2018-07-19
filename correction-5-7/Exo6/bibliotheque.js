"use strict";
exports.__esModule = true;
var livre_1 = require("../exo5/livre");
var Bibliotheque = /** @class */ (function () {
    function Bibliotheque(id, nom, nombreDeLivreMax, adresse, ville) {
        this.listeLivre = [];
        this.id = id;
        this.nom = nom;
        this.nombreDeLivreMax = nombreDeLivreMax;
        this.adresse = adresse;
        this.ville = ville;
        // initialisation du tableau de livre en fonction du nombre de livre
        if (nombreDeLivreMax != null) {
            this.listeLivre = new Array(this.nombreDeLivreMax);
        }
        else {
            this.listeLivre = new Array(5);
        }
    }
    Bibliotheque.prototype.getId = function () {
        return this.id;
    };
    Bibliotheque.prototype.setId = function (id) {
        this.id = id;
    };
    Bibliotheque.prototype.getNom = function () {
        return this.nom;
    };
    Bibliotheque.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    Bibliotheque.prototype.getNombreDeLivreMax = function () {
        return this.nombreDeLivreMax;
    };
    Bibliotheque.prototype.setNombreDeLivreMax = function (nombreDeLivreMax) {
        this.nombreDeLivreMax = nombreDeLivreMax;
    };
    Bibliotheque.prototype.getListeLivre = function () {
        return this.listeLivre;
    };
    Bibliotheque.prototype.setListeLivre = function (listeLivre) {
        this.listeLivre = listeLivre;
    };
    Bibliotheque.prototype.addLivre = function (monLivre) {
        this.listeLivre[monLivre.getId() - 1] = monLivre;
    };
    Bibliotheque.prototype.getAdresse = function () {
        return this.adresse;
    };
    Bibliotheque.prototype.setAdresse = function (adresse) {
        this.adresse = adresse;
    };
    Bibliotheque.prototype.getVille = function () {
        return this.ville;
    };
    Bibliotheque.prototype.setVille = function (ville) {
        this.ville = ville;
    };
    Bibliotheque.prototype.toString = function () {
        var result;
        result = this.nom + "\n liste des livres ";
        for (var _i = 0, _a = this.listeLivre; _i < _a.length; _i++) {
            var monLivre = _a[_i];
            if (monLivre != null) {
                result += "\n" + monLivre.getTitre();
            }
        }
        return result;
    };
    return Bibliotheque;
}());
// début programme
var bibli = new Bibliotheque(1, "bibli du centre", 3, "3 rue des chenes", "Bordeaux");
console.log("Longueur du tableau de livre : " + bibli.getListeLivre().length);
var livre = new livre_1.Livre("martine à la montagne", "mr Dupont", 30);
bibli.addLivre(livre);
livre = new livre_1.Livre("martine à la plage", "mr Dupont", 20);
bibli.addLivre(livre);
console.log("liste des livres");
var listeLivreBibli = bibli.getListeLivre();
for (var i = 0; i < listeLivreBibli.length; i++) {
    var livre_2 = void 0;
    livre_2 = listeLivreBibli[i];
    if (livre_2 != null) {
        console.log(livre_2.getTitre());
    }
}
//console.log(bibli.toString());
