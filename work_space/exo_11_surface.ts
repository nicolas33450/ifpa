abstract class Terrain 
{
    private forme  : Forme[] = []
    constructor()
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

    toString() : string{
        return (" aire du terrain : " + )
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


let rectangle1 = new Rectangle( 100, 50);
let rectangle2 = new Rectangle( 100, 50);
let rectangle3 = new Rectangle( 100, 50);
console.log(rectangle1.toString());