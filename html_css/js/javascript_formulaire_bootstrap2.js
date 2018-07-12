function afficher()
{
    window.alert('coucou');
    document.getElementById('bouton3').removeEventListener('click', afficher);
}

document.getElementById('bouton2').onclick = function()
{
    afficher();
}

document.getElementById('bouton3').addEventListener('click', afficher);

