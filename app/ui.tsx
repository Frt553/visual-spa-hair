"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useState } from "react";

const links = [["/", "Início"], ["/servicos", "Serviços"], ["/resultados", "Resultados"], ["/sobre", "Sobre"], ["/contato", "Contato"]];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className={pathname === "/" ? "site-header home-header" : "site-header"}><div className="header-inner wrap">
    <Link className="brand" href="/" onClick={() => setOpen(false)}><span>VISUAL</span><small>SPA HAIR</small></Link>
    <button className="menu-button" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}><i></i><i></i></button>
    <nav className={open ? "main-nav open" : "main-nav"} aria-label="Navegação principal">
      {links.map(([href, label]) => <Link key={href} className={pathname === href ? "active" : ""} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <a className="nav-cta" href="https://api.whatsapp.com/send?phone=5545998361763&text=Olá!%20Gostaria%20de%20agendar%20um%20horário." target="_blank" rel="noreferrer">Agendar</a>
    </nav>
  </div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="wrap footer-grid">
    <div><Link className="brand footer-brand" href="/"><span>VISUAL</span><small>SPA HAIR</small></Link><p>Salão de beleza em Foz do Iguaçu.<br />Desde 2002.</p></div>
    <div><h3>Visite</h3><p>Av. Marechal Floriano Peixoto, 1278<br />Centro · Foz do Iguaçu · PR</p><a href="https://maps.google.com/?q=Marechal+Floriano+Peixoto+1278+Foz+do+Iguaçu" target="_blank" rel="noreferrer">Abrir no mapa ↗</a></div>
    <div><h3>Converse</h3><a href="https://api.whatsapp.com/send?phone=5545998361763" target="_blank" rel="noreferrer">(45) 99836-1763</a><a href="https://www.instagram.com/visual_spahair/" target="_blank" rel="noreferrer">@visual_spahair ↗</a></div>
    <div><h3>Navegue</h3>{links.slice(1).map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</div>
  </div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Visual Spa Hair</span><span>Foz do Iguaçu · Paraná</span></div></footer>;
}

export function WhatsAppFloat() { return <a className="whatsapp-float" href="https://api.whatsapp.com/send?phone=5545998361763&text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar." target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp"><b>WA</b><span>Agendar</span></a>; }

export function ServiceCard({ number, title, text }: { number: string; title: string; text: string }) {
  return <article className="service-card"><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b></article>;
}

export function ContactForm() {
  const [name, setName] = useState(""); const [service, setService] = useState("Progressiva"); const [message, setMessage] = useState("");
  function submit(e: FormEvent) { e.preventDefault(); const text = `Olá! Meu nome é ${name}. Tenho interesse em ${service}.${message ? ` ${message}` : ""}`; window.open(`https://api.whatsapp.com/send?phone=5545998361763&text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer"); }
  return <form className="contact-form" onSubmit={submit}><label>Seu nome<input required value={name} onChange={e => setName(e.target.value)} placeholder="Como podemos chamar você?" /></label><label>Serviço de interesse<select value={service} onChange={e => setService(e.target.value)}><option>Progressiva</option><option>Escova ou penteado</option><option>Manutenção de mega hair</option><option>Coloração</option><option>Mechas</option><option>Tratamento capilar</option><option>Terapia capilar</option></select></label><label>Conte um pouco mais<textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Se quiser, descreva o que você procura." rows={4}></textarea></label><button className="button button-dark" type="submit">Enviar pelo WhatsApp <span>↗</span></button></form>;
}
