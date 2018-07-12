function cacher()
{
    document.getElementById('texte2').style.visibility = 'hidden';
    document.getElementById('texte2').style.display = 'none';
    document.getElementById('texte2').style.color = '#000';
}



function afficher()
{
    document.getElementById('texte2').style.visibility = 'visible';
    document.getElementById('texte2').style.display = 'block';
}


function jaune()
{
    document.getElementById('texte2').style.color = '#a8a837';

}

function blanc()
{
    document.getElementById('texte2').style.color = '#fff';
}



function change()
{
    document.getElementById('texte3').classList.add('texte3');
}

function changer()
{
     if (document.getElementById('texte3').classList.contains('txt'))
    {
        document.getElementById('texte3').classList.remove('txt');
    }
    else 
    {
        document.getElementById('texte3').classList.add('txt');
    }
     /***** permet de changer pour une seule classe ***********/
    //document.getElementById('texte3').classList.toggle('txt');
}

cacher();


document.getElementById('btn2').addEventListener('click', cacher);

document.getElementById('btn1').addEventListener('click', afficher);

document.getElementById('btn3').addEventListener('click', jaune);

document.getElementById('btn4').addEventListener('click', blanc);

//document.getElementById('btn5').addEventListener('click', change);

//document.getElementById('btn6').addEventListener('click', remove);

document.getElementById('texte3').addEventListener('click', changer);
































