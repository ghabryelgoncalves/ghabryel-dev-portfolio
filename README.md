# Ghabryel Dev — Portfólio

Portfólio profissional feito com HTML, CSS e JavaScript puro, sem frameworks pesados.

## Estrutura

- `index.html` — estrutura semântica e SEO.
- `styles.css` — identidade visual, responsividade e animações leves.
- `script.js` — configuração, componentes reutilizáveis, projetos e interações.
- `assets/ghabryel-maia.png` — foto enviada para o projeto.
- `assets/favicon.svg` — favicon.

## Configuração rápida

Abra `script.js` e altere somente esta parte:

```js
const SITE_CONFIG = {
  whatsappNumber: "SEU_NUMERO_AQUI",
  social: {
    instagram: "#",
    github: "#",
    linkedin: "#"
  }
};
```

No WhatsApp use apenas números, incluindo código do país e DDD.

Exemplo de formato:
`5511999999999`

Depois substitua `#` pelas suas URLs reais de Instagram, GitHub e LinkedIn.

## Adicionar projetos

Os projetos demonstrativos ficam no array `projects` dentro de `script.js`. Para adicionar um projeto, copie um objeto e altere `category`, `title`, `description`, `tech`, `theme` e `mock`.

Os projetos atuais estão identificados como **DEMONSTRATIVO** e **CONCEITO** para não sugerir clientes ou resultados que não existem.

## Publicação

Este projeto é estático e pode ser publicado diretamente em GitHub Pages, Cloudflare Pages, Netlify ou outro serviço de hospedagem estática.

Não é necessário Java para rodar este portfólio. Java pode ser usado futuramente no backend caso você queira adicionar funcionalidades que precisem de servidor.
