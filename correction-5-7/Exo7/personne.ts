export class Personne{
     nom : string;
     prenom : string;
     adresse : string;

    constructor(nom? : string, prenom? : string, adresse? : string){
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
    }

    toString() : string{
        return (" | personne : "+this.nom + " "+ this.prenom+ " "+ this.adresse);
    }

    getNom() : string{
        return this.nom;
    }

    setPrenom( prenom : string){
        this.prenom = prenom;
    }

    getPrenom() : string{
        return this.prenom;
    }

    setAdresse( adresse : string){
        this.adresse = adresse;
    }

    getAdresse() : string{
        return this.adresse;
    }

    setNom( nom : string){
        this.nom = nom;
    }
}

export class Etudiant extends Personne{
    ecole : string;
    constructor (nom? :string, prenom? : string, adresse? : string, ecole?: string){
        super(nom,prenom,adresse);
        this.ecole = ecole;
    }

    getEcole() : string{
        return this.ecole;
    }

    setEcole( ecole : string){
        this.ecole = ecole;
    }


    suivreCours(){
        console.log("l'étudiant suit le cours");
    }
    passeExamen(){
        console.log("l'étudiant passe un examen");
    }

    toString() : string{
        return (" |  Etudiant : "+ super.toString() + "école : "+this.ecole);
    }
    
}

export class Employe extends Personne {
    lieuDeTravail : string;

    constructor (nom? :string, prenom? : string, adresse? : string, lieuDeTravail?: string){
        super(nom,prenom,adresse);
        this.lieuDeTravail = lieuDeTravail;
    }

    getLieuDeTravail() : string{
        return this.lieuDeTravail;
    }

    setLieuDeTravail( lieuDeTravail : string){
        this.lieuDeTravail = lieuDeTravail;
    }

    toString() : string{
        return (" | Employe : "+ super.toString() + "lieu de travail : "+this.lieuDeTravail);
    }
}

export class Professeur extends Employe{
    matiere : string;

    constructor (nom? :string, prenom? : string, adresse? : string, lieuDeTravail?: string, matiere? : string){
        super(nom,prenom,adresse,lieuDeTravail);
        this.matiere = matiere;
    }

    getMatiere() : string{
        return this.matiere;
    }

    setMatiere( matiere : string){
        this.matiere = matiere;
    }

    attribuerNote(){
        console.log("Le prof attribue une note");
    }

    toString() : string{
        return (" | Professeur : "+ super.toString() + "matiere : "+this.matiere);
    }
}

