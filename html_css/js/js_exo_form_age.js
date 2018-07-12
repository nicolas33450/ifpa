function choixcouleur()
{
    var tabcouleur = document.getElementsByName('couleur');
    var info = 'vous n\'avez rien choisi ! ';
    
    for (i = 0; i < tabcouleur.length; i++)
        {
            if(tabcouleur[i].checked == true)
                {
                  info = 'vous avez choisi la couleur : ' + tabcouleur[i].value;
                    break;
                }
        }
    document.getElementById('res').innerHTML = info;
    
    
}


document.getElementById('choix').addEventListener('click',choixcouleur);















function affVerif()
            {
                var tabRadio1=document.getElementsByName('couleur');
                var tabRadio2=document.getElementsByName('porte');
                var tabRadio3=document.getElementsByName('opt');

                var info1='Vous n\'avez pas fait de choix';
                var info2='Vous n\'avez pas fait de choix';
                var info3='Vous n\'avez pas fait de choix';
                
                

                for(var i=0;i<(tabRadio1,tabRadio2,tabRadio3).length;i++)
                {
                    if(tabRadio1[i].checked)
                    {
                        info1=tabRadio1[i].value;
                        break;
                    }
                }

/*
                for(var i=0;i<tabRadio2.length;i++)

                {
                    if(tabRadio2[i].checked)
                    {
                        info2=tabRadio2[i].value;
                        break;
                    }
                }


                for(var i=0;i<tabRadio3.length;i++)
                {
                    if(tabRadio3[i].checked)
                    {
                        info3=tabRadio3[i].value;
                        break;
                    }
                }*/
                
                
                document.getElementById('res').innerHTML='<br /><br />Vos choix : <br /> Couleur '+info1+'<br />Nombre de portes : '+info2+'<br />Pack options : '+info3;}document.getElementById('b1').addEventListener('click',affVerif);



















