function iniciar(){
    var prin = document.createElement('div');
            document.body.appendChild(prin);
            prin.style.marginLeft='28%';
            prin.style.marginTop='2%'; 
            prin.style.marginBottom='0%'; 
   
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 10; j++) {
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
            prin.style.marginTop='0%'; 
            prin.style.marginLeft='5%';
            prin.style.transitionDuration = '1s';
                for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 10; j++) {
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
cajaclick.style.width = '100px';
cajaclick.style.height = '100px';
cajaclick.style.background = colorA();
cajaclick.style.margin = '21px';
cajaclick.style.borderRadius = '0%';
cajaclick.setAttribute('data-sobre', 'true');
} else {
cajaclick.style.transform = 'rotate(90deg)';
cajaclick.style.width = '100px';
cajaclick.style.height = '100px';
cajaclick.style.background = colorA();
cajaclick.style.borderRadius = '50%';
cajaclick.style.margin = '21px';
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
    elegante.style.width = '60px';
    elegante.style.height = '60px';
    elegante.style.margin = '10px';
    elegante.style.float = 'left';
    elegante.style.boxSizing='border-box';
}

window.onload = iniciar;