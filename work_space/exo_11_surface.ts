abstract class Terrain 
{
    constructor(longueur? : number, largeur? : number)
    {
        
    }
}

class Forme
{
    private longueur : number;
    private largeur : number;

    constructor(longueur? : number, largeur? : number)
    {
        this.longueur = longueur;
        this.largeur = largeur;
    }
}

class Rectangle extends Forme
{
    constructor(longueur? : number, largeur? : number)
    {
       super(longueur, largeur);
    }
}

class Triangle extends Forme
{

}

class cercle extends Forme
{

}


let rectangle1 = new Rectangle( 100, 50)