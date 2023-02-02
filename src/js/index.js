var cartasClicadas = [];

function virarCarta(carta) {
  cartasClicadas.push(carta);
  console.log(cartasClicadas);

  var carta = document.getElementById(carta);

  var nomeClasse = carta.className;

  if (nomeClasse == "viradaparabaixo") {
    carta.className = "viradaparacima";
    setTimeout(function () {
      carta.className = "viradaparabaixo";
    }, 2000);
  } else {
    carta.className = "viradaparabaixo";
    setTimeout(function () {
      carta.className = "viradaparacima";
    }, 2000);
  }
}
