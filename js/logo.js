    
    let stageWidth = window.screen.width;
    let stageHeight = 1000;

    let app = new PIXI.Application({
      width: stageWidth,
      height: stageHeight,
      antialias: true,
      transparent: true,
      resolution: 1
    });

    PIXI.settings.RESOLUTION = window.devicePixelRatio;

    document.getElementById('pixla').appendChild(app.view);

    let logo = new PIXI.Sprite.from('images/logo2.png');
    logo.position.set(74, 100);
    logo.width = 100;
    logo.height = 100;
    logo.anchor.set(0.5);
    //logo.pivot.set(0,0);

    app.stage.addChild(logo);

    app.ticker.add(animate);
    let delta = 0;
    let pozice = window.screen.width - 100;
    function animate() {
      delta += 0.1;
      
      logo.y = 100 + Math.sin(delta) * 7;

        if (logo.x > pozice) {
        logo.x += -1;  
      } if (logo.x < pozice) {
        logo.x += 1;
      } if (logo.x == window.screen.width - 100) {
        pozice = 75;
      } if (logo.x == 75) {
        pozice = window.screen.width - 100;
      }
    }

    let covid = new PIXI.Sprite.from('images/covid.png');
    covid.position.set(window.screen.width - 100, 100);
    covid.width = 100;
    covid.height = 100;
    covid.anchor.set(0.5);
    
    app.stage.addChild(covid);


    app.ticker.add(groguAnimate);
    
    function groguAnimate() {
      covid.y = 100 + Math.sin(delta) * 7;
      covid.x += -3;
      if (covid.x < logo.x + 50) {
          covid.rotation += 0.8;
          covid.x += -6;
          covid.y += 60;
          }
      if (covid.x == 0) {
        app.stage.removeChild(covid);
      }
       
    }










