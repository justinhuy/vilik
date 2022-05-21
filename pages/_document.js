import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=549953909900657&ev=PageView&noscript=1`}
            />
          </noscript>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=1003590666958129&ev=PageView&noscript=1`}
            />
          </noscript>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=982879232391261&ev=PageView&noscript=1`}
            />
          </noscript>
          <title>VILIK | LIVESTREAM X BLOCKCHAIN</title>
          <meta
            name="description"
            content="Join our new world to earn everyday"
          />

          <meta property="og:title" content="VILIK | LIVESTREAM X BLOCKCHAIN" />
          <meta
            property="og:description"
            content="Join our new world to earn everyday"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://vilik.io" />
          <meta property="og:image" content="https://vilik.io/cover.jpg" />
          <meta property="og:image:secure_url" content="image" />
          <meta
            property="og:image:alt"
            content="VILIK | LIVESTREAM X BLOCKCHAIN"
          />
          <meta property="og:locale" content="vi_VN" />
          <meta property="og:site_name" content="VILIK" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="VILIK | LIVESTREAM X BLOCKCHAIN"
          />
          <meta
            name="twitter:description"
            content="Join our new world to earn everyday"
          />
          <meta name="twitter:image" content="image" />
          <meta
            name="twitter:image:alt"
            content="VILIK | LIVESTREAM X BLOCKCHAIN"
          />
          <meta name="twitter:domain" content="https://vilik.io" />
          <meta name="twitter:url" content="https://vilik.io" />

          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
