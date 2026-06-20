import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// Configurações de Viewport (Movido para cá para evitar erros de tipo)
export const viewport: Viewport = {
  themeColor: '#0f172a', // Cor da barra do navegador (slate-900)
  colorScheme: 'light',
};

export const metadata: Metadata = {
  title: {
    default: 'Seu Nome - Desenvolvedor Full Stack',
    template: '%s | Seu Nome',
  },
  description: 'Desenvolvedor full stack especializado em React, Node.js e AWS. Criando soluções digitais que resolvem problemas reais e geram valor mensurável.',
  keywords: ['desenvolvedor', 'full stack', 'react', 'nodejs', 'aws', 'javascript', 'typescript', 'portfolio'],
  authors: [{ name: 'Seu Nome' }],
  creator: 'Seu Nome',
  publisher: 'Seu Nome',
  openGraph: {
    title: 'Seu Nome - Desenvolvedor Full Stack',
    description: 'Desenvolvedor full stack especializado em React, Node.js e AWS. Criando soluções digitais que resolvem problemas reais e geram valor mensurável.',
    url: 'https://seuperfil.dev',
    siteName: 'Seu Nome Portfolio',
    images: [
      {
        url: 'https://seuperfil.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Seu Nome - Desenvolvedor Full Stack'
      }
    ],
    locale: 'pt_BR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seu Nome - Desenvolvedor Full Stack',
    description: 'Desenvolvedor full stack especializado em React, Node.js e AWS. Criando soluções digitais que resolvem problemas reais e geram valor mensurável.',
    images: ['https://seuperfil.dev/twitter-image.jpg']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="absolute left-0 top-0 z-50 p-2 bg-slate-900 text-slate-50 transform -translate-y-4 focus:-translate-y-0 transition-transform duration-200">
          Pular para o conteúdo principal
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
