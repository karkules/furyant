
const hesla = document.getElementsByClassName('wanted')[0];

const slova = [
    "Loudavým krokem jde dál", //0
    ".. a sám", //1
    "náhodný, jak stín", //2
    "ví, kam jít", //3
    "neztrácí směr .. a cíl", //4 
    "záhadný poutník", //5
    "Neumí zahojit si duši", //6 
    "v černé noční tuši tepe sen", //7 
    "o babím létě se mu zdá", //8
    "Furyant", //9
    "Chcete-li se vyhnout davu", //10
    "přejděte na druhou stranu !", //11
    "", //12
    "Kdo dává, kdo si bere, halí dav", //13
    "a myšlenky se ztrácí v prázdnu hlav", //14
    "Ve zvířeném prachu hořká pachuť strachu", //15
    "do země se sákne vlekle života koncem času" //16
];

const textik = (fraze) => hesla.innerText = fraze;

window.addEventListener('load', (event) => {
    if (location.search === "") {
    function a() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                textik(slova[0]);
                resolve();
            }, 4000);
        });
    }
        
   function b() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                textik(slova[1]);
                resolve();
            }, 3000);
        });
    }

    function c() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                textik(slova[2]);
                resolve();
            }, 3000);
        });
    }

    function d() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                textik(slova[3]);
                resolve();
            }, 3000);
        });
    }

    function e() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                textik(slova[4]);
                resolve();
            }, 3000);
        });
    }

    function f() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                textik(slova[5]);
                resolve();
            }, 3000);
        });
    }

    function g() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                textik(slova[6]);
                resolve();
            }, 3000);
        });
    }

    function h() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                textik(slova[7]);
                resolve();
            }, 3000);
        });
    }

    function i() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                textik(slova[8]);
                resolve();
            }, 3000);
        });
    }

    function j() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                textik(slova[9]);
                resolve();
            }, 6000);
        });
    }

    a()
    .then(b)
    .then(c)
    .then(d)
    .then(e)
    .then(f)
    .then(g)
    .then(h)
    .then(i)
    .then(j);
        
    } else if (location.search === "?stranka=uvod") {
        
        function apel_1() {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    textik(slova[10]);
                    resolve();
                }, 3000);
            });
        }

        function apel_2() {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    textik(slova[11]);
                    resolve();
                }, 3000);
            });
        }

        function apel_3() {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    textik(slova[12]);
                    resolve();
                }, 3000);
            });
        }
        
        function apel_4() {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    textik(slova[9]);
                    resolve();
                }, 3000);
            });
        }

        apel_1().then(apel_2).then(apel_3).then(apel_4);

    } else if (location.search === "?stranka=koncerty") {
        
        function koncerty_1() {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    textik(slova[13]);
                    resolve();
                }, 3500);
            });
        }

        function koncerty_2() {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    textik(slova[14]);
                    resolve();
                }, 3500);
            });
        }

        function koncerty_3() {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    textik(slova[15]);
                    resolve();
                }, 3500);
            });
        }
        
        function koncerty_4() {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    textik(slova[16]);
                    resolve();
                }, 3500);
            });
        }

        function koncerty_5() {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    textik(slova[9]);
                    resolve();
                }, 3500);
            });
        }

        koncerty_1().then(koncerty_2).then(koncerty_3).then(koncerty_4).then(koncerty_5);

    }  
});


  

