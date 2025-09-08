function initNavbar() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  if (!toggle || !menu) return false;

  // remover listeners antigos (evita múltiplos binds)
  toggle.replaceWith(toggle.cloneNode(true));
  const newToggle = document.getElementById('menu-toggle');

  // função que abre/fecha o painel (mobile)
  function toggleMenu() {
    const isHidden = menu.classList.contains('translate-x-full');
    if (isHidden) {
      menu.classList.remove('translate-x-full');
      menu.setAttribute('aria-hidden', 'false');
      newToggle.setAttribute('aria-expanded', 'true');
      // bloqueia rolagem quando menu aberto no mobile
      document.documentElement.classList.add('overflow-hidden');
    } else {
      menu.classList.add('translate-x-full');
      menu.setAttribute('aria-hidden', 'true');
      newToggle.setAttribute('aria-expanded', 'false');
      document.documentElement.classList.remove('overflow-hidden');
    }
  }

  newToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // fecha ao clicar em um link do menu (mobile)
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      // só fecha em telas pequenas onde o painel é usado
      if (window.getComputedStyle(newToggle).display !== 'none') toggleMenu();
    });
  });

  // fecha ao clicar fora do painel (apenas quando aberto e em mobile)
  document.addEventListener('click', (e) => {
    const isPanelOpen = !menu.classList.contains('translate-x-full');
    const isSmall = window.getComputedStyle(newToggle).display !== 'none';
    if (!isPanelOpen || !isSmall) return;
    if (!menu.contains(e.target) && e.target !== newToggle) {
      toggleMenu();
    }
  });

  // fecha com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('translate-x-full')) {
      toggleMenu();
    }
  });

  // no resize: se for desktop, garante estado visível correto e desbloqueia rolagem
  window.addEventListener('resize', () => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (isDesktop) {
      menu.classList.remove('translate-x-full');
      menu.setAttribute('aria-hidden', 'false');
      document.documentElement.classList.remove('overflow-hidden');
      newToggle.setAttribute('aria-expanded', 'false');
    } else {
      // mobile padrão fechado
      if (!menu.classList.contains('translate-x-full')) {
        // manter aberto se já estava aberto — opcional, aqui fecha para consistência
        menu.classList.add('translate-x-full');
        menu.setAttribute('aria-hidden', 'true');
      }
    }
  });

  return true;
}

// tenta inicializar imediatamente; caso fail, observa o DOM (útil se header for incluído via fetch)
if (!initNavbar()) {
  const observer = new MutationObserver(() => {
    if (initNavbar()) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
