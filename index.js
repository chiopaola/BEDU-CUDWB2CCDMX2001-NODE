const http = require("http");
const url = require("url");

//create a server object:
const server = http.createServer(function(request, response) {
  const information = url.parse(request.url, true);

  if (information.pathname === "/factorial") {
    console.log(information.query.a);
    const input_param = parseInt(information.query.input_param, 10);
    if (input_param < 0) {
      response.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8"
      });
      response.end(
        "Solo calculo factoriales de numeros positivos, prueba de nuevo!!"
      );
    } else {
      var calculo = factorial(input_param);
      response.end(
        String("El factorial de " + input_param + " es: " + calculo)
      );
    }
  } else {
    response.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8"
    });
    response.end("el path esta incorrecto");
  }
});

server.listen(8080, function() {
  console.log("Servidor listo y esuchando!!");
});

function factorial(n) {
  var salida = "1";
  var factorial = 1;

  for (var i = 1; i <= n; i++) {
    factorial = factorial * i;
    /*console.log(factorial);*/
  }

  return factorial;
}
