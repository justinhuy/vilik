import { useState, useEffect, useCallback, useRef } from "react";
import { gsap } from "gsap";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// import Swiper core and required modules
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Moving from "../animation/Moving";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SECTIONS_COUNT = 14;

const TOKENOMICS_DATA = [
  {
    stage: "SEED ROUND",
    total: "10%",
    quantity: "100,000,000",
    price: "$0.025",
    totalSold: "$2.500.000",
    vestingPeriod: "Cliff 6 Months, 4% Monthly Unlock",
  },
  {
    stage: "PARTNERSHIP",
    total: "4%",
    quantity: "40,000,000",
    price: "$0.027",
    totalSold: "$1.080.000",
    vestingPeriod: "Cliff 6 Months, then 6% Monthly Unlock",
  },
  {
    stage: "PRIVATE ROUND",
    total: "6%",
    quantity: "60,000,000",
    price: "$0.025",
    totalSold: "$1.080.000",
    vestingPeriod:
      "5% five days after TGE, Cliff 1 Month, then 5% Monthly Unlock",
  },
  {
    stage: "PUBLIC ROUND",
    total: "3%",
    quantity: "30,000,000",
    price: "$0.040",
    totalSold: "$1.200.000",
    vestingPeriod: "25% five days after TGE, then 25% Monthly Unlock",
  },
  {
    stage: "CORE TEAM",
    total: "5%",
    quantity: "50,000,000",
    price: "",
    totalSold: "",
    vestingPeriod: "Cliff 12 Months, 4% Monthly Unlock",
  },
  {
    stage: "ADVISOR TEAM",
    total: "3%",
    quantity: "30,000,000",
    price: "",
    totalSold: "",
    vestingPeriod: "3% five days after TGE, Cliff 6 Months, 6% Monthly Unlock",
  },
  {
    stage: "LIQUIDITY",
    total: "9%",
    quantity: "90,000,000",
    price: "",
    totalSold: "",
    vestingPeriod: "40% at TGE, 5% Monthly Unlock",
  },
  {
    stage: "MARKETING",
    total: "28%",
    quantity: "100,000,000",
    price: "",
    totalSold: "",
    vestingPeriod: "2% Monthly Unlock",
  },
  {
    stage: "REWARD POOL",
    total: "28%",
    quantity: "280,000,000",
    price: "",
    totalSold: "",
    vestingPeriod: "Unlocked when P2P releases",
  },
  {
    stage: "STAKING POOL",
    total: "10%",
    quantity: "100,000,000",
    price: "",
    totalSold: "",
    vestingPeriod: "At the TGE",
  },
  {
    stage: "RESERVE",
    total: "12%",
    quantity: "120,000,000",
    price: "",
    totalSold: "",
    vestingPeriod:
      "Cliff 6 Months, Unlock only for raising fund, with announcement,",
  },
];

