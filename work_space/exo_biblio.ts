class Biblio
{
    id : number;
    nom : string;
    nomdreDeLivreMax : number;
    listeDeLivre : Livre[] = [];
    adresse : string;
    ville : string;
    nbLivre : number;


    constructor(id? : number, nom? : string, nomdreDeLivreMax? : number, adresse? : string, ville? : string)
    {
        this.id = id;
        this.nom = nom;
        this.nomdreDeLivreMax = nomdreDeLivreMax;
        this.adresse = adresse ;
        this.ville = ville;
        // initialisation du tableau de livre en fonction du nb de livre //
        if (nomdreDeLivreMax != null)
        {
            this.listeDeLivre = new Array<Livre>(this.nomdreDeLivreMax);
        }
        else 
        {
            this.listeDeLivre = new Array<Livre>(5);
        }

        this.nbLivre = 0;
    }

    getId() : number
    {
        return this.id ;
    }
    setId(id : number)
    {
        this.id = id;
    }
    getNom() : string
    {
        return this.nom ;
    }
    setNom(nom : string)
    {
        this.nom = nom;
    }
    getNomdreDeLivreMax() : number
    {
        return this.nomdreDeLivreMax ;
    }
    setNomdreDeLivreMax(nomdreDeLivreMax : number)
    {
        this.nomdreDeLivreMax = nomdreDeLivreMax;
    }
    getListeDeLivre() : Livre[]
    {
        return this.listeDeLivre ;
    }    
    getAdresse() : string
    {
        return this.adresse ;
    }
    setAdresse(adresse : string)
    {
        this.adresse = adresse;
    }
    getVille() : string
    {
        return this.ville ;
    }
    setVille(ville : string)
    {
        this.ville = ville;
    }

    getNblivre() : number
    {
        return this.nbLivre ;
    }
    setNblivre(nbLivre : number)
    {
        this.nbLivre = nbLivre;
    }

    addLivre(livre : Livre)
    {
        if (this.nbLivre < this.nomdreDeLivreMax)
        {
            this.listeDeLivre[livre.getId() - 1] = livre;
            this.nbLivre ++ ;
        }
        else 
        {
            console.log(" impossible d'ajouter d'autre livres !!");
        }
    }

    toStringB() : string
    {
        let result : string;
        result = this.nom + "\n liste des livres : " ;
        for (let livre of this.listeDeLivre)
    {
        if (livre != null)
        {
            result = result + '\n' + livre.toStringL();
        }
    }
    return result;
}
    // {
    //     return ("ID : " + this.id + " - nom : " + this.nom + " - nb de livres max : " + this.nomdreDeLivreMax  + " -  nb de livres : " + this.nbLivre + " - adresse : " + this.adresse + " - ville : " + this.ville);
    // }
       
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

    getId() : number
    {
        return this.id ;
    }
    setId(id : number)
    {
        this.id = id;
    }
    getTitre() : string
    {
        return this.titre ;
    }
    setTitre(titre : string)
    {
        this.titre = titre;
    }
    getAuteur() : string
    {
        return this.auteur ;
    }
    setAuteur(auteur : string)
    {
        this.auteur = auteur;
    }
    getPrix() : number
    {
        return this.prix ;
    }
    setPrix(prix : number)
    {
        this.prix = prix;
    }

    toStringL() : string
    {
        return ("ID : " + this.id + " - titre : " + this.titre + " - auteur : " + this.auteur + " - prix : " + this.prix + " " + this.EURO);
    }

}
   
let biblio1 = new Biblio(1, "WTF", 500, "rue de boulon", "bordeaux");
let livre = new Livre( "ninou", "toto", 50);
let livre1 = new Livre( "azerty", "poulot", 10);
let livre2 = new Livre( "treup", "lili", 10);

biblio1.addLivre(livre);
biblio1.addLivre(livre1);
biblio1.addLivre(livre2);

console.log(biblio1.toStringB());
//console.log(biblio1.getListeDeLivre());














