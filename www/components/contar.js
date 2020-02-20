$(document).on("click","#somar", function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var result = ParseFloat(valor1) + ParseFloat(valor2);
  $("#result").val(result);
});

$(document).on("click","#subtrair", function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var result = ParseFloat(valor1) - ParseFloat(valor2);
  $("#result").val(result);
});

$(document).on("click","#multiplicar", function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var result = ParseFloat(valor1) * ParseFloat(valor2);
  $("#result").val(result);
});

$(document).on("click","#dividir", function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var result = ParseFloat(valor1) / ParseFloat(valor2);
  $("#result").val(result);
});
