import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "./ui";

const services = [
  ["01", "Transformação", "Progressivas, escovas e penteados pensados para o seu estilo e rotina."],
  ["02", "Cor & luz", "Coloração e mechas com leitura de tom, técnica e cuidado em cada etapa."],
  ["03", "Saúde capilar", "Tratamentos e terapia capilar feminina e masculina com atenção ao couro cabeludo."],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy wrap">
          <p className="eyebrow light">Visual Spa Hair · Foz do Iguaçu</p>
          <h1>Beleza que se vê.<br /><em>Cuidado que se sente.</em></h1>
          <p className="hero-lead">Há 24 anos realçando a sua beleza com técnica, escuta e resultados que respeitam quem você é.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="https://api.whatsapp.com/send?phone=5545998361763&text=Olá!%20Gostaria%20de%20agendar%20um%20horário." target="_blank" rel="noreferrer">Agendar pelo WhatsApp <span>↗</span></a>
            <Link className="text-link light-link" href="/servicos">Conheça os serviços <span>→</span></Link>
          </div>
        </div>
        <div className="hero-image" aria-hidden="true">
          <Image src="/media/IMG-20240207-WA0011.jpg.jpeg" alt="" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
        </div>
        <div className="hero-index">24<br /><small>anos</small></div>
      </section>

      <section className="intro section wrap split">
        <div>
          <p className="eyebrow">Uma experiência completa</p>
          <h2>Seu cabelo conta uma história. A gente cuida de cada capítulo.</h2>
        </div>
        <div className="intro-copy">
          <p>Mais do que transformar o visual, queremos que cada visita seja um momento seu. Da avaliação ao acabamento, combinamos experiência, técnica e cuidado para entregar beleza com identidade.</p>
          <Link className="text-link" href="/sobre">Conheça o Visual Spa Hair <span>→</span></Link>
        </div>
      </section>

      <section className="services-preview section dark-section">
        <div className="wrap">
          <div className="section-heading horizontal">
            <div><p className="eyebrow light">O que fazemos</p><h2>Cuidado em todas as fases.</h2></div>
            <Link className="text-link light-link" href="/servicos">Ver todos os serviços <span>→</span></Link>
          </div>
          <div className="service-grid">
            {services.map(([number, title, text]) => <ServiceCard key={number} number={number} title={title} text={text} />)}
          </div>
        </div>
      </section>

      <section className="results-teaser section wrap">
        <div className="section-heading horizontal">
          <div><p className="eyebrow">Resultados reais</p><h2>Feito para você se reconhecer — e se amar.</h2></div>
          <Link className="text-link" href="/resultados">Explorar resultados <span>→</span></Link>
        </div>
        <div className="editorial-grid">
          <figure className="tile tile-tall"><Image src="/media/IMG-20231025-WA0005.jpg.jpeg" alt="Cabelo ruivo longo com ondas" fill sizes="(max-width: 700px) 100vw, 34vw" /></figure>
          <figure className="tile tile-wide"><Image src="/media/IMG-20240621-WA0040.jpg.jpeg" alt="Cabelo castanho iluminado com penteado ondulado" fill sizes="(max-width: 700px) 100vw, 52vw" /></figure>
          <figure className="tile"><Image src="/media/IMG-20240606-WA0030.jpg.jpeg" alt="Cabelo loiro liso e saudável" fill sizes="(max-width: 700px) 100vw, 26vw" /></figure>
          <div className="tile quote-tile"><p>“A nossa prioridade é realçar a sua beleza.”</p><span>Visual Spa Hair</span></div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-inner">
          <p className="eyebrow light">Seu momento começa aqui</p>
          <h2>Vamos cuidar de você?</h2>
          <a className="button button-light" href="https://api.whatsapp.com/send?phone=5545998361763&text=Olá!%20Gostaria%20de%20agendar%20um%20horário." target="_blank" rel="noreferrer">Quero agendar <span>↗</span></a>
        </div>
      </section>
    </main>
  );
}
