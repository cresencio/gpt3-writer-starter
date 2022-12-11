import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="PitchIt" key="title"/>
        <meta property="og:description" content="Craft an impactful 90-second elevator pitch for your startup." key="description"/>
        <meta
          property="og:image"
          content="./assets/meta.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
