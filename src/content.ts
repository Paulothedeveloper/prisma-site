// Conteúdo bilíngue (PT-BR / EN) da landing do PRISMA. Copy de marketing derivada do produto.
export type Lang = "pt" | "en";

export const DOWNLOAD_URL = "https://github.com/Paulothedeveloper/prisma-app/releases/latest";
export const GITHUB_URL = "https://github.com/Paulothedeveloper/prisma-app";
export const CONTACT_EMAIL = "contato@paulocodex.com";

export const SPECTRUM = ["#FF453A", "#FF9F0A", "#FFD60A", "#30D158", "#40C8E0", "#0A84FF", "#BF5AF2"];

type Feature = { icon: string; title: string; body: string };

interface Copy {
  nav: { features: string; gallery: string; audiences: string; download: string };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    sub: string;
    ctaDownload: string;
    ctaGithub: string;
    tags: string[];
  };
  problem: { kicker: string; title: string; body: string };
  featuresTitle: string;
  featuresSub: string;
  features: Feature[];
  audiences: {
    title: string;
    editor: { title: string; points: string[] };
    designer: { title: string; points: string[] };
  };
  gallery: { title: string; sub: string };
  why: {
    title: string;
    items: { title: string; body: string }[];
  };
  cta: { title: string; sub: string; button: string };
  footer: { built: string; free: string; rights: string };
}

// Comparativo honesto vs Eagle (rival direto). ✓/✗/~ por coluna. Fonte do preço do Eagle: en.eagle.cool/store (US$34,95).
export const COMPARE: Record<Lang, { title: string; sub: string; cols: [string, string]; rows: { f: string; a: string; b: string }[] }> = {
  pt: {
    title: "PRISMA vs. Eagle",
    sub: "Faz tudo que o Eagle faz — e o que só quem edita vídeo sabe que falta.",
    cols: ["PRISMA", "Eagle"],
    rows: [
      { f: "Preço", a: "Grátis (open source)", b: "US$ 34,95" },
      { f: "Offline, sem conta", a: "sim", b: "sim" },
      { f: "Nunca toca nos originais", a: "sim", b: "sim" },
      { f: "Organizar, tags, busca por cor", a: "sim", b: "sim" },
      { f: "CST de cor pro DaVinci Resolve", a: "sim", b: "não" },
      { f: "Proxies automáticos (ProRes etc.)", a: "sim", b: "não" },
      { f: "Diagnóstico + conserto (VFR, banding)", a: "sim", b: "não" },
      { f: "Baixar de YouTube / Instagram", a: "sim", b: "não" },
      { f: "Busca por IA (imagem/significado)", a: "sim", b: "sim" },
      { f: "Marca d'água, OCR, GIF, contact-sheet", a: "sim", b: "sim" },
      { f: "Código aberto", a: "sim", b: "não" },
      { f: "Windows / Mac", a: "Windows (Mac em breve)", b: "Windows e Mac" },
    ],
  },
  en: {
    title: "PRISMA vs. Eagle",
    sub: "Does everything Eagle does — plus what only a video editor knew was missing.",
    cols: ["PRISMA", "Eagle"],
    rows: [
      { f: "Price", a: "Free (open source)", b: "US$ 34.95" },
      { f: "Offline, no account", a: "yes", b: "yes" },
      { f: "Never touches originals", a: "yes", b: "yes" },
      { f: "Organize, tags, color search", a: "yes", b: "yes" },
      { f: "Color CST for DaVinci Resolve", a: "yes", b: "no" },
      { f: "Automatic proxies (ProRes etc.)", a: "yes", b: "no" },
      { f: "Diagnose + fix (VFR, banding)", a: "yes", b: "no" },
      { f: "Download from YouTube / Instagram", a: "yes", b: "no" },
      { f: "AI search (image/meaning)", a: "yes", b: "yes" },
      { f: "Watermark, OCR, GIF, contact-sheet", a: "yes", b: "yes" },
      { f: "Open source", a: "yes", b: "no" },
      { f: "Windows / Mac", a: "Windows (Mac soon)", b: "Windows & Mac" },
    ],
  },
};

