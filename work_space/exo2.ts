class Voiture
{
    // attributs //
    matricule : number;
    modele : string;
    annee : number;
    prix : number;
    accelere : boolean;
    demarre : boolean;
    
    constructor(matricule?, modele?, annee?, prix?, accelere?, demarre?)
    {
        this.matricule = matricule;
        this.modele = modele;
        this.annee = annee;
        this.prix = prix;
        this.accelere = accelere;
        this.demarre = demarre;        
    } 

    demarrer()
    {
        if (this.demarre = false)
			{
                console.log  (" le vehicule est démarré")
                 this.demarre = true
            }
    }

    accelerer()
    {
        if (this.demarre = true)
			{
                console.log (" le vehicule accélère")
			this.accelere = true	
            this.accelere = false
            }
    }
    
    afficher()
    {
        console.log (" saisi de la voiture : " + this.matricule + " " + this.modele + " " + this.annee + " " + this.prix)
    }
}

let tabvoiture = new Array<Voiture>(4);
let matricule = 0;
let i : number;
let voiture : Voiture;

    for ( i = 0; i < 4 ; i++)
    {
        let voiture = new Voiture();
        matricule ++;
        
        voiture.matricule = matricule;
        voiture.modele = "ferrari"; 
        voiture.annee = 2018; 
        voiture.prix  = 30500; 
        tabvoiture[i] = voiture;   
        //tabvoiture.push(voiture);// 
        //variante en ne déclarant //
        //pas un tableau avec new array//        
    }

    for (let voiture of tabvoiture)
    {
        voiture.afficher();
    }