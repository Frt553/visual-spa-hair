import { ContactForm } from "../ui";

export default function Contato() {
  return <main><section className="page-hero contact-hero"><div className="wrap page-hero-inner"><p className="eyebrow light">Contato</p><h1>Seu próximo<br /><em>momento.</em></h1><p>Conte o que você procura e nossa equipe te atende pelo WhatsApp.</p></div></section>
    <section className="section wrap contact-grid"><div><p className="eyebrow">Fale com a gente</p><h2>Vamos encontrar o cuidado ideal para você.</h2><p className="contact-note">Preencha os dados ao lado. Ao enviar, sua conversa será aberta diretamente no WhatsApp com a mensagem pronta.</p><div className="contact-details"><div><span>WhatsApp</span><a href="https://api.whatsapp.com/send?phone=5545998361763" target="_blank" rel="noreferrer">(45) 99836-1763 ↗</a></div><div><span>Instagram</span><a href="https://www.instagram.com/visual_spahair/" target="_blank" rel="noreferrer">@visual_spahair ↗</a></div><div><span>Endereço</span><p>Av. Marechal Floriano Peixoto, 1278<br />Centro · Foz do Iguaçu · PR</p></div></div></div><ContactForm /></section>
    <section className="map-panel"><div className="wrap map-inner"><div><p className="eyebrow light">No centro de Foz</p><h2>Venha viver sua experiência.</h2></div><a className="button button-light" href="https://maps.google.com/?q=Marechal+Floriano+Peixoto+1278+Foz+do+Iguaçu" target="_blank" rel="noreferrer">Como chegar ↗</a></div></section>
  </main>;
}
