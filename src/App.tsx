import { useEffect, useState } from "react";
import { COPY, COMPARE, FAQ, SPECTRUM, DOWNLOAD_URL, GITHUB_URL, CONTACT_EMAIL, type Lang } from "./content";
import { Icon } from "./Icon";
import "./App.css";

export default function App() {
  const [lang, setLang] = useState<Lang>(() => (navigator.language.startsWith("en") ? "en" : "pt"));
  const c = COPY[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  // revela seções ao entrar na viewport (motion sutil, com fallback visível se sem JS/observer)
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  return (
    <>
      <div className="aurora" aria-hidden />
      <header className="nav">
        <a className="brand" href="#top" aria-label="PRISMA">
          <img src="logo.svg" alt="" width={30} height={30} />
          <span>PRISMA</span>
        </a>
        <nav className="nav-links">
          <a href="#features">{c.nav.features}</a>
          <a href="#gallery">{c.nav.gallery}</a>
          <a href="#audiences">{c.nav.audiences}</a>
        </nav>
        <div className="nav-right">
          <button className="lang" onClick={() => setLang((l) => (l === "pt" ? "en" : "pt"))} aria-label="Language">
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <a className="btn btn-primary btn-sm" href={DOWNLOAD_URL} target="_blank" rel="noreferrer">
            {c.nav.download}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow" aria-hidden>
            {SPECTRUM.map((col, i) => (
              <span key={i} className="ray" style={{ background: col, ["--i" as string]: i }} />
            ))}
          </div>
          <div className="hero-inner">
            <span className="badge">{c.hero.badge}</span>
            <h1 className="hero-title">
              {c.hero.title} <span className="grad">{c.hero.titleAccent}</span>
            </h1>
            <p className="hero-sub">{c.hero.sub}</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href={DOWNLOAD_URL} target="_blank" rel="noreferrer">
                <Icon name="download" /> {c.hero.ctaDownload}
              </a>
              <a className="btn btn-ghost" href={GITHUB_URL} target="_blank" rel="noreferrer">
                <Icon name="github" /> {c.hero.ctaGithub}
              </a>
            </div>
            <ul className="hero-tags">
              {c.hero.tags.map((t) => (
                <li key={t}>
                  <Icon name="check" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-shot" data-reveal>
            <img src="shots/grid.png" alt="PRISMA — biblioteca de mídia" loading="lazy" />
          </div>
        </section>

        <section className="problem" data-reveal>
          <p className="kicker">{c.problem.kicker}</p>
          <h2>{c.problem.title}</h2>
          <p className="lead">{c.problem.body}</p>
        </section>

        <section className="section" id="features">
          <div className="section-head" data-reveal>
            <h2>{c.featuresTitle}</h2>
            <p className="lead">{c.featuresSub}</p>
          </div>
          <div className="feat-grid">
            {c.features.map((f, i) => (
              <article className="feat" key={f.title} data-reveal style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
                <span className="feat-ico" style={{ color: SPECTRUM[i % SPECTRUM.length] }}>
                  <Icon name={f.icon} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section audiences" id="audiences">
          <div className="section-head" data-reveal>
            <h2>{c.audiences.title}</h2>
          </div>
          <div className="aud-grid">
            {[c.audiences.editor, c.audiences.designer].map((a, idx) => (
              <article className="aud" key={a.title} data-reveal style={{ transitionDelay: `${idx * 80}ms` }}>
                <span className="aud-ico" style={{ color: idx === 0 ? "#0A84FF" : "#BF5AF2" }}>
                  <Icon name={idx === 0 ? "video" : "layers"} />
                </span>
                <h3>{a.title}</h3>
                <ul>
                  {a.points.map((p) => (
                    <li key={p}>
                      <Icon name="check" /> {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section gallery" id="gallery">
          <div className="section-head" data-reveal>
            <h2>{c.gallery.title}</h2>
            <p className="lead">{c.gallery.sub}</p>
          </div>
          <div className="gal-frame" data-reveal>
            <img src="shots/inspector.png" alt="PRISMA — interface do app" loading="lazy" />
          </div>
        </section>

        <section className="section compare">
          <div className="section-head" data-reveal>
            <h2>{COMPARE[lang].title}</h2>
            <p className="lead">{COMPARE[lang].sub}</p>
          </div>
          <div className="cmp-wrap" data-reveal>
            <table className="cmp-table">
              <thead>
                <tr>
                  <th />
                  <th className="cmp-us">{COMPARE[lang].cols[0]}</th>
                  <th>{COMPARE[lang].cols[1]}</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE[lang].rows.map((r) => (
                  <tr key={r.f}>
                    <td className="cmp-f">{r.f}</td>
                    <td className="cmp-us">
                      <Cell v={r.a} />
                    </td>
                    <td>
                      <Cell v={r.b} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section video-sec">
          <div className="section-head" data-reveal>
            <h2>{lang === "pt" ? "Veja o PRISMA em ação" : "See PRISMA in action"}</h2>
          </div>
          <div className="video-frame" data-reveal>
            <video
              src="trailer.mp4"
              poster="trailer-poster.jpg"
              controls
              playsInline
              preload="none"
            />
          </div>
        </section>

        <section className="section why" data-reveal>
          <div className="section-head">
            <h2>{c.why.title}</h2>
          </div>
          <div className="why-grid">
            {c.why.items.map((w) => (
              <div className="why-item" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section faq">
          <div className="section-head" data-reveal>
            <h2>{FAQ[lang].title}</h2>
          </div>
          <div className="faq-list">
            {FAQ[lang].items.map((it, i) => (
              <details className="faq-item" key={it.q} data-reveal style={{ transitionDelay: `${(i % 3) * 50}ms` }}>
                <summary>{it.q}</summary>
                <p>{it.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="cta" data-reveal>
          <div className="cta-rays" aria-hidden>
            {SPECTRUM.map((col) => (
              <span key={col} style={{ background: col }} />
            ))}
          </div>
          <img className="cta-mascote" src="mascote.png" alt="" loading="lazy" aria-hidden />
          <h2>{c.cta.title}</h2>
          <p>{c.cta.sub}</p>
          <a className="btn btn-primary btn-lg" href={DOWNLOAD_URL} target="_blank" rel="noreferrer">
            <Icon name="download" /> {c.cta.button}
          </a>
        </section>
      </main>

      <footer className="foot">
        <div className="foot-brand">
          <img src="logo.svg" alt="" width={26} height={26} />
          <span>PRISMA</span>
        </div>
        <p>{c.footer.built}</p>
        <div className="foot-links">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
        <p className="foot-fine">
          © {new Date().getFullYear()} PRISMA · {c.footer.free}
        </p>
      </footer>
    </>
  );
}

function Cell({ v }: { v: string }) {
  const low = v.toLowerCase();
  if (low === "sim" || low === "yes") return <span className="ck yes" aria-label="sim">✓</span>;
  if (low === "não" || low === "nao" || low === "no") return <span className="ck no" aria-label="não">✕</span>;
  return <span className="cval">{v}</span>;
}
