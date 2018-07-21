import { Livre } from "../exo5/livre"

class Bibliotheque{
    id : number;
    nom : string;
    nombreDeLivreMax : number;
    listeLivre : Livre[] = [];
    adresse : string;
    ville : string;
    nbLivre : number;

    constructor(id? : number, nom? : string, nombreDeLivreMax? : number, adresse? : string, ville? : string){
        this.id = id;
        this.nom = nom;
        this.nombreDeLivreMax = nombreDeLivreMax;
        this.adresse = adresse
        this.ville = ville
        // initialisation du tableau de livre en fonction du nombre de livre
        if (nombreDeLivreMax != null){
            this.listeLivre = new Array<Livre>(this.nombreDeLivreMax);
        }else {
            this.listeLivre = new Array<Livre>(5);
        }
        this.nbLivre = 0;
        
    }

    getId() : number{
        return this.id;
    }

    setId(id : number){
        this.id = id;
    }

    getNbLivre() : number{
        return this.nbLivre;
    }

    setNbLivre(nbLivre : number){
        this.nbLivre = nbLivre;
    }

    getNom() : string{
        return this.nom;
    }

    setNom(nom : string){
        this.nom = nom;
    }

    getNombreDeLivreMax() : number{
        return this.nombreDeLivreMax;
    }

    setNombreDeLivreMax(nombreDeLivreMax : number){
        this.nombreDeLivreMax = nombreDeLivreMax;
    }

    getListeLivre() : Livre[]{
        return this.listeLivre;
    }

    setListeLivre(listeLivre){
        this.listeLivre = listeLivre;
    }

    addLivre(monLivre : Livre){
        let cpt = 0;
        if (this.nbLivre < this.nombreDeLivreMax){
            this.listeLivre[monLivre.getId()-1] = monLivre;
            this.nbLivre++;
        }  
        else{
            console.log("pas possible d'ajouter un nouveau livre")  
        }    
        
    }

    getAdresse() : string{
        return this.adresse;
    }

    setAdresse(adresse : string){
        this.adresse = adresse;
    }

    getVille() : string{
        return this.ville;
    }

    setVille(ville : string){
        this.ville = ville;
    }

    toString() : string{
        let result : string;
        result = this.nom + "\n liste des livres : " ;
        for (let monLivre of this.listeLivre){
            if (monLivre != null ){
                result += "\n" + monLivre.toString();
            } 
        }
        return result;
    }


}


// début programme
let bibli = new Bibliotheque(1,"bibli du centre",3,"3 rue des chenes","Bordeaux");
console.log("Longueur du tableau de livre : " +bibli.getListeLivre().length)

let livre1 = new Livre("martine à la montagne","mr Dupont",30);
let livre2 = new Livre("martine à la plage","mr Dupont",20);
let livre3 = new Livre("martine à la plage","mr Dupont",20);
let livre4 = new Livre("martine à la plage","mr Dupont",20);

bibli.addLivre(livre1);
bibli.addLivre(livre2);
bibli.addLivre(livre3);
bibli.addLivre(livre4);


console.log("liste des livres");
let listeLivreBibli = bibli.getListeLivre();
 for (let i = 0; i<listeLivreBibli.length; i ++){
    let livre : Livre
    livre = listeLivreBibli[i];
    if (livre != null) {
        console.log(livre.getTitre());
    }
    
}
//console.log(bibli.toString());


