// Carrega header e footer de forma assíncrona (usa caminho relativo)
(async () => {
  try {
    const headerResp = await fetch('./header.html');
    if (headerResp.ok) document.getElementById('header').innerHTML = await headerResp.text();

    const footerResp = await fetch('./footer.html');
    if (footerResp.ok) document.getElementById('footer').innerHTML = await footerResp.text();
  } catch (err) {
    console.warn('Erro ao carregar header/footer:', err);
  }
})();