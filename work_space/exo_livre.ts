class livre
{
    static dernierId = 1; // pas de get te set pour le attributs static //
    id : number;
    titre : string;
    auteur : string;
    prix : number;
    EURO : string;


    constructor(titre? : string, auteur? : string, prix? : number) 
    {
        this.id = livre.dernierId; /* autre version pour incrementer l'id*/
        livre.dernierId ++; /* autre version pour incrementer l'id*/
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
    toString() : string
    {
        return ("ID : " + this.id + " - titre : " + this.titre + " - auteur : " + this.auteur + " - prix : " + this.prix + " " + this.EURO);
    }
}


let livre1 = new livre(); // appel du constructeur //
let livre2 = new livre(); // appel du constructeur //
let livre3 = new livre(); // appel du constructeur //
let livre4 = new livre(); // appel du constructeur //


livre1.setTitre("azerty");
livre1.setAuteur("hutok");
livre1.setPrix(150);
//livre1.id = livre.dernierId; /* incrementer l'id*/
//livre.dernierId ++; /* incrementer l'id*/
console.log(livre1.toString());


livre2.setTitre("hytre");
livre2.setAuteur("politrd");
livre2.setPrix(130);
//livre2.id = livre.dernierId;
//livre.dernierId ++;
console.log(livre2.toString());


livre3.setTitre("poupou");
livre3.setAuteur("tyhjul");
livre3.setPrix(230);
//livre3.id = livre.dernierId;
//livre.dernierId ++;
console.log(livre3.toString());


livre4.setTitre("tintin");
livre4.setAuteur("lopouyt");
livre4.setPrix(200);
//livre4.id = livre.dernierId;
//livre.dernierId ++;
console.log(livre4.toString());

let livre5 = new livre("pompom", "kikikou", 30);
console.log(livre5.toString());




