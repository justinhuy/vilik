import { gsap } from "gsap";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

import Introduction from "../components/Introduction";
import AboutUs from "../components/AboutUs";
import Network from "../components/Network";
import Features from "../components/Features";
import Value from "../components/Value";
import EcoSystem from "../components/EcoSystem";
import MonetaryFlow from "../components/MonetaryFlow";
import Tokenomics from "../components/Tokenomics";
import Chart from "../components/Chart";
import Roadmap from "../components/Roadmap";
import Whitepaper from "../components/Whitepaper";

const SECTIONS_COUNT = 11;

export default function Home() {
  const el = useRef();
  const elNav = useRef();

  const inputRef = useRef();

  const [active, setActive] = useState("problem");

  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const [step, setStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const ids = [
    {
      idx: 0,
      id: "intro",
    },
    {
      idx: 1,
      id: "about-us",
    },
    {
      idx: 2,
      id: "features",
    },
    {
      idx: 4,
      id: "value",
    },
    {
      idx: 5,
      id: "eco",
    },
    {
      idx: 8,
      id: "roadmap",
    },
    {
      idx: 10,
      id: "partners",
    },
    {
      idx: 11,
      id: "our-team",
    },
    {
      idx: 13,
      id: "whitepaper",
    },
  ];

  const scrollTo = (idx, direction) => {
    // if (el?.current?.clientWidth > 1023) {
    setIsAnimating(true);
    setStep(idx);
    setActiveSection(-1);
    setIsOpen(false);

    const navItem = document.getElementById(`section-${idx}`);
    if (navItem) {
      const animNav = gsap.to(elNav.current, {
        x: (976 - navItem.offsetLeft) / 2,
        y: 0,
        z: 0,
        duration: 0.5,
      });
    }

    const anim = gsap.to(el.current, {
      x: 0,
      y: `${-idx * 100}%`,
      z: 0,
      duration: 1,
      onComplete: function () {
        // setActiveSection(idx);
        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
      },
      onUpdate: () => {
        if (anim.time() > 0.75) {
          setActiveSection(idx);
        }
      },
    });
    // } else {
    //   setIsOpen(false);
    //   const id = ids.find((item) => item.idx === idx)?.id || "";
    //   if (id) {
    //     setActiveSection(idx);
    //     scrollToElement(id);
    //   }
    // }
  };

  const handleOnWheel = (e) => {
    // if (el?.current?.clientWidth > 1023) {
    let idx;
    let direction;

    const MEDIA_SECTIONS_COUNT =
      el?.current?.clientWidth > 1023 ? SECTIONS_COUNT : SECTIONS_COUNT - 1;

    if (e.deltaY < 0) {
      idx = activeSection - 1 > 0 ? activeSection - 1 : 0;
      direction = "up";
    } else if (e.deltaY > 0) {
      idx =
        activeSection + 1 < MEDIA_SECTIONS_COUNT
          ? activeSection + 1
          : MEDIA_SECTIONS_COUNT - 1;
      direction = "down";
    }

    setScrollDirection(direction);

    if (idx !== activeSection) {
      if (!isAnimating) {
        scrollTo(idx, direction);
      }
    }
    // }
  };

  const scrollToElement = (id) => {
    const ele = document.getElementById(id);
    if (ele) {
      window.scrollTo({
        top: ele.offsetTop - 72,
        behavior: "smooth",
      });
    }
  };

  const onScroll = (e) => {
    const { pageYOffset } = window;

    // if (inputRef?.current?.value > pageYOffset) {
    //   setScrollDirection("up");
    // } else {
    //   setScrollDirection("down");
    // }

    setScrollY(pageYOffset);
    if (inputRef.current) {
      inputRef.current.value = pageYOffset;
    }
  };

  useEffect(() => {
    setScrollY(window.pageYOffset);

    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak

    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  const handlers = useSwipeable({
    onSwipedUp: () => handleOnWheel({ deltaY: 1 }),
    onSwipedDown: () => handleOnWheel({ deltaY: -1 }),
  });

  return (
    <main
      className={`relative w-full h-full overflow-hidden step-${step}`}
      style={{
        backgroundImage: "url(/bg-dot.png)",
      }}
    >
      <Head>
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
        <meta name="twitter:title" content="VILIK | LIVESTREAM X BLOCKCHAIN" />
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

        <meta
          name="facebook-domain-verification"
          content="u8nrv87wmxjzbcgri41mru5kyu05yd"
        />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Script
        id="tiktok-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t][];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t][],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};

              ttq.load('CA3RKNJC77UCBHFR6LG0');
              ttq.page();
            }(window, document, 'ttq');
          `,
        }}
      />
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

      <header
        className={`header ${
          scrollY > 10 ? "header-sticky" : ""
        } scrolling-${scrollDirection}`}
      >
        <a
          href="#"
          title="Vilik"
          className="absolute lg:fixed top-[16px] left-[16px] lg:top-[1.66666667vw] lg:left-[7.5vw] z-50"
        >
          <svg
            width="157"
            height="38"
            viewBox="0 0 157 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[94px] h-auto lg:w-[157px]"
          >
            <path
              d="M23.0859 19.6962L31.7748 37.9992L0 19.6962H23.0859ZM31.7748 0L0 18.3031H23.0859L31.7748 0ZM27.5888 18.9996C27.5888 15.4531 29.6814 12.4127 32.6623 10.9567V1.3931L24.291 18.9996L32.5993 36.6061V27.0434C29.6822 25.5865 27.5888 22.5461 27.5888 18.9996ZM36.4685 11.5265C35.5802 11.5265 34.7558 11.6532 33.9951 11.9696C33.4876 12.1593 33.0438 12.3498 32.6001 12.6032C30.3805 13.9333 28.9216 16.3401 28.9216 19.0634C28.9216 21.7866 30.3805 24.1934 32.6001 25.5235C33.0438 25.777 33.4883 25.9667 33.9951 26.1571C34.7565 26.4105 35.581 26.6002 36.4685 26.6002C37.3567 26.6002 38.1812 26.4735 38.9418 26.1571C39.4494 25.9674 39.8931 25.777 40.3369 25.5235C42.5564 24.1934 44.0153 21.7866 44.0153 19.0634C44.0153 16.3401 42.5564 13.9333 40.3369 12.6032C39.8931 12.3498 39.4486 12.1601 38.9418 11.9696C38.1804 11.6532 37.356 11.5265 36.4685 11.5265ZM49.9141 19.6962H73L41.2252 38L49.9141 19.6962ZM73 18.3031L41.2252 0L49.851 18.3031H73ZM45.4112 18.9996C45.4112 22.5461 43.3186 25.5865 40.3377 27.0426V36.6691L48.709 18.9996L40.3369 1.3931V11.0196C43.3178 12.4135 45.4112 15.4531 45.4112 18.9996Z"
              fill="url(#paint0_linear_890_4442)"
            />
            <path
              d="M91.2423 9.60449H93.8673C94.0529 9.60449 94.2649 9.7368 94.3445 9.92203L99.4885 21.0393C99.5946 21.251 99.7006 21.3568 99.8066 21.3568C99.9126 21.3568 100.019 21.251 100.125 21.0393L105.242 9.92203C105.322 9.7368 105.534 9.60449 105.746 9.60449H108.344C108.556 9.60449 108.636 9.7368 108.556 9.92203L100.178 28.16C100.098 28.3187 99.9656 28.3981 99.8066 28.3981C99.6476 28.3981 99.4885 28.3187 99.409 28.16L91.0302 9.92203C90.9507 9.7368 91.0302 9.60449 91.2423 9.60449Z"
              fill="url(#paint1_linear_890_4442)"
            />
            <path
              d="M111.66 9.94849C111.66 9.7368 111.792 9.60449 112.004 9.60449H114.497C114.709 9.60449 114.841 9.7368 114.841 9.94849V12.225C114.841 12.4367 114.709 12.569 114.497 12.569H112.004C111.792 12.569 111.66 12.4367 111.66 12.225V9.94849Z"
              fill="url(#paint2_linear_890_4442)"
            />
            <path
              d="M112.004 15.1367H114.497C114.709 15.1367 114.841 15.269 114.841 15.4807V27.7896C114.841 28.0013 114.709 28.1336 114.497 28.1336H112.004C111.792 28.1336 111.66 28.0013 111.66 27.7896V15.4807C111.66 15.269 111.792 15.1367 112.004 15.1367Z"
              fill="url(#paint3_linear_890_4442)"
            />
            <path
              d="M133.853 9.94849C133.853 9.7368 133.985 9.60449 134.197 9.60449H136.69C136.902 9.60449 137.034 9.7368 137.034 9.94849V12.225C137.034 12.4367 136.902 12.569 136.69 12.569H134.197C133.985 12.569 133.853 12.4367 133.853 12.225V9.94849Z"
              fill="url(#paint4_linear_890_4442)"
            />
            <path
              d="M122.054 9.94849C122.054 9.7368 121.921 9.60449 121.709 9.60449H119.217C119.005 9.60449 118.872 9.7368 118.872 9.94849V22.2018H122.054V9.94849Z"
              fill="url(#paint5_linear_890_4442)"
            />
            <path
              d="M130.539 25.1677H122.796C122.774 25.1677 122.752 25.1668 122.731 25.165H118.872V27.7882C118.872 27.9999 119.005 28.1322 119.217 28.1322H130.539C130.751 28.1322 130.883 27.9999 130.883 27.7882V25.5117C130.883 25.3009 130.751 25.1677 130.539 25.1677Z"
              fill="url(#paint6_linear_890_4442)"
            />
            <path
              d="M134.197 15.1367H136.69C136.902 15.1367 137.034 15.269 137.034 15.4807V27.7896C137.034 28.0013 136.902 28.1336 136.69 28.1336H134.197C133.985 28.1336 133.853 28.0013 133.853 27.7896V15.4807C133.853 15.269 133.985 15.1367 134.197 15.1367Z"
              fill="url(#paint7_linear_890_4442)"
            />
            <path
              d="M154.508 9.86803L152.651 12.1931L152.65 12.194L148.663 17.174L146.355 20.0547C146.322 20.0865 146.291 20.1226 146.26 20.165L145.926 20.591L144.722 22.1231C144.43 22.468 144.245 22.9972 144.245 23.447V27.7884C144.245 28.0001 144.113 28.1324 143.9 28.1324H141.407C141.195 28.1324 141.062 28.0001 141.062 27.7884V9.9483C141.062 9.73573 141.195 9.60342 141.407 9.60342H143.9C144.113 9.60342 144.245 9.73573 144.245 9.9483V17.2798C144.245 17.5444 144.297 17.6503 144.404 17.6503C144.484 17.6503 144.59 17.5973 144.722 17.4386L145.012 17.0778L148.874 12.2628L150.135 10.691L150.795 9.86715C150.927 9.70838 151.139 9.60254 151.352 9.60254H154.375C154.587 9.60342 154.64 9.71015 154.508 9.86803Z"
              fill="url(#paint8_linear_890_4442)"
            />
            <path
              d="M145.927 20.592L146.357 20.0566C146.324 20.0884 146.292 20.1246 146.262 20.166L145.927 20.592Z"
              fill="#D3AEF4"
            />
            <path
              d="M156.947 27.8693L149.87 18.7217L148.588 20.3067L147.916 21.1385L153.101 27.8702C153.233 28.029 153.445 28.1348 153.657 28.1348H156.786C157 28.1339 157.053 28.0281 156.947 27.8693Z"
              fill="url(#paint9_linear_890_4442)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_890_4442"
                x1="0"
                y1="18.9998"
                x2="73.0001"
                y2="18.9998"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#05DAC5" />
                <stop offset="0.3585" stopColor="#5C6AF3" />
                <stop offset="0.499" stopColor="#8F74D9" />
                <stop offset="0.6491" stopColor="#CC42D3" />
                <stop offset="1" stopColor="#FC176F" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_890_4442"
                x1="99.7936"
                y1="9.60408"
                x2="99.7936"
                y2="28.3979"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.1711" stopColor="#BC79AD" />
                <stop offset="0.7698" stopColor="#8BE3F7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_890_4442"
                x1="111.564"
                y1="9.55631"
                x2="113.915"
                y2="11.6964"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="0.0269" stopColor="#EEF8FA" />
                <stop offset="0.1345" stopColor="#ADDCE6" />
                <stop offset="0.2372" stopColor="#77C5D5" />
                <stop offset="0.332" stopColor="#4DB3C8" />
                <stop offset="0.4173" stopColor="#2FA6BF" />
                <stop offset="0.4902" stopColor="#1D9EB9" />
                <stop offset="0.5419" stopColor="#169BB7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_890_4442"
                x1="113.251"
                y1="28.1333"
                x2="113.251"
                y2="15.1364"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8BE3F7" />
                <stop offset="0.322" stopColor="#89E2F6" />
                <stop offset="0.4942" stopColor="#81DDF1" />
                <stop offset="0.6308" stopColor="#73D4EA" />
                <stop offset="0.7488" stopColor="#60C8DF" />
                <stop offset="0.8548" stopColor="#47B9D2" />
                <stop offset="0.9508" stopColor="#29A7C1" />
                <stop offset="1" stopColor="#169BB7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_890_4442"
                x1="135.443"
                y1="12.5688"
                x2="135.443"
                y2="9.60408"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4F5BBD" />
                <stop offset="0.3755" stopColor="#515CBD" />
                <stop offset="0.5414" stopColor="#5862BF" />
                <stop offset="0.6661" stopColor="#656BC1" />
                <stop offset="0.7701" stopColor="#7777C5" />
                <stop offset="0.8612" stopColor="#8E88C9" />
                <stop offset="0.942" stopColor="#AA9CCF" />
                <stop offset="1" stopColor="#C4AED4" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_890_4442"
                x1="124.366"
                y1="12.0982"
                x2="116.572"
                y2="19.9057"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4F84BD" />
                <stop offset="0.4162" stopColor="#4F5BBD" />
                <stop offset="1" stopColor="#8BE3F7" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_890_4442"
                x1="118.871"
                y1="26.6491"
                x2="130.883"
                y2="26.6491"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0027933" stopColor="#8BE3F7" />
                <stop offset="1" stopColor="#8BE3F7" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_890_4442"
                x1="135.443"
                y1="15.1364"
                x2="135.443"
                y2="28.1333"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4F5BBD" />
                <stop offset="0.0774" stopColor="#576DC5" />
                <stop offset="0.2827" stopColor="#6997D7" />
                <stop offset="0.4824" stopColor="#78B8E5" />
                <stop offset="0.6728" stopColor="#83D0EF" />
                <stop offset="0.8497" stopColor="#89DEF5" />
                <stop offset="1" stopColor="#8BE3F7" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_890_4442"
                x1="144.16"
                y1="24.7871"
                x2="147.733"
                y2="10.1286"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8BE3F7" />
                <stop offset="0.4332" stopColor="#4F5BBD" />
                <stop offset="0.5039" stopColor="#545FBE" />
                <stop offset="0.5874" stopColor="#6269C1" />
                <stop offset="0.6774" stopColor="#7A7AC5" />
                <stop offset="0.7717" stopColor="#9B91CC" />
                <stop offset="0.866" stopColor="#C4AED4" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_890_4442"
                x1="152.459"
                y1="28.1336"
                x2="152.459"
                y2="18.721"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8BE3F7" />
                <stop offset="0.3812" stopColor="#8AE1F5" />
                <stop offset="0.5496" stopColor="#88DAEE" />
                <stop offset="0.6761" stopColor="#83CFE1" />
                <stop offset="0.7817" stopColor="#7DBECF" />
                <stop offset="0.8742" stopColor="#75A8B8" />
                <stop offset="0.9562" stopColor="#6B8E9B" />
                <stop offset="1" stopColor="#647D89" />
              </linearGradient>
            </defs>
          </svg>
        </a>

        <button
          className="hidden lg:block fixed top-[1.66666667vw] right-[7.5vw] z-50 text-[14px] leading-[21px] font-medium border border-zinc-100 p-[2px] rounded-[30px] group overflow-hidden btn-round-white"
          onClick={() => {
            if (el?.current?.clientWidth > 1023) {
              scrollTo(10);
            } else {
              scrollToElement("whitepaper");
            }
          }}
        >
          {/* Contact us */}
          <span className="inline-flex px-[13px] py-[5px] rounded-[16px] items-center relative z-10 btn-txt">
            Contact us
          </span>
          <div className="absolute w-[275px] h-[275px] top-1/2 left-0 linear-custom transform translate-y-[-50%]">
            <div
              style={{
                background:
                  "linear-gradient(178.93deg, #F499FF 31.95%, #4453F2 71.55%)",
              }}
              className="w-full h-full duration-200 opacity-0 lg:group-hover:animate-spin-icon lg:group-hover:opacity-100"
            ></div>
          </div>
        </button>

        {/* navigation */}
        <div
          className={`nav text-[14px] leading-[21px] font-kanit text-[#FAFAFA] uppercase z-50 ${
            isOpen ? "opened" : ""
          }`}
        >
          <div className="nav__offset-container" ref={elNav}>
            <div className="nav__low-container">
              <div
                className={`nav__item whitespace-nowrap lg:mx-[16px] ${
                  activeSection === 0 ? "active" : ""
                }`}
                onClick={() => scrollTo(0)}
                id="section-0"
              >
                Introduction
              </div>
              <div
                className={`nav__item whitespace-nowrap lg:mx-[16px] ${
                  activeSection === 1 ? "active" : ""
                }`}
                onClick={() => scrollTo(1)}
                id="section-1"
              >
                About us
              </div>
              <div
                className={`nav__item whitespace-nowrap lg:mx-[16px] ${
                  activeSection === 2 || activeSection === 3 ? "active" : ""
                }`}
                onClick={() => scrollTo(2)}
                id="section-2"
              >
                Features
              </div>
              <div
                className={`nav__item whitespace-nowrap lg:mx-[16px] ${
                  activeSection === 4 ? "active" : ""
                }`}
                onClick={() => scrollTo(4)}
                id="section-4"
              >
                Values
              </div>
              <div
                className={`nav__item whitespace-nowrap lg:mx-[16px] ${
                  activeSection === 5 ||
                  activeSection === 6 ||
                  activeSection === 7 ||
                  activeSection === 8
                    ? "active"
                    : ""
                }`}
                onClick={() => scrollTo(5)}
                id="section-5"
              >
                Ecosystem &amp; Tokenomics
              </div>
              <div
                className={`nav__item whitespace-nowrap lg:mx-[16px] ${
                  activeSection === 9 ? "active" : ""
                }`}
                onClick={() => scrollTo(9)}
                id="section-8"
              >
                Roadmap
              </div>
              {/* <div
                className={`nav__item whitespace-nowrap lg:mx-[16px] ${
                  activeSection === 10 ? "active" : ""
                }`}
                onClick={() => scrollTo(10)}
                id="section-10"
              >
                Partners
              </div> */}
              {/* <div
                className={`nav__item whitespace-nowrap lg:mx-[16px] ${
                  activeSection === 10 || activeSection === 11 ? "active" : ""
                }`}
                onClick={() => scrollTo(10)}
                id="section-10"
              >
                Our Team
              </div> */}
              <div
                className={`nav__item whitespace-nowrap lg:mx-[16px] ${
                  activeSection === 10 ? "active" : ""
                }`}
                onClick={() => scrollTo(10)}
                id="section-10"
              >
                Whitepaper
              </div>
            </div>
          </div>
        </div>
        {/* end of navigation */}

        {/* hamburger */}
        <button
          className="inline-flex lg:hidden items-center space-x-[8px] top-[16px] absolute right-[16px] text-[14px] leading-[21px] z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <>
              <span>Close</span>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 4L3.5 17"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 17L3.5 4"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          ) : (
            <>
              <span>Menu</span>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.83366 9.66635H16.0003"
                  stroke="#F4F4F5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.00017 4.66635H16.5002"
                  stroke="#F4F4F5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.83366 14.6664H16.0003"
                  stroke="#F4F4F5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          )}
        </button>
        {/* hamburger */}
      </header>

      <div
        className="screens relative z-20 w-full h-full overflow-hidden"
        onWheel={(e) => handleOnWheel(e)}
        {...handlers}
      >
        <div className="screens__wrapper relative block w-full h-full" ref={el}>
          <div className="relative w-full h-full">
            <Introduction activeSection={activeSection} onScrollTo={scrollTo} />
          </div>

          <div className="relative w-full h-full">
            <AboutUs activeSection={activeSection} />
          </div>

          <div className="relative w-full h-full">
            <Network activeSection={activeSection} />
          </div>

          <div className="relative w-full h-full">
            <Features activeSection={activeSection} />
          </div>

          <div className="relative w-full h-full">
            <Value activeSection={activeSection} />
          </div>

          <div className="relative w-full h-full">
            <EcoSystem activeSection={activeSection} />
          </div>

          <div className="relative w-full h-full">
            <MonetaryFlow activeSection={activeSection} />
          </div>

          <div className="relative w-full h-full hidden lg:block">
            <Tokenomics activeSection={activeSection} />
          </div>

          <div className="relative w-full h-full">
            <Chart activeSection={activeSection} />
          </div>

          <div className="relative w-full h-full">
            <Roadmap activeSection={activeSection} />
          </div>

          <div className="relative w-full h-full">
            <Whitepaper activeSection={activeSection} />
          </div>
        </div>

        <input
          className="hidden"
          ref={inputRef}
          type="text"
          id="temp_pos"
          name="temp_pos"
        />
      </div>

      <button
        type="button"
        className={`fixed w-[24px] h-auto right-[16px] bottom-[16px] lg:w-[40px] lg:right-[36px] lg:bottom-[36px] z-50 ${
          step > 0 ? "block" : "hidden"
        }`}
        onClick={() => scrollTo(0)}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <g filter="url(#filter0_bd_1398_6421)">
            <path
              d="M4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24Z"
              fill="white"
              fillOpacity="0.1"
              shapeRendering="crispEdges"
            />
            <path
              d="M24 43C13.5066 43 5 34.4934 5 24H3C3 35.598 12.402 45 24 45V43ZM43 24C43 34.4934 34.4934 43 24 43V45C35.598 45 45 35.598 45 24H43ZM24 5C34.4934 5 43 13.5066 43 24H45C45 12.402 35.598 3 24 3V5ZM24 3C12.402 3 3 12.402 3 24H5C5 13.5066 13.5066 5 24 5V3Z"
              fill="url(#paint0_linear_1398_6421)"
            />
          </g>
          <path
            d="M24 32.25V15.75"
            stroke="#E7D6F8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.25 22.5L24 15.75L30.75 22.5"
            stroke="#E7D6F8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <filter
              id="filter0_bd_1398_6421"
              x="-26"
              y="-26"
              width="100"
              height="100"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="15" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1398_6421"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_1398_6421"
                result="effect2_dropShadow_1398_6421"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1398_6421"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1398_6421"
              x1="4"
              y1="17.8278"
              x2="43.0174"
              y2="29.539"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1E1822" />
              <stop offset="0.462674" stopColor="#EAC2FF" />
              <stop offset="0.764757" stopColor="#1945D9" />
              <stop offset="1" stopColor="#1E1822" />
            </linearGradient>
          </defs>
        </svg>
      </button>

      <div className="full-video">
        <video autoPlay playsInline muted loop>
          {/* <source src="/20220520-112541-839.mp4" type="video/mp4" /> */}
          <source src="/20220525-164303-729.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>

      <div className="overlay overlay-circle-0">
        <svg
          width="704"
          height="807"
          viewBox="0 0 704 807"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pl-1"
        >
          <g filter="url(#filter0_f_20_267)">
            <ellipse
              rx="281.459"
              ry="185.433"
              transform="matrix(-0.261096 0.965313 -0.965527 -0.260302 382.086 342.566)"
              fill="#041128"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_20_267"
              x="0.647675"
              y="-121.284"
              width="762.877"
              height="927.699"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="93.9263"
                result="effect1_foregroundBlur_20_267"
              />
            </filter>
          </defs>
        </svg>
        <svg
          width="1090"
          height="952"
          viewBox="0 0 1090 952"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pl-2"
        >
          <g filter="url(#filter0_f_20_267)">
            <ellipse
              rx="281.459"
              ry="361.144"
              transform="matrix(-0.261096 0.965313 -0.965527 -0.260302 545.183 475.703)"
              fill="#041128"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_20_267"
              x="0.903168"
              y="0.272125"
              width="1088.56"
              height="950.861"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="93.9263"
                result="effect1_foregroundBlur_20_267"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {/* overlay */}
      <div className="overlay-circle overlay-circle-1  absolute w-[35.069vw] h-[35.069vw] bg-blur-1 rounded top-[-3.88vw] left-[-9.58vw] opacity-0"></div>
      <div className="overlay-circle overlay-circle-2 absolute w-[49.02vw] h-[46.31vw] bg-blur-2 rounded bottom-[-39.23vw] left-[-19.09vw] opacity-0"></div>
      <div className="overlay-circle overlay-circle-3 absolute w-[47.57vw] h-[24.16vw] bg-blur-3 rounded bottom-[-18.47vw] right-[6.73vw] opacity-0"></div>
      <div className="overlay-circle overlay-circle-4 absolute w-[49.30vw] h-[30.55vw] bg-blur-4 rounded top-[-21.18vw] right-[-18.88vw] opacity-0"></div>

      <div className="overlay-circle overlay-circle-5 absolute w-[50.14vw] h-[55.21vw] bg-blur-5 rounded bottom-[-17.57vw] right-[-14.17vw] opacity-0"></div>

      <svg
        width="1440"
        height="810"
        viewBox="0 0 1440 810"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-10 w-full h-auto opacity-0 overlay-circle overlay-circle-6 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
      >
        <g opacity="0.5" filter="url(#filter0_f_28_92)">
          <ellipse
            rx="315.209"
            ry="209.76"
            transform="matrix(0.989582 -0.143967 0.322788 0.946471 380.944 388.163)"
            fill="#3D17E3"
          />
        </g>
        <g opacity="0.5" filter="url(#filter1_f_28_92)">
          <ellipse
            rx="368.197"
            ry="165.167"
            transform="matrix(0.999758 -0.0219991 0.0515146 0.998672 109.07 473.896)"
            fill="#3D17E3"
            fillOpacity="0.44"
          />
        </g>
        <g filter="url(#filter2_f_28_92)">
          <ellipse
            rx="171.692"
            ry="145.935"
            transform="matrix(0.919621 0.392806 -0.707569 0.706644 1105.68 428.249)"
            fill="#842A9A"
            fillOpacity="0.53"
          />
        </g>
        <g opacity="0.64" filter="url(#filter3_f_28_92)">
          <ellipse
            rx="229.792"
            ry="195.318"
            transform="matrix(0.919621 0.392807 -0.707569 0.706644 1389.05 336.401)"
            fill="#68268A"
          />
        </g>
        <g filter="url(#filter4_f_28_92)">
          <ellipse
            rx="251.372"
            ry="185.166"
            transform="matrix(0.928486 0.371368 -0.283306 0.95903 1259.25 402.962)"
            fill="#3D17E3"
            fillOpacity="0.1"
          />
        </g>
        <g opacity="0.4" filter="url(#filter5_f_28_92)">
          <ellipse
            rx="193.818"
            ry="135.547"
            transform="matrix(0.932793 0.360413 -0.274415 0.961611 977.372 480.277)"
            fill="#0419D6"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_28_92"
            x="-250.118"
            y="-127.34"
            width="1262.12"
            height="1031.01"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="155.903"
              result="effect1_foregroundBlur_28_92"
            />
          </filter>
          <filter
            id="filter1_f_28_92"
            x="-409.138"
            y="158.746"
            width="1036.42"
            height="630.301"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_28_92"
            />
          </filter>
          <filter
            id="filter2_f_28_92"
            x="754.098"
            y="142.113"
            width="703.167"
            height="572.273"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="81.4516"
              result="effect1_foregroundBlur_28_92"
            />
          </filter>
          <filter
            id="filter3_f_28_92"
            x="973.621"
            y="8.56308"
            width="830.864"
            height="655.676"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="81.4516"
              result="effect1_foregroundBlur_28_92"
            />
          </filter>
          <filter
            id="filter4_f_28_92"
            x="869.976"
            y="52.2997"
            width="778.539"
            height="701.325"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_28_92"
            />
          </filter>
          <filter
            id="filter5_f_28_92"
            x="592.756"
            y="132.366"
            width="769.231"
            height="695.821"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_28_92"
            />
          </filter>
        </defs>
      </svg>

      <svg
        width="1921"
        height="1472"
        viewBox="0 0 1921 1472"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle overlay-circle-7 absolute w-[111vw] h-auto top-[-28.51vh] right-[-11.45vw] z-10 opacity-0"
      >
        <g opacity="0.5" filter="url(#filter0_f_30_130)">
          <ellipse
            rx="359.472"
            ry="194.3"
            transform="matrix(0.989582 -0.143967 0.322788 0.946471 673.445 901.651)"
            fill="#3D17E3"
          />
        </g>
        <g opacity="0.5" filter="url(#filter1_f_30_130)">
          <ellipse
            rx="335.166"
            ry="143.295"
            transform="matrix(0.999758 -0.0219991 0.0515146 0.998672 690.791 979.479)"
            fill="#00F0FF"
            fillOpacity="0.44"
          />
        </g>
        <g filter="url(#filter2_f_30_130)">
          <ellipse
            rx="231.557"
            ry="225.538"
            transform="matrix(0.919621 0.392807 -0.707569 0.706644 1219.85 1043.33)"
            fill="#76269F"
            fillOpacity="0.71"
          />
        </g>
        <g filter="url(#filter3_f_30_130)">
          <ellipse
            rx="231.557"
            ry="225.538"
            transform="matrix(0.919621 0.392807 -0.707569 0.706644 1491.85 931.332)"
            fill="#76269F"
            fillOpacity="0.59"
          />
        </g>
        <g filter="url(#filter4_f_30_130)">
          <ellipse
            cx="808.649"
            cy="736.02"
            rx="353.148"
            ry="333.735"
            transform="rotate(18.3691 808.649 736.02)"
            fill="#3D17E3"
            fillOpacity="0.41"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_30_130"
            x="0.364349"
            y="398.754"
            width="1346.16"
            height="1005.79"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="155.903"
              result="effect1_foregroundBlur_30_130"
            />
          </filter>
          <filter
            id="filter1_f_30_130"
            x="205.623"
            y="686.18"
            width="970.336"
            height="586.597"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_30_130"
            />
          </filter>
          <filter
            id="filter2_f_30_130"
            x="753.733"
            y="659.797"
            width="932.244"
            height="767.07"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_30_130"
            />
          </filter>
          <filter
            id="filter3_f_30_130"
            x="1062.83"
            y="584.894"
            width="858.05"
            height="692.877"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="81.4516"
              result="effect1_foregroundBlur_30_130"
            />
          </filter>
          <filter
            id="filter4_f_30_130"
            x="57.2875"
            y="0.215088"
            width="1502.72"
            height="1471.61"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="200"
              result="effect1_foregroundBlur_30_130"
            />
          </filter>
        </defs>
      </svg>

      <svg
        width="1985"
        height="1766"
        viewBox="0 0 1985 1766"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle overlay-circle-8 absolute w-[116vw] h-auto top-[-50.12vh] right-[-11.45vw] z-10 opacity-0"
      >
        <g opacity="0.5" filter="url(#filter0_f_30_274)">
          <ellipse
            rx="359.472"
            ry="194.3"
            transform="matrix(0.989582 -0.143967 0.322788 0.946471 673.445 942.651)"
            fill="#3D17E3"
          />
        </g>
        <g opacity="0.5" filter="url(#filter1_f_30_274)">
          <ellipse
            rx="335.166"
            ry="143.295"
            transform="matrix(0.999758 -0.0219991 0.0515146 0.998672 690.791 979.479)"
            fill="#00F0FF"
            fillOpacity="0.44"
          />
        </g>
        <g filter="url(#filter2_f_30_274)">
          <ellipse
            rx="231.557"
            ry="225.538"
            transform="matrix(0.919621 0.392807 -0.707569 0.706644 1283.85 1382.33)"
            fill="#76269F"
            fillOpacity="0.71"
          />
        </g>
        <g filter="url(#filter3_f_30_274)">
          <ellipse
            rx="231.557"
            ry="225.538"
            transform="matrix(0.919621 0.392807 -0.707569 0.706644 1555.85 1270.33)"
            fill="#76269F"
            fillOpacity="0.59"
          />
        </g>
        <g filter="url(#filter4_f_30_274)">
          <ellipse
            cx="808.649"
            cy="736.02"
            rx="353.148"
            ry="333.735"
            transform="rotate(18.3691 808.649 736.02)"
            fill="#3D17E3"
            fillOpacity="0.41"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_30_274"
            x="0.364349"
            y="439.753"
            width="1346.16"
            height="1005.79"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="155.903"
              result="effect1_foregroundBlur_30_274"
            />
          </filter>
          <filter
            id="filter1_f_30_274"
            x="205.623"
            y="686.18"
            width="970.336"
            height="586.597"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_30_274"
            />
          </filter>
          <filter
            id="filter2_f_30_274"
            x="817.732"
            y="998.797"
            width="932.244"
            height="767.07"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_30_274"
            />
          </filter>
          <filter
            id="filter3_f_30_274"
            x="1126.83"
            y="923.894"
            width="858.05"
            height="692.877"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="81.4516"
              result="effect1_foregroundBlur_30_274"
            />
          </filter>
          <filter
            id="filter4_f_30_274"
            x="57.2874"
            y="0.215088"
            width="1502.72"
            height="1471.61"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="200"
              result="effect1_foregroundBlur_30_274"
            />
          </filter>
        </defs>
      </svg>

      <svg
        width="621"
        height="810"
        viewBox="0 0 621 810"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle overlay-circle-9 absolute w-[43.125vw] h-auto bottom-0 left-0 z-10 opacity-0"
      >
        <g opacity="0.83">
          <g filter="url(#filter0_f_31_204)">
            <ellipse
              cx="-67.8187"
              cy="154.648"
              rx="194.665"
              ry="187.73"
              transform="rotate(66.7216 -67.8187 154.648)"
              fill="#6900EE"
              fillOpacity="0.5"
            />
          </g>
          <g opacity="0.67" filter="url(#filter1_f_31_204)">
            <ellipse
              rx="264.27"
              ry="203.087"
              transform="matrix(-0.00441348 0.99999 -0.987498 0.157631 104.554 623.863)"
              fill="#3D17E3"
            />
          </g>
          <g filter="url(#filter2_f_31_204)">
            <ellipse
              rx="254.691"
              ry="112.476"
              transform="matrix(-0.00441348 0.99999 -0.987498 0.157631 -245.733 602.427)"
              fill="#420A8D"
            />
          </g>
          <g filter="url(#filter3_f_31_204)">
            <ellipse
              rx="190.716"
              ry="154.129"
              transform="matrix(-0.0172168 0.999852 -0.98878 0.149378 -9.50817 564.194)"
              fill="#00F0FF"
              fillOpacity="0.44"
            />
          </g>
          <g opacity="0.7">
            <g filter="url(#filter4_f_31_204)">
              <ellipse
                cx="11.0667"
                cy="364.879"
                rx="154.446"
                ry="173.323"
                transform="rotate(66.7216 11.0667 364.879)"
                fill="#E84DFC"
                fillOpacity="0.71"
              />
            </g>
            <g filter="url(#filter5_f_31_204)">
              <ellipse
                rx="374.893"
                ry="221.129"
                transform="matrix(0.652511 0.757779 -0.783038 0.621973 21.0847 360.943)"
                fill="#E84DFC"
                fillOpacity="0.2"
              />
            </g>
            <g filter="url(#filter6_f_31_204)">
              <ellipse
                cx="11.3885"
                cy="365.292"
                rx="71.9061"
                ry="94.2984"
                transform="rotate(66.7216 11.3885 365.292)"
                fill="#FDE2FC"
                fillOpacity="0.71"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_31_204"
            x="-400.844"
            y="-183.15"
            width="666.051"
            height="675.595"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="72.0745"
              result="effect1_foregroundBlur_31_204"
            />
          </filter>
          <filter
            id="filter1_f_31_204"
            x="-407.804"
            y="45.8309"
            width="1024.71"
            height="1156.07"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="155.903"
              result="effect1_foregroundBlur_31_204"
            />
          </filter>
          <filter
            id="filter2_f_31_204"
            x="-656.809"
            y="47.1121"
            width="822.151"
            height="1110.63"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_31_204"
            />
          </filter>
          <filter
            id="filter3_f_31_204"
            x="-311.944"
            y="222.102"
            width="604.872"
            height="684.184"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_31_204"
            />
          </filter>
          <filter
            id="filter4_f_31_204"
            x="-259.492"
            y="107.299"
            width="541.117"
            height="515.159"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_31_204"
            />
          </filter>
          <filter
            id="filter5_f_31_204"
            x="-578.642"
            y="-254.757"
            width="1199.45"
            height="1231.4"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_31_204"
            />
          </filter>
          <filter
            id="filter6_f_31_204"
            x="-159.8"
            y="209.438"
            width="342.378"
            height="311.708"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40"
              result="effect1_foregroundBlur_31_204"
            />
          </filter>
        </defs>
      </svg>

      <svg
        width="827"
        height="739"
        viewBox="0 0 827 739"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle overlay-circle-10 absolute w-[57.4vw] h-auto bottom-0 right-0 z-10 opacity-0"
      >
        <g filter="url(#filter0_f_31_213)">
          <circle
            cx="489.384"
            cy="636.698"
            r="188.659"
            transform="rotate(33.1841 489.384 636.698)"
            fill="#9021AC"
            fillOpacity="0.75"
          />
        </g>
        <g filter="url(#filter1_f_31_213)">
          <ellipse
            cx="796.611"
            cy="459.593"
            rx="296.085"
            ry="296.085"
            transform="rotate(33.1841 796.611 459.593)"
            fill="#3D17E3"
            fillOpacity="0.35"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_31_213"
            x="0.703491"
            y="148.017"
            width="977.361"
            height="977.361"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_31_213"
            />
          </filter>
          <filter
            id="filter1_f_31_213"
            x="337.589"
            y="0.570648"
            width="918.045"
            height="918.044"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="81.4516"
              result="effect1_foregroundBlur_31_213"
            />
          </filter>
        </defs>
      </svg>

      <svg
        width="1363"
        height="810"
        viewBox="0 0 1363 810"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle overlay-circle-11 absolute w-[94.65vw] h-auto bottom-0 left-0 z-10 opacity-0"
      >
        <g filter="url(#filter0_f_32_489)">
          <ellipse
            cy="404.904"
            rx="505"
            ry="212.5"
            fill="#F03FFF"
            fillOpacity="0.37"
          />
        </g>
        <g opacity="0.67" filter="url(#filter1_f_32_489)">
          <ellipse
            rx="429.678"
            ry="167.611"
            transform="matrix(-0.983903 -0.178705 0.518932 -0.854815 15.7399 634.938)"
            fill="#3D17E3"
          />
        </g>
        <g filter="url(#filter2_f_32_489)">
          <ellipse
            rx="391.751"
            ry="91.462"
            transform="matrix(-0.981996 -0.188901 0.49729 -0.867584 674.819 579.647)"
            fill="#420A8D"
          />
        </g>
        <g filter="url(#filter3_f_32_489)">
          <ellipse
            rx="308.685"
            ry="128.15"
            transform="matrix(-0.98278 -0.18478 0.532083 -0.846692 197.445 541.458)"
            fill="#00F0FF"
            fillOpacity="0.2"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_32_489"
            x="-705"
            y="-7.5957"
            width="1410"
            height="825"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_32_489"
            />
          </filter>
          <filter
            id="filter1_f_32_489"
            x="-727.769"
            y="160.545"
            width="1487.02"
            height="948.786"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="155.903"
              result="effect1_foregroundBlur_32_489"
            />
          </filter>
          <filter
            id="filter2_f_32_489"
            x="-12.5957"
            y="171.143"
            width="1374.83"
            height="817.007"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_32_489"
            />
          </filter>
          <filter
            id="filter3_f_32_489"
            x="-263.56"
            y="268.85"
            width="922.01"
            height="545.214"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_32_489"
            />
          </filter>
        </defs>
      </svg>

      <svg
        width="1396"
        height="810"
        viewBox="0 0 1396 810"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle overlay-circle-11 absolute w-[94.65vw] h-auto bottom-0 right-0 z-10 opacity-0"
      >
        <g opacity="0.83">
          <g opacity="0.67" filter="url(#filter0_f_32_490)">
            <ellipse
              rx="429.678"
              ry="167.611"
              transform="matrix(0.983903 0.178705 -0.518932 0.854815 1347.26 196.466)"
              fill="#3D17E3"
            />
          </g>
          <g filter="url(#filter1_f_32_490)">
            <ellipse
              rx="391.751"
              ry="91.462"
              transform="matrix(0.981996 0.188901 -0.49729 0.867585 688.181 251.758)"
              fill="#420A8D"
            />
          </g>
          <g filter="url(#filter2_f_32_490)">
            <ellipse
              rx="308.685"
              ry="128.15"
              transform="matrix(0.98278 0.18478 -0.532083 0.846692 1165.56 289.946)"
              fill="#00F0FF"
              fillOpacity="0.2"
            />
          </g>
        </g>
        <g filter="url(#filter3_f_32_490)">
          <ellipse
            cx="1363"
            cy="426.5"
            rx="505"
            ry="212.5"
            transform="rotate(-180 1363 426.5)"
            fill="#F03FFF"
            fillOpacity="0.37"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_32_490"
            x="603.751"
            y="-277.927"
            width="1487.02"
            height="948.786"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="155.903"
              result="effect1_foregroundBlur_32_490"
            />
          </filter>
          <filter
            id="filter1_f_32_490"
            x="0.766113"
            y="-156.746"
            width="1374.83"
            height="817.007"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_32_490"
            />
          </filter>
          <filter
            id="filter2_f_32_490"
            x="704.55"
            y="17.3394"
            width="922.01"
            height="545.214"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_32_490"
            />
          </filter>
          <filter
            id="filter3_f_32_490"
            x="658"
            y="13.9999"
            width="1410"
            height="825"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_32_490"
            />
          </filter>
        </defs>
      </svg>

      {/* mobile */}
      <svg
        width="342"
        height="412"
        viewBox="0 0 342 412"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle-mb overlay-circle-mb-1 absolute top-0 left-0 opacity-0 transition-all lg:hidden"
      >
        <g filter="url(#filter0_f_1199_5672)">
          <circle cx="52" cy="122" r="190" fill="#742A9A" fillOpacity="0.51" />
        </g>
        <defs>
          <filter
            id="filter0_f_1199_5672"
            x="-238"
            y="-168"
            width="580"
            height="580"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_1199_5672"
            />
          </filter>
        </defs>
      </svg>
      <svg
        width="276"
        height="360"
        viewBox="0 0 276 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle-mb overlay-circle-mb-1 absolute top-[49px] right-0 opacity-0 transition-all lg:hidden"
      >
        <g filter="url(#filter0_f_32_493)">
          <ellipse
            cx="253.411"
            cy="141.86"
            rx="106.352"
            ry="62.4961"
            transform="rotate(18.3691 253.411 141.86)"
            fill="#420A8D"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_32_493"
            x="0.555176"
            y="-76.2777"
            width="505.711"
            height="436.276"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_32_493"
            />
          </filter>
        </defs>
      </svg>

      <svg
        width="339"
        height="427"
        viewBox="0 0 339 427"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle-mb overlay-circle-mb-2 absolute top-0 left-0 opacity-0 transition-all lg:hidden"
      >
        <g opacity="0.5" filter="url(#filter0_f_33_345)">
          <ellipse
            rx="130.105"
            ry="166.827"
            transform="matrix(0.957263 -0.289218 0.16205 0.986783 86.9276 133.213)"
            fill="#3D17E3"
          />
        </g>
        <g opacity="0.5" filter="url(#filter1_f_33_345)">
          <ellipse
            rx="147.131"
            ry="136.816"
            transform="matrix(0.998958 -0.0456498 0.0248309 0.999692 -21.6253 204.303)"
            fill="#3D17E3"
            fillOpacity="0.44"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_33_345"
            x="-165.041"
            y="-160.189"
            width="503.938"
            height="586.804"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="62.2487"
              result="effect1_foregroundBlur_33_345"
            />
          </filter>
          <filter
            id="filter1_f_33_345"
            x="-228.534"
            y="7.46968"
            width="413.818"
            height="393.667"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="29.9458"
              result="effect1_foregroundBlur_33_345"
            />
          </filter>
        </defs>
      </svg>
      <svg
        width="300"
        height="662"
        viewBox="0 0 300 662"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle-mb overlay-circle-mb-2 absolute top-0 right-0 opacity-0 transition-all lg:hidden"
      >
        <g opacity="0.64" filter="url(#filter0_f_33_348)">
          <ellipse
            rx="80.2016"
            ry="90.3458"
            transform="matrix(0.748089 0.663598 -0.434307 0.900765 273.74 120.602)"
            fill="#68268A"
          />
        </g>
        <g filter="url(#filter1_f_33_348)">
          <ellipse
            rx="86.1436"
            ry="105.759"
            transform="matrix(0.769241 0.638959 -0.140829 0.990034 236.885 159.849)"
            fill="#3D17E3"
            fillOpacity="0.1"
          />
        </g>
        <g opacity="0.4" filter="url(#filter2_f_33_348)">
          <ellipse
            rx="65.8121"
            ry="77.5758"
            transform="matrix(0.779951 0.625841 -0.136133 0.990691 156.855 282.481)"
            fill="#0419D6"
          />
        </g>
        <g filter="url(#filter3_f_33_348)">
          <ellipse
            rx="59.9237"
            ry="67.5031"
            transform="matrix(0.74809 0.663598 -0.434308 0.900765 193.284 251.805)"
            fill="#842A9A"
            fillOpacity="0.53"
          />
        </g>
        <g filter="url(#filter4_f_33_348)">
          <ellipse
            cx="304.618"
            cy="344.857"
            rx="160.093"
            ry="176.182"
            transform="rotate(18.527 304.618 344.857)"
            fill="#320A70"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_33_348"
            x="155.791"
            y="-22.8988"
            width="235.897"
            height="287.001"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="23.1256"
              result="effect1_foregroundBlur_33_348"
            />
          </filter>
          <filter
            id="filter1_f_33_348"
            x="126.364"
            y="-1.05467"
            width="221.042"
            height="321.806"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="21.2939"
              result="effect1_foregroundBlur_33_348"
            />
          </filter>
          <filter
            id="filter2_f_33_348"
            x="47.6558"
            y="138.486"
            width="218.398"
            height="287.991"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="28.3918"
              result="effect1_foregroundBlur_33_348"
            />
          </filter>
          <filter
            id="filter3_f_33_348"
            x="93.4631"
            y="132.892"
            width="199.642"
            height="237.825"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="23.1256"
              result="effect1_foregroundBlur_33_348"
            />
          </filter>
          <filter
            id="filter4_f_33_348"
            x="0.567719"
            y="27.9699"
            width="608.1"
            height="633.774"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="71.108"
              result="effect1_foregroundBlur_33_348"
            />
          </filter>
        </defs>
      </svg>

      <svg
        width="375"
        height="560"
        viewBox="0 0 375 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle-mb overlay-circle-mb-3 absolute bottom-[-50px] right-0 lg:hidden"
      >
        <g filter="url(#filter0_f_35_215)">
          <ellipse
            cx="380.868"
            cy="446.312"
            rx="225.141"
            ry="247.766"
            transform="rotate(18.527 380.868 446.312)"
            fill="#320A70"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_35_215"
            x="-46.7207"
            y="0.670898"
            width="855.178"
            height="891.283"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_35_215"
            />
          </filter>
        </defs>
      </svg>

      <svg
        width="375"
        height="491"
        viewBox="0 0 375 491"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle-mb overlay-circle-mb-5 lg:hidden absolute left-0 top-[37px]"
      >
        <g opacity="0.5" filter="url(#filter0_f_36_459)">
          <ellipse
            rx="132.75"
            ry="71.7529"
            transform="matrix(0.989582 -0.143967 0.322788 0.946471 132.87 304.976)"
            fill="#3D17E3"
          />
        </g>
        <g opacity="0.5" filter="url(#filter1_f_36_459)">
          <ellipse
            rx="123.774"
            ry="52.9176"
            transform="matrix(0.999758 -0.0219991 0.0515146 0.998672 -2.53032 284.971)"
            fill="#00F0FF"
            fillOpacity="0.44"
          />
        </g>
        <g filter="url(#filter2_f_36_459)">
          <ellipse
            cx="40.9948"
            cy="195.064"
            rx="130.414"
            ry="123.245"
            transform="rotate(18.3691 40.9948 195.064)"
            fill="#3D17E3"
            fillOpacity="0.41"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_36_459"
            x="-115.691"
            y="119.261"
            width="497.124"
            height="371.43"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="57.5735"
              result="effect1_foregroundBlur_36_459"
            />
          </filter>
          <filter
            id="filter1_f_36_459"
            x="-181.698"
            y="176.658"
            width="358.336"
            height="216.625"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="27.6968"
              result="effect1_foregroundBlur_36_459"
            />
          </filter>
          <filter
            id="filter2_f_36_459"
            x="-236.476"
            y="-76.6619"
            width="554.941"
            height="543.451"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="73.858"
              result="effect1_foregroundBlur_36_459"
            />
          </filter>
        </defs>
      </svg>
      <svg
        width="359"
        height="383"
        viewBox="0 0 359 383"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle-mb overlay-circle-mb-5 lg:hidden absolute bottom-[14px] right-0"
      >
        <g filter="url(#filter0_f_36_464)">
          <ellipse
            rx="120.254"
            ry="117.127"
            transform="matrix(0.919621 0.392807 -0.707569 0.706644 242.463 238.168)"
            fill="#76269F"
            fillOpacity="0.71"
          />
        </g>
        <g filter="url(#filter1_f_36_464)">
          <ellipse
            rx="120.254"
            ry="117.127"
            transform="matrix(0.919621 0.392807 -0.707569 0.706644 383.72 180.004)"
            fill="#76269F"
            fillOpacity="0.59"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_36_464"
            x="0.394302"
            y="38.9885"
            width="484.138"
            height="398.359"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="51.9325"
              result="effect1_foregroundBlur_36_464"
            />
          </filter>
          <filter
            id="filter1_f_36_464"
            x="160.917"
            y="0.0897598"
            width="445.607"
            height="359.828"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="42.2998"
              result="effect1_foregroundBlur_36_464"
            />
          </filter>
        </defs>
      </svg>

      <svg
        width="375"
        height="491"
        viewBox="0 0 375 491"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle-mb overlay-circle-mb-7 lg:hidden absolute left-0 top-[37px]"
      >
        <g opacity="0.5" filter="url(#filter0_f_36_459)">
          <ellipse
            rx="132.75"
            ry="71.7529"
            transform="matrix(0.989582 -0.143967 0.322788 0.946471 132.87 304.976)"
            fill="#3D17E3"
          />
        </g>
        <g opacity="0.5" filter="url(#filter1_f_36_459)">
          <ellipse
            rx="123.774"
            ry="52.9176"
            transform="matrix(0.999758 -0.0219991 0.0515146 0.998672 -2.53032 284.971)"
            fill="#00F0FF"
            fillOpacity="0.44"
          />
        </g>
        <g filter="url(#filter2_f_36_459)">
          <ellipse
            cx="40.9948"
            cy="195.064"
            rx="130.414"
            ry="123.245"
            transform="rotate(18.3691 40.9948 195.064)"
            fill="#3D17E3"
            fillOpacity="0.41"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_36_459"
            x="-115.691"
            y="119.261"
            width="497.124"
            height="371.43"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="57.5735"
              result="effect1_foregroundBlur_36_459"
            />
          </filter>
          <filter
            id="filter1_f_36_459"
            x="-181.698"
            y="176.658"
            width="358.336"
            height="216.625"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="27.6968"
              result="effect1_foregroundBlur_36_459"
            />
          </filter>
          <filter
            id="filter2_f_36_459"
            x="-236.476"
            y="-76.6619"
            width="554.941"
            height="543.451"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="73.858"
              result="effect1_foregroundBlur_36_459"
            />
          </filter>
        </defs>
      </svg>
      <svg
        width="359"
        height="383"
        viewBox="0 0 359 383"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle-mb overlay-circle-mb-7 lg:hidden absolute bottom-[14px] right-0"
      >
        <g filter="url(#filter0_f_36_464)">
          <ellipse
            rx="120.254"
            ry="117.127"
            transform="matrix(0.919621 0.392807 -0.707569 0.706644 242.463 238.168)"
            fill="#76269F"
            fillOpacity="0.71"
          />
        </g>
        <g filter="url(#filter1_f_36_464)">
          <ellipse
            rx="120.254"
            ry="117.127"
            transform="matrix(0.919621 0.392807 -0.707569 0.706644 383.72 180.004)"
            fill="#76269F"
            fillOpacity="0.59"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_36_464"
            x="0.394302"
            y="38.9885"
            width="484.138"
            height="398.359"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="51.9325"
              result="effect1_foregroundBlur_36_464"
            />
          </filter>
          <filter
            id="filter1_f_36_464"
            x="160.917"
            y="0.0897598"
            width="445.607"
            height="359.828"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="42.2998"
              result="effect1_foregroundBlur_36_464"
            />
          </filter>
        </defs>
      </svg>

      <svg
        width="375"
        height="667"
        viewBox="0 0 375 667"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle-mb overlay-circle-mb-9 absolute top-0 left-0 lg:hidden"
      >
        <g opacity="0.83">
          <g filter="url(#filter0_f_1220_8226)">
            <ellipse
              cx="-2.06127"
              cy="159.023"
              rx="104.677"
              ry="100.948"
              transform="rotate(66.7216 -2.06127 159.023)"
              fill="#6900EE"
              fillOpacity="0.5"
            />
          </g>
          <g opacity="0.67" filter="url(#filter1_f_1220_8226)">
            <ellipse
              rx="142.106"
              ry="109.206"
              transform="matrix(-0.00441348 0.99999 -0.987498 0.157631 90.628 411.334)"
              fill="#3D17E3"
            />
          </g>
          <g filter="url(#filter2_f_1220_8226)">
            <ellipse
              rx="136.955"
              ry="60.4817"
              transform="matrix(-0.00441348 0.99999 -0.987498 0.157631 -97.7323 399.806)"
              fill="#420A8D"
            />
          </g>
          <g filter="url(#filter3_f_1220_8226)">
            <ellipse
              rx="102.554"
              ry="82.8799"
              transform="matrix(-0.0172168 0.999852 -0.98878 0.149378 29.2922 379.247)"
              fill="#00F0FF"
              fillOpacity="0.44"
            />
          </g>
          <g opacity="0.7">
            <g filter="url(#filter4_f_1220_8226)">
              <ellipse
                cx="40.3538"
                cy="272.069"
                rx="83.0504"
                ry="93.2011"
                transform="rotate(66.7216 40.3538 272.069)"
                fill="#E84DFC"
                fillOpacity="0.71"
              />
            </g>
            <g filter="url(#filter5_f_1220_8226)">
              <ellipse
                rx="201.591"
                ry="118.908"
                transform="matrix(0.652511 0.757779 -0.783038 0.621973 45.7418 269.952)"
                fill="#E84DFC"
                fillOpacity="0.2"
              />
            </g>
            <g filter="url(#filter6_f_1220_8226)">
              <ellipse
                cx="40.5296"
                cy="272.29"
                rx="38.6661"
                ry="50.7071"
                transform="rotate(66.7216 40.5296 272.29)"
                fill="#FDE2FC"
                fillOpacity="0.71"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_1220_8226"
            x="-198.921"
            y="-40.4015"
            width="393.719"
            height="398.85"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="47.647"
              result="effect1_foregroundBlur_1220_8226"
            />
          </filter>
          <filter
            id="filter1_f_1220_8226"
            x="-223.344"
            y="62.0467"
            width="627.944"
            height="698.574"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="103.065"
              result="effect1_foregroundBlur_1220_8226"
            />
          </filter>
          <filter
            id="filter2_f_1220_8226"
            x="-355.785"
            y="64.1905"
            width="516.105"
            height="671.23"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="99.1621"
              result="effect1_foregroundBlur_1220_8226"
            />
          </filter>
          <filter
            id="filter3_f_1220_8226"
            x="-151.84"
            y="176.791"
            width="362.264"
            height="404.912"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="49.581"
              result="effect1_foregroundBlur_1220_8226"
            />
          </filter>
          <filter
            id="filter4_f_1220_8226"
            x="-117.469"
            y="121.226"
            width="315.646"
            height="301.687"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="33.054"
              result="effect1_foregroundBlur_1220_8226"
            />
          </filter>
          <filter
            id="filter5_f_1220_8226"
            x="-313.754"
            y="-98.1338"
            width="718.992"
            height="736.172"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="99.1621"
              result="effect1_foregroundBlur_1220_8226"
            />
          </filter>
          <filter
            id="filter6_f_1220_8226"
            x="-61.3923"
            y="178.616"
            width="203.843"
            height="187.35"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="26.4432"
              result="effect1_foregroundBlur_1220_8226"
            />
          </filter>
        </defs>
      </svg>
      <svg
        width="375"
        height="484"
        viewBox="0 0 375 484"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overlay-circle-mb overlay-circle-mb-9 absolute bottom-0 right-0 lg:hidden"
      >
        <g filter="url(#filter0_f_1220_8235)">
          <circle
            cx="266.785"
            cy="348.577"
            r="97.5742"
            transform="rotate(33.1841 266.785 348.577)"
            fill="#9021AC"
            fillOpacity="0.75"
          />
        </g>
        <g filter="url(#filter1_f_1220_8235)">
          <ellipse
            cx="425.683"
            cy="256.977"
            rx="153.135"
            ry="153.135"
            transform="rotate(33.1841 425.683 256.977)"
            fill="#3D17E3"
            fillOpacity="0.35"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1220_8235"
            x="-21.5527"
            y="60.2392"
            width="576.676"
            height="576.675"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="95.376"
              result="effect1_foregroundBlur_1220_8235"
            />
          </filter>
          <filter
            id="filter1_f_1220_8235"
            x="168.951"
            y="0.243851"
            width="513.465"
            height="513.465"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="51.7902"
              result="effect1_foregroundBlur_1220_8235"
            />
          </filter>
        </defs>
      </svg>
      {/* end of mobile */}

      {/* end of overlay */}
    </main>
  );
}
