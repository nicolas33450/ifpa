class Biblio
{
    id : number;
    nom : string;
    nomdreDeLivreMax : number;
    listeDeLivre : Array<500>;
    adresse : string;
    ville : string;


    constructor(id? : number, nom? : string, nomdreDeLivreMax? : number, adresse? : string, ville? : string)
    {
        this.id = id;
        this.nom = nom;
        this.nomdreDeLivreMax = nomdreDeLivreMax;
        this.adresse = adresse ;
        this.ville = ville;
    }

    toStringB() : string
    {
        return ("ID : " + this.id + " - nom : " + this.nom + " - nb de livres max : " + this.nomdreDeLivreMax  + " - adresse : " + this.adresse + " - ville : " + this.ville);
    }
    
}
class Livre 
{
    static dernierId = 1; // pas de get te set pour le attributs static //
    id : number;
    titre : string;
    auteur : string;
    prix : number;
    EURO : string;

    constructor(titre? : string, auteur? : string, prix? : number)
    {
        this.id = Livre.dernierId; /* autre version pour incrementer l'id*/
        Livre.dernierId ++; /* autre version pour incrementer l'id*/
        this.titre = titre;
        this.auteur = auteur;
        this.prix = prix;
        this.EURO = "€";
    }

    toStringL() : string
    {
        return ("ID : " + this.id + " - titre : " + this.titre + " - auteur : " + this.auteur + " - prix : " + this.prix + " " + this.EURO);
    }

}
   
let biblio1 = new Biblio(1, "toto", 500, "rue de boulon", "bordeaux");
console.log(biblio1.toStringB());

let livre1 = new Livre( "tyty", "toto", 50);
console.log(livre1.toStringL());

let livre2 = new Livre( "fgfgfgf", "aqdadada", 10);
console.log(livre2.toStringL());


	
		
 







