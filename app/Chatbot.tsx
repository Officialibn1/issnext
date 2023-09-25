// 'use client'
// import React, { useEffect } from 'react'

// const Chatbot = () => {
//   useEffect(() => {
//     const script = document.createElement('script')
//     script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
//     script.async = true
//     document.body.appendChild(script)
 
//     script.onload = () => {
//       window.botpressWebChat.init({
//         botId: '5b9adf49-934c-49b1-b05b-91b3d2d9fd8f',
//         hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
//         messagingUrl: 'https://messaging.botpress.cloud',
//         clientId: '5b9adf49-934c-49b1-b05b-91b3d2d9fd8f',
//         botName: "ISS AI Assistant",
//         composerPlaceholder: "Chat with our AI Customer Assistant",
//         botConversationDescription: "ISS Chatbot, Created by Ibn.",
//         avatarUrl: "https://iss-one.vercel.app/img/chatbot.png",
//         phoneNumber: "+2349038880282",
//         emailAddress: "officialibn001@gmail.com",
//         frontendVersion: "v1",
//         useSessionStorage: false,
//         stylesheet: 'https://webchat-styler-css.botpress.app/prod/code/23e24614-43a9-4a78-ab87-9a5ff892498b/v68715/style.css'
//       })
//     }
//   }, [])
 
//   return <div id="webchat" />
// }
 
// export default Chatbot