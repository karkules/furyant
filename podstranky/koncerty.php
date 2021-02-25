                         

<div class="odsazeni">

        <h2>Koncerty budoucí:</h2>
        
        <div class="container" style="font-size: 18px; font-weight: bold; line-height: 2;">
                <?php
                $content = file("txt_content/content_koncerty.txt");
                $data = implode("<br>",$content);
                echo "<p>";
                echo $data;
                echo "</p>";
                ?> 
        </div>

                        
                        <div class="paul">
                        <iframe src="https://giphy.com/embed/9A50I1gHt5YrSHoX0D" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                        </div>
                        
                        <div id="pixlaSmutek">
                                <script src="js/pixi.js"></script>
                                <script src="js/smutek.js"></script>
                        </div>
</div>


<aside>
        <div class="bezici_odsazeni">
                <div id="bezici_text">
                        <div class="wanted">FURYANT</div>
                </div>
        </div>
</aside>
        
                              
