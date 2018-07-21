 export abstract class Batiment 
{
    private adresse : string;

    constructor(adresse? : string)
    {
        this.adresse = adresse;
    }  

    public getAdresse(): string
    {
		return this.adresse;
	}

   
    public setAdresse(adresse: string)
    {
		this.adresse = adresse;
    }
    
    toString() : string
    {
        return ("L'adresse du batiment : " + this.adresse);
    }

}

export class Maison extends Batiment
{
    private nbPieces : number;

    constructor(adresse? : string, nbPieces? : number)
    {
        super(adresse)
        this.nbPieces = nbPieces;
    }

    public getNbPieces(): number
    {
		return this.nbPieces;
	}   
    public setNbPieces(nbPieces: number)
    {
		this.nbPieces = nbPieces;
    }
    toString() : string
    {
        return (super.toString() + " - Le nombres de pieces est de : " + this.nbPieces);
    }
}

export class Immeuble extends Batiment
{ 
    private nbAppart  : number;

    constructor(adresse?  :string, nbAppart? : number)
    {
        super(adresse);
        this.nbAppart = nbAppart;
    }

    public getNbAppart(): number
    {
		return this.nbAppart;
	}   
    public setNbAppart(nbAppart: number)
    {
		this.nbAppart = nbAppart;
    }
    
    toString() : string
    {
        return (super.toString() + " - Le nombres d'appart est de : " + this.nbAppart);
    }
}

let maison1 = new Maison ("2 rue de toto", 12);
console.log(maison1.toString());

let immeuble1 = new Immeuble ("8 reu de tyty", 10);
console.log(immeuble1.toString());





