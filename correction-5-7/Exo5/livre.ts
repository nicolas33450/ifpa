export class Livre{
    id : number;
    titre : string;
    auteur : string;
    prix : number;
    static dernierId = 1;

    constructor(titre? : string, auteur? : string, prix?: number){
        this.id = Livre.dernierId;
        Livre.dernierId++;
        this.titre = titre;
        this.auteur = auteur;
        this.prix = prix;
    }

    getId() : number{
        return this.id;
    }

    setId(id : number){
        this.id = id;
    }

    getTitre() : string{
        return this.titre;
    }

    setTitre(titre : string){
        this.titre = titre;
    }

    getAuteur() : string{
        return this.auteur;
    }

    setAuteur(auteur : string){
        this.auteur = auteur;
    }

    getPrix() : number{
        return this.prix;
    }

    setPrix(prix : number){
        this.prix = prix;
    }

    toString() : string{
        return (this.id+ " - "+this.titre+ " - "+this.auteur+ " - "+this.prix);
    }
}



