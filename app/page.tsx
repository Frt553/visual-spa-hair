import Image from "next/image";
import Link from "next/link";
import { waLink } from "./whatsapp";

const wa = waLink("Olá! Vim pelo site e gostaria de agendar um horário.");

export default function Home() {
  return <main>
    <section className="cinema-hero">
      <Image src="/media/foto-capa.jpg" alt="Mechas loiras em cabelo ondulado" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      <div className="cinema-shade" />
      <div className="wrap cinema-content"><p className="overline light">Salão de beleza · Foz do Iguaçu</p><h1>Beleza começa<br />com <i>cuidado.</i></h1><div className="cinema-bottom"><p>Cortes, coloração, mechas, progressiva, mega hair, terapia capilar, make e consultoria capilar com avaliação individual.</p><a className="outline-button" href={wa} target="_blank" rel="noreferrer">Agendar atendimento</a></div></div>
      <div className="cinema-count"><b>24</b><span>anos</span></div>
    </section>

    <div className="service-marquee" aria-label="Principais serviços"><div className="marquee-photo"><Image src="/media/cabelos.png" alt="Galeria de resultados do salão" width={340} height={421} /></div><div className="marquee-text">Cortes <b>•</b> Mechas <b>•</b> Coloração <b>•</b> Progressiva <b>•</b> Mega hair <b>•</b> Terapia capilar <b>•</b> Make <b>•</b> Consultoria capilar <b>•</b> Escovas e penteados <b>•</b> Masculino e feminino</div></div>

    <section className="studio-intro section wrap"><div><p className="overline">Visual Spa Hair</p><h2>Um salão com história.<br />Um atendimento para cada pessoa.</h2></div><div className="intro-body"><p>Desde 2002, cuidamos de cabelos em Foz do Iguaçu. O trabalho combina experiência prática, diagnóstico e técnicas escolhidas de acordo com o fio, o estilo e a rotina de cada cliente.</p><Link className="line-link" href="/sobre">Conheça nossa história</Link></div></section>

    <section className="signature-services section"><div className="wrap"><p className="overline light">Especialidades</p>
      <div className="signature-grid">
        <article><div className="signature-photo"><Image src="/media/foto-saude-capilar.jpg" alt="Aplicação de tratamento capilar" fill sizes="(max-width: 700px) 88vw, 46vw" /></div><h3>Saúde capilar</h3><p>Tricoscopia, tratamentos e terapia capilar para mulheres e homens.</p></article>
        <article><div className="signature-photo"><Image src="/media/tricoscopia-terapiacapilar.jpg" alt="Exame de tricoscopia" fill sizes="(max-width: 700px) 88vw, 46vw" /></div><h3>Terapia capilar</h3><p>Tricoscopia, alopecias, psoríase, dermatites, queda pós-gravítica, oleosidade e pós-implante.</p></article>
      </div>
    </div></section>

    <section className="portfolio-home section wrap"><div className="portfolio-title"><p className="overline">Portfólio</p><h2>Trabalho real.<br />Resultado real.</h2><p>Uma seleção de cores, acabamentos e penteados realizados no salão.</p></div><div className="portfolio-collage">
      <figure className="port-a"><Image src="/media/cabelo-ruivo-1.jpg" alt="Cabelo ruivo dourado" fill sizes="(max-width: 700px) 100vw, 38vw" /><figcaption>Coloração · Ruivo</figcaption></figure>
      <figure className="port-b"><Image src="/media/IMG-20240621-WA0040.jpg.jpeg" alt="Penteado ondulado" fill sizes="(max-width: 700px) 75vw, 26vw" /><figcaption>Penteado · Ondas</figcaption></figure>
      <figure className="port-c"><Image src="/media/IMG-20240606-WA0030.jpg.jpeg" alt="Cabelo loiro alinhado" fill sizes="(max-width: 700px) 75vw, 26vw" /><figcaption>Mechas · Loiro</figcaption></figure>
      <figure className="port-d"><Image src="/media/IMG-20240403-WA0020.jpg.jpeg" alt="Corte curto iluminado" fill sizes="(max-width: 700px) 75vw, 26vw" /><figcaption>Cor · Iluminação</figcaption></figure>
    </div><div className="portfolio-more"><Link className="line-link" href="/resultados">Ver todos os resultados</Link></div></section>

    <section className="salon-proof"><div className="proof-image"><Image src="/media/IMG-20231221-WA0051.jpg.jpeg" alt="Cabelo castanho com ondas" fill sizes="(max-width: 850px) 100vw, 50vw" /></div><div className="proof-copy"><span className="proof-mark">V</span><p className="overline light">Nossa forma de trabalhar</p><h2>Ouvir.<br />Avaliar.<br /><i>Fazer bem.</i></h2><p>A técnica vem depois da conversa. Antes de começar, entendemos o histórico do cabelo, a manutenção possível e o resultado que você procura.</p><a className="outline-button" href={wa} target="_blank" rel="noreferrer">Falar com a equipe</a></div></section>

    <section className="visit-block"><div className="wrap visit-grid"><div><p className="overline">Onde estamos</p><h2>No centro de<br />Foz do Iguaçu.</h2></div><div className="visit-info"><div><span>Endereço</span><p>Av. Marechal Floriano Peixoto, 1278<br />Centro · Foz do Iguaçu · PR</p></div><div><span>Contato</span><p>(45) 99836-1763<br />@visual_spahair</p></div><a className="solid-button" href={wa} target="_blank" rel="noreferrer">Agendar pelo WhatsApp</a></div></div></section>
  </main>;
}
