import Image from "next/image";
import Link from "next/link";

const services = [
  ["Progressiva e escovas", "Alinhamento, movimento e acabamento com avaliação prévia dos fios."],
  ["Coloração e mechas", "Cor personalizada, correção de tom e técnicas de iluminação."],
  ["Mega hair", "Manutenção com atenção ao conforto, acabamento e saúde do cabelo."],
  ["Tratamentos", "Protocolos de hidratação, nutrição e reconstrução conforme a necessidade."],
  ["Terapia capilar", "Atendimento feminino e masculino para couro cabeludo e fios."],
  ["Penteados", "Produções para festas, formaturas, casamentos e outras ocasiões."],
];

export default function Home() {
  return <main>
    <section className="home-hero">
      <div className="wrap home-hero-grid">
        <div className="home-hero-copy">
          <p className="kicker">Salão de beleza · Foz do Iguaçu</p>
          <h1>Seu cabelo,<br />bem cuidado.</h1>
          <p className="home-summary">Serviços de cabelo e terapia capilar com atendimento próximo, avaliação individual e 24 anos de experiência.</p>
          <div className="home-actions"><a className="primary-action" href="https://api.whatsapp.com/send?phone=5545998361763&text=Olá!%20Gostaria%20de%20agendar%20um%20horário." target="_blank" rel="noreferrer">Agendar horário</a><Link href="/servicos" className="secondary-action">Ver serviços</Link></div>
          <div className="hero-address"><span>Av. Marechal Floriano Peixoto, 1278</span><span>Centro · Foz do Iguaçu</span></div>
        </div>
        <div className="home-hero-photo"><Image src="/media/IMG-20240207-WA0011.jpg.jpeg" alt="Resultado de cabelo longo com ondas no Visual Spa Hair" fill priority sizes="(max-width: 800px) 100vw, 52vw" /></div>
      </div>
    </section>

    <section className="trust-strip"><div className="wrap trust-grid"><div><strong>24</strong><span>anos de experiência</span></div><div><strong>7</strong><span>áreas de atendimento</span></div><div><strong>Centro</strong><span>Foz do Iguaçu · PR</span></div></div></section>

    <section className="section clean-section wrap">
      <div className="clean-heading"><p className="kicker">Serviços</p><div><h2>Atendimento completo para cabelo.</h2><p>Da manutenção de rotina às mudanças de cor, cada serviço começa com uma conversa sobre seu cabelo e o resultado esperado.</p></div></div>
      <div className="clean-service-grid">{services.map(([title,text], i) => <article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p><a href={`https://api.whatsapp.com/send?phone=5545998361763&text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${title}.`)}`} target="_blank" rel="noreferrer">Consultar pelo WhatsApp</a></article>)}</div>
      <div className="section-link"><Link href="/servicos">Ver detalhes de todos os serviços <span>→</span></Link></div>
    </section>

    <section className="work-section section"><div className="wrap">
      <div className="work-heading"><div><p className="kicker">Trabalhos recentes</p><h2>Resultados do salão.</h2></div><a href="https://www.instagram.com/visual_spahair/" target="_blank" rel="noreferrer">Acompanhar no Instagram ↗</a></div>
      <div className="work-grid">
        <figure className="work-main"><Image src="/media/IMG-20231025-WA0005.jpg.jpeg" alt="Coloração ruiva com ondas" fill sizes="(max-width: 700px) 100vw, 48vw" /><figcaption><b>Coloração</b><span>Ruivo acobreado</span></figcaption></figure>
        <figure><Image src="/media/IMG-20240621-WA0040.jpg.jpeg" alt="Penteado castanho iluminado" fill sizes="(max-width: 700px) 100vw, 24vw" /><figcaption><b>Penteado</b><span>Ondas iluminadas</span></figcaption></figure>
        <figure><Image src="/media/IMG-20240606-WA0030.jpg.jpeg" alt="Cabelo loiro liso" fill sizes="(max-width: 700px) 100vw, 24vw" /><figcaption><b>Mechas</b><span>Loiro com acabamento liso</span></figcaption></figure>
      </div>
      <div className="section-link"><Link href="/resultados">Ver galeria completa <span>→</span></Link></div>
    </div></section>

    <section className="about-home section wrap"><div className="about-image"><Image src="/media/IMG-20240410-WA0016.jpg.jpeg" alt="Resultado de cabelo castanho alinhado" fill sizes="(max-width: 800px) 100vw, 43vw" /></div><div className="about-home-copy"><p className="kicker">Visual Spa Hair</p><h2>Experiência sem atendimento impessoal.</h2><p>Há 24 anos no centro de Foz do Iguaçu, atendemos mulheres e homens que procuram cuidado técnico, orientação clara e um resultado adequado à própria rotina.</p><Link className="secondary-action" href="/sobre">Conheça o salão</Link></div></section>

    <section className="appointment"><div className="wrap appointment-grid"><div><p className="kicker kicker-light">Agendamento</p><h2>Fale diretamente<br />com a equipe.</h2></div><div><p>Envie uma mensagem pelo WhatsApp para consultar horários, valores e avaliação.</p><a className="primary-action light-action" href="https://api.whatsapp.com/send?phone=5545998361763&text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar." target="_blank" rel="noreferrer">Abrir WhatsApp</a></div></div></section>
  </main>;
}
