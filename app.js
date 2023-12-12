function iniciar(){
    var prin = document.createElement('div');
            document.body.appendChild(prin);
            prin.style.marginLeft='1%';
            prin.style.marginTop='1%'; 
            prin.style.marginBottom='0%'; 
   
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 20; j++) {
            var ele = document.createElement('div');
            ele.id = 'caja' + i + j;
            prin.appendChild(ele);
            if (j == 1){
                ele.style.clear = 'left'; 
            }
            estilosP(ele);

            var cajon = document.getElementById('caja' + i + j);
            var rotada = false;
            cajon.addEventListener('click', function() {
            prin.style.marginTop='1%'; 
            prin.style.marginLeft='0.5vw';
            prin.style.transitionDuration = '1s';
                for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 20; j++) {
            var cajon = document.getElementById('caja' + i + j);
        clickaqui(cajon);}}
    });
}
}
}


function clickaqui(cajaclick) {
var sobre = cajaclick.getAttribute('data-sobre');
if (sobre === 'false') {
cajaclick.style.transform = 'rotate(45deg)';
cajaclick.style.width = '3.55vw';
cajaclick.style.height = '3.55vw';
cajaclick.style.background = colorA();
cajaclick.style.margin = '0.65vw';
cajaclick.style.borderRadius = '5%';
cajaclick.setAttribute('data-sobre', 'true');
} else {
cajaclick.style.transform = 'rotate(90deg)';
cajaclick.style.width = '3.55vw';
cajaclick.style.height = '3.55vw';
cajaclick.style.background = colorA();
cajaclick.style.borderRadius = '50%';
cajaclick.style.margin = '0.65vw';
cajaclick.setAttribute('data-sobre', 'false');
}
cajaclick.style.transitionDuration = '1s';
}

function colorA() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
}



function estilosP(elegante){
    elegante.style.border = 'solid 1px';
    elegante.style.width = '3.55vw';
    elegante.style.height = '3.55vw';
    elegante.style.margin = '0.65vw';
    elegante.style.float = 'left';
    elegante.style.boxSizing='border-box';
}

window.onload = iniciar;