import { Personne, Professeur, Employe, Etudiant } from "./personne"
// debut pgm
let etudiant1 = new Etudiant("Durand","jean","45 av charles","jean moulin");
let etudiant2 = new Etudiant("Alphonse","jp","48 av charles","jean moulin");


let employe1 = new Employe("Nanard","serge","3 rue des fleurs","ici");
let employe2 = new Employe("Dupont","marc","3 rue des fleurs","labas");

let prof1 = new Professeur("Canon","olivier","5 rue des fleurs","ici","math");
let prof2 = new Professeur("Carki","jj","14 rue des fleurs","labas","comm et EPS");

console.log(etudiant1.toString());
console.log(etudiant2.toString());
console.log(employe1.toString());
console.log(employe2.toString());
console.log(prof1.toString());
console.log(prof2.toString());

