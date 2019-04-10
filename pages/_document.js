import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import config from '../config'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          <title>Chun Rapeepat | Personal Site</title>
          <meta name="theme-color" content="#000" />
          <meta name="description" content="Hi! I'm Chun Rapeepat, Nice to meet you here. I'm the one who loved in computer such as Web Technology, Machine Learning, etc. and also interested in Mathematic, StartUp & Bussiness too."/>
          <meta name="keywords" content="chun, chunza2542, Chun Rapeepat, Programming, NoobProgramming, NoobProgrammer, thechun, resume, portfolio, site"/>
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"/>
          {styleTags}
          <style>{`body, html { margin: 0; }
            ::selection { background: #333; color: white; }
            ::-moz-selection { background: #333; color: white; }
          `}</style>
          <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"/>
          <meta name="viewport" content="width=device-width" />

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-77270777-2"></script>
          <script dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-77270777-2');`}}/>
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
