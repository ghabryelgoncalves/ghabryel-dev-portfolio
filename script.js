/* Ghabryel Dev — configuração central + componentes reutilizáveis */

const SITE_CONFIG = {
  brand: "Ghabryel Dev",
  owner: "Ghabryel Maia",

  // COLOQUE SEU NÚMERO AQUI, com código do país e DDD, somente números.
  // Exemplo de formato: 5511999999999
  whatsappNumber: "5562985856636",

  whatsappMessage:
    "Olá, Ghabryel! Vi seu portfólio e gostaria de saber mais sobre a criação de um site para meu negócio.",

  social: {
    instagram: "https://instagram.com/ghabryel_mg", // ex.: https://instagram.com/seuusuario
    github: "https://github.com/ghabryelgoncalves",    // ex.: https://github.com/seuusuario
    linkedin: "#"   // ex.: https://linkedin.com/in/seuusuario
  }
};

const services = [
  {
    number: "01",
    title: "Landing Pages",
    text: "Páginas profissionais focadas em apresentar serviços e gerar contatos.",
    icon: "↗"
  },
  {
    number: "02",
    title: "Sites Institucionais",
    text: "Sites modernos para empresas, profissionais e negócios locais.",
    icon: "⌁"
  },
  {
    number: "03",
    title: "Página para profissionais",
    text: "Uma presença profissional para nutricionistas, chaveiros, barbeiros, manicures, autônomos e outros profissionais.",
    icon: "✦"
  },
  {
    number: "04",
    title: "Responsividade",
    text: "Sites adaptados para celular, tablet e computador.",
    icon: "◫"
  }
];

const benefits = [
  ["01", "Mais profissionalismo", "Passe mais confiança para seus clientes."],
  ["02", "Presença online", "Tenha um endereço próprio para apresentar seu negócio 24 horas por dia."],
  ["03", "Mais facilidade para o cliente", "Mostre serviços, localização, contato e informações importantes em um único lugar."],
  ["04", "Feito para celular", "Seu site será responsivo e funcionará bem em diferentes dispositivos."]
];

const projects = [
  {
    number: "01",
    category: "CONCEITO • CHAVEIRO",
    title: "Chaveiro Express",
    description: "Site para um chaveiro local com serviços, chamada para WhatsApp, localização e atendimento.",
    tech: ["HTML", "CSS", "JS"],
    theme: "lime",
    mock: ["CHAVEIRO", "24H", "ABERTURA DE PORTAS", "CÓPIAS DE CHAVES"]
  },
  {
    number: "02",
    category: "CONCEITO • NUTRICIONISTA",
    title: "Nutri Balance",
    description: "Página profissional para nutricionista com apresentação, serviços, benefícios e contato.",
    tech: ["HTML", "CSS", "JS"],
    theme: "sand",
    mock: ["NUTRI BALANCE", "ALIMENTAÇÃO", "CONSULTAS", "PLANO PERSONALIZADO"]
  },
  {
    number: "03",
    category: "CONCEITO • BARBEARIA",
    title: "Studio 77",
    description: "Site moderno para barbearia com serviços, informações e chamada para agendamento.",
    tech: ["HTML", "CSS", "JS"],
    theme: "blue",
    mock: ["STUDIO 77", "CORTE", "BARBA", "AGENDAR HORÁRIO"]
  },
  {
    number: "04",
    category: "CONCEITO • EMPRESA LOCAL",
    title: "Norte Engenharia",
    description: "Site institucional moderno para uma pequena empresa apresentar serviços e diferenciais.",
    tech: ["HTML", "CSS", "JS"],
    theme: "red",
    mock: ["NORTE", "ENGENHARIA", "PROJETOS", "FALE CONOSCO"]
  }
];

const process = [
  ["01", "Conversa", "Entendo o negócio e o que o cliente precisa."],
  ["02", "Planejamento", "Defino a estrutura e as informações da página."],
  ["03", "Desenvolvimento", "Crio o site com design moderno e responsivo."],
  ["04", "Entrega", "Publico o projeto e deixo tudo pronto para o cliente utilizar."]
];

function whatsappUrl() {
  if (!SITE_CONFIG.whatsappNumber || SITE_CONFIG.whatsappNumber.includes("SEU_NUMERO")) return "#";
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;
}

