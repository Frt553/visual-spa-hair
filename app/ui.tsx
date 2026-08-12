"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useState } from "react";
import { WHATSAPP_DISPLAY, waLink } from "./whatsapp";

const links = [["/", "Início"], ["/servicos", "Serviços"], ["/resultados", "Resultados"], ["/sobre", "Sobre"], ["/contato", "Contato"]];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className={pathname === "/" ? "site-header home-header" : "site-header"}><div className="header-inner wrap">
    <Link className="brand" href="/" onClick={() => setOpen(false)}><span>VISUAL</span><small>SPA HAIR</small></Link>
    <button className="menu-button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}><i></i><i></i></button>
    <nav className={open ? "main-nav open" : "main-nav"} aria-label="Navegação principal">
      {links.map(([href, label]) => <Link key={href} className={pathname === href ? "active" : ""} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <a className="nav-cta" href={waLink("Olá! Gostaria de agendar um horário.")} target="_blank" rel="noreferrer">Agendar</a>
    </nav>
  </div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="wrap footer-grid">
    <div><Link className="brand footer-brand" href="/"><span>VISUAL</span><small>SPA HAIR</small></Link><p>Salão de beleza em Foz do Iguaçu.<br />Desde 2002.</p></div>
    <div><h3>Visite</h3><p>Av. Marechal Floriano Peixoto, 1278<br />Centro · Foz do Iguaçu · PR</p><a href="https://maps.google.com/?q=Marechal+Floriano+Peixoto+1278+Foz+do+Iguaçu" target="_blank" rel="noreferrer">Abrir no mapa ↗</a></div>
    <div><h3>Converse</h3><a href={waLink()} target="_blank" rel="noreferrer">{WHATSAPP_DISPLAY}</a><a href="https://www.instagram.com/visual_spahair/" target="_blank" rel="noreferrer">@visual_spahair ↗</a></div>
    <div><h3>Navegue</h3>{links.slice(1).map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</div>
  </div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Visual Spa Hair</span><span>Foz do Iguaçu · Paraná</span></div></footer>;
}

export function WhatsAppFloat() {
  return <a className="whatsapp-float" href={waLink("Olá! Vim pelo site e gostaria de agendar.")} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp">
    <b><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12.01 2C6.48 2 2 6.48 2 12c0 1.86.5 3.6 1.38 5.1L2 22l5.06-1.33A9.94 9.94 0 0 0 12.01 22C17.53 22 22 17.52 22 12S17.53 2 12.01 2Zm5.8 14.24c-.24.68-1.4 1.3-1.94 1.36-.5.06-1.13.09-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.65-.14.27.1 1.7.8 1.99.94.29.15.48.22.55.34.07.13.07.72-.17 1.4Z"/></svg></b>
    <span>Agendar</span>
  </a>;
}

export function ServiceCard({ number, title, text }: { number: string; title: string; text: string }) {
  return <article className="service-card"><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b></article>;
}

export function ContactForm() {
  const [name, setName] = useState(""); const [service, setService] = useState("Progressiva"); const [message, setMessage] = useState("");
  function submit(e: FormEvent) { e.preventDefault(); const text = `Olá! Meu nome é ${name}. Tenho interesse em ${service}.${message ? ` ${message}` : ""}`; window.open(waLink(text), "_blank", "noopener,noreferrer"); }
  return <form className="contact-form" onSubmit={submit}><label>Seu nome<input required value={name} onChange={e => setName(e.target.value)} placeholder="Como podemos chamar você?" /></label><label>Serviço de interesse<select value={service} onChange={e => setService(e.target.value)}><option>Progressiva</option><option>Escova ou penteado</option><option>Manutenção de mega hair</option><option>Coloração</option><option>Mechas</option><option>Tratamento capilar</option><option>Terapia capilar</option></select></label><label>Conte um pouco mais<textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Se quiser, descreva o que você procura." rows={4}></textarea></label><button className="button button-dark" type="submit">Enviar pelo WhatsApp <span>↗</span></button></form>;
}
