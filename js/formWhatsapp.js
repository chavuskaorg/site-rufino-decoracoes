
function enviarParaWhatsapp() {
  alert("Mensagem enviada com sucesso!"); // Exibe o alerta de sucesso
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Olá! Meu nome é ${nome}. ${mensagem}`;
  const numero = "5511993687080"; // Substitua pelo seu número (com DDD e sem espaços)

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
}
    