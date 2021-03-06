export abstract class Vehicule
{
    // attributs //
    private matricule : number;
    private modele : string;
    private annee : number;
    private prix : number;
    private type : string;
    static dernierMat = 0;

    constructor(modele? : string, annee? : number, prix? : number, type? : string)
    {
        Vehicule.dernierMat ++;
        this.matricule = Vehicule.dernierMat; /* autre version pour incrementer l'id*/
        this.modele = modele;
        this.annee = annee;
        this.prix = prix;
        this.type = type;        
    }
    public getMatricule() : number
    {
        return this.matricule ;
    }
    public setMatricule(matricule : number)
    {
        this.matricule = matricule;
    }

    public getModele() : string
    {
        return this.modele ;
    }
    public setModele(modele : string)
    {
        this.modele = modele;
    }

    public getAnnee() : number
    {
        return this.annee ;
    }
    public setAnnee(annee : number)
    {
        this.annee = annee;
    }

    public getPrix() : number
    {
        return this.prix ;
    }
    public setPrix(prix : number)
    {
        this.prix = prix;
    }

    public getType() : string
    {
        return this.type ;
    }
    public setType(type : string)
    {
        this.type = type;
    }
    
    toString() : string
    {
        return ("matricule : " + this.matricule + " // modele : " + this.modele + " // annee : " + this.annee + " // prix : " + this.prix + " // type : " + this.type)
          
    }
}

export class Voiture extends Vehicule
{
    static nbvoiture = 0;    

    constructor(modele? : string, annee? : number, prix? : number, type? : string)
    {
        super(modele, annee, prix, type);
        Voiture.nbvoiture ++;               
    }
    toString() : string
    {
        return (super.toString() + " // nb de voitures : " + Voiture.nbvoiture)
    }
}
 export class Camion extends Vehicule
{   
    static nbcam = 0;
     

    constructor(modele? : string, annee? : number, prix? : number, type? : string)
    {
        super(modele, annee, prix, type);
        Camion.nbcam ++;               
    }

    toString() : string
    {
        return (super.toString() + " // nb de camion : " + Camion.nbcam)
    }
}
export class Moto extends Vehicule
{   
    static nbmoto = 0;     

    constructor(modele? : string, annee? : number, prix? : number, type? : string)
    {
        super(modele, annee, prix, type);
        Moto.nbmoto ++;              
    } 
    
    toString() : string
    {
        return (super.toString() + " // nb de moto : " + Moto.nbmoto)
    }
}
export class Tracteur extends Vehicule
{   
    static nbtrac = 0;     

    constructor(modele? : string, annee? : number, prix? : number, type? : string)
    {
        super(modele, annee, prix, type);
        Tracteur.nbtrac ++;              
    }

    toString() : string
    {
        return (super.toString() + " // nb de tracteur : " + Tracteur.nbtrac)
    }
}

let voiture = new Voiture ("fiat", 2000, 5000, "suv");
console.log(voiture.toString());
let voiture2 = new Voiture ("ferrari", 2018, 65000, "sport");
console.log(voiture2.toString());

let camion = new Camion ("renault", 2015, 50000, "remorque");
console.log(camion.toString());
let camion2 = new Camion ("renault", 2015, 50000, "remorque");
console.log(camion2.toString());

let moto = new Moto ("yamaha", 2005, 3000, "trail");
console.log(moto.toString());

let tracteur = new Tracteur ("relou", 3015, 100552, "caraille");
console.log(tracteur.toString());

let tracteur1 = new Tracteur ("azerty", 2015, 12300, "caraille");
console.log(tracteur1.toString());

console.log("nb total de vehicules : " + Vehicule.dernierMat);

console.log("nb de voitures : " + Voiture.nbvoiture + " // nb de camions : " + Camion.nbcam + " // nb de moto : " + Moto.nbmoto + " // nb de tracteur : " + Tracteur.nbtrac )


