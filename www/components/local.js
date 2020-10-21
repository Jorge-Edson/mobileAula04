var valor = 0;

$(document).on("click", "#salvar", function() {
  var dados = {
    nome: $("#nome").val(),
    end: $("#endereco").val()
    };

  localStorage.setItem(valor, JSON.stringify(dados));
  $('#nome').val('');
  $('#endereco').val('');
  
  valor++;
})

$(document).on("click", "#buscar", function() {
  var pessoa = JSON.parse(localStorage.getItem($("#identificador").val()));

  $("#nomeResult").val(pessoa.nome);
  $("#enderecoResult").val(pessoa.end);
})

$(document).on("click", "#remover", function() {
  localStorage.removeItem($("#identificador").val());
  limparCampos();
})

$(document).on("click", "#limpar", function() {
  localStorage.clear();
  limparCampos();
})

function limparCampos()
{
  $("#nome").val("");
  $("#identificador").val("");
  $("#nomeResult").val("");
  $("#enderecoResult").val("");
}