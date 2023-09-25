import '../styles/Globals.scss';
import NavBar from './Navbar';
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