function renderHeader() {
  document.querySelector("#site-header").innerHTML = `
    <div class="header-inner">
      <a class="logo" href="#inicio" aria-label="Ghabryel Dev — início">
        <span class="logo-mark">G</span><span>Ghabryel <b>Dev</b></span>
      </a>
      <nav class="desktop-nav" aria-label="Navegação principal">
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre mim</a>
        <a href="#servicos">Serviços</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
      <a class="header-cta js-whatsapp" href="#">Falar comigo <span>↗</span></a>
      <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span></button>
    </div>
    <div class="mobile-menu">
      <a href="#inicio">Início</a>
      <a href="#sobre">Sobre mim</a>
      <a href="#servicos">Serviços</a>
      <a href="#projetos">Projetos</a>
      <a href="#contato">Contato</a>
      <a class="js-whatsapp" href="#">Falar comigo ↗</a>
    </div>
  `;
}

function renderServices() {
  document.querySelector("#services-grid").innerHTML = services.map(s => `
    <article class="service-card reveal">
      <div class="service-top"><span>${s.number}</span><i>${s.icon}</i></div>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
      <div class="card-arrow">↗</div>
    </article>
  `).join("");
}

function renderBenefits() {
  document.querySelector("#benefits-grid").innerHTML = benefits.map(b => `
    <article class="benefit-item reveal">
      <span class="benefit-number">${b[0]}</span>
      <div><h3>${b[1]}</h3><p>${b[2]}</p></div>
      <span class="benefit-arrow">↗</span>
    </article>
  `).join("");
}

function renderProjects() {
  document.querySelector("#projects-grid").innerHTML = projects.map(p => `
    <article class="project-card reveal">
      <div class="project-mock ${p.theme}">
        <div class="mock-browser"><span></span><span></span><span></span><b>${p.mock[0]}</b><small>CONCEITO</small></div>
        <div class="mock-content">
          <div class="mock-display">${p.mock[1]}<strong>${p.mock[2]}</strong></div>
          <div class="mock-lines"><i></i><i></i><i></i></div>
          <button>${p.mock[3]} ↗</button>
        </div>
        <div class="project-number">${p.number}</div>
      </div>
      <div class="project-info">
        <div class="project-meta"><span>${p.category}</span><span>DEMONSTRATIVO</span></div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tech-list">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
        <a href="#contato" class="project-link">Ver projeto <span>↗</span></a>
      </div>
    </article>
  `).join("");
}

function renderProcess() {
  document.querySelector("#process-list").innerHTML = process.map(p => `
    <article class="process-item reveal">
      <span class="process-num">${p[0]}</span>
      <div><h3>${p[1]}</h3><p>${p[2]}</p></div>
      <span class="process-line"></span>
    </article>
  `).join("");
}

function renderFooter() {
  document.querySelector("#site-footer").innerHTML = `
    <div class="footer-main">
      <a class="logo" href="#inicio"><span class="logo-mark">G</span><span>Ghabryel <b>Dev</b></span></a>
      <p>Sites modernos para negócios que querem crescer.</p>
      <div class="footer-links">
        <a href="#inicio">Início</a><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#contato">Contato</a>
      </div>
    </div>
    <div class="footer-bottom"><span>© 2026 Ghabryel Dev. Todos os direitos reservados.</span><span>Construído com HTML • CSS • JavaScript</span></div>
  `;
}

function configureLinks() {
  const url = whatsappUrl();
  document.querySelectorAll(".js-whatsapp").forEach(link => {
    link.href = url;
    if (url === "#") {
      link.addEventListener("click", e => {
        e.preventDefault();
        alert("Configure seu número de WhatsApp no arquivo script.js, na variável SITE_CONFIG.");
      });
    }
  });

  document.querySelectorAll("[data-social]").forEach(link => {
    const key = link.dataset.social;
    link.href = SITE_CONFIG.social[key] || "#";
  });
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    menu.classList.toggle("open", !open);
    document.body.classList.toggle("menu-open", !open);
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("open");
    document.body.classList.remove("menu-open");
  }));
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function setupHeader() {
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 30), { passive: true });
}

renderHeader();
renderServices();
renderBenefits();
renderProjects();
renderProcess();
renderFooter();
configureLinks();
setupMenu();
setupHeader();
setupReveal();
