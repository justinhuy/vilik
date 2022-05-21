import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

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
          <Script
            id="fb-pixel-1"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '549953909900657');
          `,
            }}
          />
          <Script
            id="fb-pixel-2"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1003590666958129');
          `,
            }}
          />
          <Script
            id="fb-pixel-3"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '982879232391261');
          `,
            }}
          />
          <Script
            id="tiktok-pixel-1"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
          !function (w, d, t) {
            w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t][];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t][],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js%22;ttq._i=ttq._i%7C%7C%7B%7D,ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t%7C%7C%7B%7D,ttq._t[e]=+new Date,ttq._o=ttq._o{},ttq._o[e]=n{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
            ttq.load('CA3RKNJC77UCBHFR6LG0');
            ttq.page();
          }(window, document, 'ttq');
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
