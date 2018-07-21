var Biblio = /** @class */ (function () {
    function Biblio(id, nom, nomdreDeLivreMax, adresse, ville) {
        this.listeDeLivre = [];
        this.id = id;
        this.nom = nom;
        this.nomdreDeLivreMax = nomdreDeLivreMax;
        this.adresse = adresse;
        this.ville = ville;
        // initialisation du tableau de livre en fonction du nb de livre //
        if (nomdreDeLivreMax != null) {
            this.listeDeLivre = new Array(this.nomdreDeLivreMax);
        }
        else {
            this.listeDeLivre = new Array(5);
        }
        this.nbLivre = 0;
    }
    Biblio.prototype.getId = function () {
        return this.id;
    };
    Biblio.prototype.setId = function (id) {
        this.id = id;
    };
    Biblio.prototype.getNom = function () {
        return this.nom;
    };
    Biblio.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    Biblio.prototype.getNomdreDeLivreMax = function () {
        return this.nomdreDeLivreMax;
    };
    Biblio.prototype.setNomdreDeLivreMax = function (nomdreDeLivreMax) {
        this.nomdreDeLivreMax = nomdreDeLivreMax;
    };
    Biblio.prototype.getListeDeLivre = function () {
        return this.listeDeLivre;
    };
    Biblio.prototype.getAdresse = function () {
        return this.adresse;
    };
    Biblio.prototype.setAdresse = function (adresse) {
        this.adresse = adresse;
    };
    Biblio.prototype.getVille = function () {
        return this.ville;
    };
    Biblio.prototype.setVille = function (ville) {
        this.ville = ville;
    };
    Biblio.prototype.getNblivre = function () {
        return this.nbLivre;
    };
    Biblio.prototype.setNblivre = function (nbLivre) {
        this.nbLivre = nbLivre;
    };
    Biblio.prototype.addLivre = function (livre) {
        if (this.nbLivre < this.nomdreDeLivreMax) {
            this.listeDeLivre[livre.getId() - 1] = livre;
            this.nbLivre++;
        }
        else {
            console.log(" impossible d'ajouter d'autre livres !!");
        }
    };
    Biblio.prototype.toStringB = function () {
        var result;
        result = this.nom + "\n liste des livres : ";
        for (var _i = 0, _a = this.listeDeLivre; _i < _a.length; _i++) {
            var livre_1 = _a[_i];
            if (livre_1 != null) {
                result = result + '\n' + livre_1.toStringL();
            }
        }
        return result;
    };
    return Biblio;
}());
var Livre = /** @class */ (function () {
    function Livre(titre, auteur, prix) {
        this.id = Livre.dernierId; /* autre version pour incrementer l'id*/
        Livre.dernierId++; /* autre version pour incrementer l'id*/
        this.titre = titre;
        this.auteur = auteur;
        this.prix = prix;
        this.EURO = "€";
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
    Livre.prototype.toStringL = function () {
        return ("ID : " + this.id + " - titre : " + this.titre + " - auteur : " + this.auteur + " - prix : " + this.prix + " " + this.EURO);
    };
    Livre.dernierId = 1; // pas de get te set pour le attributs static //
    return Livre;
}());
var biblio1 = new Biblio(1, "WTF", 500, "rue de boulon", "bordeaux");
var livre = new Livre("ninou", "toto", 50);
var livre1 = new Livre("azerty", "poulot", 10);
var livre2 = new Livre("treup", "lili", 10);
biblio1.addLivre(livre);
biblio1.addLivre(livre1);
biblio1.addLivre(livre2);
console.log(biblio1.toStringB());
//console.log(biblio1.getListeDeLivre());
