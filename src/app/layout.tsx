import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Davi Amorim | Full Stack Developer & TechEvo",
  description: "Davi Amorim - Especialista em React, Next.js e Node.js. Transformando ideias em sistemas digitais escaláveis com a TechEvo.",
  keywords: ["Davi Amorim", "TechEvo", "Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Sistemas Web", "E-commerce", "Automação IA"],
  openGraph: {
    title: "Davi Amorim | Full Stack Developer & TechEvo",
    description: "Transformando ideias em sistemas digitais escaláveis.",
    url: "https://techevo.com.br",
    siteName: "TechEvo",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
