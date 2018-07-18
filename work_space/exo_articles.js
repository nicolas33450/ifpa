var Articles = /** @class */ (function () {
    function Articles() {
        this.reference = 1;
        this.designation = "lunettes";
        this.prixHT = 50;
    }
    Articles.prototype.getReference = function () {
        return this.reference;
    };
    Articles.prototype.setReference = function (reference) {
        this.reference = reference;
    };
    Articles.prototype.getDesignation = function () {
        return this.designation;
    };
    Articles.prototype.setDesignation = function (designation) {
        this.designation = designation;
    };
    Articles.prototype.getPrixHT = function () {
        return this.prixHT;
    };
    Articles.prototype.setPrixHT = function (prixHT) {
        this.prixHT = prixHT;
    };
    Articles.prototype.calculerPrixTTC = function () {
        return (this.prixHT + (this.prixHT * Articles.tauxTVA / 100));
    };
    Articles.prototype.afficherArticles = function () {
        return ("reference : " + this.reference + " - designation : " + this.designation + " - prixHT : " + this.prixHT + " - tauxTVA : " + this.calculerPrixTTC());
    };
    Articles.tauxTVA = 21.6;
    return Articles;
}());
var article1 = new Articles; // declaration et instanciation en meme temps//
var article2 = new Articles;
var article3 = new Articles;
var article4 = new Articles;
article1.setReference(1);
article1.setDesignation("lunette ray-ban");
article1.setPrixHT(150);
console.log(article1.afficherArticles());
article2.setReference(2);
article2.setDesignation("lunette loulou");
article2.setPrixHT(130);
console.log(article2.afficherArticles());
article3.setReference(3);
article3.setDesignation("lunette poupou");
article3.setPrixHT(230);
console.log(article3.afficherArticles());
article4.setReference(4);
article4.setDesignation("lunette tintin");
article4.setPrixHT(200);
console.log(article4.afficherArticles());
