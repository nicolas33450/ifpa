<?php
if (!isset($_SESSION)) {
    session_start();
}
 require './admin/connexion.php';
    $requete_compteur = $pdo->prepare('SELECT compteur FROM compteur');
    $requete_compteur->execute();
    $ligne_tab_compteur = $requete_compteur->fetch();
    $compte = $ligne_tab_compteur['compteur'];
    $compte_up = $compte +21;
    $requete_up = 'UPDATE compteur SET compteur="'.$compte_up.'"';
    $resultat_up = $pdo->exec($requete_up);
?>



<!DOCTYPE html>
<html>
    <?php
    include('header.html');

    ?>
    <body>
        <?php
        include('head_en.php');

        ?>
        <div class="row" id="support">
            <div class="container">
                <div class="panel-body">
                    <ul class="nav nav-tabs" role="tablist" id="myTab">
                        <li class="nav-item active">
                            <a class="nav-link" aria-controls="tab-0" aria-expended="false"  href="#tab-0" role="tab" data-toggle="tab">Visitors Area</a>							
                        </li>		
                        <li class="nav-item">
                            <!--
<a class="nav-link" aria-controls="tab-1" aria-expended="false"  href="#tab-1" role="tab" data-toggle="tab">Get your badge</a>							
-->
                            <a class="nav-link" aria-controls="tab-1" aria-expended="false"  href="#badge" role="tab" data-toggle="tab">Get your badge</a>							
                        </li>			
                        <li class="nav-item">
                            <!--
<a class="nav-link" aria-controls="tab-2" aria-expended="false"  href="#tab-2" role="tab" data-toggle="tab">Exhibitors/Brands list</a>
-->
                            <a class="nav-link" aria-controls="tab-2" aria-expended="false"  href="#exhibitor" role="tab" data-toggle="tab">Exhibitors/Brands list</a>
                        </li>	
                        <li class="nav-item">
                            <a class="nav-link" aria-controls="tab-3" aria-expended="false"  href="#map" role="tab" data-toggle="tab">Acces Map</a>
                        </li>	
                        <li class="nav-item">
                            <a class="nav-link" aria-controls="tab-4" aria-expended="false"  href="#conference" role="tab" data-toggle="tab">Conferences</a>
                        </li>							
                    </ul>
                    <div class="tab-content">		
                        <div role="tabpanel" class="tab-pane fade in active" id="tab-0">							
                            <br>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-xs-2 col-xs-offset-2 haut">
                                                <a class="nav-link onglet" aria-controls="hall" aria-expended="false"  href="#badge"><img src="./images/badge_rouge_rond.png" class="icone" alt="Get your badge"><br>
                                                    Get your badge</a>
                                            </div>
                                            <div class="col-xs-2 haut">
                                                <a class="nav-link onglet" aria-controls="hall" aria-expended="false"  href="#exhibitor"><img src="./images/exhibitors_rouge_rond.png" class="icone" alt="Exhibitor"><br>

                                                    Exhibitors/Brands List</a>
                                            </div>
                                            <div class="col-xs-2 haut">
                                                <a class="nav-link onglet" aria-controls="hall" aria-expended="false"  href="#map">
                                                    <img src="./images/access_rouge_rond.png" class="icone" alt="Map"><br>
                                                    Access <br> Map</a>
                                            </div>
                                            <div class="col-xs-2 haut">
                                                <a class="nav-link onglet" aria-controls="hall" aria-expended="false"  href="#conference">
                                                    <img src="./images/conference_rouge_rond.png" class="icone" alt="Conference"><br>
                                                    Conferences</a>
                                            </div>
                                        </div>
                                        <h2>3 - 4 november 2016, 100% B2B Vape Trade Show in new york city (brooklyn)</h2><br>
                                        <strong>Distributors, shop networks, importers, wholesalers, independent shops, project leaders... Is your activity related to vape? You are welcome at Vapevent!</strong><br><br>

                                        During 2 days Vapevent brings together American and International stakeholders in order to create business opportunities and develop strong partnerships.<br><br>

                                        Vapevent Trade show, 100% professional exposition, is the opportunity to:<br><br>
                                        - Discover the latest innovations and trends<br>
                                        - Rediscover established brands and their full range<br>
                                        - Strengthen your business ties<br>
                                        - Develop new partnerships<br>

                                    </div>
                                </div>
                            </div>
                        </div>        
                        <div role="tabpanel" class="tab-pane fade" id="badge">							
                            <br>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-xs-1"><img src="images/badgeSide.png" style="width:100%;"></div>
                                            <div class="col-xs-11 backGris">
                                                <div class="row">
                                                    <h3>Votre visite au salon vapevent débute maintenant<br>
                                                        avec la création de votre badge directement depuis notre site.</h3><br><br>

                                                </div>
                                                <div class="row">
                                                    <div class="col-xs-12 col-sm-8">
                                                       <div id="resultat" style="text-align:center"></div>
                                                       <div id="reset" style="display:none"><br>
                            <a onclick="document.location.reload(false)" style="color:white;" class="btn btn-primary">Get another badge</a>
                        </div>
                                                        <div class="col-xs-6 formulaire">
                                                            <label>You are: </label><br>
                                                            <select name="type" class="form-control" id="type"> 
                                                                <option value="default" selected>Please, choose your profile</option>
                                                                <option value="pro">Electronic cigarette professional</option>
                                                                <option value="review">Reviewer</option>
                                                                <option value="blog">Blogger</option>
                                                                <option value="projet">Project holder</option>
                                                                <option value="presse">Press</option>
                                                                <option value="autre">Other</option>
                                                            </select>
                                                            <label>Sector</label><br>
                                                            <input type="text" name="sector" id="sector"><br>
                                                            <label> Company</label><br> 
                                                            <input type="text" name="company" id="company"><br>
