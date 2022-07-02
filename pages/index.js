import { gsap } from "gsap";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
// import { useSwipeable } from "react-swipeable";
import Image from "next/image";

import AboutUs from "../components/AboutUs";
import Chart from "../components/Chart";
import EcoSystem from "../components/EcoSystem";
import Features from "../components/Features";
import Introduction from "../components/Introduction";
import MonetaryFlow from "../components/MonetaryFlow";
import Network from "../components/Network";
import Roadmap from "../components/Roadmap";
import Tokenomics from "../components/Tokenomics";
import Value from "../components/Value";
import Whitepaper from "../components/Whitepaper";

const SECTIONS_COUNT = 11;

const BREAKPOINT = 1280;

export default function Home() {
  const el = useRef();
  const elNav = useRef();
  const circleRef = useRef();

  const inputRef = useRef();

  const [active, setActive] = useState("problem");

  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const [step, setStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const [isAboutInView, setIsAboutInView] = useState(false);

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
      idx: 3,
      id: "network",
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
      idx: 7,
      id: "monetary-flow",
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
      idx: 9,
      id: "whitepaper",
    },
  ];

  const scrollTo = (idx, direction) => {
    if (el?.current?.clientWidth > BREAKPOINT - 1) {
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
        y: `${-idx * 100}vh`,
        z: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: function () {
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

      const options = {};
      if (idx === 0) {
        options = {
          y: 0,
          opacity: 0,
        };
      }
      if (idx === 1) {
        options = {
          y: "-50%",
          x: "0",
          opacity: 1,
          scale: 1,
        };
      }
      if (idx === 2) {
        options = {
          y: "-50%",
          x: "-35%",
          scale: 1.1,
        };
      }
      if (idx === 3) {
        options = {
          y: "-25%",
          x: "35%",
          scale: 1.1,
        };
      }
      if (idx === 4) {
        options = {
          y: "-50%",
          x: "-35%",
          scale: 1.1,
        };
      }
      if (idx === 5) {
        options = {
          y: "-85%",
          x: "-40%",
          scale: 1.24,
        };
      }
      if (idx === 6) {
        options = {
          y: "-150%",
          x: "-40%",
          scale: 1.24,
        };
      }
      if (idx === 7) {
        options = {
          y: "-200%",
          x: "-40%",
          scale: 1.24,
        };
      }

      const animCircle = gsap.to(circleRef.current, {
        ease: "sine.ease",
        duration: 1,
        ...options,
      });
    } else {
      setIsOpen(false);
      const id = ids.find((item) => item.idx === idx)?.id || "";
      if (id) {
        setActiveSection(idx);
        scrollToElement(id);
      }
    }
  };

  const handleOnWheel = (e) => {
    if (el?.current?.clientWidth > BREAKPOINT - 1) {
      let idx;
      let direction;

      const MEDIA_SECTIONS_COUNT =
        el?.current?.clientWidth > BREAKPOINT - 1
          ? SECTIONS_COUNT
          : SECTIONS_COUNT - 1;

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

      if (idx !== activeSection) {
        if (!isAnimating) {
          scrollTo(idx, direction);
        }
      }
    }
  };

  const scrollToElement = (id) => {
    const ele = document.getElementById(id);
    if (ele) {
      var offset = ele.getBoundingClientRect();

      console.log(offset?.top);
      window.scrollTo({
        top: ele.offsetTop - 72,
        behavior: "smooth",
      });
    }
  };

  const onScroll = (e) => {
    const { pageYOffset } = window;

    setScrollY(pageYOffset);

    if (pageYOffset > inputRef?.current?.value) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    if (inputRef.current) {
      inputRef.current.value = pageYOffset;
    }
  };

  const onKeyPress = (e) => {
    if (e.keyCode === 33) {
      // up
      scrollTo(activeSection + 1);
    }

    if (e.keyCode === 34) {
      // down
      scrollTo(activeSection - 1);
    }

    if (e.keyCode === 35) {
      // end
      if (el?.current?.clientWidth > BREAKPOINT - 1) {
        scrollTo(10);
      } else {
        scrollToElement("whitepaper");
      }
    }

    if (e.keyCode === 36) {
      // home
      scrollTo(0);
    }
  };

  useEffect(() => {
    setScrollY(window.pageYOffset);

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keypress", onKeyPress);

    // remove event on unmount to prevent a memory leak
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
      document.removeEventListener("keypress", onKeyPress);
    };
  }, []);

  // const handlers = useSwipeable({
  //   onSwipedUp: () => handleOnWheel({ deltaY: 1 }),
  //   onSwipedDown: () => handleOnWheel({ deltaY: -1 }),
  // });

  const handleChangeInView = (inView, idx) => {
    // if (inView) {
    //   setActiveSection(idx);
    // }
  };

  return (
    <main
      className={`relative w-full xl:h-full xl:overflow-hidden step-${step} ${
        isAboutInView ? "step-1" : ""
      }`}
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
        <meta
          name="google-site-verification"
          content="RxcZjY4TJVuYUDDLeuG_2i6hO6pDhbZy6CfwvfMSx6c"
        />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* <Script
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
      /> */}
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
        } scrolling-${scrollDirection} ${isOpen ? "opened" : ""}`}
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
            if (el?.current?.clientWidth > BREAKPOINT - 1) {
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
                  activeSection === 2 ? "active" : ""
                }`}
                onClick={() => scrollTo(2)}
                id="section-2"
              >
                Features &amp; Values
              </div>
              <div
                className={`nav__item whitespace-nowrap lg:mx-[16px] ${
                  activeSection === 3 || activeSection === 4 ? "active" : ""
                }`}
                onClick={() => scrollTo(4)}
                id="section-4"
              >
                Vilik&apos;s Network
              </div>
              <div
                className={`nav__item whitespace-nowrap lg:mx-[16px] ${
                  activeSection === 5 ||
                  activeSection === 6 ||
                  activeSection === 7
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
                  activeSection === 8 ? "active" : ""
                }`}
                onClick={() =>
                  scrollTo(el?.current?.clientWidth > BREAKPOINT - 1 ? 8 : 7)
                }
                id="section-8"
              >
                Monetary Flow
              </div>
              <div
                className={`nav__item whitespace-nowrap lg:mx-[16px] ${
                  activeSection === 9 ? "active" : ""
                }`}
                onClick={() =>
                  scrollTo(el?.current?.clientWidth > BREAKPOINT - 1 ? 9 : 8)
                }
                id="section-9"
              >
                Roadmap
              </div>
              <div
                className={`nav__item whitespace-nowrap lg:mx-[16px] ${
                  activeSection === 10 ? "active" : ""
                }`}
                onClick={() =>
                  scrollTo(el?.current?.clientWidth > BREAKPOINT - 1 ? 10 : 9)
                }
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
        className="relative z-20 w-full screens xl:h-full xl:overflow-hidden"
        onWheel={(e) => handleOnWheel(e)}
        // {...handlers}
      >
        <div
          className="relative block w-full screens__wrapper xl:h-full"
          ref={el}
        >
          <div className="relative w-full xl:h-full" id="intro">
            <Introduction
              activeSection={activeSection}
              onScrollTo={scrollTo}
              onChangeInView={(value) => handleChangeInView(value, 0)}
            />
          </div>

          <div className="relative w-full xl:h-full" id="about-us">
            <AboutUs
              activeSection={activeSection}
              onChangeInView={(value) => handleChangeInView(value, 1)}
            />
          </div>

          <div className="relative w-full xl:h-full" id="features">
            <Features
              activeSection={activeSection}
              onChangeInView={(value) => handleChangeInView(value, 2)}
            />
          </div>

          <div className="relative w-full xl:h-full" id="network">
            <Network activeSection={activeSection} />
          </div>

          <div className="relative w-full xl:h-full" id="value">
            <Value
              activeSection={activeSection}
              onChangeInView={(value) => handleChangeInView(value, 3)}
            />
          </div>

          <div className="relative w-full xl:h-full" id="eco">
            <EcoSystem
              activeSection={activeSection}
              onChangeInView={(value) => handleChangeInView(value, 4)}
            />
          </div>

          <div
            className="relative hidden w-full xl:h-full lg:block"
            id="tokenomics"
          >
            <Tokenomics
              activeSection={activeSection}
              onChangeInView={(value) => handleChangeInView(value, 5)}
            />
          </div>

          <div className="relative w-full xl:h-full" id="chart">
            <Chart
              activeSection={activeSection}
              onChangeInView={(value) => handleChangeInView(value, 6)}
            />
          </div>

          <div className="relative w-full xl:h-full" id="monetary-flow">
            <MonetaryFlow
              activeSection={activeSection}
              onChangeInView={(value) => handleChangeInView(value, 7)}
            />
          </div>

          <div className="relative w-full xl:h-full" id="roadmap">
            <Roadmap
              activeSection={activeSection}
              onChangeInView={(value) => handleChangeInView(value, 8)}
            />
          </div>

          <div className="relative w-full xl:h-full" id="whitepaper">
            <Whitepaper
              activeSection={activeSection}
              onChangeInView={(value) => handleChangeInView(value, 9)}
            />
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
        className={`fixed w-[30px] h-auto right-[16px] bottom-[16px] lg:w-[40px] lg:right-[36px] lg:bottom-[36px] z-50 ${
          step > 0 || inputRef?.current?.value > 50 ? "block" : "hidden"
        }`}
        onClick={() => scrollTo(0)}
      >
        <svg
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-auto"
        >
          <rect
            x="0.5"
            y="0.5"
            width="57"
            height="57"
            rx="28.5"
            stroke="url(#paint0_linear_13_423)"
          ></rect>
          <defs>
            <linearGradient
              id="paint0_linear_13_423"
              x1="1"
              y1="20.3589"
              x2="55.6244"
              y2="36.7546"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1E1822"></stop>
              <stop offset="0.462674" stopColor="#EAC2FF"></stop>
              <stop offset="0.764757" stopColor="#1945D9"></stop>
              <stop offset="1" stopColor="#1E1822"></stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
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

      <div className="z-50 full-video">
        <video autoPlay playsInline muted loop poster="/cover.jpg">
          <source src="/20220608-165528-552.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>

      <div className="overlay overlay-circle-0" ref={circleRef}>
      </div>

      {/* <div className="overlay overlay-circle-0" ref={circleRef}>
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

      <svg
        width="1564"
        height="1607"
        viewBox="0 0 1564 1607"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden xl:block fixed top-[-70vh] left-[-21.754386vw] w-[80.5555556vw] h-auto pointer-events-none"
      >
        <g opacity="0.5" filter="url(#filter0_f_18_263)">
          <ellipse
            rx="359.472"
            ry="194.3"
            transform="matrix(0.989582 -0.143967 0.322788 0.946471 890.121 1103.65)"
            fill="#3D17E3"
          />
        </g>
        <g opacity="0.5" filter="url(#filter1_f_18_263)">
          <ellipse
            rx="335.166"
            ry="143.295"
            transform="matrix(0.999758 -0.0219991 0.0515146 0.998672 634.467 979.479)"
            fill="#00F0FF"
            fillOpacity="0.44"
          />
        </g>
        <g filter="url(#filter2_f_18_263)">
          <ellipse
            cx="752.325"
            cy="736.02"
            rx="353.148"
            ry="333.735"
            transform="rotate(18.3691 752.325 736.02)"
            fill="#3D17E3"
            fillOpacity="0.41"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_18_263"
            x="217.04"
            y="600.753"
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
              result="effect1_foregroundBlur_18_263"
            />
          </filter>
          <filter
            id="filter1_f_18_263"
            x="149.299"
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
              result="effect1_foregroundBlur_18_263"
            />
          </filter>
          <filter
            id="filter2_f_18_263"
            x="0.963257"
            y="0.215149"
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
              result="effect1_foregroundBlur_18_263"
            />
          </filter>
        </defs>
      </svg>

      <svg
        width="1168"
        height="843"
        viewBox="0 0 1168 843"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden lg:block fixed w-[70.62500vw] h-auto right-[-11.4583333vw] bottom-[-13.3333333vh] pointer-events-none"
      >
        <g filter="url(#filter0_f_18_264)">
          <ellipse
            rx="231.557"
            ry="225.538"
            transform="matrix(0.919621 0.392807 -0.707569 0.706644 466.529 459.332)"
            fill="#76269F"
            fillOpacity="0.71"
          />
        </g>
        <g filter="url(#filter1_f_18_264)">
          <ellipse
            rx="231.557"
            ry="225.538"
            transform="matrix(0.919621 0.392807 -0.707569 0.706644 738.529 347.332)"
            fill="#76269F"
            fillOpacity="0.59"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_18_264"
            x="0.406677"
            y="75.797"
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
              result="effect1_foregroundBlur_18_264"
            />
          </filter>
          <filter
            id="filter1_f_18_264"
            x="309.503"
            y="0.893799"
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
              result="effect1_foregroundBlur_18_264"
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
        className="xl:hidden fixed left-0 top-[37px]"
      >
        <g opacity="0.5" filter="url(#filter0_f_21_832)">
          <ellipse
            rx="132.75"
            ry="71.7529"
            transform="matrix(0.989582 -0.143967 0.322788 0.946471 132.87 304.976)"
            fill="#3D17E3"
          />
        </g>
        <g opacity="0.5" filter="url(#filter1_f_21_832)">
          <ellipse
            rx="123.774"
            ry="52.9176"
            transform="matrix(0.999758 -0.0219991 0.0515146 0.998672 -2.53032 284.971)"
            fill="#00F0FF"
            fillOpacity="0.44"
          />
        </g>
        <g filter="url(#filter2_f_21_832)">
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
            id="filter0_f_21_832"
            x="-115.692"
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
              result="effect1_foregroundBlur_21_832"
            />
          </filter>
          <filter
            id="filter1_f_21_832"
            x="-181.698"
            y="176.658"
            width="358.336"
            height="216.624"
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
              result="effect1_foregroundBlur_21_832"
            />
          </filter>
          <filter
            id="filter2_f_21_832"
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
              result="effect1_foregroundBlur_21_832"
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
        className="fixed bottom-0 right-0 xl:hidden"
      >
        <g filter="url(#filter0_f_21_836)">
          <ellipse
            rx="120.254"
            ry="117.127"
            transform="matrix(0.919621 0.392807 -0.707569 0.706644 242.463 238.168)"
            fill="#76269F"
            fillOpacity="0.71"
          />
        </g>
        <g filter="url(#filter1_f_21_836)">
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
            id="filter0_f_21_836"
            x="0.394669"
            y="38.9884"
            width="484.137"
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
              result="effect1_foregroundBlur_21_836"
            />
          </filter>
          <filter
            id="filter1_f_21_836"
            x="160.917"
            y="0.0896378"
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
              result="effect1_foregroundBlur_21_836"
            />
          </filter>
        </defs>
      </svg> */}
    </main>
  );
}
