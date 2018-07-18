var Voiture = /** @class */ (function () {
    function Voiture(matricule, modele, annee, prix, accelere, demarre) {
        this.matricule = matricule;
        this.modele = modele;
        this.annee = annee;
        this.prix = prix;
        this.accelere = accelere;
        this.demarre = demarre;
    }
    Voiture.prototype.demarrer = function () {
        if (this.demarre = false) {
            console.log(" le vehicule est démarré");
            this.demarre = true;
        }
    };
    Voiture.prototype.accelerer = function () {
        if (this.demarre = true) {
            console.log(" le vehicule accélère");
            this.accelere = true;
            this.accelere = false;
        }
    };
    Voiture.prototype.afficher = function () {
        console.log(" saisi de la voiture : " + this.matricule + " " + this.modele + " " + this.annee + " " + this.prix);
    };
    return Voiture;
}());
var tabvoiture = new Array(4);
var matricule = 0;
var i;
var voiture;
for (i = 0; i < 4; i++) {
    var voiture_1 = new Voiture();
    matricule++;
    voiture_1.matricule = matricule;
    voiture_1.modele = "ferrari";
    voiture_1.annee = 2018;
    voiture_1.prix = 30500;
    tabvoiture[i] = voiture_1;
    //tabvoiture.push(voiture);// 
    //variante en ne déclarant //
    //pas un tableau avec new array//        
}
for (var _i = 0, tabvoiture_1 = tabvoiture; _i < tabvoiture_1.length; _i++) {
    var voiture_2 = tabvoiture_1[_i];
    voiture_2.afficher();
}