<!--
                                                            <label>Title</label><br>
-->
                                                            <!--<select name="title" id="title" class="form-control">
                                                               <option value="">Please, choose your title</option>
                                                                <option value="m">
                                                                    Mister
                                                                </option>
                                                                <option value="mrs">
                                                                    Miss
                                                                </option>

                                                            </select>-->
                                                        </div>
                                                        <div class="col-xs-6 formulaire">
                                                            <label>First Name</label><br>
                                                            <input type="text" name="fname" id="fname"><br>

                                                            <label>Name</label><br>
                                                            <input type="text" name="name" id="name"><br>
                                                            <label>Email</label><br>
                                                            <input type="email" name="email" id="email"><br>
                                                            <label>Country</label><br>
                                                            <select name="pays" class="form-control" required id="country"> 
                                                                <?php
                                                                require('./admin/connexion.php');
                                                                $requete_pays = $pdo->prepare('SELECT id,nom_en_gb FROM pays ORDER BY nom_en_gb');
                                                                $requete_pays->execute();
                                                                while($ligne_tab = $requete_pays->fetch())
                                                                {
                                                                    $id = $ligne_tab['id'];
                                                                    $nom = $ligne_tab['nom_en_gb'];
                                                                    if($ligne_tab['nom_en_gb']=='United States of America')
                                                                    {
                                                                        echo '<option value="'.$id.'" selected >'.$nom.'</option>';
                                                                    }
                                                                    else
                                                                    {
                                                                        echo '<option value="'.$id.'" >'.$nom.'</option>';
                                                                    }

                                                                }
                                                                ?>
                                                            </select>
                                                        </div>
                                                        <input type="checkbox"  style="width:auto;margin-top:14px;" required name="envoi_check">   <span class="cgu">I declare that the information given above is accurate and certify that all the persons named above are professionals and accept <a href="./pdf/cgu_uk.pdf"  target="_blank" >the Terms and Conditions of Use of the badges.</a></span> <br><br>
                                                        <button type="submit" class="btn btn-primary" id="btn_envoi">Create my badge</button>
                                                    </div> 
                                                    <div class="col-xs-12 col-sm-4">

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                        <div role="tabpanel" class="tab-pane fade" id="exhibitor">							
                            <br>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="panel-body">
                                        <div class="row">
                                            <span style="font-weight:800;font-size:2.3rem;text-align:center;width:100%;display:block;">COMING SOON </span><br><br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div role="tabpanel" class="tab-pane fade" id="map">							
                            <br>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="panel-body">
                                        <div class="row">
                                            <span style="font-weight:800;font-size:2.3rem;text-align:center;width:100%;display:block;">COMING SOON </span><br><br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div role="tabpanel" class="tab-pane fade" id="conference">							
                            <br>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="panel-body">
                                        <div class="row">
                                            <span style="font-weight:800;font-size:2.3rem;text-align:center;width:100%;display:block;">COMING SOON </span><br><br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- Fin du panel body -->

                <div class="row informations">
                    <div class="col-xs-4 col-xs-offset-1">
                        <div class="row">
                            <div class="col-xs-2" style="padding:0">
                                <img src="./images/contact_map.png" class="icone" style="padding-right:10px;">
                            </div>
                            <div class="col-xs-10" style="text-align:left;">
                                218 avenue du Haut-Lévêque, <br>
                                Château Bersol Bâtiment 2<br>
                                33600 PESSAC (FRANCE)
                            </div>
                        </div>                </div>
                    <div class="col-xs-3">
                        <div class="row">
                            <div class="col-xs-2" style="padding:0">
                                <img src="./images/contact_tel.png" class="icone" style="padding-right:10px;">
                            </div>
                            <div class="col-xs-10" style="text-align:left;">
                                +1 718 717 2202 <br>+33 (0)5 56 36 11 64
                            </div>
                        </div>  
                    </div>
                    <div class="col-xs-3">
                        <div class="row">
                            <div class="col-xs-2" style="padding:0">
                                <img src="./images/contact_mail.png" class="icone" style="padding-right:10px;">
                            </div>
                            <div class="col-xs-10" style="text-align:left;">
                                contact@vapeventnewyork.com
                            </div>
                        </div>

                    </div>
                </div>

            </div> <!-- Fin Container --> 
        </div>
        <?php
        include('footer.html');

        ?>
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script src="./js/jQuery-2.1.4.min.js"></script>
        <script src="./js/jquery.slicknav.js"></script>
        <script type="text/javascript">
            $(document).ready(function(){
                $('.menu').slicknav();
            });
        </script>        
        <script type="text/javascript">
            $(document).ready(function(){
                $('.nav-link').click(function(){



                });
            });
        </script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="js/bootstrap.min.js"></script>
        <script src="js/mail.js"></script>
        <script type="text/javascript" src="./js/jquery.simplyscroll.min.js"></script>
        <script type="text/javascript">
            (function($) {
                $(function() { //on DOM ready 
                    $("#scroller").simplyScroll({frameRate:50});

                });
            })(jQuery);
        </script>
        <script>
            $( document ).ready(function(){
                // Détecte le hash dans l'url, l'utilise pour sélectionner le lien correspondant, déclenche le clique
                //Sert pour les liens exterieurs
                $("a[href='" + window.location.hash + "']").trigger('click')
            });

            $(".onglet").click(function(){
                cible =$(this).attr("href");
                //alert($(this).attr("href"));
                // Sert pour les liens depuis les images, rend l onglet actif
                $('#myTab a[href="' + cible + '"]').tab('show') // Sélection de l'onglet par le nom

            });
        </script>
        <script>

            $(window).scroll(function() {
                if ($(this).scrollTop() > 1){  
                    $('.head').addClass("fixe");

                }
                else{
                    $('.head').removeClass("fixe");

                }
            });
        </script>
        <script>
            $(document).ready(function() {
                $('a[href=#top]').click(function(){
                    $('html, body').animate({scrollTop:0}, 'slow');
                    return false;
                });
            });
        </script>
        <script>
            $("#btn_envoi").click(function(){
                //alert('ca marche');
                rel_url='./admin/ajout.php';
                langue = 'en';
                envoyer = 'ok';
                societe = $('#company').val();
                //alert(societe)
                societe=societe.replace('&','-');
                nom = $('#name').val();            
                type = $('#type').val();            
                prenom = $('#fname').val();
                email = $('#email').val();            
                sector = $('#sector').val();            
                pays = $('#country').val();
                var compte = <?php echo $compte; ?>;
                if(prenom!='' && email != '' && nom != '' && societe != '' && pays != ''  && ($('input[name="envoi_check"]').prop('checked') == true) && type !='default')      
                {

                    $('#btn_envoi').css("display","none");
                    $.ajax({
                        type:'POST',
                        url:rel_url, data:'email='+email+'&nom='+nom+'&prenom='+prenom+'&pays='+pays+'&societe='+societe+'&type='+type+'&envoyer='+envoyer+'&langue='+langue+'&sector='+sector+'&compte='+compte,
                        success:function(html){  
                            
                                //alert('bien envoye');
                                $('#resultat').empty();
                                $('#nb_billet').empty();                   
                                $('.formulaire').empty();                   
                                $('#nb_billet').css("display","none");
                                $('.formulaire').css("display","none");
                                $('#reset').css("display","block");
                                $('#resultat').css("color","black");
                                if(langue=='fr')
                                {
                                    if(type=='presse')
                                    {
                                        $('#resultat').html('L\'équipe VAPEVENT vous remercie pour votre demande. Votre  accréditation sera disponible à l\'accueil du salon dès votre arrivée. <br>Pour toute question, vous pouvez contacter notre équipe au : 05.56.36.11.64 ou par mail : contact@vapeventparis.com');
                                    }
                                    else if(type=='exposant')
                                    {
                                        $('#resultat').html('L\'équipe VAPEVENT vous remercie pour votre demande. Votre badge sera disponible à l\'accueil du salon dès votre arrivée. <br>Pour toute question, vous pouvez contacter notre équipe au : 05.56.36.11.64 ou par mail : contact@vapeventparis.com');
                                    }
                                    else
                                    {   

                                        $('#resultat').html('Votre billet vous a été adressé par mail (merci de bien regarder dans vos spams si  vous ne recevez rien).<br>Pour toute question, contactez-nous au : 05.56.36.11.64 ou par mail : contact@vapeventparis.com');
                                    }
                                }
                                else
                                { 

                                    if(type=='presse')
                                    {
                                        $('#resultat').html('Thank you for your registration.<BR>Your badges will be given to you at the entrance of the exhibition hall.<BR>For other information, contact us: +33 (0)5.56.36.11.64 or by e-mail: contact@vapeventparis.com');
                                    }
                                    else if(type=='exposant')
                                    {
                                        $('#resultat').html('Thank you for your registration.<BR>Your badges will be given to you at the entrance of the exhibition hall. <BR>For other information, contact us: +33 (0)5.56.36.11.64 or by e-mail: contact@vapeventparis.com');
                                    }
                                    else
                                    {
                                        $('#resultat').html('Thank you for your registration.<BR>Your ticket was sent to you by e-mail (If you do not receive a confirmation mail, please check your junk mail box). <BR>For other information, contact us: +33 (0)5.56.36.11.64 or by e-mail: contact@vapeventparis.com');
                                    }
                                }
                            
                        }
                    }); // fin d ajax 

                } // fin test champ rempli

              else
              {
              if(langue=='fr')
                {
                    $('#resultat').empty();
                    $('#resultat').css("color","red");
                    $('#resultat').html('Certains champs obligatoires ne sont pas remplis. Merci.');
                }
                else
                {

                    $('#resultat').empty();
                    $('#resultat').css("color","red");
                    $('#resultat').html('Your submission is missing required information.');
                }
            }

            });




        </script>
    </body>
</html>
