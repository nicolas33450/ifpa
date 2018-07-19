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
var Personne = /** @class */ (function () {
    function Personne(nom, prenom, adresse, ecole, lieuDeTravail, matiere) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
    }
    Personne.prototype.getNom = function () {
        return this.nom;
    };
    Personne.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    Personne.prototype.getPrenom = function () {
        return this.prenom;
    };
    Personne.prototype.setPrenom = function (prenom) {
        this.prenom = prenom;
    };
    Personne.prototype.getAdresse = function () {
        return this.adresse;
    };
    Personne.prototype.setAdresse = function (adresse) {
        this.adresse = adresse;
    };
    return Personne;
}());
var Etudiant = /** @class */ (function (_super) {
    __extends(Etudiant, _super);
    function Etudiant(nom, prenom, ecole) {
        var _this = _super.call(this, nom, prenom) || this;
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
        console.log("les étudiants suivent des cours");
    };
    Etudiant.prototype.passeExamens = function () {
        console.log("les étudiants passent des examens");
    };
    Etudiant.prototype.toString = function () {
        return ("Eleve : " + " - nom : " + this.nom + " - prenom : " + this.prenom + " - ecole : " + this.ecole);
    };
    return Etudiant;
}(Personne));
var Employe = /** @class */ (function (_super) {
    __extends(Employe, _super);
    function Employe(nom, prenom, lieuDeTravail) {
        var _this = _super.call(this, nom, prenom) || this;
        _this.lieuDeTravail = lieuDeTravail;
        return _this;
    }
    Employe.prototype.getLieuDeTravail = function () {
        return this.lieuDeTravail;
    };
    Employe.prototype.setLieuDeTravail = function (lieuDeTravail) {
        this.lieuDeTravail = lieuDeTravail;
    };
    Employe.prototype.toString = function () {
        return (" Employe : " + " - nom : " + this.nom + " - prenom : " + this.prenom + " - lieu de tavail : " + this.lieuDeTravail);
    };
    return Employe;
}(Personne));
var Professeur = /** @class */ (function (_super) {
    __extends(Professeur, _super);
    function Professeur(nom, prenom, matiere) {
        var _this = _super.call(this, nom, prenom) || this;
        _this.matiere = matiere;
        return _this;
    }
    Professeur.prototype.getMatiere = function () {
        return this.matiere;
    };
    Professeur.prototype.setMatiere = function (matiere) {
        this.matiere = matiere;
    };
    Professeur.prototype.toString = function () {
        return ("Professeur = " + " - nom : " + this.nom + " - prenom : " + this.prenom + " - matiere : " + this.matiere);
    };
    return Professeur;
}(Employe));
var etudiant1 = new Etudiant("loulou", "trump", "pouloulou");
var etudiant2 = new Etudiant("aazerty", "gruoin", "pouloulou");
var professeur1 = new Professeur("pilou", "moulin", "math");
var professeur2 = new Professeur("vertui", "sertuio", "histoire");
var employe1 = new Employe("tdsfzg", "zeffzefze", "salle geo");
var employe2 = new Employe("gfzegzrg", "jtykj,uyj", "salle sport");
console.log(etudiant1.toString());
console.log(etudiant2.toString());
console.log(professeur1.toString());
console.log(professeur2.toString());
console.log(employe1.toString());
console.log(employe2.toString());
