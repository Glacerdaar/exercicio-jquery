  $(document).ready(function() {
    var form = $("#list-form");

    form.submit(function(event) {
      event.preventDefault(); 

      var novaInformacao = $("#nome-nova-tarefa").val();

      if (novaInformacao.trim() !== "") {
        
        $("#list-ul").show();
        var novoLiElemento = $("<li>" + novaInformacao + "</li>");
        $("#list-ul").append(novoLiElemento);

        $("#nome-nova-tarefa").val("");
      }
    });
  });

  $(document).ready(function() {
    $("#list-ul").on("click", "li", function() {
      $(this).toggleClass("linha-atravessada");
    });
    $("#red-btn").on("click", function() {
      $("#list-ul").empty();
    });
  });

