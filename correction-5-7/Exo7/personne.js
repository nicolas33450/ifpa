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
var Personne = /** @class */ (function () {
    function Personne(nom, prenom, adresse) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
    }
    Personne.prototype.toString = function () {
        return (" | personne : " + this.nom + " " + this.prenom + " " + this.adresse);
    };
    Personne.prototype.getNom = function () {
        return this.nom;
    };
    Personne.prototype.setPrenom = function (prenom) {
        this.prenom = prenom;
    };
    Personne.prototype.getPrenom = function () {
        return this.prenom;
    };
    Personne.prototype.setAdresse = function (adresse) {
        this.adresse = adresse;
    };
    Personne.prototype.getAdresse = function () {
        return this.adresse;
    };
    Personne.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    return Personne;
}());
exports.Personne = Personne;
var Etudiant = /** @class */ (function (_super) {
    __extends(Etudiant, _super);
    function Etudiant(nom, prenom, adresse, ecole) {
        var _this = _super.call(this, nom, prenom, adresse) || this;
        _this.ecole = ecole;
        return _this;
    }
    Etudiant.prototype.getEcole = function () {
        return this.ecole;
    };
    Etudiant.prototype.setEcole = function (ecole) {
        this.ecole = ecole;
    };
    Etudiant.prototype.suivreCours = function () {
        console.log("l'étudiant suit le cours");
    };
    Etudiant.prototype.passeExamen = function () {
        console.log("l'étudiant passe un examen");
    };
    Etudiant.prototype.toString = function () {
        return (" |  Etudiant : " + _super.prototype.toString.call(this) + "école : " + this.ecole);
    };
    return Etudiant;
}(Personne));
exports.Etudiant = Etudiant;
var Employe = /** @class */ (function (_super) {
    __extends(Employe, _super);
    function Employe(nom, prenom, adresse, lieuDeTravail) {
        var _this = _super.call(this, nom, prenom, adresse) || this;
        _this.lieuDeTravail = lieuDeTravail;
        return _this;
    }
    Employe.prototype.getLieuDeTravail = function () {
        return this.lieuDeTravail;
    };
    Employe.prototype.setLieuDeTravail = function (lieuDeTravail) {
        this.lieuDeTravail = lieuDeTravail;
    };
    return Employe;
}(Personne));
exports.Employe = Employe;
var Professeur = /** @class */ (function (_super) {
    __extends(Professeur, _super);
    function Professeur(nom, prenom, adresse, lieuDeTravail, matiere) {
        var _this = _super.call(this, nom, prenom, adresse, lieuDeTravail) || this;
        _this.matiere = matiere;
        return _this;
    }
    Professeur.prototype.getMatiere = function () {
        return this.matiere;
    };
    Professeur.prototype.setMatiere = function (matiere) {
        this.matiere = matiere;
    };
    Professeur.prototype.attribuerNote = function () {
        console.log("Le prof attribue une note");
    };
    return Professeur;
}(Employe));
exports.Professeur = Professeur;
