class ampoule 
{
    // attributs //
    allume : boolean;
    couleur : string;

    constructor(){
        this.allume = true;
        this.couleur = "blanche";
    }

    allumer(){
        this.allume = true;
    }

    eteindre(){
        this.allume = false;
    }

    changercouleur(couleur : string){
        this.couleur = couleur;
    }

 }

 let monAmpoule = new ampoule();
 console.log("couleur de mon ampoule : " + monAmpoule.couleur);
