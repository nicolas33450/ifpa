export class Rectangle
 {
    longueur : number;
    largeur : number;

    constructor(longueur? :number, largeur? : number)
    {
        this.longueur = longueur;
        this.largeur = largeur;

    }
    getLongueur() : number
    {
        return this.longueur ;
    }
    setLongueur(longueur : number)
    {
        this.longueur = longueur;
    }
    getLargeur() : number
    {
        return this.largeur ;
    }
    setlargeur(largeur : number)
    {
        this.largeur = largeur;
    }

    aire() : number
    {
        return (this.longueur * this.largeur);
    }
    perimetre() : number
    {
        return ((this.longueur + this.largeur) * 2 ); 
    }
    isCarre() : string
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

abstract class Figure
{
    constructor()
    {

    }
}

