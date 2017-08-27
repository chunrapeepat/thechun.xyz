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
          <meta name="theme-color" content="#333" />
          <meta name="description" content="Hi! I'm Chun Rapeepat, Nice to meet you here. I'm the one who loved in computer such as Web Technology, Machine Learning, etc. and also interested in Mathematic, StartUp & Bussiness too."/>
          <meta name="keywords" content="chun, chunza2542, Chun Rapeepat, Programming, NoobProgramming, NoobProgrammer, thechun, resume, portfolio, site"/>
          {styleTags}
          <style>{`body, html { margin: 0; }
            ::selection { background: #333; color: white; }
            ::-moz-selection { background: #333; color: white; }
          `}</style>
          <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"/>
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
