var Biblio = /** @class */ (function () {
    function Biblio(id, nom, nomdreDeLivreMax, adresse, ville) {
        this.id = id;
        this.nom = nom;
        this.nomdreDeLivreMax = nomdreDeLivreMax;
        this.adresse = adresse;
        this.ville = ville;
    }
    Biblio.prototype.toStringB = function () {
        return ("ID : " + this.id + " - nom : " + this.nom + " - nb de livres max : " + this.nomdreDeLivreMax + " - adresse : " + this.adresse + " - ville : " + this.ville);
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
    Livre.prototype.toStringL = function () {
        return ("ID : " + this.id + " - titre : " + this.titre + " - auteur : " + this.auteur + " - prix : " + this.prix + " " + this.EURO);
    };
    Livre.dernierId = 1; // pas de get te set pour le attributs static //
    return Livre;
}());
var biblio1 = new Biblio(1, "toto", 500, "rue de boulon", "bordeaux");
console.log(biblio1.toStringB());
var livre1 = new Livre("tyty", "toto", 50);
console.log(livre1.toStringL());
var livre2 = new Livre("fgfgfgf", "aqdadada", 10);
console.log(livre2.toStringL());
