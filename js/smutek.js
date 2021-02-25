let stageWidth = window.innerWidth / 2;
let stageHeight = window.innerHeight / 2;

    let app = new PIXI.Application({
      width: stageWidth,
      height: stageHeight,
      antialias: true,
      transparent: true,
      resolution: 1
    });

    PIXI.settings.RESOLUTION = window.devicePixelRatio;

    document.getElementById('pixlaSmutek').appendChild(app.view);


let covid = new PIXI.Sprite.from('images/covid.png');
covid.position.set(stageWidth / 2.5, stageHeight / 2.5);
covid.width = 300;
covid.height = 300;
covid.anchor.set(0.5);
//covid.pivot.set(350,350);
let pruhlednost = new PIXI.filters.AlphaFilter(0.7);
covid.filters = [pruhlednost];

app.stage.addChild(covid);

app.ticker.add(earthMovement);
function earthMovement() {
  covid.rotation -= 0.005;
}