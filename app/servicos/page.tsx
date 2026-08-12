import Image from "next/image";

const services = [
  { n: "01", title: "Progressiva", text: "Alinhamento dos fios com avaliação prévia e protocolo adequado à saúde do seu cabelo.", note: "Avaliação personalizada" },
  { n: "02", title: "Escovas & penteados", text: "Do acabamento leve para o dia a dia à produção especial para eventos e celebrações.", note: "Beleza para cada ocasião" },
  { n: "03", title: "Mega hair", text: "Manutenção cuidadosa para preservar a naturalidade, o conforto e a beleza do seu alongamento.", note: "Manutenção especializada" },
  { n: "04", title: "Coloração", text: "Cor pensada para harmonizar com sua pele, seu estilo e a condição atual dos fios.", note: "Técnica e personalidade" },
  { n: "05", title: "Mechas", text: "Iluminação sob medida — dos contrastes delicados aos loiros marcantes, sempre com cuidado.", note: "Luz na medida certa" },
  { n: "06", title: "Tratamentos", text: "Hidratação, nutrição e reconstrução em protocolos escolhidos a partir da necessidade real do fio.", note: "Saúde e brilho" },
  { n: "07", title: "Terapia capilar", text: "Cuidado feminino e masculino para couro cabeludo e fios, com atenção individualizada.", note: "Feminino e masculino" },
];

export default function Servicos() {
  return <main>
    <section className="page-hero service-hero"><div className="wrap page-hero-inner"><p className="eyebrow light">Serviços</p><h1>Técnica, cuidado<br />e <em>intenção.</em></h1><p>Uma experiência pensada do diagnóstico ao acabamento.</p></div></section>
    <section className="section wrap services-list">
      <div className="services-intro"><p className="eyebrow">Nosso menu</p><h2>Escolha o seu próximo momento.</h2><p>Valores e tempo de atendimento variam conforme comprimento, volume e diagnóstico. Fale com a nossa equipe para uma orientação personalizada.</p></div>
      <div className="service-rows">{services.map(s => <article className="service-row" key={s.n}><span>{s.n}</span><div><h3>{s.title}</h3><small>{s.note}</small></div><p>{s.text}</p><a href={`https://api.whatsapp.com/send?phone=5545998361763&text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${s.title}.`)}`} target="_blank" rel="noreferrer" aria-label={`Agendar ${s.title}`}>↗</a></article>)}</div>
    </section>
    <section className="diagnosis section"><div className="wrap diagnosis-grid"><div className="diagnosis-image"><Image src="/media/IMG-20240410-WA0039.jpg.jpeg" alt="Avaliação de couro cabeludo para terapia capilar" fill sizes="(max-width: 800px) 100vw, 45vw" /></div><div><p className="eyebrow light">Começamos pela escuta</p><h2>O melhor resultado nasce de um bom diagnóstico.</h2><p>Entender seu histórico, sua rotina e seus desejos faz parte do atendimento. Assim, cada escolha técnica tem um propósito e cada resultado preserva a sua individualidade.</p><a className="button button-gold" href="https://api.whatsapp.com/send?phone=5545998361763&text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação." target="_blank" rel="noreferrer">Agendar uma avaliação ↗</a></div></div></section>
  </main>;
}
