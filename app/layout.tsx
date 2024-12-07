import { Montserrat } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";

const montserrat = Montserrat({
  weight:  ['100', '400', '700', '900'],
  style:   ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Pam-Awards 2024",
  description: "A premiação da equipe do Melhor Escritório de Arquitetura de Sorocaba!",
  authors: {name: "Luiz Obara", url: "https://github.com/GustavoObara"},
  openGraph: {
    title: 'Pam-Awards 2024',
    emails: 'contato@arquitetapamoliveira.com.br',
    description: 'A premiação da equipe do Melhor Escritório de Arquitetura de Sorocaba!',
    images: [{url: 'https://scontent.cdninstagram.com/v/t51.2885-19/468511620_915059817397071_8372812110700116185_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=102&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=gaVgGmAHXikQ7kNvgH6kRNj&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYDUIqKsNE2ZJR28t5aTRgr2jSEAtEGIdlSNfM8u2yGJ0Q&oe=6759500D'}],
    countryName: 'Brasil'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}> 
      <body className={montserrat.className}>
        <main className='bg-pam-600'>
          <div className="flex-1 w-full flex flex-col items-center overflow-y-auto overflow-x-hidden"> 
            <div className="flex flex-col w-full min-h-full max-w-7xl px-6">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
