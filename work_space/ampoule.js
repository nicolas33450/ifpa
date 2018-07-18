var ampoule = /** @class */ (function () {
    function ampoule() {
        this.allume = true;
        this.couleur = "blanche";
    }
    ampoule.prototype.allumer = function () {
        this.allume = true;
    };
    ampoule.prototype.eteindre = function () {
        this.allume = false;
    };
    ampoule.prototype.changercouleur = function (couleur) {
        this.couleur = couleur;
    };
    return ampoule;
}());
var monAmpoule = new ampoule();
console.log("couleur de mon ampoule : " + monAmpoule.couleur);
