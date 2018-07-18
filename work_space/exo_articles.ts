class Articles
{
    reference : number;
    designation : string;
    prixHT : number;
    static tauxTVA = 21.6;
    

    constructor()
    {
        this.reference = 1;
        this.designation = "lunettes";
        this.prixHT = 50;
        
    }

    getReference() : number
    {
        return this.reference ;
    }

    setReference(reference : number)
    {
        this.reference = reference;
    }

    getDesignation() : string
    {
        return this.designation;
    }

    setDesignation(designation : string)
    {
        this.designation = designation;
    }

    getPrixHT() : number
    {
        return this.prixHT;
    }

    setPrixHT(prixHT : number)
    {
        this.prixHT = prixHT;
    }

    calculerPrixTTC() : number
    {
        return (this.prixHT + (this.prixHT * Articles.tauxTVA/100));
       
    }

    afficherArticles() : string
    {
        return ("reference : " + this.reference + " - designation : " + this.designation + " - prixHT : " + this.prixHT + " - tauxTVA : " + this.calculerPrixTTC());
    }
}


let article1 =  new Articles;// declaration et instanciation en meme temps//
let article2 =  new Articles;
let article3 =  new Articles;
let article4 =  new Articles;

article1.setReference(1);
article1.setDesignation("lunette ray-ban");
article1.setPrixHT(150);
console.log(article1.afficherArticles());

article2.setReference(2);
article2.setDesignation("lunette loulou");
article2.setPrixHT(130);
console.log(article2.afficherArticles());

article3.setReference(3);
article3.setDesignation("lunette poupou");
article3.setPrixHT(230);
console.log(article3.afficherArticles());

article4.setReference(4);
article4.setDesignation("lunette tintin");
article4.setPrixHT(200);
console.log(article4.afficherArticles());






















