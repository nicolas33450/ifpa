export class Rectangle
 {
    private longueur : number;
    private largeur : number;

    constructor(longueur? :number, largeur? : number)
    {
        this.longueur = longueur;
        this.largeur = largeur;

    }
    public getLongueur() : number
    {
        return this.longueur ;
    }
    public setLongueur(longueur : number)
    {
        this.longueur = longueur;
    }
    public getLargeur() : number
    {
        return this.largeur ;
    }
    public setlargeur(largeur : number)
    {
        this.largeur = largeur;
    }
    public aire() : number
    {
        return (this.longueur * this.largeur);
    }
    public perimetre() : number
    {
        return ((this.longueur + this.largeur) * 2 ); 
    }
    public isCarre() : string
    {
        if (this.longueur == this.largeur)
        {
            return ("c'est un carre");
        }
        else
        {
            return ("ce n'est pas un carre")
        }
    }
    toString() : string
    {
        return ("Longueur : " + this.longueur + " - Largeur : " + this.largeur + " - Perimetre : " + this.perimetre() + " - Aire : " + this.aire() + " - " +  this.isCarre());
    }
}

export abstract class Figure 
{   
    public constructor()
    {
        
    }
     abstract aire() : number;
   
     abstract perimetre() : number;
        
}

