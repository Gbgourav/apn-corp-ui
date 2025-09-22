import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Helixa font family
const helixa = localFont({
  src: [
    {
      path: '../../public/fonts/helixa/Helixa-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/helixa/Helixa-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/fonts/helixa/Helixa-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/helixa/Helixa-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/helixa/Helixa-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/helixa/Helixa-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/helixa/Helixa-Book.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/helixa/Helixa-BookItalic.ttf',
      weight: '500',
      style: 'italic',
    },
  ],
  variable: '--font-helixa',
  display: 'swap',
})

// Host Grotesk font family
const hostGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/host-grotesk/HostGrotesk-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/host-grotesk/HostGrotesk-Italic-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-host-grotesk',
  display: 'swap',
})

// Raflesia font
const raflesia = localFont({
  src: '../../public/fonts/raflesia/raflesia.otf',
  variable: '--font-raflesia',
  display: 'swap',
})

// Rasputin font
const rasputin = localFont({
  src: '../../public/fonts/rasputin/Rasputin.otf',
  variable: '--font-rasputin',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ANP Corp - Premium Real Estate Development',
  description: 'Discover luxury living with ANP Corp premium property developments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${helixa.variable} ${hostGrotesk.variable} ${raflesia.variable} ${rasputin.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}