export const FAQ: Record<Lang, { title: string; items: { q: string; a: string }[] }> = {
  pt: {
    title: "Perguntas frequentes",
    items: [
      { q: "É grátis mesmo?", a: "Sim. O PRISMA é gratuito e de código aberto. Baixe e use, sem conta e sem cartão." },
      { q: "Funciona offline?", a: "100%. Tudo roda no seu PC — sem nuvem, sem servidor, sem depender de internet." },
      { q: "Ele altera meus arquivos?", a: "Nunca. O PRISMA indexa suas pastas onde já estão e jamais move, renomeia ou edita um original. Tudo que ele gera é cópia nova." },
      { q: "Quais sistemas?", a: "Windows agora. Versão para Mac vem a seguir." },
      { q: "Como recebo atualizações?", a: "O app se atualiza sozinho — você sempre tem a versão mais nova." },
      { q: "Preciso de conta ou nuvem?", a: "Não. Sua biblioteca é sua, no seu disco." },
    ],
  },
  en: {
    title: "Frequently asked questions",
    items: [
      { q: "Is it really free?", a: "Yes. PRISMA is free and open source. Download and use it — no account, no card." },
      { q: "Does it work offline?", a: "100%. Everything runs on your machine — no cloud, no server, no internet needed." },
      { q: "Does it alter my files?", a: "Never. PRISMA indexes your folders in place and never moves, renames or edits an original. Everything it makes is a fresh copy." },
      { q: "Which systems?", a: "Windows now. A Mac version is coming next." },
      { q: "How do I get updates?", a: "The app updates itself — you always have the latest version." },
      { q: "Do I need an account or cloud?", a: "No. Your library is yours, on your disk." },
    ],
  },
};

// Planos (open-core). Grátis = organizar/achar. Pro = preparar/IA. Studio = time.
// Compra no checkout PRÓPRIO (paulocodex.com/comprar) — Stripe, sem Gumroad, sem redirect pra loja.
export const BUY_URL = "https://paulocodex.com/comprar?product=prisma";
export const PLANS: Record<
  Lang,
  {
    title: string;
    sub: string;
    tiers: { name: string; price: string; note: string; features: string[]; cta: string; highlight?: boolean; free?: boolean }[];
    foot: string;
  }
> = {
  pt: {
    title: "Simples de escolher",
    sub: "O núcleo é grátis pra sempre. O Pro libera o que prepara e finaliza sua mídia.",
    tiers: [
      {
        name: "Grátis",
        price: "R$ 0",
        note: "pra sempre · + 3 dias de Pro",
        free: true,
        cta: "Baixar",
        features: ["3 dias de Pro completo ao começar", "Organizar, tags, coleções", "Busca por cor e nome", "Prévia de tudo", "Duplicados e favoritos", "Forma de onda + BPM"],
      },
      {
        name: "Pro",
        price: "R$ 150",
        note: "pagamento único · vitalício · 2 PCs",
        highlight: true,
        cta: "Comprar Pro",
        features: ["Tudo do Grátis +", "IA: busca, auto-tag, upscale, remover fundo", "CST DaVinci + proxies + conserto", "Baixar do YouTube/Spotify/Epidemic", "Marca d'água, GIF, contact-sheet, OCR…", "Uso comercial"],
      },
    ],
    foot: "Pagamento seguro no cartão, direto aqui — sua chave na hora. Grátis e Pro nunca tocam nos seus originais.",
  },
  en: {
    title: "Easy to choose",
    sub: "The core is free forever. Pro unlocks what preps and finishes your media.",
    tiers: [
      {
        name: "Free",
        price: "$0",
        note: "forever · + 3-day Pro trial",
        free: true,
        cta: "Download",
        features: ["3-day full Pro trial to start", "Organize, tags, collections", "Search by color and name", "Preview everything", "Duplicates and favorites", "Waveform + BPM"],
      },
      {
        name: "Pro",
        price: "$39",
        note: "one-time · lifetime · 2 PCs",
        highlight: true,
        cta: "Buy Pro",
        features: ["Everything in Free +", "AI: search, auto-tag, upscale, bg removal", "DaVinci CST + proxies + fix", "Download from YouTube/Spotify/Epidemic", "Watermark, GIF, contact-sheet, OCR…", "Commercial use"],
      },
    ],
    foot: "Secure card payment, right here — your key instantly. Free and Pro never touch your originals.",
  },
};

