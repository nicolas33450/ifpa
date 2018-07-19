"use strict";
exports.__esModule = true;
var personne_1 = require("./personne");
// debut pgm
var etudiant1 = new personne_1.Etudiant("Durand", "jean", "45 av charles", "jean moulin");
var etudiant2 = new personne_1.Etudiant("Alphonse", "jp", "48 av charles", "jean moulin");
var employe1 = new personne_1.Employe("Nanard", "serge", "3 rue des fleurs", "ici");
var employe2 = new personne_1.Employe("Dupont", "marc", "3 rue des fleurs", "labas");
var prof1 = new personne_1.Professeur("Canon", "olivier", "5 rue des fleurs", "ici", "math");
var prof2 = new personne_1.Professeur("Carki", "jj", "14 rue des fleurs", "labas", "comm et EPS");
console.log(etudiant1.toString());
console.log(etudiant2.toString());
console.log(employe1.toString());
console.log(employe2.toString());
console.log(prof1.toString());
console.log(prof2.toString());
