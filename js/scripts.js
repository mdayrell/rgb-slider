window.addEventListener('load', start);

var input = document.querySelectorAll("input");

function start() {
    for(var i = 0; i < input.length; i++) {
        input[i].addEventListener("input", function() {
            var vermelho = document.getElementById("vermelho").value;
            var verde    = document.getElementById("verde").value;
            var azul     = document.getElementById("azul").value;
            
            var resultado = document.getElementById("resultado");
            var cor       = "RGB(" + vermelho + ", " + verde + ", " + azul + ")";
            
            resultado.style.backgroundColor = cor;
            document.getElementById('cor').innerHTML = ' ' + cor;

            document.getElementById("red").value   = vermelho;
            document.getElementById("green").value = verde;
            document.getElementById("blue").value  = azul;
        });
    }
}