export default function Home() {
  const el = useRef();
  const elNav = useRef();

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
    if (el?.current?.clientWidth > 1023) {
      setIsAnimating(true);
      setStep(idx);
      setActiveSection(-1);

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
        onComplete: function () {
          // setActiveSection(idx);
          setTimeout(() => {
            setIsAnimating(false);
          }, 350);
        },
        onUpdate: () => {
          if (anim.time() > 0.75) {
            setActiveSection(idx);
          }
        },
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
    if (el?.current?.clientWidth > 1023) {
      let idx;
      let direction;

      if (e.deltaY < 0) {
        idx = activeSection - 1 > 0 ? activeSection - 1 : 0;
        direction = "up";
      } else if (e.deltaY > 0) {
        idx =
          activeSection + 1 < SECTIONS_COUNT
            ? activeSection + 1
            : SECTIONS_COUNT - 1;
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
      window.scrollTo({
        top: ele.offsetTop - 72,
        behavior: "smooth",
      });
    }
  };

  const onScroll = (e) => {
    const { pageYOffset } = window;
    setScrollY(pageYOffset);

    // if (pageYOffset >= document.getElementById("whitepaper").offsetTop - 72) {
    //   setSection("whitepaper");
    // } else if (
    //   pageYOffset >=
    //   document.getElementById("people").offsetTop - 150
    // ) {
    //   setSection("people");
    // } else if (
    //   pageYOffset >=
    //   document.getElementById("partners").offsetTop - 150
    // ) {
    //   setSection("partners");
    // } else if (
    //   pageYOffset >=
    //   document.getElementById("roadmap").offsetTop - 150
    // ) {
    //   setSection("roadmap");
    // } else if (
    //   pageYOffset >=
    //   document.getElementById("chart").offsetTop - 150
    // ) {
    //   setSection("chart");
    // } else if (
    //   pageYOffset >=
    //   document.getElementById("tokenomics").offsetTop - 150
    // ) {
    //   setSection("tokenomics");
    // } else if (
    //   pageYOffset >=
    //   document.getElementById("monetary-flow").offsetTop - 150
    // ) {
    //   setSection("monetary-flow");
    // } else if (pageYOffset >= document.getElementById("eco").offsetTop - 150) {
    //   setSection("eco");
    // } else if (
    //   pageYOffset >=
    //   document.getElementById("values").offsetTop - 150
    // ) {
    //   setSection("values");
    // } else if (
    //   pageYOffset >=
    //   document.getElementById("features").offsetTop - 150
    // ) {
    //   setSection("features");
    // } else if (
    //   pageYOffset >=
    //   document.getElementById("about-us").offsetTop - 150
    // ) {
    //   setSection("about-us");
    // } else {
    //   setSection("");
    // }
  };

  useEffect(() => {
    setScrollY(window.pageYOffset);

    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak
    window.addEventListener("wheel", function (e) {
      if (e.deltaY < 0) {
        setScrollDirection("up");
      }
      if (e.deltaY > 0) {
        setScrollDirection("down");
      }
    });

    () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
      window.removeEventListener("wheel");
    };
  }, []);

  return (
    <main
      className={`relative w-screen lg:h-screen lg:overflow-hidden step-${step}`}
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

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

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

        <button className="hidden lg:block fixed top-[1.66666667vw] right-[7.5vw] z-50 text-[14px] leading-[21px] font-medium border border-zinc-100 px-[16px] py-[8px] rounded-[30px]">
          Contact us
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
                Introduce
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
                  activeSection === 8 || activeSection === 9 ? "active" : ""
                }`}
                onClick={() => scrollTo(8)}
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
              <div
                className={`nav__item whitespace-nowrap lg:mx-[16px] ${
                  activeSection === 10 || activeSection === 11 ? "active" : ""
                }`}
                onClick={() => scrollTo(10)}
                id="section-11"
              >
                Our Team
              </div>
              <div
                className={`nav__item whitespace-nowrap lg:mx-[16px] ${
                  activeSection === 12 ? "active" : ""
                }`}
                onClick={() => scrollTo(12)}
                id="section-13"
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
        className="screens relative z-20 lg:h-screen lg:max-h-screen lg:overflow-hidden"
        onWheel={(e) => handleOnWheel(e)}
      >
        <div className="screens__wrapper" ref={el}>
          <div
            className={`screen relative lg:h-screen w-full lg:flex flex-wrap items-center lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
              activeSection === 0 ? "active" : ""
            }`}
            id="intro"
          >
            <div className="screen__container relative z-10 pt-[75px] lg:pt-0">
              <div className="text-center lg:text-left lg:grid grid-cols-2">
                <div>
                  <h1 className="heading flex flex-col text-[48px] leading-[48px] lg:text-[102px] lg:leading-[106px] mb-[16px] font-semibold">
                    <span className="text-gradient-blue-01">Livestream</span>
                    <span className="text-gradient-blue-01">Blockchain</span>
                  </h1>
                  <p className="text-fadein text-[14px] leading-[17px] lg:text-[28px] lg:leading-[34px] mb-[26px] text-white font-kanit">
                    Fast. Seamless. Unconventional streaming and earning
                    platform
                  </p>

                  <button
                    type="button"
                    className="text-fadein relative group cursor-pointer overflow-hidden p-[3px] rounded-[30px]"
                  >
                    <span className="box bg-gradient-purple text-[16px] leading-[19px] h-[40px] lg:h-[51px] px-[24px] rounded-[26px] inline-flex items-center relative z-10">
                      About us
                    </span>
                    <div className="absolute w-[275px] h-[275px] top-1/2 left-0 linear-custom transform translate-y-[-50%]">
                      <div
                        style={{
                          background:
                            "linear-gradient(178.93deg, #F499FF 31.95%, #4453F2 71.55%)",
                        }}
                        className="w-full h-full duration-200 opacity-0 lg:group-hover:animate-spin-slow lg:group-hover:opacity-100"
                      ></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <ul className="hidden lg:flex flex-col items-center justify-center absolute right-[1.11vw] top-2/4 -translate-y-2/4	space-y-[21px]">
              <li>
                <a href="" title="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.2353 18.6616C7.71055 18.9123 8.23985 19.0432 8.77715 19.043C10.5669 19.043 12.0279 17.6194 12.0939 15.845L12.1005 0H16.0538C16.0541 0.336542 16.0855 0.67234 16.1473 1.00316H13.2527V1.00371H17.2065C17.2059 2.32981 17.6866 3.61108 18.5592 4.60959L18.5604 4.61087C19.4506 5.1924 20.491 5.5016 21.5544 5.5006V6.3811C21.9265 6.4608 22.3113 6.50325 22.7071 6.50325V10.4576C20.7334 10.4599 18.809 9.84105 17.2065 8.68875V16.7234C17.2065 20.7355 13.9419 24 9.9293 24C8.93005 24.0002 7.9415 23.7941 7.0256 23.3944C6.11035 22.9951 5.28745 22.4112 4.60826 21.6792L4.60678 21.6782C2.73018 20.3606 1.5 18.1817 1.5 15.7202C1.5 11.7076 4.76453 8.4425 8.77715 8.4425C9.1053 8.44405 9.4329 8.46795 9.7578 8.51395V9.45005C9.78065 9.4496 9.80335 9.4488 9.82615 9.44805C9.86035 9.44685 9.89465 9.44565 9.9293 9.44565C10.2574 9.4472 10.585 9.4711 10.9099 9.5171V13.5534C10.5999 13.4561 10.2718 13.3995 9.9293 13.3995C9.0481 13.4005 8.2033 13.751 7.58025 14.3742C6.9572 14.9973 6.6068 15.8422 6.60595 16.7234C6.606 17.4193 6.82595 18.0975 7.23445 18.6611L7.2353 18.6616ZM3.13214 19.3199C3.46988 20.1998 3.9739 20.9981 4.60517 21.6765C3.96105 20.9872 3.46368 20.1855 3.13214 19.3199Z"
                      fill="url(#paint0_linear_890_4477)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_890_4477"
                        x1="7.84526"
                        y1="9.58415"
                        x2="11.8389"
                        y2="24.073"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAC2FF" />
                        <stop offset="1" stopColor="#1945D9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href="" title="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.35544 12.4614C4.20408 11.4431 6.26766 10.5933 8.19578 9.73904C11.5129 8.33991 14.8432 6.96502 18.207 5.68501C18.8615 5.46691 20.0375 5.25362 20.1528 6.22354C20.0897 7.59645 19.8299 8.96133 19.6518 10.3262C19.1996 13.3277 18.6769 16.3189 18.1672 19.3105C17.9916 20.307 16.7433 20.8228 15.9446 20.1851C14.0251 18.8885 12.0907 17.6046 10.1957 16.2779C9.57495 15.6471 10.1506 14.7413 10.705 14.2909C12.286 12.7328 13.9627 11.4091 15.461 9.77047C15.8652 8.79443 14.671 9.61701 14.2771 9.86905C12.1127 11.3606 10.0013 12.9431 7.71932 14.254C6.5537 14.8956 5.19515 14.3473 4.03006 13.9892C2.9854 13.5567 1.4546 13.121 2.35534 12.4615L2.35544 12.4614Z"
                      fill="url(#paint0_linear_890_4478)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_890_4478"
                        x1="7.48924"
                        y1="11.4764"
                        x2="9.37348"
                        y2="20.8176"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAC2FF" />
                        <stop offset="1" stopColor="#1945D9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/VILIK-107781338574941"
                  title="Facebook"
                  target="_blank"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.8008 14.3391 7.875 15.8297 7.875H17.3438V4.92188C17.3438 4.92188 15.9703 4.6875 14.6578 4.6875C11.9157 4.6875 10.125 6.3492 10.125 9.35625V12H7.07812V15.4688H10.125V23.8547C10.7367 23.9508 11.3625 24 12 24C12.6375 24 13.2633 23.9508 13.875 23.8547V15.4688H16.6711Z"
                      fill="url(#paint0_linear_890_4482)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_890_4482"
                        x1="10.1497"
                        y1="12.3997"
                        x2="14.9003"
                        y2="22.7678"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAC2FF" />
                        <stop offset="1" stopColor="#1945D9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@vilik.official"
                  title="Tiktok"
                  target="_blank"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4828 8.49023L11.5229 9.13903L10.8545 9.05958C8.4217 8.75505 6.2963 7.72228 4.49172 5.98775L3.60948 5.12711L3.38224 5.76266C2.90102 7.17941 3.20847 8.6756 4.21101 9.68189C4.7457 10.238 4.6254 10.3174 3.70305 9.98643C3.38224 9.8805 3.10153 9.80106 3.07479 9.84078C2.98122 9.93347 3.30204 11.1384 3.55601 11.615C3.90356 12.2771 4.61203 12.9259 5.38733 13.3098L6.04233 13.6144L5.26702 13.6276C4.51846 13.6276 4.49172 13.6409 4.57193 13.9189C4.83927 14.7795 5.89529 15.6932 7.07161 16.0904L7.90038 16.3684L7.17854 16.7921C6.10916 17.4012 4.85264 17.7455 3.59612 17.7719C2.99459 17.7852 2.5 17.8381 2.5 17.8779C2.5 18.0103 4.13081 18.7517 5.07988 19.043C7.92711 19.9037 11.309 19.5329 13.8488 18.0632C15.6534 17.0172 17.458 14.9384 18.3001 12.9259C18.7546 11.8534 19.2091 9.89374 19.2091 8.95366C19.2091 8.34459 19.2492 8.26514 19.9978 7.53691C20.4389 7.11321 20.8533 6.64978 20.9335 6.51738C21.0671 6.2658 21.0538 6.2658 20.372 6.4909C19.2358 6.88811 19.0754 6.83515 19.6368 6.23932C20.0512 5.81562 20.5458 5.04766 20.5458 4.82257C20.5458 4.78285 20.3453 4.84905 20.1181 4.96822C19.8775 5.10063 19.3428 5.29924 18.9417 5.4184L18.2199 5.64349L17.5649 5.20655C17.204 4.96822 16.696 4.70341 16.4287 4.62396C15.747 4.43859 14.7043 4.46507 14.0894 4.67693C12.4185 5.27275 11.3625 6.80867 11.4828 8.49023Z"
                      fill="url(#paint0_linear_890_4486)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_890_4486"
                        x1="8.03529"
                        y1="10.4901"
                        x2="9.8872"
                        y2="19.8679"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAC2FF" />
                        <stop offset="1" stopColor="#1945D9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </li>
            </ul>

            <img
              className="w-full max-w-[375px] mx-auto mt-[30px] lg:hidden"
              src="/cube.png"
            />

            {/* section overlay */}
            <svg
              width="342"
              height="412"
              viewBox="0 0 342 412"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden left-0 top-0 absolute"
            >
              <g filter="url(#filter0_f_1199_5672)">
                <circle
                  cx="52"
                  cy="122"
                  r="190"
                  fill="#742A9A"
                  fill-opacity="0.51"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_1199_5672"
                  x="-238"
                  y="-168"
                  width="580"
                  height="580"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              className="lg:hidden top-[49px] right-0 absolute"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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

            {/* end of section overlay */}
          </div>

          <div
            className={`screen relative lg:h-screen w-full flex flex-wrap items-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
              activeSection === 1 ? "active" : ""
            }`}
            id="about-us"
          >
            <div className="screen__container relative z-10">
              <img
                className="w-full max-w-[200px] mx-auto mb-[110px] lg:hidden"
                src="/cube.png"
              />

              <div className="lg:grid lg:grid-cols-12">
                <div className="col-start-7 col-span-6">
                  <h4 className="btn-animate rounded-[38px] text-[12px] leading-[14px] lg:text-[14px] lg:leading-[17px] h-[22px] lg:h-[35px] inline-flex items-center justify-center px-[12px] lg:px-[18px] mb-[8px]">
                    <span className="circle"></span>
                    <span className="layer"></span>
                    <span className="txt whitespace-nowrap">ABOUT US</span>
                  </h4>
                  <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] mb-[16px] lg:text-[40px] lg:mb-[32px] lg:leading-[48px]">
                    A Cutting-edge <br />
                    multi-purpose SocialFi <br /> streaming platform
                  </h5>
                  <p className="desc text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px] text-zinc-300 text-zinc-300">
                    In the era of high interactivity, edutainment, and a
                    combination between entertainment and earning, Vilik proudly
                    introduces a high-end video streaming platform built on the
                    BSC network. Inhere, content creators and consumers can both
                    play and earn cryptocurrency for their actions.
                  </p>
                </div>
              </div>
            </div>

            {/* section overlay */}
            <svg
              width="375"
              height="606"
              viewBox="0 0 375 606"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden w-full h-auto absolute left-0 bottom-0"
            >
              <g opacity="0.66">
                <path
                  d="M-59.248 371.695C-95.9689 507.869 -14.8935 647.699 121.839 684.014C258.572 720.329 399.184 639.378 435.905 503.204C472.626 367.031 391.55 227.201 254.818 190.886C118.085 154.571 -22.527 235.522 -59.248 371.695Z"
                  fill="url(#paint0_radial_1200_5744)"
                />
                <g filter="url(#filter0_f_1200_5744)">
                  <ellipse
                    rx="205.22"
                    ry="264.219"
                    transform="matrix(-0.262057 0.965052 -0.965784 -0.259346 135.16 502.019)"
                    fill="#041128"
                  />
                </g>
                <g filter="url(#filter1_f_1200_5744)">
                  <ellipse
                    rx="205.22"
                    ry="135.666"
                    transform="matrix(-0.262057 0.965052 -0.965784 -0.259347 287.455 389.887)"
                    fill="#041128"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_1200_5744"
                  x="-313.53"
                  y="104.541"
                  width="897.38"
                  height="794.955"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="93.9263"
                    result="effect1_foregroundBlur_1200_5744"
                  />
                </filter>
                <filter
                  id="filter1_f_1200_5744"
                  x="-42.0659"
                  y="0.851532"
                  width="659.043"
                  height="778.071"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="93.9263"
                    result="effect1_foregroundBlur_1200_5744"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_1200_5744"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-147.585 293.517) rotate(24.4204) scale(614.505 613.475)"
                >
                  <stop
                    offset="0.0755871"
                    stop-color="#C82DF4"
                    stop-opacity="0.71"
                  />
                  <stop offset="0.500996" stop-color="#1F1298" />
                  <stop offset="1" stop-color="#621EA2" />
                </radialGradient>
              </defs>
            </svg>

            {/* end of section overlay */}
          </div>

          <div
            className={`screen relative overflow-x-hidden lg:h-screen w-full flex flex-wrap items-center justify-center pt-[50px] lg:py-[87px] lg:px-[7.5vw] ${
              activeSection === 2 ? "active" : ""
            }`}
            id="network"
          >
            <div className="screen__container relative z-10">
              <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] mb-[16px] lg:text-[40px] lg:mb-[32px] text-center">
                What is Vilik&apos;s network
              </h5>

              <div className="box bg-white-blur-003 pt-[7px] px-[10px] lg:px-[26px] lg:pt-[13px] lg:pb-[21px] max-w-[1224px] mx-auto">
                <picture>
                  <source media="(min-width: 1024px)" srcSet="network@2x.png" />
                  <img src="networkmb@2x.png" alt="What is Vilik's network" />
                </picture>
              </div>
            </div>

            {/* section overlay */}
            <svg
              width="339"
              height="427"
              viewBox="0 0 339 427"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden absolute top-0 left-0"
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
                  fill-opacity="0.44"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              className="lg:hidden absolute right-0 top-0"
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
                  fill-opacity="0.1"
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
                  fill-opacity="0.53"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              width="931"
              height="900"
              viewBox="0 0 931 900"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden absolute bottom-0 w-full h-auto left-2/4 -translate-x-2/4"
            >
              <g opacity="0.66">
                <path
                  d="M254.752 371.696C218.031 507.869 299.107 647.699 435.839 684.014C572.572 720.329 713.184 639.378 749.905 503.205C786.626 367.031 705.55 227.202 568.818 190.887C432.085 154.571 291.473 235.522 254.752 371.696Z"
                  fill="url(#paint0_radial_33_337)"
                />
                <g filter="url(#filter0_f_33_337)">
                  <ellipse
                    rx="205.22"
                    ry="264.219"
                    transform="matrix(-0.262057 0.965052 -0.965784 -0.259346 449.16 502.019)"
                    fill="#041128"
                  />
                </g>
                <g filter="url(#filter1_f_33_337)">
                  <ellipse
                    rx="205.22"
                    ry="135.666"
                    transform="matrix(-0.262057 0.965052 -0.965784 -0.259347 601.455 389.887)"
                    fill="#041128"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_33_337"
                  x="0.470428"
                  y="104.541"
                  width="897.38"
                  height="794.955"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="93.9263"
                    result="effect1_foregroundBlur_33_337"
                  />
                </filter>
                <filter
                  id="filter1_f_33_337"
                  x="271.934"
                  y="0.851288"
                  width="659.043"
                  height="778.072"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="93.9263"
                    result="effect1_foregroundBlur_33_337"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_33_337"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(166.415 293.517) rotate(24.4204) scale(614.505 613.475)"
                >
                  <stop
                    offset="0.0755871"
                    stop-color="#C82DF4"
                    stop-opacity="0.71"
                  />
                  <stop offset="0.500996" stop-color="#1F1298" />
                  <stop offset="1" stop-color="#621EA2" />
                </radialGradient>
              </defs>
            </svg>

            {/* end of section overlay */}
          </div>

          <div
            className={`screen relative lg:h-screen w-full flex flex-wrap items-center py-[50px] lg:py-[87px] ${
              activeSection === 3 ? "active" : ""
            }`}
            id="features"
          >
            <div className="screen__container relative z-10 w-full">
              <div className="lg:grid lg:grid-cols-12 relative px-[16px] lg:px-[7.5vw]">
                <div className="col-span-8">
                  <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] mb-[16px] lg:text-[40px] lg:mb-[20px]">
                    Features
                  </h5>
                  <p className="desc text-[12px] leading-[18px] lg:text-[16px] lg:leading-[24px] mb-[40px] text-zinc-300 text-zinc-300">
                    Nowadays, other&apos;s platforms with a central data network
                    are based on centralised structures for the delivery of
                    videos, video storage, traffic, and routing are concentrated
                    at the central data network center. Besides that, these are
                    problems such as bandwidth issues on high traffic affecting
                    video quality and high cost of maintenance. To solve these
                    problems, Vilik Network is created to adopt a decentralized
                    P2P architecture, this network structure operates on the
                    same principle as BitTorrrent where users can share their
                    redundant computing and bandwidth resource as becoming the
                    nodes (peers) and are linked as distribution servers. This
                    innovative network architecture improves the quality of
                    stream delivery, and video resolution and reduces network
                    costs for bandwidth dramatically.
                  </p>
                </div>

                <div className="hidden lg:block absolute w-[477px] right-[-28px] top-1/2 -translate-y-2/4">
                  <Moving yFrom={0} yTo={50} duration={10}>
                    <img src="/earth-layer-3.png" className="w-full h-auto" />
                  </Moving>
                </div>
              </div>

              <div className="w-full overflow-hidden pl-[16px] lg:pl-[7.5vw]">
                <Swiper
                  modules={[Navigation]}
                  slidesPerView="auto"
                  navigation
                  className="box features-slider"
                >
                  <SwiperSlide>
                    <div className="h-full bg-white-blur p-[32px] lg:border-r-blur">
                      <div className="w-[56px] h-[56px] mb-[24px] flex items-center justify-center relative">
                        <svg
                          width="58"
                          height="58"
                          viewBox="0 0 58 58"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="57"
                            height="57"
                            rx="28.5"
                            stroke="url(#paint0_linear_13_423)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_13_423"
                              x1="1"
                              y1="20.3589"
                              x2="55.6244"
                              y2="36.7546"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#1E1822" />
                              <stop offset="0.462674" stopColor="#EAC2FF" />
                              <stop offset="0.764757" stopColor="#1945D9" />
                              <stop offset="1" stopColor="#1E1822" />
                            </linearGradient>
                          </defs>
                        </svg>

                        <Image
                          src="/binancedex.png"
                          alt="Platform built on BSC Network"
                          width={30}
                          height={36}
                        />
                      </div>
                      <h6 className="text-[16px leading-[19px] mb-[4px] lg:text-[20px] lg:leading-[28px] lg:mb-[16px] font-semibold">
                        Platform built on BSC Network
                      </h6>
                      <p className="text-[12px] leading-[18px] lg:text-[14px] leading-[21px] text-[#DCDCDC]">
                        The innovation generated by Vilik lies in the ecosystem
                        that combines the video live streaming function and
                        social media through the interaction with the newly born
                        crypto and VIK (crypto token).
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="h-full bg-white-blur p-[32px] lg:border-r-blur">
                      <div className="w-[56px] h-[56px] mb-[24px] flex items-center justify-center relative">
                        <svg
                          width="58"
                          height="58"
                          viewBox="0 0 58 58"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="57"
                            height="57"
                            rx="28.5"
                            stroke="url(#paint0_linear_13_423)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_13_423"
                              x1="1"
                              y1="20.3589"
                              x2="55.6244"
                              y2="36.7546"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#1E1822" />
                              <stop offset="0.462674" stopColor="#EAC2FF" />
                              <stop offset="0.764757" stopColor="#1945D9" />
                              <stop offset="1" stopColor="#1E1822" />
                            </linearGradient>
                          </defs>
                        </svg>

                        <Image
                          src="/stranger-duo.png"
                          alt="Stranger duo"
                          width={41}
                          height={23}
                        />
                      </div>
                      <h6 className="text-[16px leading-[19px] mb-[4px] lg:text-[20px] lg:leading-[28px] lg:mb-[16px] font-semibold">
                        Stranger duo
                      </h6>
                      <p className="text-[12px] leading-[18px] lg:text-[14px] leading-[21px] text-[#DCDCDC]">
                        With Vilik&apos;s cryptocurrency wallet, you do not need
                        passwords or third-party servers to store digital
                        currency. We ensure high cybersafety and protect users
                        from DDoS with the PSD2 standard, which is identical to
                        European security
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="h-full bg-white-blur p-[32px] lg:border-r-blur">
                      <div className="w-[56px] h-[56px] mb-[24px] flex items-center justify-center relative">
                        <svg
                          width="58"
                          height="58"
                          viewBox="0 0 58 58"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="57"
                            height="57"
                            rx="28.5"
                            stroke="url(#paint0_linear_13_423)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_13_423"
                              x1="1"
                              y1="20.3589"
                              x2="55.6244"
                              y2="36.7546"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#1E1822" />
                              <stop offset="0.462674" stopColor="#EAC2FF" />
                              <stop offset="0.764757" stopColor="#1945D9" />
                              <stop offset="1" stopColor="#1E1822" />
                            </linearGradient>
                          </defs>
                        </svg>

                        <Image
                          src="/diamond.png"
                          alt="Diamond"
                          width={33}
                          height={35}
                        />
                      </div>
                      <h6 className="text-[16px leading-[19px] mb-[4px] lg:text-[20px] lg:leading-[28px] lg:mb-[16px] font-semibold">
                        Diamond
                      </h6>
                      <p className="text-[12px] leading-[18px] lg:text-[14px] leading-[21px] text-[#DCDCDC]">
                        Diamond is the real value major unit in Vilik game
                        economy. It can be exchanged from VIK tokens, withdrawn
                        to the bank account at any time with low fee and fast
                        transaction.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="h-full bg-white-blur p-[32px] lg:border-r-blur">
                      <div className="w-[56px] h-[56px] mb-[24px] flex items-center justify-center relative">
                        <svg
                          width="58"
                          height="58"
                          viewBox="0 0 58 58"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="57"
                            height="57"
                            rx="28.5"
                            stroke="url(#paint0_linear_13_423)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_13_423"
                              x1="1"
                              y1="20.3589"
                              x2="55.6244"
                              y2="36.7546"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#1E1822" />
                              <stop offset="0.462674" stopColor="#EAC2FF" />
                              <stop offset="0.764757" stopColor="#1945D9" />
                              <stop offset="1" stopColor="#1E1822" />
                            </linearGradient>
                          </defs>
                        </svg>

                        <Image
                          src="/wallet.png"
                          alt="Vilik's wallet"
                          width={30}
                          height={36}
                        />
                      </div>
                      <h6 className="text-[16px leading-[19px] mb-[4px] lg:text-[20px] lg:leading-[28px] lg:mb-[16px] font-semibold">
                        Vilik&apos;s wallet
                      </h6>
                      <p className="text-[12px] leading-[18px] lg:text-[14px] leading-[21px] text-[#DCDCDC]">
                        Users do not need passwords or third-party servers to
                        store digital currency. Besides, we also ensure high
                        cyber safety with the DDoS with the PSD2 standard with a
                        combination of multisig transactions, automatically
                        enforced Two Factor Authentication.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="h-full bg-white-blur p-[32px] lg:border-r-blur">
                      <div className="w-[56px] h-[56px] mb-[24px] flex items-center justify-center relative">
                        <svg
                          width="58"
                          height="58"
                          viewBox="0 0 58 58"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="57"
                            height="57"
                            rx="28.5"
                            stroke="url(#paint0_linear_13_423)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_13_423"
                              x1="1"
                              y1="20.3589"
                              x2="55.6244"
                              y2="36.7546"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#1E1822" />
                              <stop offset="0.462674" stopColor="#EAC2FF" />
                              <stop offset="0.764757" stopColor="#1945D9" />
                              <stop offset="1" stopColor="#1E1822" />
                            </linearGradient>
                          </defs>
                        </svg>

                        <Image
                          src="/mini-game.png"
                          alt="Mini-game"
                          width={33}
                          height={24}
                        />
                      </div>
                      <h6 className="text-[16px leading-[19px] mb-[4px] lg:text-[20px] lg:leading-[28px] lg:mb-[16px] font-semibold">
                        Mini-game
                      </h6>
                      <p className="text-[12px] leading-[18px] lg:text-[14px] leading-[21px] text-[#DCDCDC]">
                        Our high anti-cheat with proxy and multiple account
                        detection systems offers the fair Vilik&apos;s Minigame/
                        Lucky game where users can play and earn diamonds
                        without being afraid of losing them or fraud activities.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="h-full bg-white-blur p-[32px]">
                      <div className="w-[56px] h-[56px] mb-[24px] flex items-center justify-center relative">
                        <svg
                          width="58"
                          height="58"
                          viewBox="0 0 58 58"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="57"
                            height="57"
                            rx="28.5"
                            stroke="url(#paint0_linear_13_423)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_13_423"
                              x1="1"
                              y1="20.3589"
                              x2="55.6244"
                              y2="36.7546"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#1E1822" />
                              <stop offset="0.462674" stopColor="#EAC2FF" />
                              <stop offset="0.764757" stopColor="#1945D9" />
                              <stop offset="1" stopColor="#1E1822" />
                            </linearGradient>
                          </defs>
                        </svg>

                        <Image
                          src="/nft.png"
                          alt="NFT marketplace"
                          width={37}
                          height={28}
                        />
                      </div>
                      <h6 className="text-[16px leading-[19px] mb-[4px] lg:text-[20px] lg:leading-[28px] lg:mb-[16px] font-semibold">
                        NFT marketplace
                      </h6>
                      <p className="text-[12px] leading-[18px] lg:text-[14px] leading-[21px] text-[#DCDCDC]">
                        Our NFT Marketplace is built to bring users unique and
                        exclusive products, such as unique photo frames, medals
                        with effects, and much more.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <img
                src="/earth-layer-3.png"
                className="w-full max-w-[250px] mx-auto h-auto lg:hidden relative z-10"
              />

              {/* section overlay */}
              <svg
                width="375"
                height="667"
                viewBox="0 0 375 667"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:hidden absolute left-0 bottom-0 w-full h-auto"
              >
                <g opacity="0.66">
                  <path
                    d="M-99.66 359.927C-142.395 518.402 -48.0412 681.133 111.085 723.396C270.211 765.658 433.852 671.449 476.587 512.974C519.322 354.499 424.969 191.768 265.842 149.505C106.716 107.242 -56.9249 201.451 -99.66 359.927Z"
                    fill="url(#paint0_radial_35_209)"
                  />
                  <g filter="url(#filter0_f_35_209)">
                    <ellipse
                      rx="238.83"
                      ry="307.492"
                      transform="matrix(-0.262057 0.965052 -0.965784 -0.259346 126.589 511.594)"
                      fill="#041128"
                    />
                  </g>
                  <g filter="url(#filter1_f_35_209)">
                    <ellipse
                      rx="238.83"
                      ry="157.884"
                      transform="matrix(-0.262057 0.965052 -0.965784 -0.259347 303.826 381.098)"
                      fill="#041128"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_35_209"
                    x="-395.586"
                    y="49.0194"
                    width="1044.35"
                    height="925.15"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="109.309"
                      result="effect1_foregroundBlur_35_209"
                    />
                  </filter>
                  <filter
                    id="filter1_f_35_209"
                    x="-79.6628"
                    y="-71.6526"
                    width="766.978"
                    height="905.501"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="109.309"
                      result="effect1_foregroundBlur_35_209"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_35_209"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(-202.465 268.944) rotate(24.4204) scale(715.147 713.948)"
                  >
                    <stop
                      offset="0.0755871"
                      stop-color="#C82DF4"
                      stop-opacity="0.71"
                    />
                    <stop offset="0.500996" stop-color="#1F1298" />
                    <stop offset="1" stop-color="#621EA2" />
                  </radialGradient>
                </defs>
              </svg>
              <svg
                width="375"
                height="560"
                viewBox="0 0 375 560"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:hidden absolute bottom-0 right-0"
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
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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

              {/* end of section overlay */}
            </div>
          </div>

          <div
            className={`screen relative lg:h-screen w-full flex flex-wrap items-center pt-[50px] pb-[8px] lg:py-[87px] lg:px-[7.5vw] ${
              activeSection === 4 ? "active" : ""
            }`}
            id="value"
          >
            <div className="screen__container relative z-10 w-full">
              <div className="px-[16px] lg:px-0">
                <div
                  className="flex space-x-[40px] p-[4px] lg:p-[8px] bg-white-blur-007 rounded-[30px] mb-[24px] max-w-[1002px] mx-auto"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActive("problem")}
                    className={`w-6/12 h-[36px] lg:h-[43px] rounded-[22px] flex items-center justify-center ${
                      active === "problem"
                        ? "text-shadow-white-51 bg-white-012"
                        : ""
                    }`}
                  >
                    Problem
                  </button>
                  <button
                    type="button"
                    onClick={() => setActive("solution")}
                    className={`w-6/12 h-[36px] lg:h-[43px] rounded-[22px] flex items-center justify-center ${
                      active === "solution"
                        ? "text-shadow-white-51 bg-white-012"
                        : ""
                    }`}
                  >
                    Solution
                  </button>
                </div>
              </div>

              {active === "problem" ? (
                <>
                  <h5 className="sub-heading text-center text-gradient-blue text-[24px] mb-[24px] leading-[29px] lg:leading-[38px]">
                    THE PROLEM OF LIVEVIDEO STREAMING TODAY
                  </h5>

                  <div className="px-[16px] lg:px-0">
                    <img
                      src="/problem@2x.png"
                      alt="THE PROLEM OF LIVEVIDEO STREAMING TODAY"
                      className="desc mx-auto w-full max-w-[844px] mb-[25px]"
                    />
                  </div>

                  <div className="box w-full w-full pl-[16px] lg:pl-0">
                    <Swiper
                      slidesPerView="auto"
                      spaceBetween={1}
                      breakpoints={{
                        1024: {
                          slidesPerView: 3,
                        },
                      }}
                      className="value-slider"
                    >
                      <SwiperSlide>
                        <div className="flex h-full p-[24px] lg:p-[32px] bg-white-blur">
                          <div className="w-[32px] h-[32px] lg:w-[56px] lg:h-[56px] flex items-center justify-center relative">
                            <svg
                              width="58"
                              height="58"
                              viewBox="0 0 58 58"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                            >
                              <rect
                                x="0.5"
                                y="0.5"
                                width="57"
                                height="57"
                                rx="28.5"
                                stroke="url(#paint0_linear_13_423)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_13_423"
                                  x1="1"
                                  y1="20.3589"
                                  x2="55.6244"
                                  y2="36.7546"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#1E1822" />
                                  <stop offset="0.462674" stopColor="#EAC2FF" />
                                  <stop offset="0.764757" stopColor="#1945D9" />
                                  <stop offset="1" stopColor="#1E1822" />
                                </linearGradient>
                              </defs>
                            </svg>

                            <Image
                              src="/quality.png"
                              alt="Poor quality video"
                              width={26}
                              height={26}
                            />
                          </div>
                          <div className="pl-[24px] flex-1">
                            <h6 className="text-gradient-blue text-[16px] lg:text-[20px] leading-[24px] mb-[16px] font-semibold">
                              Poor quality video
                            </h6>
                            <p className="text-[12px] leading-[18px] lg:text-[14px] leading-[21px] text-[#DCDCDC]">
                              Due to inconvenience in CDN which causes
                              re-buffering video and high load times, users
                              cannot enjoy perfect quality in case of increasing
                              demand for online video.
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex h-full p-[24px] lg:p-[32px] bg-white-blur">
                          <div className="w-[32px] h-[32px] lg:w-[56px] lg:h-[56px] flex items-center justify-center relative">
                            <svg
                              width="58"
                              height="58"
                              viewBox="0 0 58 58"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                            >
                              <rect
                                x="0.5"
                                y="0.5"
                                width="57"
                                height="57"
                                rx="28.5"
                                stroke="url(#paint0_linear_13_423)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_13_423"
                                  x1="1"
                                  y1="20.3589"
                                  x2="55.6244"
                                  y2="36.7546"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#1E1822" />
                                  <stop offset="0.462674" stopColor="#EAC2FF" />
                                  <stop offset="0.764757" stopColor="#1945D9" />
                                  <stop offset="1" stopColor="#1E1822" />
                                </linearGradient>
                              </defs>
                            </svg>

                            <Image
                              src="/data.png"
                              alt="Skyrocketing data needs"
                              width={23}
                              height={28}
                            />
                          </div>
                          <div className="pl-[24px] flex-1">
                            <h6 className="text-gradient-blue text-[16px] lg:text-[20px] leading-[24px] mb-[16px] font-semibold">
                              Skyrocketing data needs
                            </h6>
                            <p className="text-[12px] leading-[18px] lg:text-[14px] leading-[21px] text-[#DCDCDC]">
                              The demand for online media and entertainment has
                              rapidly increased, which means data needs are
                              skyrocketing with 4k, 8k and higher quality
                              streams creating an infrastructure bottleneck.
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex h-full p-[24px] lg:p-[32px] bg-white-blur">
                          <div className="w-[32px] h-[32px] lg:w-[56px] lg:h-[56px] flex items-center justify-center relative">
                            <svg
                              width="58"
                              height="58"
                              viewBox="0 0 58 58"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                            >
                              <rect
                                x="0.5"
                                y="0.5"
                                width="57"
                                height="57"
                                rx="28.5"
                                stroke="url(#paint0_linear_13_423)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_13_423"
                                  x1="1"
                                  y1="20.3589"
                                  x2="55.6244"
                                  y2="36.7546"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#1E1822" />
                                  <stop offset="0.462674" stopColor="#EAC2FF" />
                                  <stop offset="0.764757" stopColor="#1945D9" />
                                  <stop offset="1" stopColor="#1E1822" />
                                </linearGradient>
                              </defs>
                            </svg>

                            <Image
                              src="/system.png"
                              alt="Skyrocketing data needs"
                              width={44}
                              height={43}
                            />
                          </div>
                          <div className="pl-[24px] flex-1">
                            <h6 className="text-gradient-blue text-[16px] lg:text-[20px] leading-[24px] mb-[16px] font-semibold">
                              A centralized and inefficient system
                            </h6>
                            <p className="text-[12px] leading-[18px] lg:text-[14px] leading-[21px] text-[#DCDCDC]">
                              The centralized nature means less revenue flows
                              back to content creators and platforms.
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </>
              ) : null}

              {active === "solution" ? (
                <>
                  <h5 className="sub-heading text-center text-gradient-blue text-[24px] mb-[24px] leading-[38px]">
                    VILIK&apos;S SOLUTION
                  </h5>

                  <div className="desc relative mt-[54px] px-[16px] lg:px-0">
                    <img
                      src="/solution@2x.png"
                      alt="VILIK'S SOLUTION"
                      className="mx-auto w-full max-w-[683px] mb-[29px]"
                    />
                  </div>

                  <div className="box w-full pl-[16px] lg:pl-0">
                    <Swiper
                      slidesPerView="auto"
                      spaceBetween={1}
                      breakpoints={{
                        1024: {
                          slidesPerView: 3,
                        },
                      }}
                      className="value-slider"
                    >
                      <SwiperSlide>
                        <div className="flex h-full p-[24px] lg:p-[32px] bg-white-blur">
                          <div className="w-[32px] h-[32px] lg:w-[56px] lg:h-[56px] flex items-center justify-center relative">
                            <svg
                              width="58"
                              height="58"
                              viewBox="0 0 58 58"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                            >
                              <rect
                                x="0.5"
                                y="0.5"
                                width="57"
                                height="57"
                                rx="28.5"
                                stroke="url(#paint0_linear_13_423)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_13_423"
                                  x1="1"
                                  y1="20.3589"
                                  x2="55.6244"
                                  y2="36.7546"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#1E1822" />
                                  <stop offset="0.462674" stopColor="#EAC2FF" />
                                  <stop offset="0.764757" stopColor="#1945D9" />
                                  <stop offset="1" stopColor="#1E1822" />
                                </linearGradient>
                              </defs>
                            </svg>

                            <Image
                              src="/data.png"
                              alt="Viewers earn rewards as VIK token"
                              width={29}
                              height={35}
                            />
                          </div>
                          <div className="pl-[24px] flex-1">
                            <h6 className="text-gradient-blue text-[16px] lg:text-[20px] leading-[24px] mb-[16px] font-semibold">
                              Viewers earn rewards as VIK token
                            </h6>
                            <p className="text-[12px] leading-[18px] lg:text-[14px] leading-[21px] text-[#DCDCDC]">
                              Viewers are now rewarded to participate in the
                              network. This is a new way of monetizing excess
                              network resources, such as bandwidth and storage.
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex h-full p-[24px] lg:p-[32px] bg-white-blur">
                          <div className="w-[32px] h-[32px] lg:w-[56px] lg:h-[56px] flex items-center justify-center relative">
                            <svg
                              width="58"
                              height="58"
                              viewBox="0 0 58 58"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                            >
                              <rect
                                x="0.5"
                                y="0.5"
                                width="57"
                                height="57"
                                rx="28.5"
                                stroke="url(#paint0_linear_13_423)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_13_423"
                                  x1="1"
                                  y1="20.3589"
                                  x2="55.6244"
                                  y2="36.7546"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#1E1822" />
                                  <stop offset="0.462674" stopColor="#EAC2FF" />
                                  <stop offset="0.764757" stopColor="#1945D9" />
                                  <stop offset="1" stopColor="#1E1822" />
                                </linearGradient>
                              </defs>
                            </svg>

                            <Image
                              src="/viewer.png"
                              alt="High quality, smoother video streaming"
                              width={29}
                              height={29}
                            />
                          </div>
                          <div className="pl-[24px] flex-1">
                            <h6 className="text-gradient-blue text-[16px] lg:text-[20px] leading-[24px] mb-[16px] font-semibold">
                              High quality, smoother video streaming
                            </h6>
                            <p className="text-[12px] leading-[18px] lg:text-[14px] leading-[21px] text-[#DCDCDC]">
                              Our decentralised network allows everyone to
                              globally earn streaming revenues. Herein, artists,
                              producers, streamers, and viewers jointly enjoy
                              the most immersive experiences.
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex h-full p-[24px] lg:p-[32px] bg-white-blur">
                          <div className="w-[32px] h-[32px] lg:w-[56px] lg:h-[56px] flex items-center justify-center relative">
                            <svg
                              width="58"
                              height="58"
                              viewBox="0 0 58 58"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                            >
                              <rect
                                x="0.5"
                                y="0.5"
                                width="57"
                                height="57"
                                rx="28.5"
                                stroke="url(#paint0_linear_13_423)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_13_423"
                                  x1="1"
                                  y1="20.3589"
                                  x2="55.6244"
                                  y2="36.7546"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#1E1822" />
                                  <stop offset="0.462674" stopColor="#EAC2FF" />
                                  <stop offset="0.764757" stopColor="#1945D9" />
                                  <stop offset="1" stopColor="#1E1822" />
                                </linearGradient>
                              </defs>
                            </svg>

                            <Image
                              src="/stream.png"
                              alt="Reduced cost of delivering video streams"
                              width={29}
                              height={29}
                            />
                          </div>
                          <div className="pl-[24px] flex-1">
                            <h6 className="text-gradient-blue text-[16px] lg:text-[20px] leading-[24px] mb-[16px] font-semibold">
                              Reduced cost of delivering video streams
                            </h6>
                            <p className="text-[12px] leading-[18px] lg:text-[14px] leading-[21px] text-[#DCDCDC]">
                              Fewer servers, less bandwidth and no more
                              expensive hosting mean more capital to invest in
                              developing new apps and improving the experience
                              for users.c
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </>
              ) : null}
            </div>

            {/* section overlay */}
            <svg
              width="375"
              height="667"
              viewBox="0 0 375 667"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden absolute w-full h-auto top-2/4 left-2/4 -translate-x-2/4	-translate-y-2/4"
            >
              <g opacity="0.66">
                <path
                  d="M-59.248 264.696C-95.9689 400.869 -14.8935 540.699 121.839 577.014C258.572 613.329 399.184 532.378 435.905 396.205C472.626 260.031 391.55 120.202 254.818 83.8866C118.085 47.5714 -22.527 128.522 -59.248 264.696Z"
                  fill="url(#paint0_radial_36_301)"
                />
                <g filter="url(#filter0_f_36_301)">
                  <ellipse
                    rx="205.22"
                    ry="264.219"
                    transform="matrix(-0.262057 0.965052 -0.965784 -0.259346 135.16 395.019)"
                    fill="#041128"
                  />
                </g>
                <g filter="url(#filter1_f_36_301)">
                  <ellipse
                    rx="205.22"
                    ry="135.666"
                    transform="matrix(-0.262057 0.965052 -0.965784 -0.259347 287.455 282.887)"
                    fill="#041128"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_36_301"
                  x="-313.53"
                  y="-2.45877"
                  width="897.38"
                  height="794.955"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="93.9263"
                    result="effect1_foregroundBlur_36_301"
                  />
                </filter>
                <filter
                  id="filter1_f_36_301"
                  x="-42.0659"
                  y="-106.149"
                  width="659.043"
                  height="778.072"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="93.9263"
                    result="effect1_foregroundBlur_36_301"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_36_301"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-147.585 186.517) rotate(24.4204) scale(614.505 613.475)"
                >
                  <stop
                    offset="0.0755871"
                    stop-color="#C82DF4"
                    stop-opacity="0.71"
                  />
                  <stop offset="0.500996" stop-color="#1F1298" />
                  <stop offset="1" stop-color="#621EA2" />
                </radialGradient>
              </defs>
            </svg>
            <svg
              width="375"
              height="560"
              viewBox="0 0 375 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden absolute bottom-0 right-0"
            >
              <g filter="url(#filter0_f_36_307)">
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
                  id="filter0_f_36_307"
                  x="-46.7207"
                  y="0.670898"
                  width="855.178"
                  height="891.283"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="100"
                    result="effect1_foregroundBlur_36_307"
                  />
                </filter>
              </defs>
            </svg>
            {/* end of section overlay */}
          </div>

          <div
            className={`screen relative lg:h-screen w-full flex flex-wrap items-center justify-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
              activeSection === 5 ? "active" : ""
            }`}
            id="eco"
          >
            <div className="screen__container relative z-10">
              <div className="text-center">
                <h4 className="btn-animate large rounded-[38px] h-[35px] inline-flex items-center justify-center px-[18px] mb-[8px] relative z-10">
                  <span className="circle"></span>
                  <span className="layer"></span>
                  <span className="txt whitespace-nowrap">
                    ECOSYSTEM &amp; TOKENOMICS
                  </span>
                </h4>
              </div>

              <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] lg:text-[40px] mb-[16px] lg:mb-[32px] lg:leading-[48px] text-center">
                Impress user wiith exceptional features
              </h5>

              <div className="box bg-white-blur-003 px-[26px] pt-[13px] pb-[21px] max-w-[1209px] mx-auto">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet="features@2x.png"
                  />
                  <img
                    src="featuresmb@2x.png"
                    alt="ECOSYSTEM &amp; TOKENOMICS"
                    className="w-full max-w-[1000px] mx-auto"
                  />
                </picture>
              </div>
            </div>

            {/* section overlay */}
            <svg
              width="375"
              height="639"
              viewBox="0 0 375 639"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden absolute top-0 lef-0 w-full h-auto"
            >
              <g opacity="0.66">
                <path
                  d="M-59.248 110.696C-95.9689 246.869 -14.8935 386.699 121.839 423.014C258.572 459.329 399.184 378.378 435.905 242.205C472.626 106.031 391.55 -33.7982 254.818 -70.1134C118.085 -106.429 -22.527 -25.4775 -59.248 110.696Z"
                  fill="url(#paint0_radial_36_447)"
                />
                <g filter="url(#filter0_f_36_447)">
                  <ellipse
                    rx="205.22"
                    ry="264.219"
                    transform="matrix(-0.262057 0.965052 -0.965784 -0.259346 135.16 241.019)"
                    fill="#041128"
                  />
                </g>
                <g filter="url(#filter1_f_36_447)">
                  <ellipse
                    rx="205.22"
                    ry="135.666"
                    transform="matrix(-0.262057 0.965052 -0.965784 -0.259347 287.455 128.887)"
                    fill="#041128"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_36_447"
                  x="-313.53"
                  y="-156.459"
                  width="897.38"
                  height="794.955"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="93.9263"
                    result="effect1_foregroundBlur_36_447"
                  />
                </filter>
                <filter
                  id="filter1_f_36_447"
                  x="-42.0659"
                  y="-260.149"
                  width="659.043"
                  height="778.072"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="93.9263"
                    result="effect1_foregroundBlur_36_447"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_36_447"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-147.585 32.5173) rotate(24.4204) scale(614.505 613.475)"
                >
                  <stop
                    offset="0.0755871"
                    stop-color="#C82DF4"
                    stop-opacity="0.71"
                  />
                  <stop offset="0.500996" stop-color="#1F1298" />
                  <stop offset="1" stop-color="#621EA2" />
                </radialGradient>
              </defs>
            </svg>
            <svg
              width="375"
              height="491"
              viewBox="0 0 375 491"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden absolute left-0 top-[37px]"
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
                  fill-opacity="0.44"
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
                  fill-opacity="0.41"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              className="lg:hidden absolute bottom-[14px] right-0"
            >
              <g filter="url(#filter0_f_36_464)">
                <ellipse
                  rx="120.254"
                  ry="117.127"
                  transform="matrix(0.919621 0.392807 -0.707569 0.706644 242.463 238.168)"
                  fill="#76269F"
                  fill-opacity="0.71"
                />
              </g>
              <g filter="url(#filter1_f_36_464)">
                <ellipse
                  rx="120.254"
                  ry="117.127"
                  transform="matrix(0.919621 0.392807 -0.707569 0.706644 383.72 180.004)"
                  fill="#76269F"
                  fill-opacity="0.59"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            {/* end of section overlay */}
          </div>

          <div
            className={`screen relative lg:h-screen w-full flex flex-wrap items-center justify-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
              activeSection === 6 ? "active" : ""
            }`}
            id="monetary-flow"
          >
            <div className="screen__container relative z-10">
              <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] lg:text-[40px] mb-[16px] lg:mb-[32px] lg:leading-[48px] text-center">
                Monetary flow
              </h5>

              <div className="box bg-white-blur-003 p-[32px] lg:px-[143px] lg:py-[57px] w-full relative max-w-[1223px] mx-auto">
                <div className="hidden lg:block absolute top-[-58px] left-[-19px]">
                  <Moving yFrom={10} yTo={-10} duration={5}>
                    <Image
                      src="/shape1@2x.png"
                      alt="NFT marketplace"
                      width={133}
                      height={133}
                    />
                  </Moving>
                </div>

                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet="monetary-flow@2x.png"
                  />
                  <img src="monetary-flowmb@2x.png" alt="Monetary flow" />
                </picture>

                <div className="hidden lg:block absolute bottom-[-131px] right-[-182px]">
                  <Moving yFrom={-10} yTo={10} duration={5}>
                    <Image
                      src="/shape2@2x.png"
                      alt="NFT marketplace"
                      width={277}
                      height={216}
                    />
                  </Moving>
                </div>
              </div>
            </div>
            {/* section overlay */}
            <svg
              width="375"
              height="639"
              viewBox="0 0 375 639"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden absolute top-0 lef-0 w-full h-auto"
            >
              <g opacity="0.66">
                <path
                  d="M-59.248 110.696C-95.9689 246.869 -14.8935 386.699 121.839 423.014C258.572 459.329 399.184 378.378 435.905 242.205C472.626 106.031 391.55 -33.7982 254.818 -70.1134C118.085 -106.429 -22.527 -25.4775 -59.248 110.696Z"
                  fill="url(#paint0_radial_36_447)"
                />
                <g filter="url(#filter0_f_36_447)">
                  <ellipse
                    rx="205.22"
                    ry="264.219"
                    transform="matrix(-0.262057 0.965052 -0.965784 -0.259346 135.16 241.019)"
                    fill="#041128"
                  />
                </g>
                <g filter="url(#filter1_f_36_447)">
                  <ellipse
                    rx="205.22"
                    ry="135.666"
                    transform="matrix(-0.262057 0.965052 -0.965784 -0.259347 287.455 128.887)"
                    fill="#041128"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_36_447"
                  x="-313.53"
                  y="-156.459"
                  width="897.38"
                  height="794.955"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="93.9263"
                    result="effect1_foregroundBlur_36_447"
                  />
                </filter>
                <filter
                  id="filter1_f_36_447"
                  x="-42.0659"
                  y="-260.149"
                  width="659.043"
                  height="778.072"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="93.9263"
                    result="effect1_foregroundBlur_36_447"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_36_447"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-147.585 32.5173) rotate(24.4204) scale(614.505 613.475)"
                >
                  <stop
                    offset="0.0755871"
                    stop-color="#C82DF4"
                    stop-opacity="0.71"
                  />
                  <stop offset="0.500996" stop-color="#1F1298" />
                  <stop offset="1" stop-color="#621EA2" />
                </radialGradient>
              </defs>
            </svg>
            <svg
              width="375"
              height="491"
              viewBox="0 0 375 491"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden absolute left-0 top-[37px]"
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
                  fill-opacity="0.44"
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
                  fill-opacity="0.41"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              className="lg:hidden absolute bottom-[14px] right-0"
            >
              <g filter="url(#filter0_f_36_464)">
                <ellipse
                  rx="120.254"
                  ry="117.127"
                  transform="matrix(0.919621 0.392807 -0.707569 0.706644 242.463 238.168)"
                  fill="#76269F"
                  fill-opacity="0.71"
                />
              </g>
              <g filter="url(#filter1_f_36_464)">
                <ellipse
                  rx="120.254"
                  ry="117.127"
                  transform="matrix(0.919621 0.392807 -0.707569 0.706644 383.72 180.004)"
                  fill="#76269F"
                  fill-opacity="0.59"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            {/* end of section overlay */}
          </div>

          <div
            className={`screen relative lg:h-screen w-full hidden lg:flex items-center justify-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
              activeSection === 7 ? "active" : ""
            }`}
            id="tokenomics"
          >
            <div className="screen__container relative z-10 flex w-full h-full flex-col items-stretch">
              <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] lg:text-[40px] mb-[16px] lg:mb-[32px] lg:leading-[48px] text-center">
                Tokenomics
              </h5>

              <div className="flex-1">
                <div className="box text-[16px] leading-[24px] border-linear relative">
                  <div className="hidden lg:block absolute top-[-162px] right-[-173px] z-10">
                    <Moving yFrom={-10} yTo={10} duration={5}>
                      <Image
                        src="/shape3@2x.png"
                        alt="Tokenomics"
                        width={277}
                        height={216}
                      />
                    </Moving>
                  </div>

                  <div className="relative h-full pt-[70px] pb-[51px]">
                    <div className="flex text-light-blue text-[18px] leading-[27px] bg-white-blur-015 divide-x divide-white/20 font-bold absolute top-0 left-0 w-full">
                      <div className="w-[156px] py-[8px] text-center">
                        STAGE
                      </div>
                      <div className="w-[156px] py-[8px] text-center">
                        % OF TOTAL SUPPLY
                      </div>
                      <div className="w-[156px] py-[8px] text-center">
                        QUANTITY
                      </div>
                      <div className="w-[156px] py-[8px] text-center">
                        PRICE
                      </div>
                      <div className="w-[156px] py-[8px] text-center">
                        TOTAL SOLD
                      </div>
                      <div className="flex-1 py-[8px] text-center">
                        VESTING PERIOD
                      </div>
                    </div>

                    <div className="flex-1 divide-y divide-zinc-600">
                      {TOKENOMICS_DATA.map((item) => (
                        <div className="group" key={item.stage}>
                          <div className="flex transition-all group-hover:bg-zinc-800 divide-x divide-white/20">
                            <div className="w-[156px] py-[15px] text-center text-light-blue">
                              {item.stage}
                            </div>
                            <div className="w-[156px] py-[15px] text-center text-center">
                              <span className="inline-block rounded-[16px] py-[2px] px-[20px] border border-zinc-400 bg-zinc-800 text-[14px leading-[21px] font-medium">
                                {item.total}
                              </span>
                            </div>
                            <div className="w-[156px] py-[15px] text-center">
                              {item.quantity}
                            </div>
                            <div className="w-[156px] py-[15px] text-center">
                              {item.price}
                            </div>
                            <div className="w-[156px] py-[15px] text-center">
                              {item.totalSold}
                            </div>
                            <div className="flex-1 py-[15px] px-[20px]">
                              {item.vestingPeriod}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex text-[18px] leading-[27px] bg-white-blur-015 divide-x divide-white/20 absolute bottom-0 left-0 w-full">
                      <div className="w-[156px] py-[8px] text-center font-bold">
                        TOTAL
                      </div>
                      <div className="w-[156px] py-[8px] text-center text-center">
                        <span className="inline-block py-[4px] px-[24px] rounded-[16px] text-center bg-gradient-pink-200">
                          100%
                        </span>
                      </div>
                      <div className="w-[156px] py-[8px] text-center text-light-blue">
                        100,000,000
                      </div>
                      <div className="w-[156px] py-[15px] text-center"></div>
                      <div className="w-[156px] py-[15px] text-center"></div>
                      <div className="flex-1 py-[15px] text-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`screen relative lg:h-screen w-full flex  items-center justify-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
              activeSection === 8 ? "active" : ""
            }`}
            id="chart"
          >
            <div className="screen__container z-10">
              <div className="grid grid-cols-12">
                <div className="sub-heading col-span-12 order-2 mt-[23px] lg-[mt-0] lg:order-1 lg:col-span-4">
                  <div className="flex h-full items-center">
                    <div className="w-full grid grid-cols-2 gap-y-[20px]">
                      <div className="flex items-center space-x-[16px]">
                        <span className="inline-block w-[20px] h-[20px] bg-linear-1"></span>
                        <span>28% Reward Pool</span>
                      </div>
                      <div className="flex items-center space-x-[16px]">
                        <span className="inline-block w-[20px] h-[20px] bg-linear-2"></span>
                        <span>3% Public Round</span>
                      </div>
                      <div className="flex items-center space-x-[16px]">
                        <span className="inline-block w-[20px] h-[20px] bg-linear-3"></span>
                        <span>10% Staking Pool</span>
                      </div>
                      <div className="flex items-center space-x-[16px]">
                        <span className="inline-block w-[20px] h-[20px] bg-linear-4"></span>
                        <span>5% Core Team</span>
                      </div>
                      <div className="flex items-center space-x-[16px]">
                        <span className="inline-block w-[20px] h-[20px] bg-linear-5"></span>
                        <span>12% Reserve</span>
                      </div>
                      <div className="flex items-center space-x-[16px]">
                        <span className="inline-block w-[20px] h-[20px] bg-linear-6"></span>
                        <span>3% Public Round</span>
                      </div>
                      <div className="flex items-center space-x-[16px]">
                        <span className="inline-block w-[20px] h-[20px] bg-linear-7"></span>
                        <span>10% Seed Round</span>
                      </div>
                      <div className="flex items-center space-x-[16px]">
                        <span className="inline-block w-[20px] h-[20px] bg-linear-8"></span>
                        <span>9% Liquidity</span>
                      </div>
                      <div className="flex items-center space-x-[16px]">
                        <span className="inline-block w-[20px] h-[20px] bg-linear-9"></span>
                        <span>6% Private Round</span>
                      </div>
                      <div className="flex items-center space-x-[16px]">
                        <span className="inline-block w-[20px] h-[20px] bg-linear-10"></span>
                        <span>10% Marketing</span>
                      </div>
                      <div className="flex items-center space-x-[16px]">
                        <span className="inline-block w-[20px] h-[20px] bg-linear-11"></span>
                        <span>4% Partnership</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="desc col-span-12 order-1 lg:order-2 lg:col-span-8">
                  <div className="text-right">
                    <img
                      className="inline-block w-full max-w-[682px] h-auto"
                      src="/chart.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* section overlay */}
            <svg
              width="375"
              height="491"
              viewBox="0 0 375 491"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden absolute left-0 top-[37px]"
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
                  fill-opacity="0.44"
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
                  fill-opacity="0.41"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              className="lg:hidden absolute bottom-[14px] right-0"
            >
              <g filter="url(#filter0_f_36_464)">
                <ellipse
                  rx="120.254"
                  ry="117.127"
                  transform="matrix(0.919621 0.392807 -0.707569 0.706644 242.463 238.168)"
                  fill="#76269F"
                  fill-opacity="0.71"
                />
              </g>
              <g filter="url(#filter1_f_36_464)">
                <ellipse
                  rx="120.254"
                  ry="117.127"
                  transform="matrix(0.919621 0.392807 -0.707569 0.706644 383.72 180.004)"
                  fill="#76269F"
                  fill-opacity="0.59"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            {/* end of section overlay */}
          </div>

          <div
            className={`screen relative lg:h-screen w-full lg:flex  items-center justify-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
              activeSection === 9 ? "active" : ""
            }`}
            id="roadmap"
          >
            <div className="screen__container z-10">
              <h5 className="sub-heading text-center text-gradient-blue text-[24px] leading-[29px] lg:text-[40px] mb-[43px] lg:mb-[54px] lg:leading-[48px] relative z-10">
                Roadmap
              </h5>

              <img
                src="/network-line.png"
                className="absolute w-full left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4"
              />

              <div className="box relative max-w-[1224px] mx-auto">
                <div className="line-linear absolute top-[34px] w-full left-2/4 -translate-x-2/4"></div>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={8}
                  slidesPerView={3}
                  navigation
                  className="roadmap-slider"
                  breakpoints={{
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="flex flex-wrap justify-center items-center group relative">
                      <div className="w-[72px] h-[72px] relative">
                        <img
                          className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10"
                          src="/earth-white.png"
                        />
                      </div>
                      <p className="w-full text-zinc-50 text-[18px]  leading-[22px] mb-[8px] lg:text-[28px] lg:leading-[34px] lg:mb-[16px] font-bold text-center font-kanit">
                        Q1 - 2022
                      </p>
                      <ul className="text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-[#DCDCDC] font-light">
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          Vilik Streaming Web Platform Development Begins
                        </li>
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          Vilik Community Channel Begins
                        </li>
                      </ul>

                      <svg
                        width="30"
                        height="28"
                        viewBox="0 0 30 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-[22px] right-0"
                      >
                        <path
                          d="M2 2L14 14L2 26"
                          stroke="url(#paint0_radial_874_5120)"
                          strokeWidth="4"
                        />
                        <path
                          d="M14.8008 2L26.8008 14L14.8008 26"
                          stroke="url(#paint1_linear_874_5120)"
                          strokeWidth="4"
                        />
                        <defs>
                          <radialGradient
                            id="paint0_radial_874_5120"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(7.9102 14.3623) rotate(-10.1836) scale(11.1106 21.7002)"
                          >
                            <stop stopColor="#FEFAFF" />
                            <stop offset="1" stopColor="#87ACF3" />
                          </radialGradient>
                          <linearGradient
                            id="paint1_linear_874_5120"
                            x1="20.8008"
                            y1="2"
                            x2="20.8008"
                            y2="26"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7F6499" />
                            <stop offset="1" stopColor="#5B4273" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-wrap justify-center items-center group relative">
                      <div className="w-[72px] h-[72px] relative">
                        <img
                          className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10"
                          src="/earth-white.png"
                        />
                      </div>
                      <p className="w-full text-zinc-50 text-[18px]  leading-[22px] mb-[8px] lg:text-[28px] lg:leading-[34px] lg:mb-[16px] font-bold text-center font-kanit">
                        Q3 - 2022
                      </p>
                      <ul className="text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-[#DCDCDC] font-light">
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          IDO
                        </li>
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          Token Launch
                        </li>
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          Vilik Streaming Web Platform Version 1.0 Released
                        </li>
                      </ul>

                      <svg
                        width="30"
                        height="28"
                        viewBox="0 0 30 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-[22px] right-0"
                      >
                        <path
                          d="M2 2L14 14L2 26"
                          stroke="url(#paint0_radial_874_5120)"
                          strokeWidth="4"
                        />
                        <path
                          d="M14.8008 2L26.8008 14L14.8008 26"
                          stroke="url(#paint1_linear_874_5120)"
                          strokeWidth="4"
                        />
                        <defs>
                          <radialGradient
                            id="paint0_radial_874_5120"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(7.9102 14.3623) rotate(-10.1836) scale(11.1106 21.7002)"
                          >
                            <stop stopColor="#FEFAFF" />
                            <stop offset="1" stopColor="#87ACF3" />
                          </radialGradient>
                          <linearGradient
                            id="paint1_linear_874_5120"
                            x1="20.8008"
                            y1="2"
                            x2="20.8008"
                            y2="26"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7F6499" />
                            <stop offset="1" stopColor="#5B4273" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-wrap justify-center items-center group relative">
                      <div className="w-[72px] h-[72px] relative">
                        <img
                          className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10"
                          src="/earth-white.png"
                        />
                      </div>
                      <p className="w-full text-zinc-50 text-[18px]  leading-[22px] mb-[8px] lg:text-[28px] lg:leading-[34px] lg:mb-[16px] font-bold text-center font-kanit">
                        Q4 - 2022
                      </p>
                      <ul className="text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-[#DCDCDC] font-light">
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          Vilik Streaming Web Platform Version 2.0 Released
                        </li>
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          Vilik Network(Peer-to-Peer Network)
                        </li>
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          Development Begins
                        </li>
                      </ul>

                      <svg
                        width="30"
                        height="28"
                        viewBox="0 0 30 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-[22px] right-0"
                      >
                        <path
                          d="M2 2L14 14L2 26"
                          stroke="url(#paint0_radial_874_5120)"
                          strokeWidth="4"
                        />
                        <path
                          d="M14.8008 2L26.8008 14L14.8008 26"
                          stroke="url(#paint1_linear_874_5120)"
                          strokeWidth="4"
                        />
                        <defs>
                          <radialGradient
                            id="paint0_radial_874_5120"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(7.9102 14.3623) rotate(-10.1836) scale(11.1106 21.7002)"
                          >
                            <stop stopColor="#FEFAFF" />
                            <stop offset="1" stopColor="#87ACF3" />
                          </radialGradient>
                          <linearGradient
                            id="paint1_linear_874_5120"
                            x1="20.8008"
                            y1="2"
                            x2="20.8008"
                            y2="26"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7F6499" />
                            <stop offset="1" stopColor="#5B4273" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-wrap justify-center items-center group relative">
                      <div className="w-[72px] h-[72px] relative">
                        <img
                          className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10"
                          src="/earth-white.png"
                        />
                      </div>
                      <p className="w-full text-zinc-50 text-[18px]  leading-[22px] mb-[8px] lg:text-[28px] lg:leading-[34px] lg:mb-[16px] font-bold text-center font-kanit">
                        Q1 - 2023
                      </p>
                      <ul className="text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-[#DCDCDC] font-light">
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          Vilik Streaming Web Platform Version 3.0 Released
                        </li>
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          Vilik Network(Peer-to-Peer Network) Testne
                        </li>
                      </ul>

                      <svg
                        width="30"
                        height="28"
                        viewBox="0 0 30 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-[22px] right-0"
                      >
                        <path
                          d="M2 2L14 14L2 26"
                          stroke="url(#paint0_radial_874_5120)"
                          strokeWidth="4"
                        />
                        <path
                          d="M14.8008 2L26.8008 14L14.8008 26"
                          stroke="url(#paint1_linear_874_5120)"
                          strokeWidth="4"
                        />
                        <defs>
                          <radialGradient
                            id="paint0_radial_874_5120"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(7.9102 14.3623) rotate(-10.1836) scale(11.1106 21.7002)"
                          >
                            <stop stopColor="#FEFAFF" />
                            <stop offset="1" stopColor="#87ACF3" />
                          </radialGradient>
                          <linearGradient
                            id="paint1_linear_874_5120"
                            x1="20.8008"
                            y1="2"
                            x2="20.8008"
                            y2="26"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7F6499" />
                            <stop offset="1" stopColor="#5B4273" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-wrap justify-center items-center group relative">
                      <div className="w-[72px] h-[72px] relative">
                        <img
                          className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10"
                          src="/earth-white.png"
                        />
                      </div>
                      <p className="w-full text-zinc-50 text-[18px]  leading-[22px] mb-[8px] lg:text-[28px] lg:leading-[34px] lg:mb-[16px] font-bold text-center font-kanit">
                        Q2 - 2023
                      </p>
                      <ul className="text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-[#DCDCDC] font-light">
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          Vilik Streaming Web Platform Version 4.0 Release
                        </li>
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          Vilik Network(Peer-to-Peer Network) Mainest
                        </li>
                      </ul>

                      <svg
                        width="30"
                        height="28"
                        viewBox="0 0 30 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-[22px] right-0"
                      >
                        <path
                          d="M2 2L14 14L2 26"
                          stroke="url(#paint0_radial_874_5120)"
                          strokeWidth="4"
                        />
                        <path
                          d="M14.8008 2L26.8008 14L14.8008 26"
                          stroke="url(#paint1_linear_874_5120)"
                          strokeWidth="4"
                        />
                        <defs>
                          <radialGradient
                            id="paint0_radial_874_5120"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(7.9102 14.3623) rotate(-10.1836) scale(11.1106 21.7002)"
                          >
                            <stop stopColor="#FEFAFF" />
                            <stop offset="1" stopColor="#87ACF3" />
                          </radialGradient>
                          <linearGradient
                            id="paint1_linear_874_5120"
                            x1="20.8008"
                            y1="2"
                            x2="20.8008"
                            y2="26"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7F6499" />
                            <stop offset="1" stopColor="#5B4273" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-wrap justify-center items-center group relative">
                      <div className="w-[72px] h-[72px] relative">
                        <img
                          className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10"
                          src="/earth-white.png"
                        />
                      </div>
                      <p className="w-full text-zinc-50 text-[18px]  leading-[22px] mb-[8px] lg:text-[28px] lg:leading-[34px] lg:mb-[16px] font-bold text-center font-kanit">
                        Q4 - 2023
                      </p>
                      <ul className="text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-[#DCDCDC] font-light">
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          Vilik Streaming Web Platform Version 5.0 Release
                        </li>
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          Vilik Network(Peer-to-Peer Network) Finally Update
                        </li>
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          Vilik Streaming Web Platform Phase 1 Closed
                        </li>
                      </ul>

                      <svg
                        width="30"
                        height="28"
                        viewBox="0 0 30 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-[22px] right-0"
                      >
                        <path
                          d="M2 1.90039L14 13.9004L2 25.9004"
                          stroke="#E8C1FE"
                          strokeWidth="4"
                        />
                        <path
                          d="M14.7998 1.90039L26.7998 13.9004L14.7998 25.9004"
                          stroke="#E8C1FE"
                          strokeWidth="4"
                        />
                      </svg>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-wrap justify-center items-center group relative">
                      <div className="w-[72px] h-[72px] relative">
                        <img
                          className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10"
                          src="/earth-white.png"
                        />
                      </div>
                      <p className="w-full text-zinc-50 text-[18px]  leading-[22px] mb-[8px] lg:text-[28px] lg:leading-[34px] lg:mb-[16px] font-bold text-center font-kanit">
                        Q1 - 2024
                      </p>
                      <ul className="text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-[#DCDCDC] font-light">
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          NTFs Marketplace Development Begins
                        </li>
                        <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                          Mobile Platform Development Begins
                        </li>
                      </ul>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            {/* section overlay */}
            <svg
              width="375"
              height="667"
              viewBox="0 0 375 667"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden absolute top-0 left-0"
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
                    fill-opacity="0.5"
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
                    fill-opacity="0.44"
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
                      fill-opacity="0.71"
                    />
                  </g>
                  <g filter="url(#filter5_f_1220_8226)">
                    <ellipse
                      rx="201.591"
                      ry="118.908"
                      transform="matrix(0.652511 0.757779 -0.783038 0.621973 45.7418 269.952)"
                      fill="#E84DFC"
                      fill-opacity="0.2"
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
                      fill-opacity="0.71"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              className="lg:hidden absolute bottom-0 right-0"
            >
              <g filter="url(#filter0_f_1220_8235)">
                <circle
                  cx="266.785"
                  cy="348.577"
                  r="97.5742"
                  transform="rotate(33.1841 266.785 348.577)"
                  fill="#9021AC"
                  fill-opacity="0.75"
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
                  fill-opacity="0.35"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            {/* end of section overlay */}
          </div>

          {/* <div
            className={`screen relative lg:h-screen w-full flex  items-center justify-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
              activeSection === 10 ? "active" : ""
            }`}
            id="partners"
          >
            <div className="screen__container z-10">
              <h5 className="sub-heading text-center text-gradient-blue text-[24px] leading-[29px] mb-[16px] lg:text-[40px] lg:mb-[32px] lg:leading-[48px] relative z-10">
                Trust by
              </h5>

              <div className="box flex flex-wrap justify-center items-center  lg:space-x-[137px] space-y-[27px] lg:space-y-[32px]">
                <svg
                  width="282"
                  height="114"
                  viewBox="0 0 282 114"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[108px] lg:w-[282px] h-auto mx-[20px] lg:mx-0"
                >
                  <path
                    d="M163.872 37.3445C162.775 38.0342 161.482 38.1181 160.501 37.5681C159.255 36.8691 158.57 35.2287 158.57 32.9514V26.1318C158.57 22.8385 157.258 20.496 155.068 19.8653C151.355 18.7903 148.564 23.3046 147.514 24.9978L140.966 35.5456V22.6552C140.892 19.6882 139.923 17.9142 138.082 17.3798C136.864 17.0256 135.041 17.1685 133.272 19.859L118.606 43.263C116.644 39.5596 115.619 35.4337 115.625 31.2488C115.625 17.153 126.995 5.68245 140.966 5.68245C154.938 5.68245 166.308 17.1499 166.308 31.2488C166.308 31.2736 166.314 31.2954 166.314 31.3171C166.314 31.342 166.311 31.3637 166.311 31.3886C166.448 34.1164 165.557 36.2881 163.872 37.3445ZM171.943 31.2488V31.1773L171.94 31.1059C171.862 13.9374 158 0 140.969 0C123.893 0 109.996 14.015 109.996 31.2457C109.996 48.4732 123.893 62.4914 140.969 62.4914C148.807 62.4914 156.286 59.5305 162.028 54.1588C163.168 53.0931 163.236 51.2943 162.177 50.1447C161.676 49.5948 160.968 49.2655 160.221 49.2375C159.473 49.2095 158.744 49.4798 158.199 49.9925C153.545 54.3731 147.38 56.812 140.969 56.812C133.487 56.812 126.755 53.5219 122.114 48.3023L135.341 27.1974V36.9281C135.341 41.6008 137.166 43.1108 138.692 43.5551C140.222 43.9962 142.561 43.6949 145.019 39.7336L152.293 28.0146C152.526 27.6355 152.741 27.3093 152.938 27.0297V32.9545C152.938 37.3227 154.698 40.8148 157.769 42.536C160.535 44.0863 164.015 43.9465 166.85 42.1694C170.283 40.0101 172.136 36.0365 171.943 31.2488Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M45.0831 85.9357C45.6812 86.2993 46.2014 87.1039 46.2014 87.8278C46.2014 88.996 45.2046 89.9622 44.0863 89.9622C43.8059 89.9622 43.5287 89.8815 43.2888 89.8007C41.9711 88.8344 40.2952 88.1913 38.5383 88.1913C34.3859 88.1913 31.5138 91.5747 31.5138 95.7596C31.5138 99.9477 34.389 103.291 38.5383 103.291C40.613 103.291 42.4509 102.446 43.8464 101.156C44.2078 100.898 44.6408 100.759 45.0831 100.752C46.2014 100.752 47.0799 101.638 47.0799 102.766C47.0799 103.489 46.6407 104.133 46.0831 104.496C44.0863 106.186 41.373 107.314 38.5788 107.314C32.1897 107.314 27 102.082 27 95.6385C27 89.1979 32.1897 83.9629 38.5788 83.9629C40.9712 83.9629 43.2483 84.6868 45.0831 85.9357ZM56.7616 90.8073C61.1134 90.8073 64.7861 94.4703 64.7861 98.9783C64.7861 103.489 61.1134 107.314 56.7616 107.314C52.2105 107.314 48.4194 103.489 48.4194 98.9783C48.4194 94.4703 52.2105 90.8073 56.7616 90.8073ZM56.7211 103.288C58.6369 103.288 60.2723 101.476 60.2723 99.0187C60.2723 96.5643 58.6369 95.0326 56.7211 95.0326C54.6465 95.0326 52.93 96.5239 52.93 99.0187C52.93 101.476 54.6465 103.288 56.7211 103.288ZM67.5212 104.819V93.3052C67.5212 92.0563 68.518 91.0092 69.7578 91.0092C70.9945 91.0092 72.0318 92.0563 72.0318 93.3052V104.819C72.0318 106.068 70.9945 107.115 69.7578 107.115C68.5211 107.115 67.5212 106.068 67.5212 104.819ZM67.1629 86.6596C67.1629 85.1683 68.3186 83.9629 69.7578 83.9629C71.2343 83.9629 72.4305 85.1715 72.4305 86.6596C72.4305 88.1074 71.2312 89.2756 69.7578 89.2756C68.3186 89.2787 67.1629 88.1105 67.1629 86.6596ZM80.6762 98.5776V104.819C80.6762 106.068 79.6389 107.115 78.3991 107.115C77.1624 107.115 76.1624 106.068 76.1624 104.819V92.7802C76.1624 91.8139 76.963 91.0092 77.9193 91.0092C78.8757 91.0092 79.6358 91.8139 79.6358 92.7802C81.4705 91.09 83.0686 90.8073 84.5856 90.8073C89.0963 90.8073 91.0931 94.1876 91.0931 98.0152V104.819C91.0931 106.068 90.0557 107.115 88.819 107.115C87.5824 107.115 86.5824 106.068 86.5824 104.819V98.5776C86.5824 96.6047 86.3426 94.955 83.5078 94.955C81.5142 94.955 80.6762 96.6047 80.6762 98.5776ZM105.768 100.954C105.251 100.954 104.89 100.712 104.613 100.389L99.3418 94.7126V104.816C99.3418 106.065 98.3045 107.112 97.0678 107.112C95.8311 107.112 94.8312 106.065 94.8312 104.816V84.808C94.962 84.4631 95.2984 84.2363 95.6723 84.2425C96.071 84.2425 96.3887 84.5656 96.6286 84.808L105.011 94.1876C105.251 94.4703 105.569 94.6318 105.731 94.6318C105.89 94.6318 106.211 94.4703 106.447 94.1907L114.83 84.808C115.07 84.5656 115.388 84.2425 115.786 84.2425C116.185 84.2425 116.506 84.4848 116.624 84.808V104.816C116.624 106.065 115.628 107.112 114.388 107.112C113.151 107.112 112.111 106.065 112.111 104.816V94.7126L106.843 100.389C106.566 100.712 106.208 100.954 105.768 100.954ZM127.465 103.288C129.502 103.288 131.215 101.476 131.215 99.0187C131.215 96.5643 129.462 94.9518 127.465 94.9518C125.468 94.9518 123.87 96.6016 123.87 99.0187C123.873 101.395 125.468 103.288 127.465 103.288ZM132.256 105.341L132.175 104.816C131.3 106.547 128.502 107.314 126.708 107.314C122.475 107.314 119.363 103.489 119.363 98.9783C119.363 94.4703 122.556 90.8073 126.948 90.8073C127.705 90.8073 130.222 91.0092 132.178 93.3052L132.259 92.7802C132.259 91.8139 133.016 91.0092 133.975 91.0092C134.932 91.0092 135.729 91.8139 135.729 92.7802V105.341C135.729 106.307 134.932 107.112 133.972 107.112C133.013 107.115 132.253 106.307 132.256 105.341ZM148.243 94.955H147.766C144.931 95.1165 144.374 96.7259 144.374 98.5776V104.819C144.374 106.068 143.336 107.115 142.1 107.115C140.863 107.115 139.863 106.068 139.863 104.819V92.7802C139.863 91.8139 140.66 91.0092 141.62 91.0092C142.579 91.0092 143.336 91.8139 143.336 92.7802C145.012 91.2112 146.37 90.8881 147.766 90.8073H148.205C149.283 90.8073 150.28 91.7331 150.28 92.9013C150.28 93.9887 149.324 94.955 148.243 94.955ZM165.631 103.772C165.83 104.092 165.952 104.456 165.952 104.86C165.952 106.028 164.874 107.115 163.715 107.115C162.918 107.115 162.239 106.512 161.718 105.866L156.532 99.8669V104.819C156.532 106.068 155.491 107.115 154.255 107.115C153.018 107.115 152.018 106.068 152.018 104.819V86.5416C152.018 85.2926 153.015 84.2456 154.255 84.2456C155.491 84.2456 156.529 85.2926 156.529 86.5416V97.9344L161.718 92.2178C162.239 91.612 162.877 91.0092 163.675 91.0092C164.793 91.0092 165.83 92.0563 165.83 93.2244C165.83 93.5879 165.749 93.9483 165.55 94.2714L161.438 98.7391L165.631 103.772ZM171.241 97.6641H177.749C177.749 95.741 176.222 94.7872 174.497 94.7872C172.771 94.7872 171.241 95.7814 171.241 97.6641ZM180.384 100.429H171.244C171.244 103.126 173.839 103.53 174.995 103.53C175.836 103.53 177.032 103.368 177.951 102.964C178.232 102.766 178.708 102.601 179.11 102.601C180.107 102.601 180.945 103.449 180.945 104.456C180.945 105.139 180.506 105.745 179.948 106.065C178.549 107.072 176.752 107.314 175.039 107.314C170.487 107.314 166.696 104.86 166.696 99.1803C166.696 94.7126 169.011 90.8073 174.4 90.8073C178.752 90.8073 182.063 93.6252 182.144 98.6583C182.141 99.6246 181.34 100.429 180.384 100.429ZM192.941 107.314H191.704C188.272 107.314 186.275 105.823 186.275 100.47V94.9518H185.116C184.038 94.9518 183.079 93.9856 183.079 92.8982C183.079 91.73 184.035 90.8042 185.116 90.8042H186.275V86.5354C186.275 85.2864 187.272 84.2394 188.511 84.2394C189.748 84.2394 190.785 85.2864 190.785 86.5354V90.8042H192.661C193.739 90.8042 194.698 91.73 194.698 92.8982C194.698 93.9856 193.739 94.9518 192.661 94.9518H190.785V99.5811C190.785 102.641 190.944 103.284 192.303 103.284H192.941C194.019 103.284 194.935 104.17 194.935 105.298C194.935 106.388 194.016 107.314 192.941 107.314ZM214.797 85.9357C215.395 86.2993 215.915 87.1039 215.915 87.8278C215.915 88.996 214.918 89.9622 213.8 89.9622C213.519 89.9622 213.239 89.8815 213.002 89.8007C211.685 88.8344 210.009 88.1913 208.252 88.1913C204.102 88.1913 201.227 91.5747 201.227 95.7596C201.227 99.9477 204.102 103.291 208.252 103.291C210.326 103.291 212.164 102.446 213.56 101.156C213.921 100.898 214.354 100.759 214.797 100.752C215.915 100.752 216.79 101.638 216.79 102.766C216.79 103.489 216.351 104.133 215.793 104.496C213.797 106.186 211.083 107.314 208.286 107.314C201.9 107.314 196.71 102.079 196.71 95.6385C196.71 89.1979 201.897 83.9629 208.286 83.9629C210.685 83.9629 212.959 84.6868 214.797 85.9357ZM226.235 103.288C228.272 103.288 229.986 101.476 229.986 99.0187C229.986 96.5643 228.229 94.9518 226.232 94.9518C224.235 94.9518 222.64 96.6016 222.64 99.0187C222.644 101.395 224.238 103.288 226.235 103.288ZM231.026 105.341L230.948 104.816C230.07 106.547 227.276 107.314 225.478 107.314C221.248 107.314 218.133 103.489 218.133 98.9783C218.133 94.4703 221.329 90.8073 225.718 90.8073C226.475 90.8073 228.992 91.0092 230.948 93.3052L231.026 92.7802C231.026 91.8139 231.783 91.0092 232.743 91.0092C233.699 91.0092 234.5 91.8139 234.5 92.7802V105.341C234.5 106.307 233.699 107.112 232.743 107.112C231.783 107.115 231.026 106.307 231.026 105.341ZM246.895 103.288C248.891 103.288 250.486 101.395 250.486 99.0187C250.486 96.6016 248.891 94.9518 246.895 94.9518C244.898 94.9518 243.141 96.5612 243.141 99.0187C243.141 101.476 244.86 103.288 246.895 103.288ZM243.141 105.987V111.704C243.141 112.953 242.104 114 240.867 114C239.63 114 238.63 112.953 238.63 111.704V92.7802C238.63 91.8139 239.431 91.0092 240.387 91.0092C241.343 91.0092 242.104 91.8139 242.104 92.9417C243.779 91.2112 245.854 90.8073 247.412 90.8073C251.804 90.8073 254.997 94.4703 254.997 98.9783C254.997 103.489 251.885 107.314 247.652 107.314C246.337 107.314 244.381 106.913 243.141 105.987Z"
                    fill="#D4D4D8"
                  />
                </svg>

                <svg
                  width="281"
                  height="77"
                  viewBox="0 0 281 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[132px] lg:w-[281px] h-auto mx-[20px] lg:mx-0"
                >
                  <path
                    d="M78.2004 10.0597H91.0929C94.3689 10.0597 96.7642 10.9404 98.3141 12.4552C99.8288 13.7587 100.498 15.5201 100.498 17.2463C100.498 17.9156 100.498 18.7611 100.287 19.4304C99.8641 20.5225 99.1948 21.6146 98.3141 22.4953C97.8914 22.918 97.4335 23.1646 97.0108 23.376C98.5255 23.7987 99.8641 24.6794 100.956 25.7715C101.837 26.8636 102.259 28.167 102.259 30.1398C102.259 31.2319 102.048 32.5353 101.59 33.416C101.167 34.2967 100.287 35.1774 99.4061 35.8116C98.3141 36.4809 97.2221 36.9036 96.1302 37.3264C94.8268 37.7491 93.2769 37.7491 91.7622 37.7491H78.4118V9.98926H78.2004V10.0597ZM90.0009 21.4032C91.0929 21.4032 92.1849 21.1918 93.2769 20.7339C94.1575 20.3111 94.5802 19.4304 94.5802 18.5497C94.5802 17.669 94.1575 16.7883 93.4883 16.3656C92.6076 15.6962 91.5156 15.4849 90.4237 15.6962H84.2944V21.5793H89.9657V21.4032H90.0009ZM91.5156 32.5706C92.6076 32.5706 93.6996 32.3592 94.7916 31.9012C95.6722 31.4785 96.0949 30.5978 95.8836 29.5057C95.8836 28.625 95.4609 27.7443 94.7916 27.3215C94.1223 26.8988 92.819 26.4408 91.3043 26.4408H84.0831V32.5706H91.5156Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M109.867 10.0598H115.996V38.031H109.867V10.0598Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M125.402 10.0598H131.074L144.177 27.3216V10.0598H150.271V38.031H145.058L131.285 20.3112V38.031H125.402V10.0598Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M168.871 9.84839H174.543L186.554 38.031H180.214L177.607 31.6899H165.807L163.2 38.031H156.859L168.871 9.84839ZM175.423 26.4409L171.724 17.2815L168.026 26.4409H175.423Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M193.105 10.0598H198.777L211.881 27.3216V10.0598H218.01V38.031H212.761L199.199 20.3112V38.031H193.105V10.0598Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M240.272 38.4536C238.3 38.4536 236.327 38.0309 234.601 37.3616C231.114 35.8468 228.472 33.2046 226.957 29.717C226.288 27.9556 225.865 26.0181 225.865 24.0453C225.865 20.3463 227.38 16.6122 230.022 13.7939C231.325 12.4905 232.875 11.3984 234.601 10.729C236.574 9.84833 238.546 9.63696 240.484 9.63696C241.576 9.63696 242.879 9.63697 243.971 9.84833C245.063 10.0597 245.944 10.2711 246.824 10.729C247.705 11.1518 248.586 11.6097 249.22 12.0325C249.889 12.4552 250.734 13.1246 251.404 13.7939L247.705 18.3736C246.613 17.4929 245.521 16.6121 244.429 15.978C243.337 15.3439 242.034 15.0973 240.73 15.0973C239.638 15.0973 238.546 15.3087 237.454 15.7667C236.362 16.1894 235.482 16.8587 234.848 17.7395C234.214 18.6202 233.544 19.5009 233.086 20.5929C232.664 21.685 232.417 22.7771 232.417 23.8692C232.417 24.9612 232.629 26.2647 233.086 27.3568C233.544 28.4488 233.967 29.3295 234.848 30.2102C236.362 31.9716 238.546 32.8171 240.73 32.8171C242.034 32.8171 243.584 32.6058 244.887 31.9364C245.979 31.2671 247.282 30.4216 248.163 29.5409L252.073 33.4512C251.404 34.1206 250.558 34.9661 249.889 35.6354C249.008 36.3047 248.128 36.7275 247.282 37.1502C246.402 37.5729 245.31 38.0309 244.218 38.2423C242.668 38.4536 241.364 38.4536 240.272 38.4536Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M259.083 10.0598H280.042V15.5202H264.966V21.1919H278.281V26.6523H264.966V32.5706H280.254V38.031H259.083V10.0598Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M86.0556 65.5442C84.5409 65.5442 82.991 65.3329 81.6877 64.6635C80.3843 64.2408 79.081 63.3601 77.7424 62.268L79.9264 59.8725C80.807 60.7532 81.6877 61.1759 82.7797 61.8453C83.8717 62.268 84.9636 62.5146 86.0556 62.5146C86.9363 62.5146 87.8169 62.3032 88.6623 61.8453C89.3316 61.4225 89.5429 60.7532 89.5429 60.0839C89.5429 59.8725 89.5429 59.4145 89.3316 59.2032C89.1202 58.9918 88.9089 58.5338 88.6623 58.3225C88.2396 58.1111 87.7817 57.8997 87.359 57.6531C86.6897 57.4418 85.8443 57.2304 85.175 56.9838C84.2944 56.7724 83.2024 56.561 82.3217 56.1031C81.6525 55.8917 80.807 55.4338 80.3491 55.011C79.9264 54.5883 79.4685 54.1303 79.0458 53.4962C78.6231 52.6155 78.6231 51.7348 78.6231 51.1007C78.6231 50.22 78.8344 49.5859 79.0458 48.7052C79.2571 48.0358 79.9264 47.4017 80.3491 46.9438C81.0184 46.521 81.6525 46.0631 82.5331 45.8517C83.4137 45.6403 84.2944 45.429 85.1398 45.429C86.4431 45.429 87.7464 45.6403 89.085 46.0983C90.177 46.521 91.269 47.1904 92.361 47.8597L90.5997 50.4666C89.7191 49.7972 88.8384 49.3745 87.993 48.9518C87.1124 48.529 86.2318 48.529 85.3863 48.529C84.5057 48.529 83.6251 48.7404 82.991 49.1984C82.5683 49.6211 82.1104 50.2904 82.1104 50.9598C82.1104 51.3825 82.1104 51.6291 82.3217 52.0518C82.5331 52.2632 82.7444 52.7212 82.991 52.9325C83.4137 53.1439 83.8716 53.3553 84.5057 53.6019C85.175 53.8133 85.8091 54.0246 86.901 54.2712C87.7817 54.4826 88.6623 54.694 89.7543 55.1519C90.4236 55.3633 91.0576 55.8213 91.7269 56.244C92.1496 56.6667 92.6076 57.3361 92.8189 57.7588C93.0303 58.4281 93.2416 59.0623 93.2416 59.943C93.2416 60.8237 93.0303 61.7044 92.8189 62.3385C92.3962 63.0078 91.9383 63.6419 91.3042 64.3112C90.6349 64.734 90.0009 65.192 89.1202 65.4033C88.0282 65.3329 86.9363 65.5442 86.0556 65.5442Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M96.9756 45.6753H100.709L106.592 54.8346L112.721 45.6753H116.42V65.3326H112.933V51.1357L106.803 60.295H106.592L100.498 51.1357V65.3326H96.9756V45.6753Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M128.221 45.4641H131.497L140.021 65.1215H136.323L134.35 60.3304H125.191L123.219 65.1215H119.731L128.221 45.4641ZM133.258 57.477L129.771 49.621L126.495 57.477H133.258Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M143.508 45.6753H152.244C153.336 45.6753 154.428 45.8867 155.52 46.098C156.401 46.3094 157.281 46.9787 157.915 47.6128C158.338 48.0356 158.796 48.7049 159.219 49.5856C159.43 50.2549 159.641 51.1004 159.641 51.9811C159.641 52.6505 159.43 53.4959 159.219 54.1653C159.007 54.8346 158.549 55.2573 158.338 55.9267C157.915 56.3494 157.457 56.8074 156.823 57.2301C156.154 57.6529 155.52 57.8995 154.851 58.1108L160.099 65.544H155.943L151.152 58.7802H146.784V65.544H143.297L143.508 45.6753ZM152.033 55.2926C153.125 55.2926 154.217 55.0812 154.886 54.4119C155.555 53.7425 155.978 52.8971 155.978 52.0164C155.978 51.1357 155.555 50.2549 154.886 49.6208C154.005 48.9515 152.913 48.7401 151.821 48.7401H146.784V55.2926H152.033Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M168.624 48.7401H162.283V45.6753H178.24V48.7401H171.9V65.3326H168.412L168.624 48.7401Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M199.446 65.544C198.142 65.544 196.839 65.3327 195.5 64.6633C193.105 63.5712 191.132 61.8098 190.252 59.4143C189.829 58.1109 189.371 56.8074 189.583 55.4688C189.583 54.1653 189.794 52.8619 190.252 51.5232C191.132 49.1277 193.105 47.1549 195.5 46.0628C196.804 45.6401 198.107 45.1821 199.657 45.1821C200.538 45.1821 201.418 45.1821 202.052 45.3935C202.722 45.6049 203.356 45.8162 204.025 46.0628C204.694 46.2742 205.117 46.7322 205.786 46.9435C206.209 47.3663 206.878 47.8242 207.301 48.247L205.117 50.8539C204.448 50.1845 203.602 49.5504 202.722 49.0925C201.841 48.6697 200.749 48.4231 199.657 48.4231C198.776 48.4231 197.896 48.6345 197.05 48.8459C196.17 49.2686 195.536 49.7266 194.866 50.3607C194.197 51.03 193.774 51.6641 193.563 52.5448C193.352 53.4255 193.14 54.3062 193.14 55.1517C193.14 56.0324 193.352 56.9131 193.563 57.7586C193.774 58.6041 194.232 59.2734 194.866 59.9427C195.536 60.6121 196.17 61.0348 197.05 61.4576C197.931 61.8803 198.812 62.1269 199.657 61.8803C200.749 61.8803 201.841 61.6689 202.722 61.211C203.602 60.7882 204.483 60.1189 205.328 59.2382L207.512 61.4223C207.09 61.8451 206.42 62.5144 205.998 62.9371C205.328 63.3599 204.906 63.8178 204.236 64.0292C203.567 64.2406 202.933 64.6986 202.052 64.6986C201.172 65.544 200.291 65.544 199.446 65.544Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M211 45.6753H214.276V53.7425H223.681V45.6753H227.168V65.3326H223.681V57.0188H214.276V65.3326H211V45.6753Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M239.18 45.4641H242.456L250.98 65.1215H247.282L245.309 60.3304H236.15L234.178 65.1215H230.69L239.18 45.4641ZM244.006 57.477L240.73 49.621L237.454 57.477H244.006Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M254.468 45.6753H257.99V65.3326H254.468V45.6753Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M263.204 45.6753H266.269L276.766 59.2029V45.6753H280.253V65.3326H277.4L266.727 51.347V65.3326H263.204V45.6753Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M39.7695 64.0294V72.5546L32.3369 76.9229L25.1157 72.5546V64.0294L32.3369 68.3977L39.7695 64.0294ZM0 34.5433L7.22121 38.9116V53.5314L19.6558 60.9645V69.4897L0 57.8997V34.5433ZM64.6739 34.5433V57.9349L44.8067 69.525V60.9997L57.2413 53.5666V38.9469L64.6739 34.5433ZM44.7715 22.9533L52.2041 27.3216V35.8468L39.7695 43.2799V58.111L32.5483 62.4793L25.3623 58.111V43.2447L12.4698 35.8116V27.2863L19.9024 22.918L32.3369 30.3512L44.7715 22.9533ZM12.4698 41.9413L19.691 46.3096V54.8348L12.4698 50.4665V41.9413ZM52.2041 41.9413V50.4665L44.9829 54.8348V46.3096L52.2041 41.9413ZM7.22121 15.5201L14.6538 19.8884L7.22121 24.2567V32.7819L0 28.4136V19.8884L7.22121 15.5201ZM57.4526 15.5201L64.8852 19.8884V28.4136L57.4526 32.7819V24.2567L50.2314 19.8884L57.4526 15.5201ZM32.3369 15.5201L39.7695 19.8884L32.3369 24.2567L25.1157 19.8884L32.3369 15.5201ZM32.3369 0.900391L52.2041 12.4905L44.9829 16.8588L32.5483 9.42561L19.8671 16.8588L12.6459 12.4905L32.3369 0.900391Z"
                    fill="#D4D4D8"
                  />
                </svg>

                <svg
                  width="282"
                  height="78"
                  viewBox="0 0 282 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[133px] lg:w-[282px] h-auto mx-[20px] lg:mx-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M38.6884 0.110791C60.1594 0.110791 77.478 17.4294 77.478 39.0017C77.478 60.2702 59.9568 77.7913 38.3845 77.69C17.5212 77.4875 0 60.2702 0 38.9004C0 17.4294 17.2173 0.00951255 38.6884 0.110791ZM9.21634 59.1561C9.21634 59.5612 9.41889 59.7638 9.62145 60.0676C11.1406 62.1945 12.8624 64.22 14.8879 65.9418C15.7994 66.752 16.7109 67.5622 17.7237 68.2711C20.5595 70.0942 23.4966 71.8159 26.7375 72.93C29.3707 73.8415 32.1053 74.5504 34.8398 74.8542C36.9666 75.0568 39.1947 75.1581 41.3216 74.8542C42.5369 74.6517 43.8535 74.6517 45.0689 74.1453C45.2714 74.2466 45.3727 74.044 45.474 74.044C48.006 73.6389 50.4366 72.8287 52.8673 71.8159C60.767 68.3724 66.7425 62.8021 70.591 55.105C74.0345 48.3193 75.1486 41.1285 74.0345 33.6339C73.0217 26.4432 69.9834 20.1639 65.122 14.8974C58.6402 7.50411 50.3354 3.65554 40.5114 3.04787C36.1564 2.74403 31.8014 3.3517 27.649 4.7696C20.8634 6.99772 15.293 10.8463 10.7355 16.4166C5.57031 22.7971 3.03835 30.0892 2.73452 38.1915C2.63324 40.217 2.8358 42.1413 3.13963 44.1669C3.7473 48.7244 5.26647 53.0794 7.59588 57.0293C8.20355 57.6369 8.60866 58.4471 9.21634 59.1561Z"
                    fill="#AAADC0"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M45.0689 74.0441C43.8536 74.6517 42.537 74.6517 41.3216 74.753C39.1948 75.0568 36.9666 74.9556 34.8398 74.753C32.1053 74.4492 29.3708 73.7402 26.7375 72.8287C23.4966 71.7146 20.5595 69.9929 17.7237 68.1699C16.711 67.461 15.7995 66.6507 14.888 65.8405C12.8624 64.1188 11.1406 62.0932 9.62147 59.9664C9.41892 59.6625 9.21636 59.3587 9.21636 59.0549C11.647 53.5858 12.5585 47.813 13.0649 41.9388C13.2675 39.2043 13.3688 36.4698 13.8752 33.7353C14.3816 30.5956 15.5969 27.7598 17.825 25.3291C19.8506 23.2023 22.3826 21.7844 25.1171 20.7716C27.3452 19.8601 29.6746 19.0499 32.2066 18.9486C34.536 18.8473 36.7641 19.1512 38.9922 19.6576C42.3344 20.4678 45.6766 21.4806 48.8162 22.9997C51.3482 24.0125 53.9814 25.0253 56.6147 25.8355C59.3492 26.6458 62.0837 27.5573 64.4131 29.279C67.3502 31.5071 68.1604 34.3429 66.8438 37.7864C66.0335 39.9132 64.5144 41.5337 62.9952 43.1541C60.2607 45.9899 57.3236 48.6232 54.6904 51.5603C51.652 55.105 48.9175 58.751 46.9932 63.0047C45.3727 66.5495 44.4612 70.1955 45.0689 74.0441ZM64.6156 40.7235C64.5144 40.7235 64.4131 40.7235 64.3118 40.8247C64.2105 40.8247 64.1093 40.926 64.1093 41.0273C64.1093 41.0273 64.1093 41.0273 64.1093 41.1286C64.2105 41.1286 64.3118 41.0273 64.3118 40.926L64.6156 40.7235C64.7169 40.7235 64.8182 40.7235 64.6156 40.7235C64.7169 40.6222 64.6156 40.7235 64.6156 40.7235ZM33.6245 23.101C29.7759 23.101 26.6362 26.2407 26.6362 29.988C26.6362 33.8365 29.7759 36.8749 33.5232 36.9762C37.3718 36.9762 40.4101 33.8365 40.5114 29.988C40.5114 26.1394 37.473 23.101 33.6245 23.101ZM39.296 44.3695C39.9037 45.281 41.0178 46.0912 42.3344 46.4963C44.9676 47.4078 47.6009 47.4078 50.2341 46.9014C54.8929 45.9899 59.2479 44.3695 63.1978 41.7362C63.4003 41.5337 63.8054 41.5337 63.9067 41.1286C63.7041 41.0273 63.6029 41.1286 63.5016 41.2299C62.185 42.0401 60.7671 42.6477 59.3492 43.2554C55.7031 44.7746 51.8546 45.7874 47.8034 45.9899C44.8664 46.1925 41.9293 45.9899 39.296 44.3695ZM58.4377 38.3941C59.2479 38.3941 59.9568 37.6851 59.9568 36.7736C59.9568 35.9634 59.2479 35.2544 58.3364 35.3557C57.5262 35.3557 56.9185 36.0647 56.9185 36.8749C56.9185 37.7864 57.5262 38.3941 58.4377 38.3941Z"
                    fill="#A9ACBF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M38.8907 19.6575C36.6626 19.2524 34.4345 18.8473 32.1051 18.9486C29.5731 19.0498 27.345 19.8601 25.0156 20.7716C22.2811 21.7844 19.7491 23.2023 17.7236 25.3291C15.4954 27.6585 14.2801 30.4943 13.7737 33.7352C13.3686 36.4697 13.2673 39.2042 12.9635 41.9388C12.4571 47.8129 11.5456 53.6871 9.11489 59.0548C8.40594 58.4471 8.00083 57.5356 7.59572 56.8267C5.26631 52.8768 3.74714 48.5219 3.13947 43.9643C2.83563 41.9388 2.63307 40.0145 2.73435 37.9889C3.03819 29.8866 5.57015 22.5946 10.7353 16.2141C15.1916 10.6437 20.8632 6.79516 27.6488 4.56704C31.8013 3.25042 36.1562 2.64275 40.5112 2.84531C50.2339 3.45298 58.5387 7.40283 65.1218 14.5936C69.9832 19.9614 72.9203 26.2406 74.0343 33.3301C75.1484 40.8247 74.0343 48.0155 70.5909 54.8011C66.7423 62.4983 60.7669 68.0686 52.8672 71.5121C50.5378 72.5248 48.1071 73.3351 45.4738 73.7402C45.2713 73.7402 45.17 74.044 45.0687 73.8414C44.461 69.9929 45.3726 66.3469 46.8917 62.8021C48.816 58.5484 51.5505 54.9024 54.5889 51.3577C57.1208 48.4206 60.0579 45.6861 62.8937 42.9515C64.5142 41.3311 65.9321 39.7106 66.7423 37.5838C68.1602 34.1403 67.35 31.3045 64.3116 29.0764C61.9822 27.3547 59.2477 26.4432 56.5132 25.6329C53.8799 24.8227 51.2467 23.8099 48.7147 22.7971C48.2083 21.0754 46.993 19.9614 45.3726 19.3537C43.2457 18.8473 41.1189 19.0498 38.8907 19.6575ZM72.0088 41.2298H72.2113C72.6164 39.8119 72.6164 38.2927 72.6164 36.7736C72.6164 35.0518 72.4139 33.3301 72.1101 31.6084C70.996 26.0381 68.464 21.1767 64.5142 17.0243C62.0835 14.4923 59.349 12.3655 56.6145 10.1373C54.1838 8.11178 51.5505 6.5926 48.5122 5.78238C45.5751 5.07343 42.7393 4.66831 39.701 5.17471C39.4984 5.17471 39.2959 5.17471 39.2959 5.37727C39.2959 5.57983 39.4984 5.57982 39.701 5.57982C44.1572 6.39005 48.4109 7.80795 52.5633 9.4284C56.6145 11.0489 60.0579 13.3783 62.5899 17.0243C64.3116 19.5562 65.9321 22.1895 67.2487 25.0253C68.9704 28.8738 70.287 32.8237 71.0973 36.8748C71.5024 38.4953 71.8062 39.8119 72.0088 41.2298Z"
                    fill="#DADEEF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.6244 23.1011C37.473 23.1011 40.5114 26.2407 40.5114 29.988C40.5114 33.8366 37.3717 36.8749 33.5232 36.9762C29.6746 36.9762 26.6362 33.8366 26.6362 29.988C26.6362 26.1394 29.7759 23.1011 33.6244 23.1011ZM38.4858 30.0893C38.4858 27.3548 36.359 25.2279 33.6244 25.2279C30.8899 25.2279 28.7631 27.3548 28.7631 30.0893C28.7631 32.7225 30.8899 34.9506 33.5232 34.9506H33.6244C36.2577 34.9506 38.3845 32.8238 38.4858 30.0893Z"
                    fill="#FCFDFB"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M39.2957 44.3694C41.929 45.9898 44.8661 46.1924 47.8031 46.0911C51.8543 45.8885 55.7028 44.977 59.3489 43.3566C60.7668 42.7489 62.1847 42.1413 63.5013 41.331C63.6026 41.2297 63.7038 41.1285 63.9064 41.2297C63.8051 41.5336 63.5013 41.6349 63.1974 41.8374C59.2476 44.4707 54.8926 46.0911 50.2338 47.0026C47.6006 47.509 44.8661 47.509 42.3341 46.5975C41.0175 46.0911 39.8021 45.2809 39.2957 44.3694ZM38.8906 19.6574C41.0175 19.0498 43.2456 18.8472 45.3724 19.6574C46.9929 20.2651 48.2082 21.3792 48.7146 23.1009C45.6763 21.4805 42.3341 20.4677 38.8906 19.6574Z"
                    fill="#71717A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M58.4377 38.3941C57.6275 38.3941 56.9185 37.6851 56.9185 36.8749C56.9185 36.0647 57.5262 35.3557 58.3364 35.3557C59.1466 35.3557 59.8556 35.9634 59.9569 36.7736C59.8556 37.6851 59.2479 38.3941 58.4377 38.3941Z"
                    fill="#FCFDFB"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M64.3114 40.926C64.3114 41.0272 64.2102 41.1285 64.1089 41.1285C64.1089 40.9259 64.2102 40.8247 64.3114 40.926ZM64.6153 40.7234L64.3114 40.926L64.2102 40.8247C64.4127 40.7234 64.514 40.7234 64.6153 40.7234Z"
                    fill="#A9ACBF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.0086 41.2298C71.7048 39.8119 71.4009 38.4952 71.1984 37.0773C70.3882 32.9249 68.9703 28.9751 67.3498 25.2278C66.1345 22.392 64.514 19.7587 62.691 17.2268C60.159 13.5808 56.8169 11.2514 52.6644 9.6309C48.4107 8.01044 44.2583 6.49126 39.8021 5.78232C39.5995 5.78232 39.397 5.78232 39.397 5.57976C39.397 5.37721 39.5995 5.37721 39.8021 5.37721C42.7392 4.87082 45.6762 5.17465 48.6133 5.98488C51.6517 6.7951 54.2849 8.41555 56.7156 10.3398C59.4501 12.568 62.1846 14.6948 64.6153 17.2268C68.5651 21.3792 71.0971 26.2406 72.2112 31.8109C72.515 33.5326 72.7176 35.2543 72.7176 36.9761C72.7176 38.394 72.7176 39.9131 72.3125 41.4323L72.0086 41.2298Z"
                    fill="#FFFEFC"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M38.4859 30.0891C38.4859 32.7223 36.3591 34.9505 33.7258 34.9505H33.6246C30.9913 34.9505 28.7632 32.8236 28.7632 30.0891V29.9878C28.7632 27.2533 30.9913 25.1265 33.6246 25.1265C36.2578 25.1265 38.4859 27.3546 38.4859 30.0891Z"
                    fill="#71717A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M192.125 49.6359C192.024 49.7372 191.922 49.7372 191.821 49.8385C188.682 53.3832 184.732 53.9909 180.478 52.8768C175.212 51.5602 172.376 47.8129 171.262 42.6477C170.553 39.3055 170.755 35.9633 172.072 32.8237C174.401 27.2534 179.668 24.215 185.643 25.0253C188.378 25.4304 190.91 26.3419 192.834 28.3675C194.252 29.8866 195.062 31.7096 195.366 33.7352C195.467 34.1403 195.265 34.2416 194.961 34.2416C193.746 34.2416 192.429 34.2416 191.214 34.2416C190.91 34.2416 190.808 34.1403 190.707 33.8365C190.099 31.102 188.276 29.5828 185.643 29.0764C182.605 28.4687 179.972 29.0764 177.946 31.5071C176.123 33.7352 175.617 36.4697 175.617 39.3055C175.617 41.4324 176.022 43.4579 176.933 45.2809C179.06 49.3321 184.327 50.75 188.276 48.4206C190.505 47.104 191.214 44.9771 191.416 42.5464C191.416 42.04 191.112 42.1413 190.808 42.1413C188.783 42.1413 186.859 42.1413 184.833 42.1413C184.225 42.1413 184.124 41.9388 184.124 41.4324C184.124 40.6221 184.124 39.9132 184.124 39.103C184.124 38.5966 184.327 38.4953 184.732 38.4953C188.175 38.4953 191.72 38.4953 195.163 38.4953C195.569 38.4953 195.771 38.5966 195.771 39.0017C195.771 43.4579 195.771 47.8129 195.771 52.2691C195.771 52.6743 195.67 52.7755 195.265 52.7755C194.454 52.7755 193.442 52.9781 192.834 52.6743C192.226 52.2691 192.429 51.2564 192.226 50.4461C192.226 50.1423 192.125 49.8385 192.125 49.6359ZM111.913 34.2416C111.305 34.2416 110.697 34.2416 109.988 34.2416C109.583 34.2416 109.482 34.1403 109.381 33.7352C108.57 30.8994 106.747 29.1777 103.81 28.8738C100.569 28.57 97.8349 29.5828 96.2144 32.5199C93.7837 36.9761 93.885 41.5336 96.3157 45.8886C97.9361 48.8257 101.481 50.1423 104.722 49.2308C107.558 48.4206 108.874 46.2937 109.482 43.5592C109.684 42.4451 109.684 42.4451 110.798 42.4451C111.811 42.4451 112.824 42.4451 113.837 42.4451C114.242 42.4451 114.343 42.5464 114.242 42.9515C113.736 48.3193 110.292 52.4717 105.026 53.2819C97.4297 54.4973 91.1505 49.8385 89.9351 42.2426C89.4287 38.9004 89.7326 35.6595 91.0492 32.5199C93.3786 27.2534 98.5438 24.4176 104.317 25.1265C107.051 25.5317 109.583 26.4432 111.609 28.4687C113.027 29.9879 113.837 31.8109 114.141 33.8365C114.242 34.2416 114.141 34.3429 113.736 34.3429C113.229 34.1403 112.52 34.2416 111.913 34.2416ZM260.994 52.6743C259.273 52.6743 257.753 52.6743 256.133 52.6743C255.728 52.6743 255.525 52.4717 255.424 52.1679C253.702 49.3321 251.879 46.5976 250.158 43.7618C249.854 43.2554 249.752 43.2554 249.246 43.6605C247.524 44.8758 246.815 46.4963 247.119 48.6231C247.322 49.7372 247.119 50.9525 247.119 52.1679C247.119 52.6743 246.917 52.7755 246.512 52.7755C245.499 52.7755 244.486 52.7755 243.473 52.7755C242.967 52.7755 242.866 52.573 242.866 52.0666C242.866 47.9142 242.866 43.7618 242.866 39.5081C242.866 35.1531 242.866 30.7981 242.866 26.3419C242.866 25.6329 243.068 25.4304 243.777 25.5317C244.689 25.6329 245.6 25.6329 246.512 25.5317C247.119 25.5317 247.221 25.7342 247.221 26.2406C247.221 30.7981 247.221 35.3557 247.221 39.9132V40.7234L247.423 40.8247C247.727 40.4196 248.132 40.0145 248.436 39.6094C250.461 37.4825 252.487 35.4569 254.614 33.3301C254.816 33.1275 255.019 32.925 255.323 32.925C256.943 32.925 258.564 32.925 260.184 32.925C260.184 33.2288 259.88 33.3301 259.779 33.5326C257.652 35.5582 255.627 37.5838 253.398 39.6094C252.892 40.0145 252.892 40.3183 253.297 40.926C255.728 44.572 258.159 48.218 260.589 51.864C260.589 52.1679 260.792 52.3704 260.994 52.6743ZM210.963 43.9643C208.735 43.9643 206.608 43.9643 204.38 43.9643C203.873 43.9643 203.772 44.0656 203.772 44.572C203.975 48.5219 207.621 50.9525 211.267 49.4334C212.279 49.0282 213.09 48.218 213.495 47.104C213.697 46.5976 214.001 46.4963 214.406 46.4963C215.318 46.4963 216.331 46.4963 217.242 46.4963C217.748 46.4963 217.85 46.5976 217.647 47.104C216.533 50.6487 214.102 52.573 210.456 53.0794C207.216 53.5858 204.177 52.8768 201.848 50.4461C200.227 48.7244 199.518 46.4963 199.316 44.1669C199.113 41.3311 199.518 38.5966 201.341 36.1659C203.671 33.1275 206.81 32.0135 210.456 32.6211C214.305 33.3301 216.634 35.7608 217.748 39.4068C218.154 40.7234 218.255 42.04 218.154 43.4579C218.154 43.9643 217.951 44.0656 217.546 44.0656C215.419 43.9643 213.191 43.9643 210.963 43.9643ZM208.836 41.1285C210.355 41.1285 211.874 41.1285 213.292 41.1285C213.799 41.1285 213.9 41.0273 213.799 40.5209C213.394 37.8876 211.469 35.9633 208.937 35.8621C206.304 35.7608 204.177 37.5838 203.772 40.3183C203.671 40.8247 203.772 41.0273 204.38 41.0273C205.899 41.1285 207.317 41.1285 208.836 41.1285ZM117.179 42.8503C117.179 41.6349 117.382 40.3183 117.685 39.103C119.002 34.8493 122.749 32.216 127.408 32.5199C130.953 32.7224 133.89 33.9378 135.612 37.0774C137.637 40.926 137.637 44.9771 135.51 48.7244C133.586 52.2691 130.244 53.3832 126.395 53.1807C120.622 52.8768 117.179 48.927 117.179 42.8503ZM121.534 42.8503C121.534 44.572 121.838 46.0912 122.851 47.5091C124.471 49.8385 127.611 50.5474 129.94 48.927C130.446 48.5219 130.953 48.1167 131.358 47.6103C133.08 45.0784 133.181 40.8247 131.358 38.1915C129.231 35.1531 124.775 35.1531 122.749 38.2927C121.838 39.6094 121.534 41.2298 121.534 42.8503ZM262.108 42.9515C262.108 40.1157 262.716 37.5838 264.64 35.4569C266.565 33.2288 269.198 32.4186 272.034 32.4186C274.87 32.4186 277.503 33.2288 279.528 35.4569C281.655 37.8876 282.162 40.8247 281.959 43.9643C281.858 45.0784 281.655 46.1924 281.25 47.2052C279.731 51.1551 276.085 53.3832 271.426 53.0794C265.957 52.7755 262.514 49.2308 262.21 43.7618C262.21 43.5592 262.108 43.1541 262.108 42.9515ZM277.604 43.1541C277.604 41.1285 277.098 39.4068 276.389 38.1915C274.869 35.7608 271.629 35.1531 269.299 36.6723C268.692 37.0774 268.185 37.5838 267.78 38.1915C266.058 40.7234 266.16 44.9771 267.78 47.4078C269.4 49.7372 272.54 50.4461 274.869 48.8257C275.477 48.4206 275.882 48.0155 276.287 47.4078C277.3 46.0912 277.604 44.4707 277.604 43.1541ZM153.842 35.7608C155.057 34.2416 156.475 33.1275 158.399 32.6211C160.121 32.216 161.843 32.3173 163.463 33.0263C165.894 34.039 166.907 36.1659 167.008 38.6978C167.109 43.1541 167.008 47.6103 167.008 52.0666C167.008 52.573 166.907 52.6743 166.4 52.6743C165.388 52.6743 164.375 52.6743 163.362 52.6743C162.856 52.6743 162.653 52.573 162.653 51.9653C162.653 48.218 162.653 44.3694 162.653 40.6221C162.653 39.8119 162.552 39.0017 162.349 38.2927C161.742 36.2672 159.817 35.4569 157.488 36.0646C155.462 36.6723 154.146 38.4953 154.146 40.8247C154.146 44.4707 154.146 48.218 154.146 51.864C154.146 52.4717 154.044 52.7755 153.335 52.6743C152.424 52.573 151.411 52.573 150.5 52.6743C149.993 52.6743 149.791 52.573 149.791 51.9653C149.791 49.1295 149.791 46.395 149.791 43.5592C149.791 40.3183 149.791 37.0774 149.791 33.8365C149.791 33.1275 149.993 32.925 150.702 33.0263C151.614 33.1275 152.424 33.0263 153.335 33.0263C153.842 33.0263 154.044 33.1275 153.943 33.6339C153.842 34.3429 153.842 35.0518 153.842 35.7608ZM236.89 39.6094C236.789 39.6094 236.688 39.6094 236.586 39.6094C235.472 39.7106 234.763 39.6094 234.257 38.2927C233.042 35.2544 228.18 35.1531 226.155 37.9889C225.446 38.9004 225.142 40.0145 224.939 41.2298C224.737 43.1541 224.737 45.0784 225.547 46.9014C226.56 49.1295 228.383 50.1423 230.712 49.8385C232.636 49.5346 233.953 48.3193 234.459 46.1924C234.561 45.5848 234.865 45.3822 235.472 45.4835C236.485 45.4835 237.396 45.4835 238.409 45.4835C238.916 45.4835 239.017 45.6861 238.916 46.0912C237.903 50.9525 234.459 53.687 229.395 53.3832C224.332 53.0794 220.989 49.7372 220.584 44.572C220.382 42.3439 220.584 40.1157 221.496 37.9889C223.015 34.4442 226.458 32.4186 230.51 32.6211C232.94 32.7224 235.168 33.3301 236.991 35.0518C238.105 36.1659 238.713 37.5838 239.017 39.103C239.118 39.6094 238.916 39.8119 238.409 39.7106C238.004 39.6093 237.498 39.6094 236.89 39.6094ZM145.031 42.9515C145.031 45.8886 145.031 48.8257 145.031 51.7628C145.031 52.573 144.828 52.7755 144.119 52.6743C143.208 52.573 142.397 52.573 141.486 52.6743C140.878 52.6743 140.676 52.573 140.676 51.864C140.676 46.5976 140.676 41.3311 140.676 36.0646C140.676 35.2544 140.676 34.4442 140.676 33.6339C140.676 33.1275 140.777 33.0263 141.283 33.0263C142.296 33.0263 143.309 33.0263 144.322 33.0263C144.929 33.0263 145.132 33.1275 145.132 33.8365C145.031 36.8748 145.031 39.9132 145.031 42.9515ZM143.005 25.5317C143.613 25.6329 144.524 25.2278 144.929 25.6329C145.334 26.0381 145.031 26.9496 145.031 27.6585C145.031 28.2662 145.334 29.0764 144.929 29.4815C144.524 29.8866 143.714 29.5828 143.106 29.5828C142.296 29.5828 141.283 29.8866 140.777 29.4815C140.372 28.9751 140.676 27.9623 140.676 27.2534C140.676 25.5317 140.676 25.5317 142.397 25.5317H143.005Z"
                    fill="#D4D4D8"
                  />
                </svg>

                <svg
                  width="284"
                  height="57"
                  viewBox="0 0 284 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[129px] lg:w-[284px] h-auto mx-[20px] lg:mx-0"
                >
                  <path
                    d="M24.9714 28.6865C24.9714 30.1999 26.1538 31.3822 27.6672 31.3822C29.1806 31.3822 30.3629 30.1999 30.3629 28.6865C30.3629 27.1731 29.1806 25.9907 27.6672 25.9907C26.1538 26.038 24.9714 27.2204 24.9714 28.6865ZM47.5779 26.038C46.0645 26.038 44.8822 27.2204 44.8822 28.7338C44.8822 30.2472 46.0645 31.4295 47.5779 31.4295C49.0913 31.4295 50.2737 30.2472 50.2737 28.7338C50.2737 27.2204 49.0913 26.038 47.5779 26.038ZM47.5779 46.2798C46.0645 46.2798 44.8822 47.4622 44.8822 48.9756C44.8822 50.489 46.0645 51.6713 47.5779 51.6713C49.0913 51.6713 50.2737 50.489 50.2737 48.9756C50.2737 47.4622 49.0913 46.2798 47.5779 46.2798Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M53.3002 3.76306C50.6045 0.405193 45.7805 0.263317 42.9429 2.91178L42.6118 3.24284L41.9497 3.76306C39.2539 5.93858 35.234 5.74942 32.7274 3.24284V3.05365C31.8761 2.20236 30.741 1.54025 29.5587 1.20919C29.3695 1.20919 29.0385 1.02002 28.8966 1.02002H26.2008C26.0117 1.02002 25.8698 1.02002 25.6806 1.20919H25.3495C25.1604 1.20919 25.0185 1.39837 24.8293 1.39837C24.8293 1.39837 24.6401 1.39838 24.6401 1.58755C24.451 1.58755 24.3091 1.77672 24.1199 1.77672C24.1199 1.77672 23.9307 1.77672 23.9307 1.9659C23.7415 2.15507 23.5997 2.15508 23.4105 2.29696C23.4105 2.29696 23.2213 2.29696 23.2213 2.48613C23.0321 2.67531 22.8903 2.6753 22.7011 2.81718L22.5119 3.00637L22.1808 3.33742L21.5187 3.85765C18.823 6.03317 14.803 5.844 12.4856 3.33742C12.4856 3.33742 12.2964 3.33742 12.2964 3.14825L11.9654 2.81718C10.9722 1.96589 9.78984 1.30378 8.46561 1.1619H5.4388C5.4388 1.35107 5.24962 1.35108 5.10774 1.49296H5.06045C4.20916 1.82402 3.40516 2.15507 2.69575 2.81718L2.50658 3.00637L1.98634 3.52659C1.32423 4.18871 0.993173 5.04 0.662115 5.70211C0.662115 5.89129 0.472939 6.03317 0.472939 6.22235C0.472939 6.41153 0.283764 6.5534 0.283764 6.88446C0.094588 8.06681 0.0945878 9.24915 0.472939 10.3842C0.472939 10.5734 0.662115 10.7153 0.662115 10.9044V11.0936C0.662115 11.2828 0.851291 11.4247 0.851291 11.6139C1.04047 11.803 1.04047 11.9449 1.18235 12.276C1.51341 12.4651 1.84446 12.7962 2.03364 12.9381L2.3647 13.2691L2.69575 13.6002C5.20233 16.1068 5.20233 20.4578 2.50658 23.1536C2.17552 23.4846 1.65529 24.0049 1.51341 24.3359C1.32423 24.5251 1.32423 24.667 1.18235 24.998V25.1872C0.993172 25.3764 0.993173 25.5183 0.851291 25.7074V25.8966C0.851291 26.0858 0.662115 26.2277 0.662115 26.4169V26.606C0.662115 26.7952 0.662115 26.9371 0.472939 27.1263V29.6328C0.472939 29.822 0.47294 29.9639 0.662115 30.1531V30.3422C0.993173 31.5246 1.65529 32.7069 2.64846 33.7001C5.34421 36.3959 5.34421 40.7469 2.64846 43.3954L2.45928 43.5845L2.12823 43.9156V44.1048C1.93905 44.2939 1.79717 44.4358 1.79717 44.625C1.79717 44.625 1.79717 44.8142 1.60799 44.8142C1.41882 45.0034 1.41882 45.1452 1.27694 45.3344L1.08776 45.5236C1.08776 45.7128 0.898585 45.7128 0.898585 45.8546C0.898585 45.9965 0.709409 46.0438 0.709409 46.1857C0.709409 46.3749 0.709409 46.3749 0.520233 46.5168C0.189176 47.1789 0 48.0302 0 48.6923V50.0165C0.189176 50.5367 0.189176 51.0097 0.520233 51.3407C0.520233 51.5299 0.709409 51.6718 0.709409 51.6718C0.709409 51.6718 0.709409 51.861 0.898585 51.861C0.898585 52.0501 1.08776 52.192 1.08776 52.3812C1.08776 52.3812 1.08776 52.5704 1.27694 52.5704C1.46611 52.9014 1.60799 53.0906 1.79717 53.2325C1.79717 53.2325 1.79717 53.4217 1.98634 53.4217C1.98634 53.4217 1.98634 53.6109 2.17552 53.6109C2.17552 53.8 2.3647 53.8 2.3647 53.8L2.55387 53.9892C2.74305 54.1784 2.88493 54.1784 2.88493 54.3203L3.0741 54.5094C3.0741 54.5094 3.26328 54.5094 3.26328 54.6986C3.45246 54.8878 3.59434 55.0297 3.78351 55.0297C3.78351 55.0297 3.97269 55.0297 3.97269 55.2188C4.16186 55.408 4.30375 55.408 4.49292 55.5499H4.58751C4.77669 55.7391 4.91857 55.7391 5.24962 55.7391C5.4388 55.7391 5.76986 55.9283 5.91174 55.9283H6.10091C6.29009 55.9283 6.43197 55.9282 6.62115 56.1174H8.13455C8.65479 56.1174 8.98584 55.9283 9.45878 55.9283H9.64796C9.83713 55.9283 9.97902 55.7391 10.1682 55.7391H10.2628C10.452 55.7391 10.5938 55.5499 10.783 55.5499H10.9722C11.3032 55.3607 11.8235 55.0297 12.1545 54.8878L12.6748 54.3675L12.8639 54.1784C15.5597 51.3407 19.9107 51.3407 22.5592 54.1784C25.586 57.3471 30.5992 57.2052 33.4368 53.6581C35.4231 51.1516 35.4231 47.4626 33.4368 44.7669C30.741 41.409 25.9171 41.2671 23.0794 43.9156L22.7484 44.2467L22.0863 44.7669C19.3905 46.9424 15.3705 46.7532 12.8639 44.2467L12.5329 43.9156L12.0127 43.2535C9.83713 40.5577 10.0263 36.5377 12.5329 34.0312C14.0463 32.7069 14.7084 30.8625 14.7084 29.018V28.4978C14.7084 26.8425 14.0463 25.1399 12.7221 23.9576C12.7221 23.7684 12.5329 23.7684 12.5329 23.6265L12.0127 22.9644C9.83713 20.2686 10.0263 16.2487 12.5329 13.7421L12.7221 13.5529L12.9112 13.3637C15.607 10.5261 19.958 10.5261 22.6065 13.3637L22.7957 13.5529L22.9848 13.7421L23.3159 14.0731C23.5051 14.0731 23.5051 14.2623 23.647 14.2623C23.7888 14.2623 23.8361 14.4515 23.978 14.4515C24.1199 14.4515 24.1672 14.6407 24.3091 14.6407C24.451 14.6407 24.4982 14.8298 24.6401 14.8298C24.782 14.8298 24.8293 15.019 24.9712 15.019C25.1131 15.019 25.1604 15.2082 25.3022 15.2082C25.4441 15.2082 25.4914 15.2082 25.6333 15.3974C25.8225 15.3974 25.8225 15.3974 25.9644 15.5865H28.802C28.9912 15.5865 29.1331 15.5865 29.3222 15.3974H29.6533C29.8425 15.3974 29.9843 15.2082 30.1735 15.2082H30.3627C30.5519 15.2082 30.6938 15.019 31.0248 14.8771C31.6869 14.5461 32.349 14.0258 32.8693 13.5529L33.0584 13.3637C35.7542 10.5261 40.1052 10.5261 42.7537 13.3637C45.5913 16.7216 50.7937 16.5324 53.4894 13.0327C55.2866 9.95857 55.2866 6.26964 53.3002 3.76306Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M91.4665 24.5245C90.4733 23.5313 89.622 22.8692 88.4397 22.349C87.4465 21.8287 86.2642 21.4977 84.7508 21.4977C83.4265 21.4977 82.055 21.8287 81.0618 22.349C80.0687 22.8692 79.2174 23.5313 78.5553 24.5245C77.8932 25.3758 77.3729 26.3689 77.0419 27.5513C76.7108 28.7336 76.5216 29.916 76.5216 31.051C76.5216 32.1861 76.7108 33.4157 77.1837 34.5508C77.5148 35.7331 78.1769 36.5371 78.839 37.3884C79.5012 38.2397 80.4943 38.9018 81.5348 39.3748C82.528 39.895 83.7103 40.0369 85.0345 40.0369C86.5479 40.0369 87.7303 39.7058 88.7235 39.1856C89.7166 38.6654 90.7098 38.0032 91.5611 37.0101L95.0608 40.699C93.7366 42.2124 92.2232 43.2056 90.5206 43.8677C88.8653 44.5298 87.0209 44.8609 84.9872 44.8609C83.0009 44.8609 80.9673 44.5298 79.312 43.8677C77.6567 43.2056 76.1433 42.2124 74.9609 41.0301C73.7786 39.8477 72.7854 38.3343 72.1233 36.679C71.4612 35.0237 71.1301 32.9901 71.1301 31.0037C71.1301 29.0174 71.4612 26.9838 72.1233 25.3285C72.7854 23.6732 73.7786 22.1598 74.9609 20.7882C76.1433 19.6059 77.6567 18.6127 79.312 17.9506C80.9673 17.2885 83.0009 16.9575 84.9872 16.9575C86.9736 16.9575 88.8181 17.2885 90.5206 17.9506C92.3651 18.6127 93.8785 19.7951 95.2027 21.1193L91.4665 24.5245ZM102.817 30.72C102.817 32.0442 103.006 33.4157 103.479 34.4089C103.81 35.5913 104.472 36.5844 105.134 37.4357C105.797 38.287 106.79 38.9491 107.83 39.2802C108.823 39.8004 110.195 39.9423 111.519 39.9423C112.843 39.9423 114.026 39.7531 115.208 39.2802C116.201 38.7599 117.194 38.0978 117.904 37.4357C118.566 36.5844 119.228 35.5913 119.559 34.4089C119.89 33.2266 120.221 32.0442 120.221 30.72C120.221 29.3957 120.032 28.0242 119.559 27.0311C119.228 25.8487 118.566 24.8555 117.904 24.0042C117.242 23.153 116.249 22.4908 115.208 22.1598C114.215 21.6396 112.843 21.4977 111.519 21.4977C110.195 21.4977 109.013 21.6868 107.83 22.1598C106.837 22.68 105.844 23.3421 105.134 24.0042C104.472 24.8555 103.81 25.8487 103.479 27.0311C103.148 28.2134 102.817 29.3957 102.817 30.72ZM97.4728 30.72C97.4728 28.7336 97.8039 26.8892 98.466 25.1866C99.1281 23.5313 100.121 22.0179 101.493 20.6464C102.817 19.3221 104.189 18.2817 106.033 17.6196C107.688 16.9575 109.533 16.4372 111.566 16.4372C113.6 16.4372 115.397 16.7683 117.1 17.6196C118.755 18.2817 120.269 19.2749 121.64 20.6464C122.964 21.9706 123.816 23.484 124.667 25.1866C125.329 26.8419 125.66 28.6863 125.66 30.72C125.66 32.7063 125.329 34.5508 124.667 36.2534C124.005 37.9087 123.012 39.4221 121.64 40.7936C120.316 42.1178 118.944 42.9691 117.1 43.8204C115.445 44.4825 113.6 45.0027 111.566 45.0027C109.58 45.0027 107.736 44.6717 106.033 43.8204C104.378 43.1583 102.864 42.1651 101.493 40.7936C100.169 39.4694 99.3173 38.0978 98.466 36.2534C97.9931 34.5508 97.4728 32.7063 97.4728 30.72ZM130.815 44.2933H135.828V17.525H130.815V44.2933ZM129.633 7.78242C129.633 6.78925 129.964 5.93797 130.626 5.08668C131.288 4.42456 132.139 3.90433 133.132 3.90433C134.126 3.90433 134.977 4.23539 135.639 5.08668C136.301 5.74879 136.632 6.74196 136.632 7.78242C136.632 8.82289 136.301 9.62689 135.639 10.4782C134.977 11.1403 134.126 11.6605 133.132 11.6605C132.139 11.6605 131.288 11.3295 130.626 10.4782C129.964 9.76877 129.633 8.7756 129.633 7.78242ZM142.828 17.4777H147.888V21.6395H148.077C148.739 20.1261 149.733 18.9438 151.435 18.1398C152.949 17.2885 154.793 16.8156 156.969 16.8156C158.293 16.8156 159.475 17.0047 160.658 17.4777C161.84 17.8087 162.833 18.4709 163.684 19.3222C164.536 20.1734 165.198 21.1666 165.86 22.4908C166.38 23.8151 166.711 25.3285 166.711 27.1729V44.4352H161.603V28.5445C161.603 27.3621 161.414 26.1798 161.083 25.3758C160.752 24.5245 160.232 23.7205 159.759 23.2002C159.239 22.68 158.577 22.2071 157.773 22.0179C157.11 21.8287 156.259 21.6868 155.408 21.6868C154.415 21.6868 153.422 21.876 152.57 22.2071C151.719 22.5381 150.915 23.0584 150.206 23.8624C149.543 24.5245 149.023 25.5176 148.692 26.7C148.361 27.8823 148.172 29.2066 148.172 30.72V44.6244H143.159V17.525L142.828 17.4777ZM185.203 40.0842C186.527 40.0842 187.71 39.895 188.892 39.4221C190.074 38.9018 190.878 38.2397 191.73 37.4357C192.392 36.5844 193.054 35.5913 193.385 34.4089C193.716 33.2266 194.047 32.0442 194.047 30.5781C194.047 29.2539 193.858 27.8823 193.385 26.7473C193.054 25.5649 192.392 24.5718 191.73 23.7205C190.878 22.8692 190.074 22.2071 188.892 21.7341C187.71 21.2139 186.527 21.072 185.203 21.072C183.879 21.072 182.696 21.2612 181.514 21.7341C180.332 22.2544 179.528 22.9165 178.676 23.7205C178.014 24.5718 177.352 25.5649 177.021 26.7473C176.69 27.9296 176.359 29.112 176.359 30.5781C176.359 31.9023 176.548 33.2739 177.021 34.4089C177.352 35.5913 178.014 36.5844 178.676 37.4357C179.339 38.287 180.332 38.9491 181.514 39.4221C182.507 39.7531 183.879 40.0842 185.203 40.0842ZM199.107 44.1042H194.094V40.2733H193.905C192.912 41.7868 191.54 42.7799 189.885 43.6312C188.23 44.4825 186.385 44.8136 184.541 44.8136C182.555 44.8136 180.521 44.4825 178.866 43.8204C177.21 43.1583 175.697 42.1651 174.515 40.7936C173.332 39.4694 172.339 37.9559 171.819 36.2534C171.157 34.5981 170.826 32.7536 170.826 30.72C170.826 28.6863 171.157 26.8892 171.819 25.0447C172.481 23.3894 173.332 21.876 174.515 20.5045C175.697 19.1803 177.21 18.1398 178.866 17.4777C180.521 16.8156 182.365 16.4845 184.541 16.4845C186.385 16.4845 188.23 16.8156 189.885 17.6669C191.54 18.5182 192.912 19.6532 193.716 21.0247H193.905V0.924805H198.918V44.1042H199.107ZM224.693 28.5445C224.693 27.3621 224.504 26.3689 224.173 25.3758C223.842 24.3826 223.322 23.5313 222.66 22.8692C221.998 22.2071 221.146 21.6868 220.295 21.2139C219.302 20.8829 218.309 20.5518 216.937 20.5518C215.755 20.5518 214.573 20.741 213.579 21.2139C212.586 21.7341 211.735 22.2071 210.884 23.0584C210.222 23.7205 209.559 24.5718 209.228 25.5649C208.897 26.5581 208.566 27.4094 208.566 28.2607H224.646L224.693 28.5445ZM208.661 32.7063C208.661 33.8887 208.992 34.8819 209.512 35.875C210.032 36.8682 210.694 37.7195 211.498 38.3816C212.35 39.0437 213.343 39.5639 214.336 39.895C215.518 40.2261 216.512 40.4152 217.694 40.4152C219.207 40.4152 220.721 40.0842 221.856 39.2329C223.038 38.5708 224.031 37.5776 225.025 36.3952L228.855 39.4221C226.018 43.111 221.998 44.9554 216.985 44.9554C214.809 44.9554 212.965 44.6244 211.309 43.9623C209.654 43.3002 208.141 42.307 206.958 40.9355C205.776 39.6112 204.783 38.2397 204.262 36.3952C203.6 34.74 203.269 32.8955 203.269 30.8619C203.269 28.8755 203.6 27.0311 204.262 25.3285C204.925 23.6732 205.918 22.1598 207.1 20.7882C208.282 19.464 209.796 18.6127 211.451 17.7614C213.106 17.0993 214.951 16.7683 216.985 16.7683C219.349 16.7683 221.336 17.0993 222.991 17.9506C224.646 18.8019 226.018 19.7951 227.011 21.1193C228.004 22.4435 228.855 23.957 229.376 25.6595C229.896 27.3148 230.038 29.0174 230.038 30.8619V32.7063H208.661ZM249.807 24.1934C249.144 23.5313 248.482 22.8692 247.631 22.349C246.78 21.8287 245.645 21.4977 244.462 21.4977C243.28 21.4977 242.287 21.8287 241.294 22.349C240.442 22.8692 239.969 23.5313 239.969 24.5245C239.969 25.3758 240.3 26.0379 240.821 26.3689C241.341 26.8892 242.003 27.2202 242.665 27.5513C243.327 27.8823 244.179 28.0715 244.841 28.2134C245.692 28.4026 246.354 28.5445 246.827 28.5445C247.82 28.8755 249.003 29.0647 249.854 29.5376C250.847 29.8687 251.698 30.3889 252.36 31.051C253.023 31.7132 253.543 32.3753 254.016 33.2266C254.347 34.0779 254.678 35.071 254.678 36.3952C254.678 37.9086 254.347 39.2329 253.685 40.2261C253.023 41.2192 252.171 42.2124 251.178 42.9218C250.185 43.6312 249.003 44.1042 247.678 44.4352C246.354 44.7663 244.983 44.9554 243.847 44.9554C241.672 44.9554 239.686 44.6244 237.983 43.9623C236.328 43.3002 234.814 42.1178 233.443 40.2733L237.274 37.1047C238.125 37.9559 238.929 38.6181 239.969 39.2802C241.01 39.9423 242.145 40.2733 243.658 40.2733C244.32 40.2733 244.983 40.2734 245.645 40.0842C246.307 39.895 246.827 39.7531 247.3 39.4221C247.82 39.091 248.151 38.7599 248.482 38.4289C248.813 37.9087 249.003 37.4357 249.003 36.9155C249.003 36.2534 248.813 35.5913 248.34 35.071C247.82 34.5508 247.347 34.2197 246.685 33.8887C246.023 33.5576 245.361 33.3684 244.699 33.2266L242.712 32.7063C241.719 32.3753 240.537 32.1861 239.686 31.855C238.692 31.524 237.841 31.0037 237.179 30.5308C236.517 30.0106 235.855 29.2066 235.335 28.3553C234.814 27.504 234.672 26.3689 234.672 25.1866C234.672 23.8624 235.004 22.4908 235.524 21.4977C236.044 20.5045 236.848 19.6532 237.888 18.9911C238.882 18.329 239.875 17.8087 241.057 17.4777C242.239 17.1466 243.564 16.9575 244.746 16.9575C246.591 16.9575 248.246 17.2885 249.948 17.9506C251.604 18.6127 252.975 19.7951 253.968 21.3085L249.807 24.1934ZM259.549 1.58693H264.562V28.6863L275.96 17.2885H282.818L270.616 29.3485L284 43.7258H276.811L264.609 30.0106V43.7258H259.596V1.58693"
                    fill="#D4D4D8"
                  />
                </svg>

                <svg
                  width="280"
                  height="67"
                  viewBox="0 0 280 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[141px] lg:w-[280px] h-auto mx-[20px] lg:mx-0"
                >
                  <path
                    d="M40.6467 48.594L28.98 53.6806V53.1673C26.74 53.7273 24.22 54.054 21.8867 54.194C10.8733 54.1006 2.19333 48.314 2.05333 41.5006V38.9806C5.64667 44.2073 13.02 47.754 21.8867 47.614C24.8733 47.754 27.9533 47.2873 30.52 46.5873L31.5467 44.0673C28.5133 45.0006 25.1533 45.6073 21.8867 45.6073C10.8733 45.6073 2.19333 39.8673 2.05333 32.914V30.8606C5.64667 35.714 13.02 39.214 21.8867 38.9806C25.9 39.214 29.7733 38.374 33.0867 36.9273L33.6 34.4073C30.38 36.0873 26.2267 37.0673 21.9333 36.9273C10.92 37.0673 2.24 31.3273 2.1 24.234V22.1806C5.69333 27.1273 13.0667 30.674 21.9333 30.814C26.9733 30.674 31.7333 29.3206 35.6533 27.2673L36.1667 24.234C32.62 26.8473 27.44 28.574 21.9333 28.8073C10.92 28.574 2.24 22.7873 2.1 15.6006C2.19333 8.74063 10.92 3.00064 21.9333 2.9073C28.4667 3.00064 34.58 5.2873 38.1733 9.02064L38.5467 9.6273H41.1133L40.74 9.02064C37.1467 4.12064 29.9133 0.900634 21.9333 0.900634C9.70667 0.853967 0 7.5273 0 15.554V16.0673V41.9673C0.42 49.8073 9.89334 56.2006 21.84 56.2006C29.7267 56.2473 36.8667 53.1206 40.6467 48.594Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M35.8862 66.4672L39.9929 49.0138L28.1862 54.1472L35.3729 23.9072H21.5596L25.1529 9.02051H69.2529L65.6596 23.9072H51.2862L48.2062 32.1205L64.1196 25.4472L35.8862 66.4672ZM43.0729 45.4672L41.0196 55.7338L57.9596 30.1138L44.0996 36.2738L50.2596 21.9005H64.1196L66.6862 11.1205H26.6462L24.0796 21.9005H37.9396L31.2662 50.6005L43.0729 45.4672Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M98.513 19.0073V19.054C98.5597 20.6873 98.0463 21.9473 97.0197 22.8807C95.993 23.814 94.593 24.2807 92.773 24.2807C90.953 24.2807 89.4597 23.674 88.3397 22.5073C87.2197 21.3407 86.6597 19.8006 86.6597 17.934V14.9006C86.6597 13.034 87.2197 11.494 88.293 10.3273C89.413 9.16065 90.8597 8.55399 92.633 8.55399C94.4997 8.55399 95.9463 9.02066 97.0197 9.90732C98.093 10.8407 98.6063 12.1006 98.5597 13.734V13.7807H95.573C95.573 12.8007 95.3397 12.054 94.873 11.5873C94.4063 11.1207 93.6597 10.8873 92.6797 10.8873C91.7463 10.8873 91.0463 11.2607 90.533 12.0073C90.0197 12.754 89.7397 13.6873 89.7397 14.854V17.934C89.7397 19.1006 90.0197 20.0807 90.533 20.8273C91.093 21.574 91.8397 21.9473 92.8197 21.9473C93.753 21.9473 94.4063 21.714 94.873 21.2473C95.3397 20.7807 95.573 20.034 95.573 19.054H98.513V19.0073ZM115.406 17.794C115.406 19.6607 114.8 21.2473 113.633 22.4607C112.466 23.674 110.926 24.2807 109.013 24.2807C107.1 24.2807 105.606 23.674 104.393 22.4607C103.226 21.2473 102.62 19.6607 102.62 17.794V15.0407C102.62 13.174 103.226 11.634 104.393 10.374C105.56 9.16066 107.1 8.50732 108.966 8.50732C110.88 8.50732 112.42 9.11399 113.586 10.374C114.8 11.5873 115.36 13.174 115.36 15.0407V17.794H115.406ZM112.326 14.994C112.326 13.7807 112.046 12.8473 111.44 12.054C110.833 11.3073 110.04 10.8873 108.966 10.8873C107.94 10.8873 107.1 11.2607 106.54 12.054C105.98 12.8007 105.653 13.7807 105.653 14.994V17.7473C105.653 18.9607 105.933 19.9406 106.54 20.734C107.1 21.4806 107.94 21.9007 108.966 21.9007C110.04 21.9007 110.833 21.5273 111.44 20.734C112.046 19.9873 112.326 18.9607 112.326 17.7473V14.994ZM123.34 24.0473H120.26V8.74066H123.34V24.0473ZM141.026 24.0473H137.946L131.786 13.734H131.74V24.0473H128.66V8.74066H131.74L137.9 19.054H137.946V8.74066H141.026V24.0473ZM156.473 11.1207H152.086V24.0473H149.006V11.1207H144.713V8.74066H156.473V11.1207ZM169.166 17.3273H163.473V21.714H170.24V24.0473H160.44V8.74066H170.24V11.1207H163.52V14.9473H169.213V17.3273H169.166ZM177.706 21.714H184.566V24.0473H174.626V8.74066H177.706V21.714ZM197.633 17.3273H191.94V21.714H198.706V24.0473H188.906V8.74066H198.706V11.1207H191.986V14.9473H197.68V17.3273H197.633ZM214.853 21.994C214.386 22.6007 213.686 23.1607 212.706 23.6273C211.773 24.094 210.56 24.3273 209.066 24.3273C207.2 24.3273 205.706 23.7673 204.54 22.6006C203.373 21.434 202.766 19.9407 202.766 18.074V14.854C202.766 12.9873 203.326 11.494 204.493 10.3273C205.613 9.16065 207.106 8.55399 208.88 8.55399C210.746 8.55399 212.193 9.02066 213.173 9.90732C214.153 10.794 214.666 11.9607 214.62 13.454V13.5006H211.726C211.726 12.7073 211.493 12.054 211.026 11.5873C210.56 11.1207 209.86 10.8873 208.973 10.8873C208.04 10.8873 207.293 11.2607 206.686 11.9607C206.126 12.7073 205.846 13.6407 205.846 14.7607V17.9807C205.846 19.1473 206.126 20.0807 206.733 20.8273C207.34 21.574 208.133 21.9007 209.113 21.9007C209.86 21.9007 210.42 21.8073 210.84 21.6673C211.26 21.5273 211.586 21.3407 211.82 21.1073V18.1207H208.88V15.974H214.9V21.994H214.853ZM222.786 17.934V24.0473H219.706V8.74066H225.026C226.753 8.74066 228.153 9.16066 229.133 9.95399C230.113 10.7473 230.626 11.8673 230.626 13.2673C230.626 14.0606 230.44 14.714 230.02 15.3207C229.6 15.8807 228.993 16.3473 228.2 16.7207C229.086 17.0007 229.74 17.4207 230.16 18.074C230.533 18.6807 230.766 19.474 230.766 20.4073V21.5273C230.766 21.9473 230.813 22.414 230.953 22.8807C231.046 23.3473 231.28 23.674 231.56 23.9073V24.1407H228.386C228.106 23.9073 227.92 23.534 227.826 23.0207C227.733 22.5073 227.686 21.994 227.686 21.5273V20.454C227.686 19.7073 227.5 19.1007 227.08 18.6807C226.66 18.2607 226.053 18.0273 225.306 18.0273H222.786V17.934ZM222.786 15.6006H224.98C225.82 15.6006 226.473 15.414 226.893 15.0407C227.313 14.6673 227.546 14.154 227.546 13.4073C227.546 12.7073 227.313 12.1473 226.893 11.7273C226.473 11.3073 225.866 11.1207 225.026 11.1207H222.786V15.6006ZM243.646 20.7807H238.7L237.673 24.094H234.453L239.633 8.78733H242.76L247.893 24.094H244.673L243.646 20.7807ZM239.446 18.354H242.9L241.22 12.9407H241.173L239.446 18.354ZM254.706 18.494V24.0473H251.626V8.74066H257.506C259.28 8.74066 260.633 9.20732 261.66 10.094C262.686 10.9807 263.153 12.194 263.153 13.6407C263.153 15.0873 262.64 16.3007 261.66 17.1873C260.633 18.074 259.28 18.5407 257.506 18.5407H254.706V18.494ZM254.706 16.1607H257.506C258.346 16.1607 259 15.9273 259.466 15.4607C259.886 14.994 260.12 14.3873 260.12 13.6873C260.12 12.9407 259.886 12.334 259.466 11.8673C259.046 11.4006 258.393 11.1673 257.506 11.1673H254.706V16.1607ZM280 24.0473H276.92V17.7006H270.666V24.0473H267.586V8.74066H270.666V15.3207H276.92V8.74066H280V24.0473Z"
                    fill="#D4D4D8"
                  />
                  <path
                    d="M92.2597 49.0607H90.3464V38.9807H86.8931V37.3473H95.7131V38.9807H92.2597V49.0607ZM105.093 49.0607H103.18V43.6006C103.18 42.9006 103.04 42.3873 102.76 42.0607C102.48 41.734 102.06 41.5473 101.453 41.5473C100.66 41.5473 100.1 41.7807 99.7264 42.2473C99.3531 42.714 99.1664 43.5073 99.1664 44.6273V49.014H97.2997V36.554H99.1664V39.7273C99.1664 40.2407 99.1197 40.754 99.0731 41.3607H99.2131C99.4464 40.9407 99.8197 40.614 100.286 40.3807C100.753 40.1473 101.266 40.0073 101.873 40.0073C104.02 40.0073 105.093 41.0807 105.093 43.274V49.0607ZM111.58 49.2006C110.18 49.2006 109.106 48.7807 108.36 47.9873C107.566 47.194 107.193 46.074 107.193 44.674C107.193 43.2273 107.566 42.1073 108.266 41.2673C108.966 40.4273 109.993 40.0073 111.253 40.0073C112.42 40.0073 113.353 40.3807 114.006 41.0807C114.706 41.7807 115.033 42.7607 115.033 44.0207V45.0473H109.106C109.153 45.8873 109.386 46.5873 109.806 47.0073C110.226 47.474 110.88 47.7073 111.673 47.7073C112.186 47.7073 112.7 47.6606 113.12 47.5673C113.586 47.474 114.053 47.2873 114.566 47.054V48.594C114.1 48.8273 113.633 48.9673 113.166 49.0607C112.746 49.154 112.186 49.2006 111.58 49.2006ZM111.253 41.454C110.646 41.454 110.18 41.6407 109.806 42.014C109.433 42.3873 109.246 42.9473 109.153 43.694H113.166C113.166 42.9473 112.98 42.3873 112.653 42.014C112.326 41.6407 111.86 41.454 111.253 41.454ZM125.86 41.594H123.713V49.0607H121.8V41.594H120.353V40.7073L121.8 40.1473V39.5873C121.8 38.5607 122.033 37.7673 122.546 37.254C123.06 36.7407 123.806 36.5073 124.786 36.5073C125.44 36.5073 126.093 36.6006 126.746 36.834L126.233 38.2807C125.766 38.1407 125.346 38.0473 124.88 38.0473C124.46 38.0473 124.133 38.1873 123.946 38.4207C123.76 38.7007 123.666 39.074 123.666 39.5873V40.1473H125.813V41.594H125.86ZM133.653 49.0607L133.373 47.894H133.28C133 48.314 132.626 48.6407 132.16 48.874C131.693 49.1073 131.133 49.2473 130.526 49.2473C129.453 49.2473 128.66 48.9673 128.1 48.454C127.54 47.9407 127.306 47.1007 127.306 46.0273V40.194H129.22V45.654C129.22 46.354 129.36 46.8207 129.64 47.194C129.92 47.5207 130.34 47.7073 130.946 47.7073C131.74 47.7073 132.3 47.474 132.673 47.0073C133.046 46.5407 133.233 45.7473 133.233 44.6273V40.194H135.146V49.0607H133.653ZM141.12 47.6607C141.586 47.6607 142.053 47.5673 142.52 47.4273V48.8273C142.333 48.9207 142.053 49.014 141.726 49.0607C141.4 49.1073 141.073 49.154 140.7 49.154C138.926 49.154 138.04 48.2207 138.04 46.354V41.594H136.826V40.754L138.133 40.054L138.786 38.1873H139.953V40.1473H142.473V41.594H139.953V46.354C139.953 46.8207 140.046 47.1473 140.28 47.3807C140.42 47.5673 140.746 47.6607 141.12 47.6607ZM150.5 49.0607L150.22 47.894H150.126C149.846 48.314 149.473 48.6407 149.006 48.874C148.54 49.1073 147.98 49.2473 147.373 49.2473C146.3 49.2473 145.506 48.9673 144.946 48.454C144.433 47.9407 144.153 47.1007 144.153 46.0273V40.194H146.066V45.654C146.066 46.354 146.206 46.8207 146.486 47.194C146.766 47.5207 147.186 47.7073 147.793 47.7073C148.586 47.7073 149.146 47.474 149.52 47.0073C149.893 46.5407 150.08 45.7473 150.08 44.6273V40.194H151.993V49.0607H150.5ZM159.18 40.0073C159.553 40.0073 159.88 40.054 160.113 40.1006L159.926 41.874C159.646 41.8273 159.366 41.7807 159.086 41.7807C158.34 41.7807 157.733 42.014 157.266 42.5273C156.8 43.0407 156.566 43.6473 156.566 44.4407V49.0607H154.7V40.194H156.193L156.426 41.734H156.52C156.8 41.2206 157.22 40.8007 157.686 40.474C158.106 40.194 158.62 40.0073 159.18 40.0073ZM165.293 49.2006C163.893 49.2006 162.82 48.7807 162.073 47.9873C161.28 47.194 160.906 46.074 160.906 44.674C160.906 43.2273 161.28 42.1073 161.98 41.2673C162.68 40.4273 163.706 40.0073 164.966 40.0073C166.133 40.0073 167.066 40.3807 167.72 41.0807C168.42 41.7807 168.746 42.7607 168.746 44.0207V45.0473H162.82C162.866 45.8873 163.1 46.5873 163.52 47.0073C163.94 47.474 164.593 47.7073 165.386 47.7073C165.9 47.7073 166.413 47.6606 166.833 47.5673C167.3 47.474 167.766 47.2873 168.28 47.054V48.594C167.813 48.8273 167.346 48.9673 166.88 49.0607C166.413 49.154 165.9 49.2006 165.293 49.2006ZM164.966 41.454C164.36 41.454 163.893 41.6407 163.52 42.014C163.146 42.3873 162.96 42.9473 162.866 43.694H166.88C166.88 42.9473 166.693 42.3873 166.366 42.014C165.993 41.6407 165.526 41.454 164.966 41.454ZM182.98 44.5807C182.98 46.0273 182.606 47.1473 181.86 47.9873C181.113 48.7807 180.086 49.2006 178.78 49.2006C177.94 49.2006 177.24 49.014 176.586 48.6407C175.933 48.2673 175.466 47.7073 175.14 47.0073C174.813 46.3073 174.626 45.514 174.626 44.5807C174.626 43.134 175 42.014 175.746 41.2207C176.493 40.4273 177.52 40.0073 178.873 40.0073C180.133 40.0073 181.16 40.4273 181.906 41.2673C182.653 42.1073 182.98 43.1807 182.98 44.5807ZM176.54 44.5807C176.54 46.634 177.286 47.6607 178.826 47.6607C180.32 47.6607 181.066 46.634 181.066 44.5807C181.066 42.574 180.32 41.5473 178.826 41.5473C178.033 41.5473 177.473 41.8273 177.1 42.3407C176.726 42.854 176.54 43.6007 176.54 44.5807ZM189.606 41.594H187.46V49.0607H185.546V41.594H184.1V40.7073L185.546 40.1473V39.5873C185.546 38.5607 185.78 37.7673 186.293 37.254C186.806 36.7407 187.553 36.5073 188.533 36.5073C189.186 36.5073 189.84 36.6006 190.493 36.834L189.98 38.2807C189.513 38.1407 189.093 38.0473 188.626 38.0473C188.206 38.0473 187.88 38.1873 187.693 38.4207C187.506 38.654 187.413 39.074 187.413 39.5873V40.1473H189.56V41.594H189.606ZM202.86 49.0607H200.946V43.6006C200.946 42.9006 200.806 42.434 200.573 42.0607C200.34 41.734 199.92 41.5473 199.36 41.5473C198.613 41.5473 198.1 41.7807 197.773 42.2473C197.446 42.714 197.26 43.5073 197.26 44.6273V49.0607H195.393V40.194H196.886L197.166 41.3607H197.26C197.493 40.9407 197.866 40.614 198.333 40.3807C198.8 40.1473 199.313 40.054 199.873 40.054C201.226 40.054 202.16 40.5207 202.58 41.454H202.72C203 41.034 203.373 40.6607 203.84 40.4273C204.306 40.194 204.866 40.054 205.473 40.054C206.546 40.054 207.293 40.334 207.806 40.8473C208.273 41.3607 208.553 42.2007 208.553 43.274V49.0607H206.686V43.6006C206.686 42.9006 206.546 42.434 206.313 42.0607C206.033 41.734 205.66 41.5473 205.1 41.5473C204.353 41.5473 203.84 41.7807 203.513 42.2473C203.186 42.714 203 43.414 203 44.3473V49.0607H202.86ZM218.913 44.5807C218.913 46.0273 218.54 47.1473 217.793 47.9873C217.046 48.7807 216.02 49.2006 214.713 49.2006C213.873 49.2006 213.173 49.014 212.52 48.6407C211.866 48.2673 211.4 47.7073 211.073 47.0073C210.746 46.3073 210.56 45.514 210.56 44.5807C210.56 43.134 210.933 42.014 211.68 41.2207C212.426 40.4273 213.453 40.0073 214.806 40.0073C216.066 40.0073 217.093 40.4273 217.84 41.2673C218.54 42.1073 218.913 43.1807 218.913 44.5807ZM212.473 44.5807C212.473 46.634 213.22 47.6607 214.76 47.6607C216.253 47.6607 217 46.634 217 44.5807C217 42.574 216.253 41.5473 214.76 41.5473C213.966 41.5473 213.406 41.8273 213.033 42.3407C212.66 42.854 212.473 43.6007 212.473 44.5807ZM228.9 49.0607H226.986V43.6006C226.986 42.9006 226.846 42.3873 226.566 42.0607C226.286 41.734 225.866 41.5473 225.26 41.5473C224.466 41.5473 223.86 41.7807 223.533 42.2473C223.206 42.714 222.973 43.5073 222.973 44.6273V49.0607H221.106V40.194H222.6L222.88 41.3607H222.973C223.253 40.9407 223.626 40.614 224.093 40.3807C224.56 40.1473 225.12 40.054 225.726 40.054C227.873 40.054 228.9 41.1273 228.9 43.3207V49.0607ZM235.386 49.2006C233.986 49.2006 232.913 48.7807 232.166 47.9873C231.373 47.194 231 46.074 231 44.674C231 43.2273 231.373 42.1073 232.073 41.2673C232.773 40.4273 233.8 40.0073 235.06 40.0073C236.226 40.0073 237.16 40.3807 237.813 41.0807C238.513 41.7807 238.84 42.7607 238.84 44.0207V45.0473H232.913C232.96 45.8873 233.193 46.5873 233.613 47.0073C234.033 47.474 234.686 47.7073 235.48 47.7073C235.993 47.7073 236.506 47.6606 236.926 47.5673C237.346 47.474 237.86 47.2873 238.373 47.054V48.594C237.906 48.8273 237.44 48.9673 236.973 49.0607C236.506 49.154 235.993 49.2006 235.386 49.2006ZM235.013 41.454C234.406 41.454 233.94 41.6407 233.566 42.014C233.193 42.3873 233.006 42.9473 232.913 43.694H236.926C236.926 42.9473 236.74 42.3873 236.413 42.014C236.086 41.6407 235.62 41.454 235.013 41.454ZM239.306 40.194H241.36L243.18 45.234C243.46 45.934 243.646 46.634 243.74 47.2407H243.786C243.833 46.9607 243.926 46.5873 244.066 46.1673C244.206 45.7473 244.86 43.7407 246.12 40.194H248.173L244.393 50.2273C243.693 52.0473 242.573 52.9807 240.94 52.9807C240.52 52.9807 240.1 52.934 239.726 52.8407V51.3473C240.006 51.394 240.333 51.4407 240.706 51.4407C241.593 51.4407 242.246 50.9273 242.62 49.854L242.946 49.014L239.306 40.194Z"
                    fill="#D4D4D8"
                  />
                </svg>
              </div>
            </div>
          </div> */}

          <div
            className={`screen relative lg:h-screen w-full flex  items-center justify-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
              activeSection === 10 ? "active" : ""
            }`}
            id="our-team"
          >
            <div className="screen__container z-10 w-full">
              <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] mb-[16px] lg:text-[29px] lg:mb-[32px] lg:leading-[48px] text-center lg:text-left relative z-10">
                Our Team
              </h5>

              <div className="flex items-end space-x-[20px]">
                <h3 className="text-gradient-blue text-[16px] leading-[19px] lg:text-[20px] lg:leading-[24px] relative top-[7px]">
                  Leadership
                </h3>
                <span className="flex-1 border-b border-light-blue"></span>
              </div>
              <div className="grid grid-cols-12 mt-[45px]">
                <div className="col-span-12 lg:col-start-3 lg:col-end-10">
                  <div className="flex space-x-[16px] lg:space-x-[32px]">
                    <div className="w-[80px] h-[80px] lg:w-[117px] lg:h-[117px] border-linear bg-gray-blur-015"></div>
                    <div className="flex-1">
                      <div className="flex space-x-[12px] items-center flex-wrap mb-[4px] lg:mb-0 lg:block">
                        <p className="text-[16px] leading-[24px] lg:text-[20px] lg:leading-[28px] text-zinc-50 font-semibold mb-[2px]">
                          TBA
                        </p>
                        <p className="lg:mb-[33px]">TBA</p>
                      </div>
                      <p className="text-[12px] leading-[18px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eget dictumst sit in amet, neque nibh viverra augue. Leo
                        amet iaculis vitae vestibulum dui a molestie dignissim.
                        Nibh ultrices maecenas quam rutrum. Nisi aliquam id odio
                        fringilla duis nibh sit. Integer varius nisi, et lectus
                        neque. Lectus in tellus sagittis elit pretium leo
                        adipiscing non. Aliquam magna lorem tincidunt senectus
                        lacus ipsum donec. Id elementum suspendisse nec laoreet.
                        A parturient tellus urna suspendisse mus
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-end space-x-[20px]">
                <h3 className="text-gradient-blue text-[16px] leading-[19px] lg:text-[20px] lg:leading-[24px] relative top-[7px]">
                  Core Team
                </h3>
                <span className="flex-1 border-b border-light-blue"></span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 mt-[34px] lg:space-x-[39px] space-y-[24px] lg:space-y-0">
                <div>
                  <div className="flex space-x-[16px] lg:space-x-[32px]">
                    <div className="w-[80px] h-[80px] lg:w-[117px] lg:h-[117px] border-linear bg-gray-blur-015"></div>
                    <div className="flex-1">
                      <div className="flex space-x-[12px] items-center flex-wrap mb-[4px] lg:mb-0 lg:block">
                        <p className="text-[16px] leading-[24px] lg:text-[20px] lg:leading-[28px] text-zinc-50 font-semibold mb-[2px]">
                          TBA
                        </p>
                        <p className="lg:mb-[33px]">TBA</p>
                      </div>
                      <p className="text-[12px] leading-[18px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eget dictumst sit in amet, neque nibh viverra augue. Leo
                        amet iaculis vitae vestibulum dui a molestie dignissim.
                        Nibh ultrices maecenas quam rutrum. Nisi aliquam id odio
                        fringilla duis nibh sit. Integer varius nisi, et lectus
                        neque. Lectus in tellus sagittis elit pretium leo
                        adipiscing non. Aliquam magna lorem tincidunt senectus
                        lacus ipsum donec. Id elementum suspendisse nec laoreet.
                        A parturient tellus urna suspendisse mus
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex space-x-[16px] lg:space-x-[32px]">
                    <div className="w-[80px] h-[80px] lg:w-[117px] lg:h-[117px] border-linear bg-gray-blur-015"></div>
                    <div className="flex-1">
                      <div className="flex space-x-[12px] items-center flex-wrap mb-[4px] lg:mb-0 lg:block">
                        <p className="text-[16px] leading-[24px] lg:text-[20px] lg:leading-[28px] text-zinc-50 font-semibold mb-[2px]">
                          TBA
                        </p>
                        <p className="lg:mb-[33px]">TBA</p>
                      </div>
                      <p className="text-[12px] leading-[18px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eget dictumst sit in amet, neque nibh viverra augue. Leo
                        amet iaculis vitae vestibulum dui a molestie dignissim.
                        Nibh ultrices maecenas quam rutrum. Nisi aliquam id odio
                        fringilla duis nibh sit. Integer varius nisi, et lectus
                        neque. Lectus in tellus sagittis elit pretium leo
                        adipiscing non. Aliquam magna lorem tincidunt senectus
                        lacus ipsum donec. Id elementum suspendisse nec laoreet.
                        A parturient tellus urna suspendisse mus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* section overlay */}
            <svg
              width="375"
              height="667"
              viewBox="0 0 375 667"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden absolute top-0 left-0"
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
                    fill-opacity="0.5"
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
                    fill-opacity="0.44"
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
                      fill-opacity="0.71"
                    />
                  </g>
                  <g filter="url(#filter5_f_1220_8226)">
                    <ellipse
                      rx="201.591"
                      ry="118.908"
                      transform="matrix(0.652511 0.757779 -0.783038 0.621973 45.7418 269.952)"
                      fill="#E84DFC"
                      fill-opacity="0.2"
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
                      fill-opacity="0.71"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              className="lg:hidden absolute bottom-0 right-0"
            >
              <g filter="url(#filter0_f_1220_8235)">
                <circle
                  cx="266.785"
                  cy="348.577"
                  r="97.5742"
                  transform="rotate(33.1841 266.785 348.577)"
                  fill="#9021AC"
                  fill-opacity="0.75"
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
                  fill-opacity="0.35"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            {/* end of section overlay */}
          </div>

          <div
            className={`screen relative lg:h-screen w-full flex flex-wrap items-center justify-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
              activeSection === 11 ? "active" : ""
            }`}
          >
            <div className="screen__container z-10 w-full">
              <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] mb-[16px] lg:text-[29px] lg:mb-[32px] lg:leading-[48px] text-center lg:text-left relative z-10">
                Our Team
              </h5>

              <div className="flex items-end space-x-[20px] mb-[16px]">
                <h3 className="text-gradient-blue text-[16px] leading-[19px] lg:text-[20px] lg:leading-[24px] relative top-[7px]">
                  Blockchain team
                </h3>
                <span className="flex-1 border-b border-light-blue"></span>
              </div>
              <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                className="box team-slider mb-[16px] lg:mb-[25px]"
                breakpoints={{
                  spaceBetween: 56,
                }}
              >
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="flex items-end space-x-[20px] mb-[16px]">
                <h3 className="text-gradient-blue text-[16px] leading-[19px] lg:text-[20px] lg:leading-[24px] relative top-[7px]">
                  Media Advisor
                </h3>
                <span className="flex-1 border-b border-light-blue"></span>
              </div>
              <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                className="box team-slider mb-[16px] lg:mb-[25px]"
                breakpoints={{
                  spaceBetween: 56,
                }}
              >
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="flex items-end space-x-[20px] mb-[16px]">
                <h3 className="text-gradient-blue text-[16px] leading-[19px] lg:text-[20px] lg:leading-[24px] relative top-[7px]">
                  Investor
                </h3>
                <span className="flex-1 border-b border-light-blue"></span>
              </div>
              <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                className="box team-slider mb-[16px] lg:mb-[25px]"
                breakpoints={{
                  spaceBetween: 56,
                }}
              >
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-[14px] leading-[20px]">
                    <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
                    <p className="font-kanit font-semibold mb-[2px]">TBA</p>
                    <p>TBA</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* section overlay */}
            <svg
              width="375"
              height="667"
              viewBox="0 0 375 667"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden absolute top-0 left-0"
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
                    fill-opacity="0.5"
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
                    fill-opacity="0.44"
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
                      fill-opacity="0.71"
                    />
                  </g>
                  <g filter="url(#filter5_f_1220_8226)">
                    <ellipse
                      rx="201.591"
                      ry="118.908"
                      transform="matrix(0.652511 0.757779 -0.783038 0.621973 45.7418 269.952)"
                      fill="#E84DFC"
                      fill-opacity="0.2"
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
                      fill-opacity="0.71"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              className="lg:hidden absolute bottom-0 right-0"
            >
              <g filter="url(#filter0_f_1220_8235)">
                <circle
                  cx="266.785"
                  cy="348.577"
                  r="97.5742"
                  transform="rotate(33.1841 266.785 348.577)"
                  fill="#9021AC"
                  fill-opacity="0.75"
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
                  fill-opacity="0.35"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            {/* end of section overlay */}
          </div>

          <div
            className={`screen relative lg:h-screen w-full flex flex-col items-center justify-center ${
              activeSection === 12 ? "active" : ""
            }`}
            id="whitepaper"
          >
            <div className="flex-1 flex items-center justify-center text-center py-[117px] lg:py-0 px-[16px] lg:px-[7.5vw] relative z-10">
              <div>
                <h3 className="sub-heading text-[24px] leading-[29px] lg:text-[40px] mb-[24px] lg:mb-[29px] lg:leading-[48px] font-medium text-shadow-white-51">
                  Learn more about VILIK World
                </h3>

                <button
                  type="button"
                  className="relative group cursor-pointer overflow-hidden p-[3px] rounded-[30px]"
                >
                  <span className="box bg-gradient-purple text-[16px] leading-[19px] h-[40px] lg:h-[51px] px-[24px] rounded-[26px] inline-flex items-center relative z-10">
                    Whitepaper
                  </span>
                  <div className="absolute w-[275px] h-[275px] top-1/2 left-0 linear-custom transform translate-y-[-50%]">
                    <div
                      style={{
                        background:
                          "linear-gradient(178.93deg, #F499FF 31.95%, #4453F2 71.55%)",
                      }}
                      className="w-full h-full duration-200 opacity-0 lg:group-hover:animate-spin-slow lg:group-hover:opacity-100"
                    ></div>
                  </div>
                </button>
              </div>
            </div>
            <div className="py-[53px] lg:py-0 lg:h-[318px] w-full flex items-center justify-center text-center bg-white-blur-008 px-[16px] lg:px-[7.5vw] relative z-10">
              <div>
                <Link href="/">
                  <a className="inline-block mb-[27px]">
                    <svg
                      width="107"
                      height="89"
                      viewBox="0 0 107 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.8382 29.0259L46.5741 55.9989L0 29.0259H33.8382ZM46.5741 0L0 26.9729H33.8382L46.5741 0ZM40.4384 27.9994C40.4384 22.773 43.5057 18.2924 47.875 16.1466V2.05299L35.6047 27.9994L47.7825 53.9459V39.8534C43.5068 37.7064 40.4384 33.2258 40.4384 27.9994ZM53.4538 16.9864C52.1518 16.9864 50.9434 17.1731 49.8285 17.6394C49.0845 17.919 48.4341 18.1996 47.7836 18.5731C44.5304 20.5333 42.3919 24.0802 42.3919 28.0934C42.3919 32.1065 44.5304 35.6534 47.7836 37.6136C48.4341 37.9871 49.0856 38.2667 49.8285 38.5473C50.9445 38.9208 52.1529 39.2003 53.4538 39.2003C54.7558 39.2003 55.9642 39.0136 57.0791 38.5473C57.8231 38.2678 58.4735 37.9871 59.1239 37.6136C62.3772 35.6534 64.5156 32.1065 64.5156 28.0934C64.5156 24.0802 62.3772 20.5333 59.1239 18.5731C58.4735 18.1996 57.8219 17.9201 57.0791 17.6394C55.9631 17.1731 54.7546 16.9864 53.4538 16.9864ZM73.1618 29.0259H107L60.4259 56L73.1618 29.0259ZM107 26.9729L60.4259 0L73.0693 26.9729H107ZM66.5616 27.9994C66.5616 33.2258 63.4943 37.7064 59.1251 39.8522V54.0387L71.3953 27.9994L59.1239 2.05299V16.2394C63.4932 18.2936 66.5616 22.773 66.5616 27.9994Z"
                        fill="url(#paint0_linear_1231_9131)"
                      />
                      <path
                        d="M20.7423 70.002H23.3673C23.5529 70.002 23.7649 70.1343 23.8445 70.3195L28.9885 81.4367C29.0946 81.6484 29.2006 81.7543 29.3066 81.7543C29.4126 81.7543 29.5187 81.6484 29.6247 81.4367L34.7422 70.3195C34.8218 70.1343 35.0338 70.002 35.2459 70.002H37.8444C38.0565 70.002 38.136 70.1343 38.0565 70.3195L29.6777 88.5574C29.5982 88.7162 29.4656 88.7956 29.3066 88.7956C29.1476 88.7956 28.9885 88.7162 28.909 88.5574L20.5302 70.3195C20.4507 70.1343 20.5302 70.002 20.7423 70.002Z"
                        fill="url(#paint1_linear_1231_9131)"
                      />
                      <path
                        d="M41.1602 70.346C41.1602 70.1343 41.2927 70.002 41.5047 70.002H43.9973C44.2093 70.002 44.3418 70.1343 44.3418 70.346V72.6225C44.3418 72.8342 44.2093 72.9665 43.9973 72.9665H41.5047C41.2927 72.9665 41.1602 72.8342 41.1602 72.6225V70.346Z"
                        fill="url(#paint2_linear_1231_9131)"
                      />
                      <path
                        d="M41.5047 75.5342H43.9973C44.2093 75.5342 44.3418 75.6665 44.3418 75.8782V88.187C44.3418 88.3987 44.2093 88.531 43.9973 88.531H41.5047C41.2927 88.531 41.1602 88.3987 41.1602 88.187V75.8782C41.1602 75.6665 41.2927 75.5342 41.5047 75.5342Z"
                        fill="url(#paint3_linear_1231_9131)"
                      />
                      <path
                        d="M63.3535 70.346C63.3535 70.1343 63.4861 70.002 63.6981 70.002H66.1906C66.4027 70.002 66.5352 70.1343 66.5352 70.346V72.6225C66.5352 72.8342 66.4027 72.9665 66.1906 72.9665H63.6981C63.4861 72.9665 63.3535 72.8342 63.3535 72.6225V70.346Z"
                        fill="url(#paint4_linear_1231_9131)"
                      />
                      <path
                        d="M51.5528 70.346C51.5528 70.1343 51.4202 70.002 51.2082 70.002H48.7157C48.5036 70.002 48.3711 70.1343 48.3711 70.346V82.5992H51.5528V70.346Z"
                        fill="url(#paint5_linear_1231_9131)"
                      />
                      <path
                        d="M60.0376 85.5656H52.295C52.2729 85.5656 52.2508 85.5648 52.2296 85.563H48.3711V88.1862C48.3711 88.3979 48.5036 88.5302 48.7157 88.5302H60.0376C60.2496 88.5302 60.3822 88.3979 60.3822 88.1862V85.9096C60.3822 85.6988 60.2496 85.5656 60.0376 85.5656Z"
                        fill="url(#paint6_linear_1231_9131)"
                      />
                      <path
                        d="M63.6981 75.5342H66.1906C66.4027 75.5342 66.5352 75.6665 66.5352 75.8782V88.187C66.5352 88.3987 66.4027 88.531 66.1906 88.531H63.6981C63.4861 88.531 63.3535 88.3987 63.3535 88.187V75.8782C63.3535 75.6665 63.4861 75.5342 63.6981 75.5342Z"
                        fill="url(#paint7_linear_1231_9131)"
                      />
                      <path
                        d="M84.0076 70.2655L82.1512 72.5906L82.1503 72.5914L78.1628 77.5714L75.855 80.4522C75.8223 80.4839 75.7914 80.5201 75.7605 80.5624L75.4256 80.9885L74.2222 82.5206C73.9297 82.8654 73.7451 83.3947 73.7451 83.8445V88.1859C73.7451 88.3976 73.6125 88.5299 73.3996 88.5299H70.9071C70.695 88.5299 70.5625 88.3976 70.5625 88.1859V70.3458C70.5625 70.1332 70.695 70.0009 70.9071 70.0009H73.3996C73.6125 70.0009 73.7451 70.1332 73.7451 70.3458V77.6773C73.7451 77.9419 73.7972 78.0477 73.9041 78.0477C73.9836 78.0477 74.0897 77.9948 74.2222 77.836L74.512 77.4753L78.374 72.6602L79.6349 71.0884L80.2949 70.2646C80.4274 70.1058 80.6395 70 80.8524 70H83.875C84.0871 70.0009 84.1401 70.1076 84.0076 70.2655Z"
                        fill="url(#paint8_linear_1231_9131)"
                      />
                      <path
                        d="M75.4277 80.9895L75.8571 80.4541C75.8244 80.4859 75.7926 80.522 75.7626 80.5635L75.4277 80.9895Z"
                        fill="#D3AEF4"
                      />
                      <path
                        d="M86.4468 88.2663L79.3696 79.1187L78.0884 80.7037L77.416 81.5354L82.6007 88.2672C82.7333 88.4259 82.9453 88.5318 83.1574 88.5318H86.286C86.4999 88.5309 86.5529 88.4251 86.4468 88.2663Z"
                        fill="url(#paint9_linear_1231_9131)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1231_9131"
                          x1="0"
                          y1="27.9997"
                          x2="107"
                          y2="27.9997"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#05DAC5" />
                          <stop offset="0.3585" stopColor="#5C6AF3" />
                          <stop offset="0.499" stopColor="#8F74D9" />
                          <stop offset="0.6491" stopColor="#CC42D3" />
                          <stop offset="1" stopColor="#FC176F" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1231_9131"
                          x1="29.2936"
                          y1="70.0015"
                          x2="29.2936"
                          y2="88.7954"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.1711" stopColor="#BC79AD" />
                          <stop offset="0.7698" stopColor="#8BE3F7" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1231_9131"
                          x1="41.0641"
                          y1="69.9538"
                          x2="43.4154"
                          y2="72.0939"
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
                          id="paint3_linear_1231_9131"
                          x1="42.751"
                          y1="88.5307"
                          x2="42.751"
                          y2="75.5339"
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
                          id="paint4_linear_1231_9131"
                          x1="64.9443"
                          y1="72.9662"
                          x2="64.9443"
                          y2="70.0015"
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
                          id="paint5_linear_1231_9131"
                          x1="53.8652"
                          y1="72.4957"
                          x2="46.0711"
                          y2="80.3032"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#4F84BD" />
                          <stop offset="0.4162" stopColor="#4F5BBD" />
                          <stop offset="1" stopColor="#8BE3F7" />
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear_1231_9131"
                          x1="48.3705"
                          y1="87.0471"
                          x2="60.3821"
                          y2="87.0471"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.0027933" stopColor="#8BE3F7" />
                          <stop offset="1" stopColor="#8BE3F7" />
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear_1231_9131"
                          x1="64.9443"
                          y1="75.5339"
                          x2="64.9443"
                          y2="88.5307"
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
                          id="paint8_linear_1231_9131"
                          x1="73.6601"
                          y1="85.1845"
                          x2="77.2329"
                          y2="70.526"
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
                          id="paint9_linear_1231_9131"
                          x1="81.9588"
                          y1="88.5306"
                          x2="81.9588"
                          y2="79.118"
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
                </Link>
                <ul className="flex items-center justify-center	space-x-[16px] mb-[15px]">
                  <li>
                    <a href="" title="">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.2353 18.6616C7.71055 18.9123 8.23985 19.0432 8.77715 19.043C10.5669 19.043 12.0279 17.6194 12.0939 15.845L12.1005 0H16.0538C16.0541 0.336542 16.0855 0.67234 16.1473 1.00316H13.2527V1.00371H17.2065C17.2059 2.32981 17.6866 3.61108 18.5592 4.60959L18.5604 4.61087C19.4506 5.1924 20.491 5.5016 21.5544 5.5006V6.3811C21.9265 6.4608 22.3113 6.50325 22.7071 6.50325V10.4576C20.7334 10.4599 18.809 9.84105 17.2065 8.68875V16.7234C17.2065 20.7355 13.9419 24 9.9293 24C8.93005 24.0002 7.9415 23.7941 7.0256 23.3944C6.11035 22.9951 5.28745 22.4112 4.60826 21.6792L4.60678 21.6782C2.73018 20.3606 1.5 18.1817 1.5 15.7202C1.5 11.7076 4.76453 8.4425 8.77715 8.4425C9.1053 8.44405 9.4329 8.46795 9.7578 8.51395V9.45005C9.78065 9.4496 9.80335 9.4488 9.82615 9.44805C9.86035 9.44685 9.89465 9.44565 9.9293 9.44565C10.2574 9.4472 10.585 9.4711 10.9099 9.5171V13.5534C10.5999 13.4561 10.2718 13.3995 9.9293 13.3995C9.0481 13.4005 8.2033 13.751 7.58025 14.3742C6.9572 14.9973 6.6068 15.8422 6.60595 16.7234C6.606 17.4193 6.82595 18.0975 7.23445 18.6611L7.2353 18.6616ZM3.13214 19.3199C3.46988 20.1998 3.9739 20.9981 4.60517 21.6765C3.96105 20.9872 3.46368 20.1855 3.13214 19.3199Z"
                          fill="url(#paint0_linear_890_4477)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_890_4477"
                            x1="7.84526"
                            y1="9.58415"
                            x2="11.8389"
                            y2="24.073"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#EAC2FF" />
                            <stop offset="1" stopColor="#1945D9" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="" title="">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.35544 12.4614C4.20408 11.4431 6.26766 10.5933 8.19578 9.73904C11.5129 8.33991 14.8432 6.96502 18.207 5.68501C18.8615 5.46691 20.0375 5.25362 20.1528 6.22354C20.0897 7.59645 19.8299 8.96133 19.6518 10.3262C19.1996 13.3277 18.6769 16.3189 18.1672 19.3105C17.9916 20.307 16.7433 20.8228 15.9446 20.1851C14.0251 18.8885 12.0907 17.6046 10.1957 16.2779C9.57495 15.6471 10.1506 14.7413 10.705 14.2909C12.286 12.7328 13.9627 11.4091 15.461 9.77047C15.8652 8.79443 14.671 9.61701 14.2771 9.86905C12.1127 11.3606 10.0013 12.9431 7.71932 14.254C6.5537 14.8956 5.19515 14.3473 4.03006 13.9892C2.9854 13.5567 1.4546 13.121 2.35534 12.4615L2.35544 12.4614Z"
                          fill="url(#paint0_linear_890_4478)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_890_4478"
                            x1="7.48924"
                            y1="11.4764"
                            x2="9.37348"
                            y2="20.8176"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#EAC2FF" />
                            <stop offset="1" stopColor="#1945D9" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/VILIK-107781338574941"
                      title="Facebook"
                      target="_blank"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.8008 14.3391 7.875 15.8297 7.875H17.3438V4.92188C17.3438 4.92188 15.9703 4.6875 14.6578 4.6875C11.9157 4.6875 10.125 6.3492 10.125 9.35625V12H7.07812V15.4688H10.125V23.8547C10.7367 23.9508 11.3625 24 12 24C12.6375 24 13.2633 23.9508 13.875 23.8547V15.4688H16.6711Z"
                          fill="url(#paint0_linear_890_4482)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_890_4482"
                            x1="10.1497"
                            y1="12.3997"
                            x2="14.9003"
                            y2="22.7678"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#EAC2FF" />
                            <stop offset="1" stopColor="#1945D9" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@vilik.official"
                      title="Tiktok"
                      target="_blank"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.4828 8.49023L11.5229 9.13903L10.8545 9.05958C8.4217 8.75505 6.2963 7.72228 4.49172 5.98775L3.60948 5.12711L3.38224 5.76266C2.90102 7.17941 3.20847 8.6756 4.21101 9.68189C4.7457 10.238 4.6254 10.3174 3.70305 9.98643C3.38224 9.8805 3.10153 9.80106 3.07479 9.84078C2.98122 9.93347 3.30204 11.1384 3.55601 11.615C3.90356 12.2771 4.61203 12.9259 5.38733 13.3098L6.04233 13.6144L5.26702 13.6276C4.51846 13.6276 4.49172 13.6409 4.57193 13.9189C4.83927 14.7795 5.89529 15.6932 7.07161 16.0904L7.90038 16.3684L7.17854 16.7921C6.10916 17.4012 4.85264 17.7455 3.59612 17.7719C2.99459 17.7852 2.5 17.8381 2.5 17.8779C2.5 18.0103 4.13081 18.7517 5.07988 19.043C7.92711 19.9037 11.309 19.5329 13.8488 18.0632C15.6534 17.0172 17.458 14.9384 18.3001 12.9259C18.7546 11.8534 19.2091 9.89374 19.2091 8.95366C19.2091 8.34459 19.2492 8.26514 19.9978 7.53691C20.4389 7.11321 20.8533 6.64978 20.9335 6.51738C21.0671 6.2658 21.0538 6.2658 20.372 6.4909C19.2358 6.88811 19.0754 6.83515 19.6368 6.23932C20.0512 5.81562 20.5458 5.04766 20.5458 4.82257C20.5458 4.78285 20.3453 4.84905 20.1181 4.96822C19.8775 5.10063 19.3428 5.29924 18.9417 5.4184L18.2199 5.64349L17.5649 5.20655C17.204 4.96822 16.696 4.70341 16.4287 4.62396C15.747 4.43859 14.7043 4.46507 14.0894 4.67693C12.4185 5.27275 11.3625 6.80867 11.4828 8.49023Z"
                          fill="url(#paint0_linear_890_4486)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_890_4486"
                            x1="8.03529"
                            y1="10.4901"
                            x2="9.8872"
                            y2="19.8679"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#EAC2FF" />
                            <stop offset="1" stopColor="#1945D9" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                  </li>
                </ul>
                <p className="text-gradient text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px]  mb-[4px] lg:mb-[15px] font-semibold">
                  A new native blockchain. Powered by users.
                </p>

                <div className="text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center text-zinc-500">
                  Copyright © 2022 Vilik All rights reserved
                </div>
              </div>
            </div>

            {/* section overlay */}
            <svg
              width="375"
              height="667"
              viewBox="0 0 375 667"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden absolute top-0 left-0"
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
                    fill-opacity="0.5"
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
                    fill-opacity="0.44"
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
                      fill-opacity="0.71"
                    />
                  </g>
                  <g filter="url(#filter5_f_1220_8226)">
                    <ellipse
                      rx="201.591"
                      ry="118.908"
                      transform="matrix(0.652511 0.757779 -0.783038 0.621973 45.7418 269.952)"
                      fill="#E84DFC"
                      fill-opacity="0.2"
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
                      fill-opacity="0.71"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              className="lg:hidden absolute bottom-0 right-0"
            >
              <g filter="url(#filter0_f_1220_8235)">
                <circle
                  cx="266.785"
                  cy="348.577"
                  r="97.5742"
                  transform="rotate(33.1841 266.785 348.577)"
                  fill="#9021AC"
                  fill-opacity="0.75"
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
                  fill-opacity="0.35"
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            {/* end of section overlay */}
          </div>
        </div>
      </div>

      <div className="full-video">
        <video autoPlay playsInline muted loop>
          <source src="/20220520-112541-839.mp4" type="video/mp4" />
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
        className="overlay-circle overlay-circle-6 absolute w-full h-auto top-2/4  left-2/4 -translate-x-2/4 -translate-y-2/4 z-10 opacity-0"
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

      {/* end of overlay */}
    </main>
  );
}
