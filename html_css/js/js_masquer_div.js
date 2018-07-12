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

function remove()
{
    document.getElementById('texte3').classList.remove('texte3');
}


document.getElementById('btn2').addEventListener('click', cacher);

document.getElementById('btn1').addEventListener('click', afficher);

document.getElementById('btn3').addEventListener('click', jaune);

document.getElementById('btn4').addEventListener('click', blanc);

document.getElementById('btn5').addEventListener('click', change);

document.getElementById('btn6').addEventListener('click', remove);