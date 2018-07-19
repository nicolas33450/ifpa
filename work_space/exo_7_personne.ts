class Personne
{
    nom : string;
    prenom : string;
    adresse : string;
    
    
    matiere : string;

    constructor(nom? : string, prenom? : string, adresse? : string, ecole? : string, lieuDeTravail? : string, matiere? : string)
    {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;       
    }

    getNom() : string
    {
        return this.nom ;
    }
    setNom(nom : string)
    {
        this.nom = nom;
    }
    getPrenom() : string
    {
        return this.prenom ;
    }
    setPrenom(prenom : string)
    {
        this.prenom = prenom;
    }
    getAdresse() : string
    {
        return this.adresse ;
    }
    setAdresse(adresse : string)
    {
        this.adresse = adresse;
    }

}

class Etudiant extends Personne
{
        ecole : string;

       constructor(nom? : string, prenom? : string, ecole? : string, )
    {
        super(nom, prenom);
        this.ecole = ecole;
    }

    getEcole() : string
    {
        return this.ecole ;
    }
    setEcole(ecole : string)
    {
        this.ecole = ecole;
    }

    suivreCours()
    {
        console.log("les étudiants suivent des cours");
    }
    passeExamens()
    {
        console.log("les étudiants passent des examens");
    }
    toString() : string
    {
        return ("Eleve : " + " - nom : " + this.nom + " - prenom : " + this.prenom + " - ecole : "+ this.ecole);
    }

}

class Employe extends Personne
{      
     lieuDeTravail : string;

       constructor(nom? : string, prenom? : string, lieuDeTravail? : string)
    {
        super(nom, prenom);
        this.lieuDeTravail = lieuDeTravail;
    }


    getLieuDeTravail() : string
    {
        return this.lieuDeTravail ;
    }
    setLieuDeTravail(lieuDeTravail : string)
    {
        this.lieuDeTravail = lieuDeTravail;
    }
    toString() : string
    {
        return (" Employe : " + " - nom : " + this.nom + " - prenom : " + this.prenom + " - lieu de tavail : "+ this.lieuDeTravail);
    }
}

class Professeur extends Employe
{   
    constructor(nom? : string, prenom? : string, matiere? : string) 
    { 
        super(nom, prenom);
        this.matiere = matiere;
    }

    getMatiere() : string
    {
        return this.matiere ;
    }
    setMatiere(matiere : string)
    {
        this.matiere = matiere;
    }
    toString() : string
    {
        return ("Professeur = " + " - nom : " + this.nom + " - prenom : " + this.prenom + " - matiere : "+ this.matiere);
    }
    attribuerNote()
    {
        console.log("le professeur attribue des notes")
    }
}

let etudiant1 = new Etudiant("loulou", "trump", "pouloulou");
let etudiant2 = new Etudiant("aazerty", "gruoin", "pouloulou");

let professeur1 = new Professeur("pilou", "moulin", "math");
let professeur2 = new Professeur("vertui", "sertuio", "histoire");

let employe1 = new Employe("tdsfzg", "zeffzefze", "salle geo");
let employe2 = new Employe("gfzegzrg", "jtykj,uyj", "salle sport");

console.log(etudiant1.toString());
console.log(etudiant2.toString());

console.log(professeur1.toString());
console.log(professeur2.toString());

console.log(employe1.toString());
console.log(employe2.toString());
