import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter, WhatsAppFloat } from "./ui";

export const metadata: Metadata = {
  metadataBase: new URL("https://visualspahair.com.br"),
  title: { default: "Visual Spa Hair | Salão de Beleza em Foz do Iguaçu", template: "%s | Visual Spa Hair" },
  description: "Há 24 anos realçando a beleza em Foz do Iguaçu. Progressiva, escovas, penteados, mega hair, coloração, mechas, tratamentos e terapia capilar.",
  openGraph: { title: "Visual Spa Hair", description: "24 anos realçando sua beleza em Foz do Iguaçu.", images: ["/og.png"], locale: "pt_BR", type: "website" },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><SiteHeader />{children}<SiteFooter /><WhatsAppFloat /></body></html>;
}
