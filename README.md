# Autigames — Site Institucional

Site institucional da Autigames, plataforma brasileira de jogos digitais terapêuticos para crianças com TEA.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS** para estilização
- **shadcn/ui** (componentes base via `@base-ui/react`)
- **react-hook-form + zod v4** para formulários
- **Lucide React** para ícones

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## Deploy (Vercel)

1. Conecte o repositório no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente (veja `.env.example`)
3. Deploy automático a cada push na branch principal

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

| Variável | Descrição |
|----------|-----------|
| `NEXT_PUBLIC_SITE_URL` | URL pública do site (ex: `https://autigames.com.br`) |
| `NEXT_PUBLIC_GTM_ID` | ID do Google Tag Manager (ex: `GTM-XXXXXXX`) |
| `RESEND_API_KEY` | Chave de API do [Resend](https://resend.com) para e-mails |
| `LEAD_EMAIL` | E-mail que recebe os leads dos formulários |
| `LEADS_WEBHOOK_URL` | (opcional) Webhook para CRM (Zapier, n8n, HubSpot) |

## Editando conteúdo

### Jogos
Edite `content/games.json` — cada jogo tem `slug`, `name`, `status`, `skills` e `howItWorks`.

### Equipe
Edite `content/team.json` com nome, cargo e bio dos membros.

### Blog
Adicione arquivos `.md` em `content/posts/` e registre no array `posts` em `app/blog/[slug]/page.tsx`.

> Para escala, migre para um CMS headless (Contentful, Sanity, ou similar).

## Páginas

| Rota | Página |
|------|--------|
| `/` | Home |
| `/para-pais` | Para Pais e Famílias (B2C) |
| `/para-profissionais` | Para Profissionais (B2B + formulário de lead) |
| `/para-empresas` | Para Empresas/ESG (B2B + formulário de lead) |
| `/sobre` | Sobre / Equipe Científica |
| `/jogos` | Catálogo de Jogos |
| `/jogos/[slug]` | Página individual de jogo |
| `/blog` | Blog |
| `/blog/[slug]` | Post individual |
| `/contato` | Fale Conosco |
| `/politica-de-privacidade` | Política de Privacidade ⚠️ |
| `/termos-de-uso` | Termos de Uso ⚠️ |

## API de Leads

`POST /api/leads` — recebe dados dos formulários:
1. Envia e-mail via Resend (se `RESEND_API_KEY` configurada)
2. Dispara webhook para CRM (se `LEADS_WEBHOOK_URL` configurada)

## Pendências antes do lançamento

- [ ] Substituir textos de Política de Privacidade e Termos de Uso por versão jurídica (LGPD)
- [ ] Substituir `GTM-XXXXXXX` pelo ID real do GTM
- [ ] Configurar Resend com domínio verificado (`noreply@autigames.com.br`)
- [ ] Adicionar fotos reais da equipe em `public/images/equipe/`
- [ ] Adicionar imagens/screenshots dos jogos em `public/images/jogos/`
- [ ] Criar `public/og-default.jpg` (1200×630px) para compartilhamento social
- [ ] Adicionar links reais do App Store e Google Play
- [ ] Configurar domínio no Vercel
# autigames
