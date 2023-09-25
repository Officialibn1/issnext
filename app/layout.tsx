import Script from 'next/script';
import '../styles/Globals.scss';
import NavBar from './Navbar';
import Head from 'next/head';
import Link from 'next/link';
declare global {
  interface Webchat {
    init: (options: any, id?: string) => void
    sendEvent: (event: any, id?: string) => void
    onEvent: (
      callback: (event: WebchatEvent) => void,
      topics: WebchatEventType[],
      id?: string
    ) => void
  }

  type WebchatEventType =
    | "LIFECYCLE.LOADED"
    | "LIFECYCLE.READY"
    | "UI.OPENED"
    | "UI.CLOSED"
    | "UI.RESIZE" // is this necessary ?
    | "UI.SET-CLASS" // is this necessary ?
    | "CONFIG.SET"
    | "MESSAGE.SENT"
    | "MESSAGE.RECEIVED"
    | "MESSAGE.SELECTED"
    | "USER.CONNECTED"

  interface WebchatEvent {
    type: WebchatEventType
    value: any
    chatId: string
  }

  interface Window {
    botpressWebChat: Webchat
  }
}


// const roboto = Roboto({weight: ['100', '300', '400'], subsets: ['vietnamese']});

export const metadata = {
  title: 'ISS (Internet Service Studio)',
  description: 'Designed by Ibn',
  rel: 'stylesheet',
  url: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <Head>
        <Link rel="stylesheet" href={'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css'} />
      </Head> */}
      <body>
        <NavBar />
        {children}
        <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js" />
        <Script src="https://mediafiles.botpress.cloud/5b9adf49-934c-49b1-b05b-91b3d2d9fd8f/webchat/config.js" defer/>
      </body>
    </html>
  )
}
