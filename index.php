<!DOCTYPE html>
<html lang="cs-cz">

        <head>
                <meta charset="utf-8" />
                <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                <meta http-equiv="Pragma" content="no-cache" />
                <meta http-equiv="Expires" content="0" />
                <meta name="description" content="Webové stránky kapely Furyant." />
                <meta name="keywords" content="Furyant, kapela, hudba" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="css/styl.css" type="text/css" />
                <link rel="stylesheet" href="css/animace.css" type="text/css" />
                <link rel="stylesheet" href="css/gallery.css" type="text/css" />
                <link rel="stylesheet" href="css/contact.css" type="text/css" />
                <link rel="stylesheet" href="css/lightbox.min.css" type="text/css" />
                <script src="js/lightbox-plus-jquery.min.js"></script> 
                <title>Furyant</title>
   		<link rel="shortcut icon" href="images/furycon.png" />

        </head>

        <body>

        <div class="background-image"></div>

        
        
                <article>

                <div class="content_nav">
                        <header>  
                                <nav>
                                        <ul>
                                                <?php $menu = array(
                                                        'uvod' => 'Úvod',
                                                        'hudba'  => 'Hudba',
                                                        'koncerty' => 'Koncerty',
                                                        'galerie' => 'Galerie',
                                                        'kontakt' => 'Kontakt'
                                                        );
                                                        $active = isset($_GET['stranka']) ? $_GET['stranka'] : 'uvod';
                                                ?>

                                                <?php foreach ($menu as $url=>$title) : ?>
                                                        <li id="zoom" <?= $url == $active ? 'class="aktivni"' : '' ?>>
                                                                <a href="index.php?stranka=<?= $url ?>">
                                                                        <?= $title ?>
                                                                </a>
                                                        </li>
                                                <?php endforeach ?>                                         
                                        </ul>
                                </nav>
                                <a href="https://www.facebook.com/FuryantBand" target="_blank">
                                <img src="images/fb_clipart.png" id="fb" style="width: 2.5rem; margin-left: 1em; margin-top: 17px">
                                </a>
                        </header>
                </div>
        
        
                        <section>

                                <div class="dropdown">
                                        <button onclick="myFunction()" class="dropbtn">Menu</button>
                                        <div id="myDropdown" class="dropdown-content">
                                          <a href="index.php?stranka=uvod">Úvod</a>
                                          <a href="index.php?stranka=hudba">Hudba</a>
                                          <a href="index.php?stranka=koncerty">Koncerty</a>
                                          <a href="index.php?stranka=galerie">Galerie</a>
                                          <a href="index.php?stranka=kontakt">Kontakt</a>
                                        </div>
                                </div>
                                
                                <script type="text/javascript" src="js/js_menu.js"></script>
                        <div class="content">
                                <?php

                                        if (isset($_GET['stranka']))
                                                $stranka = $_GET['stranka'];
                                        else
                                                $stranka = 'uvod';
                                        
                                        if (preg_match('/^[a-z0-9]+$/', $stranka))
                                        {
                                                $vlozeno = include('podstranky/' . $stranka . '.php');
                                                if (!$vlozeno)
                                                        echo('Podstránka nenalezena');
                                        }
                                        else
                                                echo('Neplatný parametr.');
                                ?>
                        </div>
                        </section>
                </article>

        

                <div class="pocitadlo">
                <?php
                if(file_exists("pocet.txt")){
                print "";
                }else{
                $file=fopen("pocet.txt","a");
                fputs($file,"0");
                fclose($file);
                }
                $soubor="pocet.txt";
                $file=fopen("$soubor","r+");
                $pocet=fgets($file,100);
                $pocet++;
                fseek($file,0);
                fputs($file,$pocet);
                fclose($file);
                echo $pocet
                ?>
                </div> 


                <footer>
                        &copy;Furyant 2020-2021
                </footer>

                <script type="text/javascript" src="js/event.js"></script>

        </body>

</html>