/*
function copier()
{
    document.getElementById('nb2').value =
        document.getElementById('nb1').value;
}


document.getElementById('nb1').addEventListener('keyup', copier);
*/



function changer()
{
    /* var majus = document.getElementById('nb1').value.toUpperCase();
    document.getElementById('nb1').value = majus;*/ 

    /* var l = document.getElementById('nb1').value.length;

    var x = document.getElementById('nb1').value.substr(0,1).toUpperCase();

    var y = document.getElementById('nb1').value.substr(1,l).toLowerCase();

    document.getElementById('nb1').value = x + y;*/

    document.getElementById('nb1').value =

        document.getElementById('nb1').value.substr(0,1).toUpperCase() +

         document.getElementById('nb1').value.substr(1,length.value).toLowerCase();




}


document.getElementById('nb1').addEventListener('change', changer);




































