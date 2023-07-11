import { Html, Head, Main, NextScript } from 'next/document'
import { Head } from 'next/head'
import Script from "next/script1";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${appConfig.GTAG_ID}`}
      />
      <Script
      id="google-tags"
      strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${appConfig.GTAG_ID}');
          `,
        }}
      />
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}