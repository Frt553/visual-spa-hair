import Image from "next/image";

const photos = [
  ["/media/IMG-20240621-WA0041.jpg.jpeg", "Loiro com ondas", "Mechas"],
  ["/media/IMG-20231221-WA0051.jpg.jpeg", "Castanho iluminado", "Coloração"],
  ["/media/IMG-20240403-WA0020.jpg.jpeg", "Corte bob iluminado", "Corte & cor"],
  ["/media/IMG-20240606-WA0030.jpg.jpeg", "Loiro liso", "Mechas"],
  ["/media/IMG-20231025-WA0005.jpg.jpeg", "Ruivo acobreado", "Coloração"],
  ["/media/IMG-20240410-WA0016.jpg.jpeg", "Castanho alinhado", "Tratamento"],
  ["/media/IMG-20240621-WA0040.jpg.jpeg", "Ondas iluminadas", "Penteado"],
  ["/media/IMG-20240207-WA0011.jpg.jpeg", "Brilho e movimento", "Tratamento"],
];

export default function Resultados() {
  return <main><section className="page-hero gallery-hero"><div className="wrap page-hero-inner"><p className="eyebrow light">Resultados reais</p><h1>Beleza com<br /><em>identidade.</em></h1><p>Cores, texturas e movimentos feitos para cada pessoa.</p></div></section>
    <section className="section wrap"><div className="gallery-heading"><div><p className="eyebrow">Nosso trabalho</p><h2>Detalhes que transformam.</h2></div><a className="instagram-link" href="https://www.instagram.com/visual_spahair/" target="_blank" rel="noreferrer">Veja mais no Instagram ↗</a></div>
      <div className="gallery-grid">{photos.map(([src, alt, tag], i) => <figure className={i === 1 || i === 6 ? "gallery-item featured" : "gallery-item"} key={src}><Image src={src} alt={alt} fill sizes="(max-width: 650px) 100vw, 33vw" /><figcaption><span>{tag}</span><b>{alt}</b></figcaption></figure>)}</div>
    </section>
    <section className="video-section section"><div className="wrap"><div className="section-heading horizontal"><div><p className="eyebrow light">Em movimento</p><h2>Um pouco da experiência.</h2></div><p className="muted-light">Aperte o play e acompanhe alguns momentos do salão.</p></div><div className="video-grid">{["0009", "0010", "0012"].map((id, i) => <div className="video-card" key={id}><video controls playsInline preload="metadata"><source src={`/media/VID-20260323-WA${id}.mp4`} type="video/mp4" /></video><span>0{i + 1} · Visual Spa Hair</span></div>)}</div></div></section>
  </main>;
}