export const COPY: Record<Lang, Copy> = {
  pt: {
    nav: { features: "Recursos", gallery: "Telas", audiences: "Pra quem é", download: "Baixar" },
    hero: {
      badge: "Grátis · Offline · Windows",
      title: "Sua mídia, finalmente",
      titleAccent: "organizada.",
      sub: "PRISMA é a biblioteca inteligente do editor de vídeo e do designer. Indexa suas pastas onde elas já estão — sem mover, copiar, renomear ou alterar nada — e te dá uma central rápida pra achar, ver, etiquetar e preparar cada asset.",
      ctaDownload: "Baixar grátis",
      ctaGithub: "Ver no GitHub",
      tags: ["Nunca toca nos originais", "100% offline", "Sem conta, sem nuvem"],
    },
    problem: {
      kicker: "O problema",
      title: "Achar o asset certo não devia ser uma caçada.",
      body: "Pastas espalhadas, nomes crípticos, codecs que não tocam, clipe que trava o Resolve. O PRISMA cataloga tudo no lugar onde está e transforma o caos em uma parede de mídia rápida, pesquisável e pronta pra editar.",
    },
    featuresTitle: "Tudo o que uma biblioteca de mídia devia ter.",
    featuresSub: "E o que só quem edita vídeo sabe que faltava.",
    features: [
      { icon: "shield", title: "Não-destrutivo", body: "Indexa suas pastas no lugar. Nunca move, copia, renomeia nem altera um arquivo original. Ponto." },
      { icon: "offline", title: "Offline & grátis", body: "Roda 100% local, sem nuvem e sem conta. Sua biblioteca é sua, no seu PC." },
      { icon: "color", title: "Inteligência de cor", body: "Lê os metadados de cada clipe e recomenda a configuração de CST (espaço de cor) certa pro DaVinci Resolve." },
      { icon: "proxy", title: "Proxies automáticos", body: "Gera proxies H.264 pra tocar ProRes e codecs profissionais na hora, sem travar." },
      { icon: "health", title: "Diagnóstico & conserto", body: "Detecta VFR, banding, áudio mudo e codec pesado — e conserta com um clique, sempre em arquivo novo." },
      { icon: "ai", title: "Busca por IA", body: "Encontre por imagem, por cor ou por significado com busca semântica local (CLIP). Sem lembrar o nome do arquivo." },
      { icon: "download", title: "Baixar da web", body: "Traga vídeo do YouTube e do Instagram por link, áudio ou vídeo em alta qualidade — já catalogado." },
      { icon: "tools", title: "Ferramentas nativas", body: "Marca d'água, OCR, GIF, recorte, comparar, folha de contatos, QR, forma de onda com BPM… tudo dentro." },
    ],
    audiences: {
      title: "Feito para dois ofícios.",
      editor: {
        title: "Editor de vídeo",
        points: [
          "CST do DaVinci recomendada por clipe",
          "Proxies pra codecs pro (ProRes, etc.)",
          "Diagnóstico técnico + conserto",
          "Arraste direto pro Premiere / Resolve",
        ],
      },
      designer: {
        title: "Designer gráfico",
        points: [
          "Parede visual (masonry) por cor e tom",
          "Fontes, paletas e referências num lugar",
          "Visor de fonte com glifos e cascata",
          "Marca d'água, recorte e folha de contatos",
        ],
      },
    },
    gallery: { title: "Bonito de trabalhar.", sub: "Escuro, denso, fluido — a mídia é a estrela." },
    why: {
      title: "Por que PRISMA.",
      items: [
        { title: "Seguro por design", body: "Seus arquivos originais nunca são tocados. Tudo o que o PRISMA gera é cópia nova." },
        { title: "Rápido de verdade", body: "SQLite + Rust indexam dezenas de milhares de arquivos sem suar. Rola liso." },
        { title: "Aberto & confiável", body: "Código aberto no GitHub. Sem telemetria escondida, sem assinatura." },
      ],
    },
    cta: {
      title: "Pare de caçar arquivos.",
      sub: "Baixe o PRISMA e organize sua mídia em minutos. Grátis, pra sempre.",
      button: "Baixar para Windows",
    },
    footer: { built: "Feito por um editor de vídeo, para editores e designers.", free: "Grátis e offline", rights: "Todos os direitos reservados." },
  },
  en: {
    nav: { features: "Features", gallery: "Screens", audiences: "Who it's for", download: "Download" },
    hero: {
      badge: "Free · Offline · Windows",
      title: "Your media, finally",
      titleAccent: "organized.",
      sub: "PRISMA is the smart library for video editors and designers. It indexes your folders right where they are — without moving, copying, renaming or altering anything — and gives you a fast hub to find, preview, tag and prep every asset.",
      ctaDownload: "Download free",
      ctaGithub: "View on GitHub",
      tags: ["Never touches originals", "100% offline", "No account, no cloud"],
    },
    problem: {
      kicker: "The problem",
      title: "Finding the right asset shouldn't be a hunt.",
      body: "Scattered folders, cryptic names, codecs that won't play, a clip that chokes Resolve. PRISMA catalogs it all in place and turns the chaos into a fast, searchable, edit-ready wall of media.",
    },
    featuresTitle: "Everything a media library should be.",
    featuresSub: "Plus what only a video editor knew was missing.",
    features: [
      { icon: "shield", title: "Non-destructive", body: "Indexes your folders in place. Never moves, copies, renames or alters an original file. Period." },
      { icon: "offline", title: "Offline & free", body: "Runs 100% locally, no cloud and no account. Your library is yours, on your machine." },
      { icon: "color", title: "Color intelligence", body: "Reads each clip's metadata and recommends the right CST (color space) setup for DaVinci Resolve." },
      { icon: "proxy", title: "Automatic proxies", body: "Generates H.264 proxies to play ProRes and pro codecs instantly, no stutter." },
      { icon: "health", title: "Diagnose & fix", body: "Detects VFR, banding, silent audio and heavy codecs — and fixes them in one click, always to a new file." },
      { icon: "ai", title: "AI search", body: "Find by image, by color or by meaning with local semantic search (CLIP). No filename required." },
      { icon: "download", title: "Grab from the web", body: "Pull video from YouTube and Instagram by link, audio or video in high quality — cataloged instantly." },
      { icon: "tools", title: "Native tools", body: "Watermark, OCR, GIF, crop, compare, contact sheet, QR, waveform with BPM… all built in." },
    ],
    audiences: {
      title: "Built for two crafts.",
      editor: {
        title: "Video editor",
        points: [
          "DaVinci CST recommended per clip",
          "Proxies for pro codecs (ProRes, etc.)",
          "Technical diagnosis + fix",
          "Drag straight into Premiere / Resolve",
        ],
      },
      designer: {
        title: "Graphic designer",
        points: [
          "Visual wall (masonry) by color and tone",
          "Fonts, palettes and refs in one place",
          "Font viewer with glyphs and waterfall",
          "Watermark, crop and contact sheet",
        ],
      },
    },
    gallery: { title: "A joy to work in.", sub: "Dark, dense, fluid — the media is the star." },
    why: {
      title: "Why PRISMA.",
      items: [
        { title: "Safe by design", body: "Your original files are never touched. Everything PRISMA makes is a fresh copy." },
        { title: "Genuinely fast", body: "SQLite + Rust index tens of thousands of files without breaking a sweat. Buttery." },
        { title: "Open & trustworthy", body: "Open source on GitHub. No hidden telemetry, no subscription." },
      ],
    },
    cta: {
      title: "Stop hunting for files.",
      sub: "Download PRISMA and organize your media in minutes. Free, forever.",
      button: "Download for Windows",
    },
    footer: { built: "Built by a video editor, for editors and designers.", free: "Free and offline", rights: "All rights reserved." },
  },
};
