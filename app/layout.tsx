import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Calculadora de ROI',
  description: 'Calculadora de Retorno sobre Investimento (ROI) do negócio no marketing digital',
  generator: 'Asaphe Felippe',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
