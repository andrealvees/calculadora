function tecla(tecla) {
    var num = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = num + tecla;
}

function limpar() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("previous-expression").innerHTML = "";
}

function apagar() {
    var result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result.substring(0, result.length -1);
}

function resultado() {
    var resultado = document.getElementById("result").innerHTML;
    if (resultado) {
        document.getElementById("result").innerHTML = eval(resultado);
        console.log(eval(resultado));
    }
    document.getElementById("previous-expression").innerHTML = resultado;
}