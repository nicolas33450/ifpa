var livre = /** @class */ (function () {
    function livre(titre, auteur, prix) {
        this.id = livre.dernierId; /* autre version pour incrementer l'id*/
        livre.dernierId++; /* autre version pour incrementer l'id*/
        this.titre = titre;
        this.auteur = auteur;
        this.prix = prix;
        this.EURO = "€";
    }
    livre.prototype.getId = function () {
        return this.id;
    };
    livre.prototype.setId = function (id) {
        this.id = id;
    };
    livre.prototype.getTitre = function () {
        return this.titre;
    };
    livre.prototype.setTitre = function (titre) {
        this.titre = titre;
    };
    livre.prototype.getAuteur = function () {
        return this.auteur;
    };
    livre.prototype.setAuteur = function (auteur) {
        this.auteur = auteur;
    };
    livre.prototype.getPrix = function () {
        return this.prix;
    };
    livre.prototype.setPrix = function (prix) {
        this.prix = prix;
    };
    livre.prototype.toString = function () {
        return ("ID : " + this.id + " - titre : " + this.titre + " - auteur : " + this.auteur + " - prix : " + this.prix + " " + this.EURO);
    };
    livre.dernierId = 1; // pas de get te set pour le attributs static //
    return livre;
}());
var livre1 = new livre(); // appel du constructeur //
var livre2 = new livre(); // appel du constructeur //
var livre3 = new livre(); // appel du constructeur //
var livre4 = new livre(); // appel du constructeur //
livre1.setTitre("azerty");
livre1.setAuteur("hutok");
livre1.setPrix(150);
//livre1.id = livre.dernierId; /* incrementer l'id*/
//livre.dernierId ++; /* incrementer l'id*/
console.log(livre1.toString());
livre2.setTitre("hytre");
livre2.setAuteur("politrd");
livre2.setPrix(130);
//livre2.id = livre.dernierId;
//livre.dernierId ++;
console.log(livre2.toString());
livre3.setTitre("poupou");
livre3.setAuteur("tyhjul");
livre3.setPrix(230);
//livre3.id = livre.dernierId;
//livre.dernierId ++;
console.log(livre3.toString());
livre4.setTitre("tintin");
livre4.setAuteur("lopouyt");
livre4.setPrix(200);
//livre4.id = livre.dernierId;
//livre.dernierId ++;
console.log(livre4.toString());
var livre5 = new livre("pompom", "kikikou", 30);
console.log(livre5.toString());
