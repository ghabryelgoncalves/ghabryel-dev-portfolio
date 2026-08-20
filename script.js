/* =========================================================
   GHABRYEL DEV — CONFIGURAÇÃO CENTRAL
   ========================================================= */

   const SITE_CONFIG = {
    brand: "Ghabryel Dev",
    owner: "Ghabryel Maia",
  
    whatsappNumber: "5562985856636",
  
    whatsappMessage:
      "Olá, Ghabryel! Vi seu portfólio e gostaria de saber mais sobre a criação de um site para meu negócio.",
  
    social: {
      instagram: "https://instagram.com/ghabryel_mg",
      github: "https://github.com/ghabryelgoncalves",
      linkedin: "#"
    }
  };
  
  
  /* =========================================================
     SERVIÇOS
     ========================================================= */
  
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
  
  
  /* =========================================================
     BENEFÍCIOS
     ========================================================= */
  
  const benefits = [
    [
      "01",
      "Mais profissionalismo",
      "Passe mais confiança para seus clientes."
    ],
    [
      "02",
      "Presença online",
      "Tenha um endereço próprio para apresentar seu negócio 24 horas por dia."
    ],
    [
      "03",
      "Mais facilidade para o cliente",
      "Mostre serviços, localização, contato e informações importantes em um único lugar."
    ],
    [
      "04",
      "Feito para celular",
      "Seu site será responsivo e funcionará bem em diferentes dispositivos."
    ]
  ];
  
  
  /* =========================================================
     PROJETOS
     ========================================================= */
  
  const projects = [
  
    /* =========================
       01 — CHAVEIRO
       ========================= */
  
    {
      number: "01",
      category: "CONCEITO • CHAVEIRO",
      title: "Chaveiro Express",
      description:
        "Site para um chaveiro local com serviços, chamada para WhatsApp, localização e atendimento.",
      tech: ["HTML", "CSS", "JS"],
      theme: "lime",
  
      link: "projetos/chaveiro/",
  
      preview: "chaveiro",
  
      mock: [
        "CHAVEIRO",
        "24H",
        "ABERTURA DE PORTAS",
        "CÓPIAS DE CHAVES"
      ]
    },
  
  
    /* =========================
       02 — NUTRICIONISTA
       ========================= */
  
    {
      number: "02",
      category: "CONCEITO • NUTRICIONISTA",
      title: "Nutri Balance",
      description:
        "Página profissional para nutricionista com apresentação, serviços, benefícios e contato.",
      tech: ["HTML", "CSS", "JS"],
      theme: "sand",
  
      link: "projetos/nutricionista/",
  
      preview: "nutricionista",
  
      mock: [
        "NUTRI BALANCE",
        "NUTRIÇÃO",
        "CONSULTAS",
        "AGENDAR CONSULTA"
      ]
    },
  
  
    /* =========================
       03 — BARBEARIA
       ========================= */
  
    {
      number: "03",
      category: "CONCEITO • BARBEARIA",
      title: "Studio 77",
      description:
        "Site moderno para barbearia com serviços, informações e chamada para agendamento.",
      tech: ["HTML", "CSS", "JS"],
      theme: "blue",
  
      link: "projetos/barbearia/",
  
      preview: "barbearia",
  
      mock: [
        "STUDIO 77",
        "STYLE",
        "CORTE & BARBA",
        "AGENDAR HORÁRIO"
      ]
    },
  
  
    /* =========================
       04 — ENGENHARIA
       ========================= */
  
    {
      number: "04",
      category: "CONCEITO • ENGENHARIA",
      title: "Norte Engenharia",
      description:
        "Site institucional moderno para uma pequena empresa apresentar serviços e diferenciais.",
      tech: ["HTML", "CSS", "JS"],
      theme: "red",
  
      link: "projetos/engenharia/",
  
      preview: "engenharia",
  
      mock: [
        "NORTE",
        "ENGENHARIA",
        "PROJETOS",
        "FALE CONOSCO"
      ]
    }
  
  ];
  
  
  /* =========================================================
     PROCESSO
     ========================================================= */
  
  const process = [
    [
      "01",
      "Conversa",
      "Entendo o negócio e o que o cliente precisa."
    ],
    [
      "02",
      "Planejamento",
      "Defino a estrutura e as informações da página."
    ],
    [
      "03",
      "Desenvolvimento",
      "Crio o site com design moderno e responsivo."
    ],
    [
      "04",
      "Entrega",
      "Publico o projeto e deixo tudo pronto para o cliente utilizar."
    ]
  ];
  
  
  /* =========================================================
     WHATSAPP
     ========================================================= */
  
  function whatsappUrl() {
    if (
      !SITE_CONFIG.whatsappNumber ||
      SITE_CONFIG.whatsappNumber.includes("SEU_NUMERO")
    ) {
      return "#";
    }
  
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      SITE_CONFIG.whatsappMessage
    )}`;
  }
  
  
  /* =========================================================
     HEADER
     ========================================================= */
  
  function renderHeader() {
    const header = document.querySelector("#site-header");
  
    if (!header) return;
  
    header.innerHTML = `
      <div class="header-inner">
  
        <a
          class="logo"
          href="#inicio"
          aria-label="Ghabryel Dev — início"
        >
          <span class="logo-mark">G</span>
          <span>Ghabryel <b>Dev</b></span>
        </a>
  
        <nav
          class="desktop-nav"
          aria-label="Navegação principal"
        >
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
  
        <a
          class="header-cta js-whatsapp"
          href="#"
        >
          Falar comigo <span>↗</span>
        </a>
  
        <button
          class="menu-toggle"
          type="button"
          aria-label="Abrir menu"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
        </button>
  
      </div>
  
      <div class="mobile-menu">
  
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre mim</a>
        <a href="#servicos">Serviços</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
  
        <a
          class="js-whatsapp"
          href="#"
        >
          Falar comigo ↗
        </a>
  
      </div>
    `;
  }
  
  
  /* =========================================================
     SERVIÇOS
     ========================================================= */
  
  function renderServices() {
    const container =
      document.querySelector("#services-grid");
  
    if (!container) return;
  
    container.innerHTML = services
      .map(
        (s) => `
          <article class="service-card reveal">
  
            <div class="service-top">
              <span>${s.number}</span>
              <i>${s.icon}</i>
            </div>
  
            <h3>${s.title}</h3>
  
            <p>${s.text}</p>
  
            <div class="card-arrow">
              ↗
            </div>
  
          </article>
        `
      )
      .join("");
  }
  
  
  /* =========================================================
     BENEFÍCIOS
     ========================================================= */
  
  function renderBenefits() {
    const container =
      document.querySelector("#benefits-grid");
  
    if (!container) return;
  
    container.innerHTML = benefits
      .map(
        (b) => `
          <article class="benefit-item reveal">
  
            <span class="benefit-number">
              ${b[0]}
            </span>
  
            <div>
  
              <h3>${b[1]}</h3>
  
              <p>${b[2]}</p>
  
            </div>
  
            <span class="benefit-arrow">
              ↗
            </span>
  
          </article>
        `
      )
      .join("");
  }
  
  
  /* =========================================================
     PRÉVIA — CHAVEIRO
     ========================================================= */
  
  function chaveiroPreview() {
    return `
      <div class="real-preview preview-chaveiro">
  
        <div class="preview-browser">
  
          <div class="preview-browser-bar">
            <span></span>
            <span></span>
            <span></span>
  
            <small>
              chaveiro express
            </small>
          </div>
  
          <div class="preview-page">
  
            <div class="preview-nav">
  
              <b>
                CHAVEIRO<br>
                EXPRESS
              </b>
  
              <span>
                SERVIÇOS &nbsp; CONTATO
              </span>
  
            </div>
  
            <div class="preview-hero">
  
              <div>
  
                <small>
                  ATENDIMENTO RÁPIDO
                </small>
  
                <strong>
                  Seu problema<br>
                  tem solução.
                </strong>
  
                <em>
                  Chaveiro residencial,
                  comercial e automotivo.
                </em>
  
                <button>
                  Falar pelo WhatsApp ↗
                </button>
  
              </div>
  
              <div class="preview-symbol">
                🔑
              </div>
  
            </div>
  
            <div class="preview-services">
  
              <div>
                <b>01</b>
                <span>
                  Abertura de portas
                </span>
              </div>
  
              <div>
                <b>02</b>
                <span>
                  Cópias de chaves
                </span>
              </div>
  
              <div>
                <b>03</b>
                <span>
                  Fechaduras
                </span>
              </div>
  
            </div>
  
          </div>
  
        </div>
  
        <div class="preview-overlay">
          <span>VER PROJETO</span>
          <strong>↗</strong>
        </div>
  
      </div>
    `;
  }
  
  
  /* =========================================================
     PRÉVIA — NUTRICIONISTA
     ========================================================= */
  
  function nutricionistaPreview() {
    return `
      <div class="real-preview preview-nutricionista">
  
        <div class="preview-browser">
  
          <div class="preview-browser-bar">
            <span></span>
            <span></span>
            <span></span>
  
            <small>
              nutri balance
            </small>
          </div>
  
          <div class="preview-page">
  
            <div class="preview-nav">
  
              <b>
                NUTRI<br>
                BALANCE
              </b>
  
              <span>
                SOBRE &nbsp; CONSULTAS
              </span>
  
            </div>
  
            <div class="preview-hero">
  
              <div>
  
                <small>
                  NUTRIÇÃO PERSONALIZADA
                </small>
  
                <strong>
                  Comer bem<br>
                  pode ser leve.
                </strong>
  
                <em>
                  Acompanhamento nutricional
                  pensado para sua rotina.
                </em>
  
                <button>
                  Agendar consulta ↗
                </button>
  
              </div>
  
              <div class="preview-symbol">
                🌿
              </div>
  
            </div>
  
            <div class="preview-services">
  
              <div>
                <b>01</b>
                <span>
                  Consulta individual
                </span>
              </div>
  
              <div>
                <b>02</b>
                <span>
                  Plano alimentar
                </span>
              </div>
  
              <div>
                <b>03</b>
                <span>
                  Acompanhamento
                </span>
              </div>
  
            </div>
  
          </div>
  
        </div>
  
        <div class="preview-overlay">
          <span>VER PROJETO</span>
          <strong>↗</strong>
        </div>
  
      </div>
    `;
  }
  
  
  /* =========================================================
     PRÉVIA — BARBEARIA
     ========================================================= */
  
  function barbeariaPreview() {
    return `
      <div class="real-preview preview-barbearia">
  
        <div class="preview-browser">
  
          <div class="preview-browser-bar">
            <span></span>
            <span></span>
            <span></span>
  
            <small>
              studio 77
            </small>
          </div>
  
          <div class="preview-page">
  
            <div class="preview-nav">
  
              <b>
                STUDIO<br>
                77
              </b>
  
              <span>
                SERVIÇOS &nbsp; AGENDAR
              </span>
  
            </div>
  
            <div class="preview-hero">
  
              <div>
  
                <small>
                  BARBEARIA & ESTILO
                </small>
  
                <strong>
                  Seu estilo.<br>
                  Sua marca.
                </strong>
  
                <em>
                  Cortes clássicos, modernos
                  e barba com personalidade.
                </em>
  
                <button>
                  Agendar horário ↗
                </button>
  
              </div>
  
              <div class="preview-symbol">
                ✂
              </div>
  
            </div>
  
            <div class="preview-services">
  
              <div>
                <b>01</b>
                <span>
                  Corte masculino
                </span>
              </div>
  
              <div>
                <b>02</b>
                <span>
                  Barba
                </span>
              </div>
  
              <div>
                <b>03</b>
                <span>
                  Corte + barba
                </span>
              </div>
  
            </div>
  
          </div>
  
        </div>
  
        <div class="preview-overlay">
          <span>VER PROJETO</span>
          <strong>↗</strong>
        </div>
  
      </div>
    `;
  }
  
  
  /* =========================================================
     PRÉVIA — ENGENHARIA
     ========================================================= */
  
  function engenhariaPreview() {
    return `
      <div class="real-preview preview-engenharia">
  
        <div class="preview-browser">
  
          <div class="preview-browser-bar">
            <span></span>
            <span></span>
            <span></span>
  
            <small>
              norte engenharia
            </small>
          </div>
  
          <div class="preview-page">
  
            <div class="preview-nav">
  
              <b>
                NORTE<br>
                ENGENHARIA
              </b>
  
              <span>
                PROJETOS & CONTATO
              </span>
  
            </div>
  
            <div class="preview-hero">
  
              <div>
  
                <small>
                  ENGENHARIA & PROJETOS
                </small>
  
                <strong>
                  Projetos sólidos.<br>
                  Decisões precisas.
                </strong>
  
                <em>
                  Soluções técnicas para
                  construir com segurança.
                </em>
  
                <button>
                  Falar com a equipe ↗
                </button>
  
              </div>
  
              <div class="preview-symbol">
                ⌂
              </div>
  
            </div>
  
            <div class="preview-services">
  
              <div>
                <b>01</b>
                <span>
                  Projetos estruturais
                </span>
              </div>
  
              <div>
                <b>02</b>
                <span>
                  Consultoria técnica
                </span>
              </div>
  
              <div>
                <b>03</b>
                <span>
                  Planejamento
                </span>
              </div>
  
            </div>
  
          </div>
  
        </div>
  
        <div class="preview-overlay">
          <span>VER PROJETO</span>
          <strong>↗</strong>
        </div>
  
      </div>
    `;
  }
  
  
  /* =========================================================
     GERADOR DE PRÉVIAS
     ========================================================= */
  
  function renderProjectPreview(project) {
  
    switch (project.preview) {
  
      case "chaveiro":
        return chaveiroPreview();
  
      case "nutricionista":
        return nutricionistaPreview();
  
      case "barbearia":
        return barbeariaPreview();
  
      case "engenharia":
        return engenhariaPreview();
  
      default:
        return `
          <div class="mock-browser">
  
            <span></span>
            <span></span>
            <span></span>
  
            <b>${project.mock[0]}</b>
  
            <small>
              CONCEITO
            </small>
  
          </div>
        `;
    }
  }
  
  
  /* =========================================================
     PROJETOS
     ========================================================= */
  
     function renderProjects() {
      const projectLinks = {
        "CHAVEIRO": "projetos/chaveiro/index.html",
        "NUTRI BALANCE": "projetos/nutricionista/index.html",
        "STUDIO 77": "projetos/barbearia/index.html",
        "NORTE": "projetos/engenharia/index.html"
      };
    
      document.querySelector("#projects-grid").innerHTML = projects.map(p => {
        const previewUrl = projectLinks[p.mock[0]] || "#";
    
        return `
          <article class="project-card reveal">
    
            <div class="project-mock ${p.theme}">
    
              <div class="mock-browser">
                <div class="browser-controls">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
    
                <b>${p.mock[0]}</b>
                <small>CONCEITO</small>
              </div>
    
              <a
                href="${previewUrl}"
                class="project-preview"
                aria-label="Abrir demonstração do projeto ${p.title}"
              >
                <iframe
                  src="${previewUrl}"
                  title="Prévia do projeto ${p.title}"
                  loading="lazy"
                  tabindex="-1"
                ></iframe>
    
                <div class="preview-overlay">
                  <span>VER PROJETO</span>
                  <strong>↗</strong>
                </div>
              </a>
    
              <div class="project-number">${p.number}</div>
    
            </div>
    
            <div class="project-info">
    
              <div class="project-meta">
                <span>${p.category}</span>
                <span>DEMONSTRATIVO</span>
              </div>
    
              <h3>${p.title}</h3>
    
              <p>${p.description}</p>
    
              <div class="tech-list">
                ${p.tech.map(t => `<span>${t}</span>`).join("")}
              </div>
    
              <a
                href="${previewUrl}"
                class="project-link"
                target="_blank"
                rel="noopener"
              >
                Ver projeto <span>↗</span>
              </a>
    
            </div>
    
          </article>
        `;
      }).join("");
    }
  
  
  /* =========================================================
     PROCESSO
     ========================================================= */
  
  function renderProcess() {
  
    const container =
      document.querySelector("#process-list");
  
    if (!container) return;
  
    container.innerHTML = process
      .map(
        (p) => `
  
          <article class="process-item reveal">
  
            <span class="process-num">
              ${p[0]}
            </span>
  
            <div>
  
              <h3>
                ${p[1]}
              </h3>
  
              <p>
                ${p[2]}
              </p>
  
            </div>
  
            <span class="process-line"></span>
  
          </article>
  
        `
      )
      .join("");
  }
  
  
  /* =========================================================
     FOOTER
     ========================================================= */
  
  function renderFooter() {
  
    const footer =
      document.querySelector("#site-footer");
  
    if (!footer) return;
  
    footer.innerHTML = `
  
      <div class="footer-main">
  
        <a
          class="logo"
          href="#inicio"
        >
          <span class="logo-mark">
            G
          </span>
  
          <span>
            Ghabryel <b>Dev</b>
          </span>
        </a>
  
  
        <p>
          Sites modernos para negócios que querem crescer.
        </p>
  
  
        <div class="footer-links">
  
          <a href="#inicio">
            Início
          </a>
  
          <a href="#sobre">
            Sobre
          </a>
  
          <a href="#servicos">
            Serviços
          </a>
  
          <a href="#projetos">
            Projetos
          </a>
  
          <a href="#contato">
            Contato
          </a>
  
        </div>
  
      </div>
  
  
      <div class="footer-bottom">
  
        <span>
          © 2026 Ghabryel Dev. Todos os direitos reservados.
        </span>
  
        <span>
          Construído com HTML • CSS • JavaScript
        </span>
  
      </div>
  
    `;
  }
  
  
  /* =========================================================
     LINKS
     ========================================================= */
  
  function configureLinks() {
  
    const url =
      whatsappUrl();
  
  
    document
      .querySelectorAll(".js-whatsapp")
      .forEach((link) => {
  
        link.href = url;
  
        if (url === "#") {
  
          link.addEventListener(
            "click",
            (e) => {
  
              e.preventDefault();
  
              alert(
                "Configure seu número de WhatsApp no arquivo script.js."
              );
  
            }
          );
  
        }
  
      });
  
  
    document
      .querySelectorAll("[data-social]")
      .forEach((link) => {
  
        const key =
          link.dataset.social;
  
        link.href =
          SITE_CONFIG.social[key] || "#";
  
      });
  
  }
  
  
  /* =========================================================
     MENU MOBILE
     ========================================================= */
  
  function setupMenu() {
  
    const toggle =
      document.querySelector(".menu-toggle");
  
    const menu =
      document.querySelector(".mobile-menu");
  
    if (!toggle || !menu) return;
  
  
    toggle.addEventListener(
      "click",
      () => {
  
        const open =
          toggle.getAttribute(
            "aria-expanded"
          ) === "true";
  
  
        toggle.setAttribute(
          "aria-expanded",
          String(!open)
        );
  
  
        menu.classList.toggle(
          "open",
          !open
        );
  
  
        document.body.classList.toggle(
          "menu-open",
          !open
        );
  
      }
    );
  
  
    menu
      .querySelectorAll("a")
      .forEach((a) => {
  
        a.addEventListener(
          "click",
          () => {
  
            toggle.setAttribute(
              "aria-expanded",
              "false"
            );
  
            menu.classList.remove(
              "open"
            );
  
            document.body.classList.remove(
              "menu-open"
            );
  
          }
        );
  
      });
  
  }
  
  
  /* =========================================================
     ANIMAÇÕES
     ========================================================= */
  
  function setupReveal() {
  
    const elements =
      document.querySelectorAll(".reveal");
  
  
    if (!elements.length) return;
  
  
    if (
      !("IntersectionObserver" in window)
    ) {
  
      elements.forEach(
        (el) =>
          el.classList.add("visible")
      );
  
      return;
    }
  
  
    const observer =
      new IntersectionObserver(
        (entries) => {
  
          entries.forEach(
            (entry) => {
  
              if (
                entry.isIntersecting
              ) {
  
                entry.target.classList.add(
                  "visible"
                );
  
                observer.unobserve(
                  entry.target
                );
  
              }
  
            }
          );
  
        },
        {
          threshold: 0.08
        }
      );
  
  
    elements.forEach(
      (el) =>
        observer.observe(el)
    );
  
  }
  
  
  /* =========================================================
     HEADER
     ========================================================= */
  
  function setupHeader() {
  
    const header =
      document.querySelector(
        ".site-header"
      );
  
  
    if (!header) return;
  
  
    const updateHeader = () => {
  
      header.classList.toggle(
        "scrolled",
        window.scrollY > 30
      );
  
    };
  
  
    window.addEventListener(
      "scroll",
      updateHeader,
      {
        passive: true
      }
    );
  
  
    updateHeader();
  
  }
  
  
  /* =========================================================
     INICIALIZAÇÃO
     ========================================================= */
  
  document.addEventListener(
    "DOMContentLoaded",
    () => {
  
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
  
    }
  );