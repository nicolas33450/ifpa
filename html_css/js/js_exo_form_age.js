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







