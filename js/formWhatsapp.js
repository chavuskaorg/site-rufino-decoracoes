function enviarParaWhatsapp() {
  alert("Mensagem enviada com sucesso!"); // Exibe o alerta de sucesso
  const nome = document.getElementById("nome").value;
  const localidade = document.getElementById("localidade").value;
  const email = document.getElementById("email").value;

  // pega o select e o texto da opção selecionada
  const produtoSelect = document.getElementById("produto");
  const produto = produtoSelect.options[produtoSelect.selectedIndex].text;
  const servicoSelect = document.getElementById("servico");
  const servico = servicoSelect.options[servicoSelect.selectedIndex].text;

  const mensagem = document.getElementById("mensagem").value;

  const texto = `Olá! Meu nome é ${nome}. 
    Localidade: ${localidade}. 
    Email: ${email}. 
    Produto: ${produto}.
    Serviço: ${servico}.
    Mensagem: ${mensagem}`;
  const numero = "5511993687070"; // Substitua pelo seu número (com DDD e sem espaços)

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
}
