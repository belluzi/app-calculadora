//--------------------------------------

function calcular(tipo, valor) {

    // Ações da Calculadora:
    if (tipo === "acao") {

      // Tecla Clear:
      if (valor === "clear") {

        //Limpar o visor (ID Resultado):
        document.getElementById("resultado").value = "";
      }

      // Operadores Matemáticos e Decimais:
      if (
        valor === "+" ||
        valor === "-" ||
        valor === "*" ||
        valor === "/" ||
        valor === "."
      ) {
        document.getElementById("resultado").value += valor;
      }

      if (valor === "=") {
        var valorCampo = eval(document.getElementById("resultado").value);

        document.getElementById("resultado").value = valorCampo;
      }

      // Valores da Calculadora:
    } else if (tipo === "valor") {
      document.getElementById("resultado").value += valor;
    }
  }

  //--------------------------------------