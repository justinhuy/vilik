import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// import Swiper core and required modules
import { Navigation } from "swiper";

import FadeIn from "../animation/FadeIn";
import FadeZoomIn from "../animation/FadeZoomIn";
import Moving from "../animation/Moving";
import Mask from "../animation/Mask";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  const [active, setActive] = useState("problem");
  const [scrollY, setScrollY] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [section, setSection] = useState(false);

  // Active animate section once time
  const [animatedAboutUs, setAnimateAboutUs] = useState(false);
  const [animatedNetwork, setAnimateNetwork] = useState(false);
  const [animatedFeatures, setAnimateFeatures] = useState(false);
  const [animatedValues, setAnimateValues] = useState(false);
  const [animatedEco, setAnimateEco] = useState(false);
  const [animatedMonetaryFlow, setAnimateMonetaryFlow] = useState(false);
  const [animatedTokenomics, setAnimateTokenomics] = useState(false);
  const [animatedChart, setAnimateChart] = useState(false);
  const [animatedRoadmap, setAnimateRoadmap] = useState(false);
  const [animatedPartners, setAnimatePartners] = useState(false);
  const [animatedPeople, setAnimatePeople] = useState(false);
  const [animatedWhitepaper, setAnimateWhitepaper] = useState(false);

  const tokenomicsData = [
    {
      stage: "SEED ROUND",
      total: "10l",
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
      vestingPeriod:
        "3% five days after TGE, Cliff 6 Months, 6% Monthly Unlock",
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

  const scrollToElement = (e, id) => {
    e.preventDefault();
    const ele = document.getElementById(id);
    if (ele) {
      window.scrollTo({
        top: ele.offsetTop - 72,
        behavior: "smooth",
      });
    }
  };

  const isElementXPercentInViewport = function (el, percentVisible) {
    let rect = el.getBoundingClientRect(),
      windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

    return !(
      Math.floor(100 - ((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100) <
        percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) <
        percentVisible
    );
  };

  const onScroll = (event) => {
    const { pageYOffset } = window;
    setScrollY(pageYOffset);

    if (pageYOffset >= document.getElementById("whitepaper").offsetTop - 72) {
      setSection("whitepaper");
    } else if (
      pageYOffset >=
      document.getElementById("people").offsetTop - 150
    ) {
      setSection("people");
    } else if (
      pageYOffset >=
      document.getElementById("partners").offsetTop - 150
    ) {
      setSection("partners");
    } else if (
      pageYOffset >=
      document.getElementById("roadmap").offsetTop - 150
    ) {
      setSection("roadmap");
    } else if (
      pageYOffset >=
      document.getElementById("chart").offsetTop - 150
    ) {
      setSection("chart");
    } else if (
      pageYOffset >=
      document.getElementById("tokenomics").offsetTop - 150
    ) {
      setSection("tokenomics");
    } else if (
      pageYOffset >=
      document.getElementById("monetary-flow").offsetTop - 150
    ) {
      setSection("monetary-flow");
    } else if (pageYOffset >= document.getElementById("eco").offsetTop - 150) {
      setSection("eco");
    } else if (
      pageYOffset >=
      document.getElementById("values").offsetTop - 150
    ) {
      setSection("values");
    } else if (
      pageYOffset >=
      document.getElementById("features").offsetTop - 150
    ) {
      setSection("features");
    } else if (
      pageYOffset >=
      document.getElementById("about-us").offsetTop - 150
    ) {
      setSection("about-us");
    } else {
      setSection("");
    }

    if (isElementXPercentInViewport(document.getElementById("about-us"), 30)) {
      setAnimateAboutUs(true);
    }

    if (isElementXPercentInViewport(document.getElementById("network"), 30)) {
      setAnimateNetwork(true);
    }

    if (isElementXPercentInViewport(document.getElementById("features"), 30)) {
      setAnimateFeatures(true);
    }

    if (isElementXPercentInViewport(document.getElementById("values"), 30)) {
      setAnimateValues(true);
    }

    if (isElementXPercentInViewport(document.getElementById("eco"), 30)) {
      setAnimateEco(true);
    }

    if (
      isElementXPercentInViewport(document.getElementById("monetary-flow"), 30)
    ) {
      setAnimateMonetaryFlow(true);
    }

    if (
      isElementXPercentInViewport(document.getElementById("tokenomics"), 30)
    ) {
      setAnimateTokenomics(true);
    }

    if (isElementXPercentInViewport(document.getElementById("chart"), 30)) {
      setAnimateChart(true);
    }

    if (isElementXPercentInViewport(document.getElementById("roadmap"), 30)) {
      setAnimateRoadmap(true);
    }

    if (isElementXPercentInViewport(document.getElementById("partners"), 30)) {
      setAnimatePartners(true);
    }

    if (isElementXPercentInViewport(document.getElementById("people"), 30)) {
      setAnimatePeople(true);
    }

    if (
      isElementXPercentInViewport(document.getElementById("whitepaper"), 30)
    ) {
      setAnimateWhitepaper(true);
    }
  };

  useEffect(() => {
    setScrollY(window.pageYOffset);

    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak
    () => window.removeEventListener("scroll", onScroll, { passive: true });
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FadeIn delay={1.2} y={-50} duration={1.5}>
        <header
          className={`h-[72px] py-[16px] fixed top-0 w-full z-20 ${
            scrollY > 50 ? "scrolling" : ""
          }`}
        >
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <Link href="/">
                <a className="text-white">
                  <svg
                    width="77"
                    height="40"
                    viewBox="0 0 77 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.2667 20.7333L33.4 40L0 20.7333H24.2667ZM33.4 0L0 19.2667H24.2667L33.4 0ZM29 20C29 16.2667 31.2 13.0667 34.3333 11.5333V1.46667L25.5333 20L34.2667 38.5333V28.4667C31.2 26.9333 29 23.7333 29 20ZM38.3333 12.1333C37.4 12.1333 36.5333 12.2667 35.7333 12.6C35.2 12.8 34.7333 13 34.2667 13.2667C31.9333 14.6667 30.4 17.2 30.4 20.0667C30.4 22.9333 31.9333 25.4667 34.2667 26.8667C34.7333 27.1333 35.2 27.3333 35.7333 27.5333C36.5333 27.8 37.4 28 38.3333 28C39.2667 28 40.1333 27.8667 40.9333 27.5333C41.4667 27.3333 41.9333 27.1333 42.4 26.8667C44.7333 25.4667 46.2667 22.9333 46.2667 20.0667C46.2667 17.2 44.7333 14.6667 42.4 13.2667C41.9333 13 41.4667 12.8 40.9333 12.6C40.1333 12.2667 39.2667 12.1333 38.3333 12.1333ZM52.4667 20.7333H76.7333L43.3333 40L52.4667 20.7333ZM76.7333 19.2667L43.3333 0L52.4 19.2667H76.7333ZM47.7333 20C47.7333 23.7333 45.5333 26.9333 42.4 28.4667V38.6L51.2 20L42.4 1.46667V11.6C45.5333 13.0667 47.7333 16.2667 47.7333 20Z"
                      fill="url(#paint0_linear_211_1134)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_211_1134"
                        x1="92"
                        y1="43.5"
                        x2="-26"
                        y2="44.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#05DAC5" />
                        <stop offset="0.277086" stopColor="#4354F2" />
                        <stop offset="0.710545" stopColor="#F526FF" />
                        <stop offset="1" stopColor="#FC176F" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </Link>

              <ul className="flex space-x-[33px] text-[14px] leading-[21px] font-medium">
                <li>
                  <a
                    href="#about-us"
                    title="About us"
                    className={`text-white transition-all	text-menu relative ${
                      section === "about-us"
                        ? "text-gradient-blue-01 active"
                        : ""
                    }`}
                    onClick={(e) => scrollToElement(e, "about-us")}
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    title="Features"
                    className={`text-white transition-all	text-menu relative ${
                      section === "features"
                        ? "text-gradient-blue-01 active"
                        : ""
                    }`}
                    onClick={(e) => scrollToElement(e, "features")}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#values"
                    title="Values"
                    className={`text-white transition-all	text-menu relative ${
                      section === "values" ? "text-gradient-blue-01 active" : ""
                    }`}
                    onClick={(e) => scrollToElement(e, "values")}
                  >
                    Values
                  </a>
                </li>
                <li>
                  <a
                    href="#eco"
                    title="Ecosystem &amp; Tokenomics"
                    className={`text-white transition-all	text-menu relative ${
                      section === "eco" ? "text-gradient-blue-01 active" : ""
                    }`}
                    onClick={(e) => scrollToElement(e, "eco")}
                  >
                    Ecosystem &amp; Tokenomics
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    title="Roadmap"
                    className={`text-white transition-all	text-menu relative ${
                      section === "roadmap"
                        ? "text-gradient-blue-01 active"
                        : ""
                    }`}
                    onClick={(e) => scrollToElement(e, "roadmap")}
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#partners"
                    title="Partners"
                    className={`text-white transition-all	text-menu relative ${
                      section === "partners"
                        ? "text-gradient-blue-01 active"
                        : ""
                    }`}
                    onClick={(e) => scrollToElement(e, "partners")}
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#people"
                    title="People"
                    className={`text-white transition-all	text-menu relative ${
                      section === "people" ? "text-gradient-blue-01 active" : ""
                    }`}
                    onClick={(e) => scrollToElement(e, "people")}
                  >
                    People
                  </a>
                </li>
                <li>
                  <a
                    href="#whitepaper"
                    title="Whitepaper"
                    className={`text-white transition-all	text-menu relative ${
                      section === "whitepaper"
                        ? "text-gradient-blue-01 active"
                        : ""
                    }`}
                    onClick={(e) => scrollToElement(e, "whitepaper")}
                  >
                    Whitepaper
                  </a>
                </li>
              </ul>

              <button
                type="button"
                className="h-[37px]  px-[16px] rounded-[19px] text-white inline-flex items-center border border-zinc-500"
              >
                Contact us
              </button>
            </div>
          </div>
        </header>
      </FadeIn>

      <Mask
        callback={() => {
          setIsReady(true);
        }}
      />

      <main
        className={`relative z-10 pt-[72px] ${isReady ? "is-ready" : ""}`}
        style={{
          backgroundImage: "url(/bg-dot.png)",
        }}
      >
        <svg
          width="831"
          height="831"
          viewBox="0 0 831 831"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[-138px] top-[-126px]"
        >
          <g filter="url(#filter0_f_12_5732)">
            <circle
              cx="415.5"
              cy="415.5"
              r="252.5"
              fill="#742A9A"
              fillOpacity="0.51"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_12_5732"
              x="0.0967712"
              y="0.0967712"
              width="830.806"
              height="830.806"
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
                result="effect1_foregroundBlur_12_5732"
              />
            </filter>
          </defs>
        </svg>

        <section className="text-center pt-[57px] relative z-10">
          <FadeZoomIn delay={0.7} y={100} duration={2}>
            <div className="relative max-w-[1425px] mx-auto">
              {/* Icons */}
              <div className="absolute h-auto w-[125px] left-[192px] top-[256px]">
                <Moving yFrom={10} yTo={-10} duration={5}>
                  <img
                    src="/hero-banner/icon-1.png"
                    className="h-auto w-full"
                  />
                </Moving>
              </div>

              <div className="absolute h-auto w-[160px] left-[257px] top-[372px]">
                <Moving yFrom={-10} yTo={10} duration={3}>
                  <img
                    src="/hero-banner/icon-2.png"
                    className="h-auto w-full"
                  />
                </Moving>
              </div>

              <div className="absolute h-auto w-[120px] left-[125px] top-[526px]">
                <Moving xFrom={-10} xTo={10} yFrom={-10} yTo={10} duration={7}>
                  <img
                    src="/hero-banner/icon-3.png"
                    className="h-auto w-full"
                  />
                </Moving>
              </div>

              <div className="absolute h-auto w-[586px] left-[186px] top-[435px]">
                <Moving
                  xFrom={0}
                  xTo={30}
                  yFrom={0}
                  yTo={10}
                  duration={5}
                  rotateFrom={1}
                  rotateTo={-1}
                >
                  <img
                    src="/hero-banner/icon-4.png"
                    className="h-auto w-full"
                  />
                </Moving>
              </div>

              <div className="absolute h-auto w-[120px] left-[870px] top-[756px]">
                <Moving xFrom={-20} xTo={-20} yFrom={10} yTo={-20} duration={3}>
                  <img
                    src="/hero-banner/icon-5.png"
                    className="h-auto w-full"
                  />
                </Moving>
              </div>

              <div className="absolute h-auto w-[255px] right-[132px] top-[643px]">
                {/* <Moving xFrom={-10} xTo={10} yFrom={-10} yTo={10} duration={7}> */}
                <img src="/hero-banner/icon-6.png" className="h-auto w-full" />
                {/* </Moving> */}
              </div>

              <div className="absolute h-auto w-[120px] right-[313px] top-[552px]">
                <Moving xFrom={-10} xTo={10} yFrom={-10} yTo={10} duration={4}>
                  <img
                    src="/hero-banner/icon-7.png"
                    className="h-auto w-full"
                  />
                </Moving>
              </div>

              <div className="absolute h-auto w-[160px] right-[96px] top-[472px]">
                <Moving yFrom={-20} yTo={20} duration={7}>
                  <img
                    src="/hero-banner/icon-8.png"
                    className="h-auto w-full"
                  />
                </Moving>
              </div>

              <div className="absolute h-auto w-[85px] right-[308px] top-[364px]">
                <Moving xFrom={-10} xTo={10} yFrom={-10} yTo={10} duration={5}>
                  <img
                    src="/hero-banner/icon-9.png"
                    className="h-auto w-full"
                  />
                </Moving>
              </div>
              {/* End of Icons */}
              <img
                src="/hero-banner/earth-grid.png"
                className="w-full h-auto max-auto"
              />
            </div>
          </FadeZoomIn>

          <div className="absolute z-10 top-[57px] left-0 w-full">
            <div className="container mx-auto">
              <div className="overflow-hidden mb-[24px]">
                <h1 className="text-[56px] leading-[67px] font-semibold line">
                  VILIK
                </h1>
              </div>
              <div className="overflow-hidden mb-[8px] line">
                <h3 className="text-[40px] leading-[48px] font-medium">
                  Fast. Seamless. Unconventional <br />
                  streaming and earning platform
                </h3>
              </div>
              <div className="overflow-hidden line">
                <p className="max-w-[588px] mx-auto text-zinc-100">
                  Where you can stream and earn as a streamer, a viewer, a
                  gamer, a seller, an educator, or any combination—all you need
                  is Vilik and the rest is up to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about-us"
          className={`text-[16px] leading-[24px] relative text-zinc-300 relative ${
            animatedAboutUs ? "in-view" : ""
          }`}
        >
          <div className="container relative z-10 mx-auto">
            <div className="flex items-center gap-[32px] h-[777px]">
              <div className="w-6/12 relative z-10">
                <h4 className="btn-animate rounded-[38px] h-[35px] inline-flex items-center justify-center px-[18px] mb-[8px]">
                  <span className="circle"></span>
                  <span className="layer"></span>
                  <span className="txt whitespace-nowrap">ABOUT US</span>
                </h4>
                <h5 className="text-animate text-gradient-blue text-[40px] mb-[32px] leading-[48px]">
                  Cutting-edge multi-purpose SocialFi streaming platform
                </h5>
                <p className="desc-animate text-zinc-300">
                  In the era of high interaction, edutainment and a combination
                  between entertainment and earning, Vilik proudly introduces a
                  high-end video streaming platform built on the BSC network.
                  Inhere, content creators and consumers can both play and earn
                  cryptocurrency for their actions.
                </p>
              </div>

              <div className="box w-6/12 relative">
                <div className="relative z-10">
                  <img src="/about-us.png" alt="About us" className="" />
                  <div className="absolute h-auto w-[105px] left-[177px] top-[61px]">
                    <Moving
                      xFrom={0}
                      xTo={-30}
                      yFrom={20}
                      yTo={-30}
                      duration={7}
                    >
                      <img
                        src="/about-us/icon-1.png"
                        className="h-auto w-full"
                      />
                    </Moving>
                  </div>
                  <div className="absolute h-auto w-[85px] left-[110px] bottom-[28px]">
                    <Moving yFrom={10} yTo={-10} duration={5}>
                      <img
                        src="/about-us/icon-2.png"
                        className="h-auto w-full"
                      />
                    </Moving>
                  </div>
                  <div className="absolute h-auto w-[70px] right-[75px] bottom-[85px]">
                    <Moving
                      yFrom={20}
                      yTo={-20}
                      xFrom={0}
                      xTo={20}
                      duration={5}
                    >
                      <img
                        src="/about-us/icon-4.png"
                        className="h-auto w-full"
                      />
                    </Moving>
                  </div>
                  <div className="absolute h-auto w-[85px] right-[70px] top-[78px]">
                    <Moving yFrom={-10} yTo={10} duration={7}>
                      <img
                        src="/about-us/icon-3.png"
                        className="h-auto w-full"
                      />
                    </Moving>
                  </div>
                </div>

                <svg
                  width="1466"
                  height="1427"
                  viewBox="0 0 1466 1427"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-2/4 -translate-x-2/4"
                  style={{
                    top: "-110%",
                  }}
                >
                  <g opacity="0.66">
                    <path
                      d="M345.576 467.075C290.065 674.245 413.038 887.088 620.243 942.473C827.448 997.857 1040.42 874.811 1095.93 667.64C1151.44 460.47 1028.47 247.627 821.267 192.243C614.061 136.858 401.088 259.904 345.576 467.075Z"
                      fill="url(#paint0_radial_27_9958)"
                    />
                    <g filter="url(#filter0_f_27_9958)">
                      <ellipse
                        rx="312.271"
                        ry="430.067"
                        transform="matrix(-0.260847 0.96538 -0.96546 -0.26055 611.512 657.892)"
                        fill="#041128"
                      />
                    </g>
                    <g filter="url(#filter1_f_27_9958)">
                      <ellipse
                        rx="312.271"
                        ry="205.551"
                        transform="matrix(-0.260847 0.96538 -0.96546 -0.26055 870.894 494.959)"
                        fill="#041128"
                      />
                    </g>
                  </g>
                  <g filter="url(#filter2_f_27_9958)">
                    <ellipse
                      cx="799.967"
                      cy="731.984"
                      rx="361.43"
                      ry="397.752"
                      transform="rotate(18.527 799.967 731.984)"
                      fill="#320A70"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_27_9958"
                      x="0.452606"
                      y="148.34"
                      width="1222.12"
                      height="1019.1"
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
                        result="effect1_foregroundBlur_27_9958"
                      />
                    </filter>
                    <filter
                      id="filter1_f_27_9958"
                      x="468.468"
                      y="0.873993"
                      width="804.853"
                      height="988.17"
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
                        result="effect1_foregroundBlur_27_9958"
                      />
                    </filter>
                    <filter
                      id="filter2_f_27_9958"
                      x="134.606"
                      y="37.6426"
                      width="1330.72"
                      height="1388.68"
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
                        result="effect1_foregroundBlur_27_9958"
                      />
                    </filter>
                    <radialGradient
                      id="paint0_radial_27_9958"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(211.659 348.035) rotate(24.5354) scale(932.183 932.364)"
                    >
                      <stop
                        offset="0.0755871"
                        stopColor="#C82DF4"
                        stopOpacity="0.71"
                      />
                      <stop offset="0.500996" stopColor="#1F1298" />
                      <stop offset="1" stopColor="#621EA2" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <svg
            width="1589"
            height="1806"
            viewBox="0 0 1589 1806"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-[-275px]"
          >
            <g filter="url(#filter0_f_26_9954)">
              <ellipse
                cx="857.423"
                cy="1237.26"
                rx="447.524"
                ry="239.473"
                transform="rotate(18.527 857.423 1237.26)"
                fill="#E84DFC"
                fillOpacity="0.2"
              />
            </g>
            <g filter="url(#filter1_f_26_9954)">
              <ellipse
                cx="752.326"
                cy="736.02"
                rx="353.148"
                ry="333.735"
                transform="rotate(18.3691 752.326 736.02)"
                fill="#3D17E3"
                fillOpacity="0.41"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_26_9954"
                x="126.25"
                y="669.313"
                width="1462.35"
                height="1135.9"
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
                  result="effect1_foregroundBlur_26_9954"
                />
              </filter>
              <filter
                id="filter1_f_26_9954"
                x="0.963867"
                y="0.214844"
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
                  result="effect1_foregroundBlur_26_9954"
                />
              </filter>
            </defs>
          </svg>
        </section>

        <section
          id="network"
          className={`text-[16px] leading-[24px] relative text-zinc-300 mb-[48px] ${
            animatedNetwork ? "in-view" : ""
          }`}
        >
          <div className="container relative z-10 mx-auto">
            <h5 className="text-animate text-gradient-blue text-[40px] mb-[32px] leading-[48px]">
              What is Vilik&apos;s network
            </h5>
            <div className="box bg-white-blur-003  p-[20px]">
              <div className="relative">
                <img src="/network-flow.png" />

                <svg
                  width="32"
                  height="2"
                  viewBox="0 0 32 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[227px] left-[597px] w-[32px]"
                >
                  <path
                    d="M32 1L2.98023e-08 0.999997"
                    stroke="url(#paint0_linear_12_6084)"
                    strokeWidth="0.645099"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_6084"
                      x1="22.4255"
                      y1="0.600659"
                      x2="22.4404"
                      y2="-0.107241"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C4D2FF" />
                      <stop offset="1" stopColor="#5179FF" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  width="53"
                  height="2"
                  viewBox="0 0 53 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[231px] left-[743px] w-[53px]"
                >
                  <path
                    d="M53 1H-5.96046e-07"
                    stroke="url(#paint0_linear_12_6037)"
                    strokeWidth="0.645099"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_6037"
                      x1="37.1422"
                      y1="0.60066"
                      x2="37.1512"
                      y2="-0.107441"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C4D2FF" />
                      <stop offset="1" stopColor="#5179FF" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  width="56"
                  height="2"
                  viewBox="0 0 56 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[102px] left-[886px] w-[56px]"
                >
                  <path
                    d="M55.9897 1L0.989743 1"
                    stroke="url(#paint0_linear_12_6044)"
                    strokeWidth="0.645099"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_6044"
                      x1="39.5335"
                      y1="0.600662"
                      x2="39.5422"
                      y2="-0.107448"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C4D2FF" />
                      <stop offset="1" stopColor="#5179FF" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  width="56"
                  height="2"
                  viewBox="0 0 56 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[156px] left-[886px] w-[56px]"
                >
                  <path
                    d="M55.9897 1L0.989743 1"
                    stroke="url(#paint0_linear_12_6044)"
                    strokeWidth="0.645099"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_6044"
                      x1="39.5335"
                      y1="0.600662"
                      x2="39.5422"
                      y2="-0.107448"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C4D2FF" />
                      <stop offset="1" stopColor="#5179FF" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  width="56"
                  height="2"
                  viewBox="0 0 56 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[209px] left-[886px] w-[56px]"
                >
                  <path
                    d="M55.9897 1L0.989743 1"
                    stroke="url(#paint0_linear_12_6044)"
                    strokeWidth="0.645099"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_6044"
                      x1="39.5335"
                      y1="0.600662"
                      x2="39.5422"
                      y2="-0.107448"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C4D2FF" />
                      <stop offset="1" stopColor="#5179FF" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  width="56"
                  height="2"
                  viewBox="0 0 56 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[259px] left-[886px] w-[56px]"
                >
                  <path
                    d="M55.9897 1L0.989743 1"
                    stroke="url(#paint0_linear_12_6044)"
                    strokeWidth="0.645099"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_6044"
                      x1="39.5335"
                      y1="0.600662"
                      x2="39.5422"
                      y2="-0.107448"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C4D2FF" />
                      <stop offset="1" stopColor="#5179FF" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  width="56"
                  height="2"
                  viewBox="0 0 56 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[102px] left-[1023px] w-[56px]"
                >
                  <path
                    d="M55.9897 1L0.989743 1"
                    stroke="url(#paint0_linear_12_6044)"
                    strokeWidth="0.645099"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_6044"
                      x1="39.5335"
                      y1="0.600662"
                      x2="39.5422"
                      y2="-0.107448"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C4D2FF" />
                      <stop offset="1" stopColor="#5179FF" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  width="56"
                  height="2"
                  viewBox="0 0 56 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[152px] left-[1023px] w-[56px]"
                >
                  <path
                    d="M55.9897 1L0.989743 1"
                    stroke="url(#paint0_linear_12_6044)"
                    strokeWidth="0.645099"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_6044"
                      x1="39.5335"
                      y1="0.600662"
                      x2="39.5422"
                      y2="-0.107448"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C4D2FF" />
                      <stop offset="1" stopColor="#5179FF" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  width="56"
                  height="2"
                  viewBox="0 0 56 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[202px] left-[1023px] w-[56px]"
                >
                  <path
                    d="M55.9897 1L0.989743 1"
                    stroke="url(#paint0_linear_12_6044)"
                    strokeWidth="0.645099"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_6044"
                      x1="39.5335"
                      y1="0.600662"
                      x2="39.5422"
                      y2="-0.107448"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C4D2FF" />
                      <stop offset="1" stopColor="#5179FF" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  width="56"
                  height="2"
                  viewBox="0 0 56 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[252px] left-[1023px] w-[56px]"
                >
                  <path
                    d="M55.9897 1L0.989743 1"
                    stroke="url(#paint0_linear_12_6044)"
                    strokeWidth="0.645099"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_6044"
                      x1="39.5335"
                      y1="0.600662"
                      x2="39.5422"
                      y2="-0.107448"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C4D2FF" />
                      <stop offset="1" stopColor="#5179FF" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  width="109"
                  height="308"
                  viewBox="0 0 109 308"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[66px] left-[633px] w-[109px]"
                >
                  <rect
                    x="0.734171"
                    y="0.957315"
                    width="107.932"
                    height="306.495"
                    rx="9.35394"
                    stroke="url(#paint0_linear_12_5787)"
                    strokeWidth="0.645099"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_5787"
                      x1="32.8985"
                      y1="123.288"
                      x2="-56.3747"
                      y2="169.926"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C4D2FF" />
                      <stop offset="1" stopColor="#5179FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="94"
                  height="308"
                  viewBox="0 0 94 308"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[66px] left-[794px] w-[94px]"
                >
                  <rect
                    x="0.595987"
                    y="0.970011"
                    width="92.5858"
                    height="306.15"
                    rx="9.35394"
                    stroke="url(#paint0_linear_12_5811)"
                    strokeWidth="0.645099"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_5811"
                      x1="28.1686"
                      y1="123.163"
                      x2="-53.0315"
                      y2="159.629"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C4D2FF" />
                      <stop offset="1" stopColor="#5179FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="85"
                  height="241"
                  viewBox="0 0 85 241"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[66px] left-[940px] w-[86px]"
                >
                  <rect
                    x="0.742472"
                    y="0.957315"
                    width="83.3908"
                    height="239.564"
                    rx="9.35394"
                    stroke="url(#paint0_linear_12_5867)"
                    strokeWidth="0.645099"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_5867"
                      x1="25.5638"
                      y1="96.5596"
                      x2="-43.8382"
                      y2="132.441"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C4D2FF" />
                      <stop offset="1" stopColor="#5179FF" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  width="84"
                  height="241"
                  viewBox="0 0 84 241"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[66px] left-[1077px] w-[84px]"
                >
                  <rect
                    x="1.20439"
                    y="0.970011"
                    width="81.9034"
                    height="239.564"
                    rx="9.35394"
                    stroke="url(#paint0_linear_12_5874)"
                    strokeWidth="0.645099"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_5874"
                      x1="25.5807"
                      y1="96.5723"
                      x2="-43.1012"
                      y2="131.453"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C4D2FF" />
                      <stop offset="1" stopColor="#5179FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <svg
            width="2250"
            height="1214"
            viewBox="0 0 2250 1214"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-2/4 top-[-40px] -translate-x-2/4"
          >
            <g opacity="0.5" filter="url(#filter0_f_25_9951)">
              <ellipse
                rx="359.472"
                ry="194.3"
                transform="matrix(0.989582 -0.143967 0.322788 0.946471 844.12 503.652)"
                fill="#3D17E3"
              />
            </g>
            <g opacity="0.5" filter="url(#filter1_f_25_9951)">
              <ellipse
                rx="335.166"
                ry="143.295"
                transform="matrix(0.999758 -0.0219991 0.0515146 0.998672 485.467 594.221)"
                fill="#00F0FF"
                fillOpacity="0.44"
              />
            </g>
            <g filter="url(#filter2_f_25_9951)">
              <ellipse
                rx="171.692"
                ry="145.935"
                transform="matrix(0.919621 0.392806 -0.707569 0.706644 1550.68 633.249)"
                fill="#842A9A"
                fillOpacity="0.53"
              />
            </g>
            <g filter="url(#filter3_f_25_9951)">
              <ellipse
                rx="229.792"
                ry="195.318"
                transform="matrix(0.919621 0.392807 -0.707569 0.706644 1834.05 541.401)"
                fill="#68268A"
                fillOpacity="0.51"
              />
            </g>
            <g filter="url(#filter4_f_25_9951)">
              <ellipse
                rx="251.372"
                ry="185.166"
                transform="matrix(0.928486 0.371368 -0.283306 0.95903 1704.25 607.962)"
                fill="#00F0FF"
                fillOpacity="0.1"
              />
            </g>
            <g opacity="0.4" filter="url(#filter5_f_25_9951)">
              <ellipse
                rx="283.071"
                ry="197.966"
                transform="matrix(0.932793 0.360413 -0.274415 0.961611 1422.37 685.276)"
                fill="#175DE3"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_25_9951"
                x="171.039"
                y="0.754242"
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
                  result="effect1_foregroundBlur_25_9951"
                />
              </filter>
              <filter
                id="filter1_f_25_9951"
                x="0.298828"
                y="300.922"
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
                  result="effect1_foregroundBlur_25_9951"
                />
              </filter>
              <filter
                id="filter2_f_25_9951"
                x="1199.1"
                y="347.113"
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
                  result="effect1_foregroundBlur_25_9951"
                />
              </filter>
              <filter
                id="filter3_f_25_9951"
                x="1418.62"
                y="213.563"
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
                  result="effect1_foregroundBlur_25_9951"
                />
              </filter>
              <filter
                id="filter4_f_25_9951"
                x="1314.98"
                y="257.299"
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
                  result="effect1_foregroundBlur_25_9951"
                />
              </filter>
              <filter
                id="filter5_f_25_9951"
                x="840.934"
                y="157.447"
                width="1162.87"
                height="1055.66"
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
                  result="effect1_foregroundBlur_25_9951"
                />
              </filter>
            </defs>
          </svg>
        </section>

        <section
          id="features"
          className={`mb-[72px] relative ${animatedFeatures ? "in-view" : ""}`}
        >
          <div className="container mx-auto relative">
            <div className="flex items-center gap-[32px] mb-[32px] relative z-10">
              <div className="w-8/12">
                <h5 className="text-animate text-gradient-blue text-[40px] leading-[48px] mb-[24px]">
                  Features
                </h5>
                <p className="desc-animate text-zinc-300">
                  Nowadays, other&apos;s platforms with central data network
                  (CDN) is based on centralized structures for delivery video,
                  video storage, traffic and routing are concentrated at the CDN
                  center. Beside of that, CDN have these problems; bandwidth
                  issue on high traffic affect videos quality and highly cost.
                  To solve the problems mentioned above, Vilik Network was
                  created to adopts a decentralized Peer-to-peer (P2P)
                  architecture, this network structure operates on the same
                  principle as BitTorrent where users can share their reduntdant
                  computing and bandwidth resource as becoming the nodes(peers)
                  and will be linked as distribution servers. This proposed
                  network architecture improves the quality of stream delivery,
                  high resolution and reduce dramatic network costs for
                  bandwidth.
                </p>
              </div>

              <div className="box w-4/12">
                <img src="/features.png" alt="Features" />
              </div>
            </div>

            <div className="box grid grid-cols-3 relative z-10">
              <div className="h-auto bg-white-blur p-[32px] mb-[16px] border-r-blur">
                <div className="w-[64px] h-[64px] mb-[24px] flex items-center justify-center relative">
                  <svg
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                  >
                    <path
                      d="M2 34C2 16.3269 16.3269 2 34 2V2C51.6731 2 66 16.3269 66 34V34C66 51.6731 51.6731 66 34 66V66C16.3269 66 2 51.6731 2 34V34Z"
                      fill="#27272A"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M34 64C17.4315 64 4 50.5685 4 34H0C0 52.7777 15.2223 68 34 68V64ZM64 34C64 50.5685 50.5685 64 34 64V68C52.7777 68 68 52.7777 68 34H64ZM34 4C50.5685 4 64 17.4315 64 34H68C68 15.2223 52.7777 0 34 0V4ZM34 0C15.2223 0 0 15.2223 0 34H4C4 17.4315 17.4315 4 34 4V0Z"
                      fill="url(#paint0_linear_10_2220)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_10_2220"
                        x1="2"
                        y1="24.1245"
                        x2="64.4278"
                        y2="42.8624"
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
                <h6 className="text-[20px] leading-[28px] mb-[16px] font-semibold">
                  Platform built on BSC Network
                </h6>
                <p className="text-[#DCDCDC]">
                  The innovation generated by Vilik lies in the ecosystem that
                  combines the video live streaming function and social media
                  through the interaction with the newly born crypto and VIK
                  (crypto token).
                </p>
              </div>
              <div className="h-auto bg-white-blur p-[32px] mb-[16px] border-r-blur">
                <div className="w-[64px] h-[64px] mb-[24px] flex items-center justify-center relative">
                  <svg
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                  >
                    <path
                      d="M2 34C2 16.3269 16.3269 2 34 2V2C51.6731 2 66 16.3269 66 34V34C66 51.6731 51.6731 66 34 66V66C16.3269 66 2 51.6731 2 34V34Z"
                      fill="#27272A"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M34 64C17.4315 64 4 50.5685 4 34H0C0 52.7777 15.2223 68 34 68V64ZM64 34C64 50.5685 50.5685 64 34 64V68C52.7777 68 68 52.7777 68 34H64ZM34 4C50.5685 4 64 17.4315 64 34H68C68 15.2223 52.7777 0 34 0V4ZM34 0C15.2223 0 0 15.2223 0 34H4C4 17.4315 17.4315 4 34 4V0Z"
                      fill="url(#paint0_linear_10_2220)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_10_2220"
                        x1="2"
                        y1="24.1245"
                        x2="64.4278"
                        y2="42.8624"
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
                <h6 className="text-[20px] leading-[28px] mb-[16px] font-semibold">
                  Stranger duo
                </h6>
                <p className="text-[#DCDCDC]">
                  With Vilik&apos;s cryptocurrency wallet, you do not need
                  passwords or third-party servers to store digital currency. We
                  ensure high cybersafety and protect users from DDoS with the
                  PSD2 standard, which is identical to European security
                </p>
              </div>
              <div className="h-auto bg-white-blur p-[32px] mb-[16px]">
                <div className="w-[64px] h-[64px] mb-[24px] flex items-center justify-center relative">
                  <svg
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                  >
                    <path
                      d="M2 34C2 16.3269 16.3269 2 34 2V2C51.6731 2 66 16.3269 66 34V34C66 51.6731 51.6731 66 34 66V66C16.3269 66 2 51.6731 2 34V34Z"
                      fill="#27272A"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M34 64C17.4315 64 4 50.5685 4 34H0C0 52.7777 15.2223 68 34 68V64ZM64 34C64 50.5685 50.5685 64 34 64V68C52.7777 68 68 52.7777 68 34H64ZM34 4C50.5685 4 64 17.4315 64 34H68C68 15.2223 52.7777 0 34 0V4ZM34 0C15.2223 0 0 15.2223 0 34H4C4 17.4315 17.4315 4 34 4V0Z"
                      fill="url(#paint0_linear_10_2220)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_10_2220"
                        x1="2"
                        y1="24.1245"
                        x2="64.4278"
                        y2="42.8624"
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
                <h6 className="text-[20px] leading-[28px] mb-[16px] font-semibold">
                  Diamond
                </h6>
                <p className="text-[#DCDCDC]">
                  Diamond is the real value major unit in Vilik game economy. It
                  can be exchanged from VIK tokens, withdrawn to the bank
                  account at any time with low fee and fast transaction.
                </p>
              </div>
              <div className="h-auto bg-white-blur p-[32px] mb-[16px] border-r-blur">
                <div className="w-[64px] h-[64px] mb-[24px] flex items-center justify-center relative">
                  <svg
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                  >
                    <path
                      d="M2 34C2 16.3269 16.3269 2 34 2V2C51.6731 2 66 16.3269 66 34V34C66 51.6731 51.6731 66 34 66V66C16.3269 66 2 51.6731 2 34V34Z"
                      fill="#27272A"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M34 64C17.4315 64 4 50.5685 4 34H0C0 52.7777 15.2223 68 34 68V64ZM64 34C64 50.5685 50.5685 64 34 64V68C52.7777 68 68 52.7777 68 34H64ZM34 4C50.5685 4 64 17.4315 64 34H68C68 15.2223 52.7777 0 34 0V4ZM34 0C15.2223 0 0 15.2223 0 34H4C4 17.4315 17.4315 4 34 4V0Z"
                      fill="url(#paint0_linear_10_2220)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_10_2220"
                        x1="2"
                        y1="24.1245"
                        x2="64.4278"
                        y2="42.8624"
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
                <h6 className="text-[20px] leading-[28px] mb-[16px] font-semibold">
                  Vilik&apos;s wallet
                </h6>
                <p className="text-[#DCDCDC]">
                  Users do not need passwords or third-party servers to store
                  digital currency. Besides, we also ensure high cyber safety
                  with the DDoS with the PSD2 standard with a combination of
                  multisig transactions, automatically enforced Two Factor
                  Authentication.
                </p>
              </div>
              <div className="h-auto bg-white-blur p-[32px] mb-[16px] border-r-blur">
                <div className="w-[64px] h-[64px] mb-[24px] flex items-center justify-center relative">
                  <svg
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                  >
                    <path
                      d="M2 34C2 16.3269 16.3269 2 34 2V2C51.6731 2 66 16.3269 66 34V34C66 51.6731 51.6731 66 34 66V66C16.3269 66 2 51.6731 2 34V34Z"
                      fill="#27272A"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M34 64C17.4315 64 4 50.5685 4 34H0C0 52.7777 15.2223 68 34 68V64ZM64 34C64 50.5685 50.5685 64 34 64V68C52.7777 68 68 52.7777 68 34H64ZM34 4C50.5685 4 64 17.4315 64 34H68C68 15.2223 52.7777 0 34 0V4ZM34 0C15.2223 0 0 15.2223 0 34H4C4 17.4315 17.4315 4 34 4V0Z"
                      fill="url(#paint0_linear_10_2220)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_10_2220"
                        x1="2"
                        y1="24.1245"
                        x2="64.4278"
                        y2="42.8624"
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
                <h6 className="text-[20px] leading-[28px] mb-[16px] font-semibold">
                  Mini-game
                </h6>
                <p className="text-[#DCDCDC]">
                  Our high anti-cheat with proxy and multiple account detection
                  systems offers the fair Vilik&apos;s Minigame/ Lucky game
                  where users can play and earn diamonds without being afraid of
                  losing them or fraud activities.
                </p>
              </div>
              <div className="h-auto bg-white-blur p-[32px] mb-[16px]">
                <div className="w-[64px] h-[64px] mb-[24px] flex items-center justify-center relative">
                  <svg
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto absolute top-0 left-0 animate-spin-slow"
                  >
                    <path
                      d="M2 34C2 16.3269 16.3269 2 34 2V2C51.6731 2 66 16.3269 66 34V34C66 51.6731 51.6731 66 34 66V66C16.3269 66 2 51.6731 2 34V34Z"
                      fill="#27272A"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M34 64C17.4315 64 4 50.5685 4 34H0C0 52.7777 15.2223 68 34 68V64ZM64 34C64 50.5685 50.5685 64 34 64V68C52.7777 68 68 52.7777 68 34H64ZM34 4C50.5685 4 64 17.4315 64 34H68C68 15.2223 52.7777 0 34 0V4ZM34 0C15.2223 0 0 15.2223 0 34H4C4 17.4315 17.4315 4 34 4V0Z"
                      fill="url(#paint0_linear_10_2220)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_10_2220"
                        x1="2"
                        y1="24.1245"
                        x2="64.4278"
                        y2="42.8624"
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
                <h6 className="text-[20px] leading-[28px] mb-[16px] font-semibold">
                  NFT marketplace
                </h6>
                <p className="text-[#DCDCDC]">
                  Our NFT Marketplace is built to bring users unique and
                  exclusive products, such as unique photo frames, medals with
                  effects, and much more.
                </p>
              </div>
            </div>

            <svg
              width="1051"
              height="842"
              viewBox="0 0 1051 842"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-[-326px] bottom-0"
            >
              <g filter="url(#filter0_f_25_9952)">
                <ellipse
                  cx="352.151"
                  cy="352.15"
                  rx="188.659"
                  ry="188.659"
                  transform="rotate(33.1841 352.151 352.15)"
                  fill="#842A9A"
                  fillOpacity="0.53"
                />
              </g>
              <g filter="url(#filter1_f_25_9952)">
                <ellipse
                  cx="635.523"
                  cy="426.522"
                  rx="252.5"
                  ry="252.5"
                  transform="rotate(33.1841 635.523 426.522)"
                  fill="#68268A"
                  fillOpacity="0.51"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_25_9952"
                  x="0.566986"
                  y="0.566986"
                  width="703.167"
                  height="703.167"
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
                    result="effect1_foregroundBlur_25_9952"
                  />
                </filter>
                <filter
                  id="filter1_f_25_9952"
                  x="220.09"
                  y="11.0904"
                  width="830.864"
                  height="830.864"
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
                    result="effect1_foregroundBlur_25_9952"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </section>

        <section
          id="values"
          className={`mb-[96px] relative ${animatedValues ? "in-view" : ""}`}
        >
          <div className="container mx-auto relative z-10">
            <div className="text-center">
              <h4 className="btn-animate rounded-[38px] h-[35px] inline-flex items-center justify-center px-[18px] mb-[24px]">
                <span className="circle"></span>
                <span className="layer"></span>
                <span className="txt whitespace-nowrap">VALUE</span>
              </h4>
            </div>

            <div className="box">
              <div className="flex space-x-[40px] p-[8px] bg-white-blur-007 rounded-[30px] mb-[24px] max-w-[1002px] mx-auto">
                <button
                  type="button"
                  onClick={() => setActive("problem")}
                  className={`w-6/12 h-[43px] rounded-[22px] flex items-center justify-center ${
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
                  className={`w-6/12 h-[43px] rounded-[22px] flex items-center justify-center ${
                    active === "solution"
                      ? "text-shadow-white-51 bg-white-012"
                      : ""
                  }`}
                >
                  Solution
                </button>
              </div>

              {active === "problem" ? (
                <>
                  <h5 className="text-center text-gradient-blue text-[24px] mb-[24px] leading-[38px]">
                    THE PROLEM OF LIVEVIDEO STREAMING TODAY
                  </h5>

                  <img
                    src="/value.png"
                    alt="THE PROLEM OF LIVEVIDEO STREAMING TODAY"
                    className="mx-auto w-full max-w-[797px] mb-[24px]"
                  />

                  <div className="grid grid-cols-3 gap-x-[1px]">
                    <div className="flex h-auto p-[32px] mb-[16px] bg-white-blur">
                      <div className="w-[64px] h-[64px] bg-zinc-900 box-shadow-black rounded-full border border-[#27272A] flex items-center justify-center relative">
                        <img
                          src="/quality.png"
                          alt="Poor quality video"
                          className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10 inline-block w-[29px] h-auto"
                        />
                      </div>
                      <div className="pl-[24px] flex-1">
                        <h6 className="text-gradient-blue text-[20px] leading-[24px] mb-[16px] font-semibold">
                          Poor quality video
                        </h6>
                        <p className="text-[#DCDCDC]">
                          Due to inconvenience in CDN which causes re-buffering
                          video and high load times, users cannot enjoy perfect
                          quality in case of increasing demand for online video.
                        </p>
                      </div>
                    </div>
                    <div className="flex h-auto p-[32px] mb-[16px] bg-white-blur">
                      <div className="w-[64px] h-[64px] bg-zinc-900 box-shadow-black rounded-full border border-[#27272A] flex items-center justify-center relative">
                        <img
                          src="/data.png"
                          alt="Skyrocketing data needs"
                          className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10 inline-block w-[23px] h-auto"
                        />
                      </div>
                      <div className="pl-[24px] flex-1">
                        <h6 className="text-gradient-blue text-[20px] leading-[24px] mb-[16px] font-semibold">
                          Skyrocketing data needs
                        </h6>
                        <p className="text-[#DCDCDC]">
                          The demand for online media and entertainment has
                          rapidly increased, which means data needs are
                          skyrocketing with 4k, 8k and higher quality streams
                          creating an infrastructure bottleneck.
                        </p>
                      </div>
                    </div>
                    <div className="flex h-auto p-[32px] mb-[16px] bg-white-blur">
                      <div className="w-[64px] h-[64px] bg-zinc-900 box-shadow-black rounded-full border border-[#27272A] flex items-center justify-center relative">
                        <img
                          src="/system.png"
                          alt="Skyrocketing data needs"
                          className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10 inline-block w-[44px] h-auto"
                        />
                      </div>
                      <div className="pl-[24px] flex-1">
                        <h6 className="text-gradient-blue text-[20px] leading-[24px] mb-[16px] font-semibold">
                          A centralized and inefficient system
                        </h6>
                        <p className="text-[#DCDCDC]">
                          The centralized nature means less revenue flows back
                          to content creators and platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}

              {active === "solution" ? (
                <>
                  <h5 className="text-center text-gradient-blue text-[24px] mb-[24px] leading-[38px]">
                    VILIK&apos;S SOLUTION
                  </h5>

                  <div className="relative mt-[54px]">
                    <img
                      src="/solution.png"
                      alt="VILIK'S SOLUTION"
                      className="mx-auto w-full max-w-[787px] mb-[24px]"
                    />

                    <svg
                      width="66"
                      height="3"
                      viewBox="0 0 66 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-[52px] left-[370px] w-[66px]"
                    >
                      <path
                        d="M0.345703 1.82715L65.9934 1.82715"
                        stroke="url(#paint0_linear_12_8563)"
                        strokeWidth="1.00996"
                        className="path path-1"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_12_8563"
                          x1="19.9878"
                          y1="2.22649"
                          x2="19.9902"
                          y2="2.87605"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F07AFF" />
                          <stop offset="1" stopColor="#1945D9" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <svg
                      width="66"
                      height="3"
                      viewBox="0 0 66 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-[52px] left-[542px] w-[66px]"
                    >
                      <path
                        d="M0.345703 1.82715L65.9934 1.82715"
                        stroke="url(#paint0_linear_12_8563)"
                        strokeWidth="1.00996"
                        className="path path-1"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_12_8563"
                          x1="19.9878"
                          y1="2.22649"
                          x2="19.9902"
                          y2="2.87605"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F07AFF" />
                          <stop offset="1" stopColor="#1945D9" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <svg
                      width="536"
                      height="166"
                      viewBox="0 0 536 166"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-[-27px] left-[217px] w-[536px]"
                    >
                      <rect
                        x="534.637"
                        y="0.504982"
                        width="164.624"
                        height="533.261"
                        rx="12.6363"
                        transform="rotate(90 534.637 0.504982)"
                        stroke="url(#paint0_linear_12_8558)"
                        strokeWidth="1.00996"
                        className="path path-1"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_12_8558"
                          x1="584.701"
                          y1="213.356"
                          x2="753.291"
                          y2="427.951"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EAC2FF" />
                          <stop offset="1" stopColor="#1945D9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="grid grid-cols-3 gap-x-[1px]">
                    <div className="flex h-auto p-[32px] mb-[16px] bg-white-blur">
                      <div className="w-[64px] h-[64px] bg-zinc-900 box-shadow-black rounded-full border border-[#27272A] flex items-center justify-center relative">
                        <img
                          src="/data.png"
                          alt="Viewers earn rewards as VIK token"
                          className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10 inline-block w-[29px] h-auto"
                        />
                      </div>
                      <div className="pl-[24px] flex-1">
                        <h6 className="text-gradient-blue text-[20px] leading-[24px] mb-[16px] font-semibold">
                          Viewers earn rewards as VIK token
                        </h6>
                        <p className="text-[#DCDCDC]">
                          Viewers are now rewarded to participate in the
                          network. This is a new way of monetizing excess
                          network resources, such as bandwidth and storage.
                        </p>
                      </div>
                    </div>

                    <div className="flex h-auto p-[32px] mb-[16px] bg-white-blur">
                      <div className="w-[64px] h-[64px] bg-zinc-900 box-shadow-black rounded-full border border-[#27272A] flex items-center justify-center relative">
                        <img
                          src="/viewer.png"
                          alt="High quality, smoother video streaming"
                          className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10 inline-block w-[29px] h-auto"
                        />
                      </div>
                      <div className="pl-[24px] flex-1">
                        <h6 className="text-gradient-blue text-[20px] leading-[24px] mb-[16px] font-semibold">
                          High quality, smoother video streaming
                        </h6>
                        <p className="text-[#DCDCDC]">
                          Our decentralised network allows everyone to globally
                          earn streaming revenues. Herein, artists, producers,
                          streamers, and viewers jointly enjoy the most
                          immersive experiences.
                        </p>
                      </div>
                    </div>

                    <div className="flex h-auto p-[32px] mb-[16px] bg-white-blur">
                      <div className="w-[64px] h-[64px] bg-zinc-900 box-shadow-black rounded-full border border-[#27272A] flex items-center justify-center relative">
                        <img
                          src="/stream.png"
                          alt="Reduced cost of delivering video streams"
                          className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10 inline-block w-[29px] h-auto"
                        />
                      </div>
                      <div className="pl-[24px] flex-1">
                        <h6 className="text-gradient-blue text-[20px] leading-[24px] mb-[16px] font-semibold">
                          Reduced cost of delivering video streams
                        </h6>
                        <p className="text-[#DCDCDC]">
                          Fewer servers, less bandwidth and no more expensive
                          hosting mean more capital to invest in developing new
                          apps and improving the experience for users.c
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>

          <svg
            width="2502"
            height="1553"
            viewBox="0 0 2502 1553"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2/4 left-2/4 -translate-x-2/4	-translate-y-2/4"
          >
            <g opacity="0.5">
              <g opacity="0.67" filter="url(#filter0_f_27_9955)">
                <ellipse
                  rx="484.226"
                  ry="338.644"
                  transform="matrix(0.932793 0.360413 -0.274415 0.961611 1728.39 682.165)"
                  fill="#3D17E3"
                />
              </g>
              <g filter="url(#filter1_f_27_9955)">
                <ellipse
                  rx="349.087"
                  ry="257.146"
                  transform="matrix(0.928486 0.371368 -0.283305 0.95903 1542.97 846.251)"
                  fill="#00F0FF"
                  fillOpacity="0.44"
                />
              </g>
            </g>
            <g opacity="0.5" filter="url(#filter2_f_27_9955)">
              <ellipse
                rx="360.864"
                ry="224.527"
                transform="matrix(0.985766 -0.168125 0.279332 0.960195 844.12 807.397)"
                fill="#3D17E3"
              />
            </g>
            <g opacity="0.5" filter="url(#filter3_f_27_9955)">
              <ellipse
                rx="335.197"
                ry="167.928"
                transform="matrix(0.999668 -0.0257878 0.0439582 0.999033 485.467 913.574)"
                fill="#00F0FF"
                fillOpacity="0.44"
              />
            </g>
            <g filter="url(#filter4_f_27_9955)">
              <ellipse
                rx="176.581"
                ry="158.991"
                transform="matrix(0.89416 0.447747 -0.649466 0.760391 1550.68 959.328)"
                fill="#842A9A"
                fillOpacity="0.53"
              />
            </g>
            <g filter="url(#filter5_f_27_9955)">
              <ellipse
                rx="236.335"
                ry="212.792"
                transform="matrix(0.89416 0.447747 -0.649466 0.760391 1834.05 851.652)"
                fill="#68268A"
                fillOpacity="0.51"
              />
            </g>
            <g opacity="0.5" filter="url(#filter6_f_27_9955)">
              <ellipse
                rx="751.828"
                ry="135.234"
                transform="matrix(0.999428 -0.0338165 0.0576179 0.998339 1189.19 1103.57)"
                fill="#3D17E3"
                fillOpacity="0.49"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_27_9955"
                x="955.347"
                y="0.825531"
                width="1546.08"
                height="1362.68"
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
                  result="effect1_foregroundBlur_27_9955"
                />
              </filter>
              <filter
                id="filter1_f_27_9955"
                x="1060.69"
                y="417.584"
                width="964.562"
                height="857.333"
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
                  result="effect1_foregroundBlur_27_9955"
                />
              </filter>
              <filter
                id="filter2_f_27_9955"
                x="171.039"
                y="271.569"
                width="1346.16"
                height="1071.65"
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
                  result="effect1_foregroundBlur_27_9955"
                />
              </filter>
              <filter
                id="filter3_f_27_9955"
                x="0.298828"
                y="595.582"
                width="970.336"
                height="635.985"
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
                  result="effect1_foregroundBlur_27_9955"
                />
              </filter>
              <filter
                id="filter4_f_27_9955"
                x="1199.1"
                y="651.956"
                width="703.167"
                height="614.745"
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
                  result="effect1_foregroundBlur_27_9955"
                />
              </filter>
              <filter
                id="filter5_f_27_9955"
                x="1418.62"
                y="495.391"
                width="830.864"
                height="712.521"
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
                  result="effect1_foregroundBlur_27_9955"
                />
              </filter>
              <filter
                id="filter6_f_27_9955"
                x="125.944"
                y="654.354"
                width="2126.49"
                height="898.427"
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
                  result="effect1_foregroundBlur_27_9955"
                />
              </filter>
            </defs>
          </svg>
        </section>

        <section
          id="eco"
          className={`mb-[56px] relative ${animatedEco ? "in-view" : ""}`}
        >
          <div className="container mx-auto relative z-10">
            <div className="text-center">
              <h4 className="btn-animate large rounded-[38px] h-[35px] inline-flex items-center justify-center px-[18px] mb-[8px] relative z-10">
                <span className="circle"></span>
                <span className="layer"></span>
                <span className="txt whitespace-nowrap">
                  Ecosystem &amp; Tokenomics
                </span>
              </h4>
            </div>
            <h5 className="text-animate text-center text-gradient-blue text-[40px] mb-[48px] leading-[48px] relative z-10">
              Impressed users by our exceptional features
            </h5>

            <div className="box text-center bg-white-blur px-[80px] py-[40px] relative z-10">
              <img
                src="/eco-system.png"
                alt="Impressed users by our exceptional features"
                className="inline-block max-w-[1050px]"
              />
            </div>
          </div>

          <svg
            width="2212"
            height="1491"
            viewBox="0 0 2212 1491"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2/4 left-2/4 -translate-x-2/4	-translate-y-2/4"
          >
            <g opacity="0.7">
              <g filter="url(#filter0_f_12_6199)">
                <ellipse
                  cx="507.893"
                  cy="637.351"
                  rx="362.893"
                  ry="310.52"
                  fill="#6900EE"
                  fillOpacity="0.5"
                />
              </g>
              <g filter="url(#filter1_f_12_6199)">
                <ellipse
                  cx="709.425"
                  cy="869.517"
                  rx="362.223"
                  ry="421.483"
                  fill="#7236DC"
                  fillOpacity="0.44"
                />
              </g>
              <g opacity="0.67" filter="url(#filter2_f_12_6199)">
                <ellipse
                  rx="484.226"
                  ry="338.644"
                  transform="matrix(0.932793 0.360412 -0.274415 0.961611 1438.39 682.165)"
                  fill="#3D17E3"
                />
              </g>
              <g filter="url(#filter3_f_12_6199)">
                <ellipse
                  rx="349.087"
                  ry="257.146"
                  transform="matrix(0.928486 0.371368 -0.283305 0.95903 1252.97 846.251)"
                  fill="#00F0FF"
                  fillOpacity="0.44"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_12_6199"
                x="0.851059"
                y="182.682"
                width="1014.08"
                height="909.337"
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
                  result="effect1_foregroundBlur_12_6199"
                />
              </filter>
              <filter
                id="filter1_f_12_6199"
                x="147.202"
                y="248.035"
                width="1124.45"
                height="1242.97"
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
                  result="effect1_foregroundBlur_12_6199"
                />
              </filter>
              <filter
                id="filter2_f_12_6199"
                x="665.347"
                y="0.825531"
                width="1546.08"
                height="1362.68"
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
                  result="effect1_foregroundBlur_12_6199"
                />
              </filter>
              <filter
                id="filter3_f_12_6199"
                x="770.693"
                y="417.584"
                width="964.562"
                height="857.333"
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
                  result="effect1_foregroundBlur_12_6199"
                />
              </filter>
            </defs>
          </svg>
        </section>

        <section
          id="monetary-flow"
          className={`mb-[56px] relative ${
            animatedMonetaryFlow ? "in-view" : ""
          }`}
        >
          <div className="container mx-auto relative z-10">
            <h5 className="text-animate text-center text-gradient-blue text-[40px] mb-[48px] leading-[48px] relative z-10">
              Monetary flow
            </h5>

            <div className="box text-center bg-white-blur px-[80px] py-[40px] relative z-10">
              <img
                src="/monetary-flow.png"
                alt="Impressed users by our exceptional features"
                className="inline-block max-w-[1050px]"
              />
            </div>
          </div>

          <svg
            width="2253"
            height="1186"
            viewBox="0 0 2253 1186"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2/4 left-2/4 -translate-x-2/4	-translate-y-2/4"
          >
            <g opacity="0.5" filter="url(#filter0_f_12_6219)">
              <ellipse
                rx="359.472"
                ry="194.3"
                transform="matrix(0.989582 -0.143967 0.322788 0.946471 844.12 503.651)"
                fill="#3D17E3"
              />
            </g>
            <g opacity="0.5" filter="url(#filter1_f_12_6219)">
              <ellipse
                rx="335.166"
                ry="143.295"
                transform="matrix(0.999758 -0.0219991 0.0515146 0.998672 485.467 594.221)"
                fill="#00F0FF"
                fillOpacity="0.44"
              />
            </g>
            <g filter="url(#filter2_f_12_6219)">
              <ellipse
                rx="171.692"
                ry="145.935"
                transform="matrix(0.919621 0.392807 -0.707568 0.706645 1550.68 633.249)"
                fill="#842A9A"
                fillOpacity="0.53"
              />
            </g>
            <g filter="url(#filter3_f_12_6219)">
              <ellipse
                rx="229.792"
                ry="195.318"
                transform="matrix(0.919621 0.392806 -0.707569 0.706644 1834.05 541.401)"
                fill="#68268A"
                fillOpacity="0.51"
              />
            </g>
            <g opacity="0.5" filter="url(#filter4_f_12_6219)">
              <ellipse
                rx="751.711"
                ry="115.427"
                transform="matrix(0.999584 -0.0288502 0.0675048 0.997719 1189.19 756.286)"
                fill="#3D17E3"
                fillOpacity="0.49"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_12_6219"
                x="171.039"
                y="0.753754"
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
                  result="effect1_foregroundBlur_12_6219"
                />
              </filter>
              <filter
                id="filter1_f_12_6219"
                x="0.298828"
                y="300.923"
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
                  result="effect1_foregroundBlur_12_6219"
                />
              </filter>
              <filter
                id="filter2_f_12_6219"
                x="1199.1"
                y="347.113"
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
                  result="effect1_foregroundBlur_12_6219"
                />
              </filter>
              <filter
                id="filter3_f_12_6219"
                x="1418.62"
                y="213.563"
                width="830.865"
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
                  result="effect1_foregroundBlur_12_6219"
                />
              </filter>
              <filter
                id="filter4_f_12_6219"
                x="125.945"
                y="327.271"
                width="2126.49"
                height="858.03"
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
                  result="effect1_foregroundBlur_12_6219"
                />
              </filter>
            </defs>
          </svg>
        </section>

        <section
          id="tokenomics"
          className={`mb-[96px] relative ${
            animatedTokenomics ? "in-view" : ""
          }`}
        >
          <div className="absolute w-[459px] left-[-218px] top-[-332px]">
            <Moving yFrom={0} yTo={50} duration={10}>
              <img src="/earth-layer-1.png" className="w-full h-auto" />
            </Moving>
          </div>
          <div className="container mx-auto relative z-10">
            <h5 className="text-animate text-center text-gradient-blue text-[40px] mb-[32px] leading-[48px] relative z-10">
              Tokenomics
            </h5>

            <div className="box text-[16px] leading-[24px] border-linear">
              <div className="flex text-light-blue text-[18px] leading-[27px] bg-white-blur-015 divide-x divide-white/20 font-bold">
                <div className="w-[156px] py-[8px] text-center">STAGE</div>
                <div className="w-[156px] py-[8px] text-center">
                  % OF TOTAL SUPPLY
                </div>
                <div className="w-[156px] py-[8px] text-center">QUANTITY</div>
                <div className="w-[156px] py-[8px] text-center">PRICE</div>
                <div className="w-[156px] py-[8px] text-center">TOTAL SOLD</div>
                <div className="flex-1 py-[8px] text-center">
                  VESTING PERIOD
                </div>
              </div>

              <div className="divide-y divide-zinc-600">
                {tokenomicsData.map((item) => (
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

              <div className="flex text-[18px] leading-[27px] bg-white-blur-015 divide-x divide-white/20">
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
          <div className="absolute w-[265px] right-[-117px] bottom-[-135px]">
            <Moving xFrom={0} xTo={-20} yFrom={0} yTo={50} duration={7}>
              <img src="/earth-layer-2.png" className="w-full h-auto" />
            </Moving>
          </div>

          <svg
            width="2253"
            height="1186"
            viewBox="0 0 2253 1186"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-94px] left-2/4 -translate-x-2/4	w-[2040px] h-auto"
          >
            <g opacity="0.5" filter="url(#filter0_f_12_6213)">
              <ellipse
                rx="359.472"
                ry="194.3"
                transform="matrix(0.989582 -0.143967 0.322788 0.946471 844.12 503.651)"
                fill="#3D17E3"
              />
            </g>
            <g opacity="0.5" filter="url(#filter1_f_12_6213)">
              <ellipse
                rx="335.166"
                ry="143.295"
                transform="matrix(0.999758 -0.0219991 0.0515146 0.998672 485.467 594.221)"
                fill="#00F0FF"
                fillOpacity="0.44"
              />
            </g>
            <g filter="url(#filter2_f_12_6213)">
              <ellipse
                rx="171.692"
                ry="145.935"
                transform="matrix(0.919621 0.392807 -0.707568 0.706645 1550.68 633.249)"
                fill="#842A9A"
                fillOpacity="0.53"
              />
            </g>
            <g filter="url(#filter3_f_12_6213)">
              <ellipse
                rx="229.792"
                ry="195.318"
                transform="matrix(0.919621 0.392806 -0.707569 0.706644 1834.05 541.401)"
                fill="#68268A"
                fillOpacity="0.51"
              />
            </g>
            <g opacity="0.5" filter="url(#filter4_f_12_6213)">
              <ellipse
                rx="751.711"
                ry="115.427"
                transform="matrix(0.999584 -0.0288502 0.0675048 0.997719 1189.19 756.286)"
                fill="#3D17E3"
                fillOpacity="0.49"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_12_6213"
                x="171.039"
                y="0.753754"
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
                  result="effect1_foregroundBlur_12_6213"
                />
              </filter>
              <filter
                id="filter1_f_12_6213"
                x="0.298828"
                y="300.923"
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
                  result="effect1_foregroundBlur_12_6213"
                />
              </filter>
              <filter
                id="filter2_f_12_6213"
                x="1199.1"
                y="347.113"
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
                  result="effect1_foregroundBlur_12_6213"
                />
              </filter>
              <filter
                id="filter3_f_12_6213"
                x="1418.62"
                y="213.563"
                width="830.865"
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
                  result="effect1_foregroundBlur_12_6213"
                />
              </filter>
              <filter
                id="filter4_f_12_6213"
                x="125.945"
                y="327.271"
                width="2126.49"
                height="858.03"
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
                  result="effect1_foregroundBlur_12_6213"
                />
              </filter>
            </defs>
          </svg>
        </section>

        <section
          id="chart"
          className={`mb-[96px] relative ${animatedChart ? "in-view" : ""}`}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-12">
              <div className="col-span-4">
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
              <div className="box col-span-8">
                <div className="text-right">
                  <img
                    className="inline-block w-full max-w-[682px] h-auto"
                    src="/chart.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="roadmap"
          className={`mb-[96px] relative ${animatedRoadmap ? "in-view" : ""}`}
        >
          <img
            src="/network-line.png"
            className="absolute left-0 top-2/4 -translate-y-2/4"
          />
          <div className="container mx-auto relative z-10">
            <h5 className="text-animate text-center text-gradient-blue text-[40px] mb-[32px] leading-[48px] relative z-10">
              Roadmap
            </h5>

            <div className="box max-w-[1095px] mx-auto relative">
              <div className="line-linear absolute top-[52px] w-full left-2/4 -translate-x-2/4"></div>
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <div className="flex flex-wrap justify-center items-center group relative">
                    <div className="w-[94px] h-[94px] mb-[16px] relative">
                      <img
                        className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10"
                        src="/earth.png"
                      />
                      <img
                        className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 opacity-0"
                        src="/earth-active.png"
                      />
                    </div>
                    <p className="w-full text-zinc-500 text-[28px] leading-[34px] mb-[16px] font-bold text-center">
                      Q1 - 2022
                    </p>
                    <ul className="text-[14px] leading-[21px] text-[#DCDCDC] font-light">
                      <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                        VIK Streaming Web Platform
                      </li>
                      <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                        Development Begins VIK Community
                      </li>
                      <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                        Channel Begins
                      </li>
                    </ul>

                    <svg
                      width="30"
                      height="28"
                      viewBox="0 0 30 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-[40px] right-0"
                    >
                      <path
                        d="M2 1.90039L14 13.9004L2 25.9004"
                        stroke="url(#paint0_linear_19_1499)"
                        strokeWidth="4"
                      />
                      <path
                        d="M14.8 1.90039L26.8 13.9004L14.8 25.9004"
                        stroke="url(#paint1_linear_19_1499)"
                        strokeWidth="4"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_19_1499"
                          x1="8"
                          y1="1.90039"
                          x2="8"
                          y2="25.9004"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#7F6499" />
                          <stop offset="1" stopColor="#5B4273" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_19_1499"
                          x1="20.8"
                          y1="1.90039"
                          x2="20.8"
                          y2="25.9004"
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
                    <div className="w-[94px] h-[94px] mb-[16px] relative">
                      <img
                        className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10"
                        src="/earth.png"
                      />
                      <img
                        className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 opacity-0"
                        src="/earth-active.png"
                      />
                    </div>
                    <p className="w-full text-zinc-500 text-[28px] leading-[34px] mb-[16px] font-bold text-center">
                      Q2 - 2022
                    </p>
                    <ul className="text-[14px] leading-[21px] text-[#DCDCDC] font-light">
                      <li>IDO</li>
                      <li>Token Launch</li>
                    </ul>

                    <svg
                      width="30"
                      height="28"
                      viewBox="0 0 30 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-[40px] right-0"
                    >
                      <path
                        d="M2 1.90039L14 13.9004L2 25.9004"
                        stroke="url(#paint0_linear_19_1490)"
                        strokeWidth="4"
                      />
                      <path
                        d="M14.7998 1.90039L26.7998 13.9004L14.7998 25.9004"
                        stroke="url(#paint1_linear_19_1490)"
                        strokeWidth="4"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_19_1490"
                          x1="8"
                          y1="1.90039"
                          x2="8"
                          y2="25.9004"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E7BFFB" />
                          <stop offset="1" stopColor="#5B4273" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_19_1490"
                          x1="20.7998"
                          y1="1.90039"
                          x2="20.7998"
                          y2="25.9004"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E7BFFB" />
                          <stop offset="1" stopColor="#5B4273" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-wrap justify-center items-center group relative">
                    <div className="w-[94px] h-[94px] mb-[16px] relative">
                      <img
                        className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10"
                        src="/earth.png"
                      />
                      <img
                        className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 opacity-0"
                        src="/earth-active.png"
                      />
                    </div>
                    <p className="w-full text-zinc-500 text-[28px] leading-[34px] mb-[16px] font-bold text-center">
                      Q3 - 2022
                    </p>
                    <ul className="text-[14px] leading-[21px] text-[#DCDCDC] font-light">
                      <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                        VIK Streaming Web Platform
                      </li>
                      <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                        Version 1.0 Released
                      </li>
                    </ul>

                    <svg
                      width="30"
                      height="28"
                      viewBox="0 0 30 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-[40px] right-0"
                    >
                      <path
                        d="M2 1.90039L14 13.9004L2 25.9004"
                        stroke="url(#paint0_linear_19_1493)"
                        strokeWidth="4"
                      />
                      <path
                        d="M14.7998 1.90039L26.7998 13.9004L14.7998 25.9004"
                        stroke="url(#paint1_linear_19_1493)"
                        strokeWidth="4"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_19_1493"
                          x1="8"
                          y1="1.90039"
                          x2="8"
                          y2="25.9004"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E7BFFB" />
                          <stop offset="1" stopColor="#5B4273" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_19_1493"
                          x1="20.7998"
                          y1="1.90039"
                          x2="20.7998"
                          y2="25.9004"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E7BFFB" />
                          <stop offset="1" stopColor="#5B4273" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-wrap justify-center items-center group relative">
                    <div className="w-[94px] h-[94px] mb-[16px] relative">
                      <img
                        className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-10"
                        src="/earth.png"
                      />
                      <img
                        className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 opacity-0"
                        src="/earth-active.png"
                      />
                    </div>
                    <p className="w-full text-zinc-500 text-[28px] leading-[34px] mb-[16px] font-bold text-center">
                      Q4 - 2022
                    </p>
                    <ul className="text-[14px] leading-[21px] text-[#DCDCDC] font-light">
                      <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                        VIK Streaming Web Platform
                      </li>
                      <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                        Version 2.0 Released
                      </li>
                      <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                        VIK Peer-to-Peer Network
                      </li>
                      <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                        Video Sharing Development
                      </li>
                      <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                        Begins
                      </li>
                      <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                        VIK Streaming Web Platform
                      </li>
                      <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                        Version 3.0 Release
                      </li>
                      <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                        Basic Peer-to-Peer
                      </li>
                      <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                        Sharing Video Network Testnet
                      </li>
                    </ul>

                    <svg
                      width="30"
                      height="28"
                      viewBox="0 0 30 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-[40px] right-0"
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
              </Swiper>
            </div>
          </div>

          <svg
            width="1278"
            height="1457"
            viewBox="0 0 1278 1457"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[-632px] top-2/4 -translate-y-2/4"
          >
            <g opacity="0.83">
              <g filter="url(#filter0_f_12_6385)">
                <ellipse
                  cx="589.181"
                  cy="409.648"
                  rx="194.665"
                  ry="187.73"
                  transform="rotate(66.7216 589.181 409.648)"
                  fill="#6900EE"
                  fillOpacity="0.5"
                />
              </g>
              <g opacity="0.67" filter="url(#filter1_f_12_6385)">
                <ellipse
                  rx="264.27"
                  ry="203.087"
                  transform="matrix(-0.00441348 0.99999 -0.987498 0.157631 761.554 878.863)"
                  fill="#3D17E3"
                />
              </g>
              <g filter="url(#filter2_f_12_6385)">
                <ellipse
                  rx="254.691"
                  ry="112.476"
                  transform="matrix(-0.00441348 0.99999 -0.987498 0.157631 411.267 857.427)"
                  fill="#420A8D"
                />
              </g>
              <g filter="url(#filter3_f_12_6385)">
                <ellipse
                  rx="190.716"
                  ry="154.129"
                  transform="matrix(-0.0172168 0.999852 -0.98878 0.149378 647.491 819.194)"
                  fill="#00F0FF"
                  fillOpacity="0.44"
                />
              </g>
              <g opacity="0.7">
                <g filter="url(#filter4_f_12_6385)">
                  <ellipse
                    cx="668.066"
                    cy="619.879"
                    rx="154.446"
                    ry="173.323"
                    transform="rotate(66.7216 668.066 619.879)"
                    fill="#E84DFC"
                    fillOpacity="0.71"
                  />
                </g>
                <g filter="url(#filter5_f_12_6385)">
                  <ellipse
                    rx="374.893"
                    ry="221.129"
                    transform="matrix(0.652511 0.757779 -0.783038 0.621973 678.085 615.943)"
                    fill="#E84DFC"
                    fillOpacity="0.2"
                  />
                </g>
                <g filter="url(#filter6_f_12_6385)">
                  <ellipse
                    cx="668.388"
                    cy="620.292"
                    rx="71.9061"
                    ry="94.2984"
                    transform="rotate(66.7216 668.388 620.292)"
                    fill="#FDE2FC"
                    fillOpacity="0.71"
                  />
                </g>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_12_6385"
                x="256.155"
                y="71.8503"
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
                  result="effect1_foregroundBlur_12_6385"
                />
              </filter>
              <filter
                id="filter1_f_12_6385"
                x="249.196"
                y="300.831"
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
                  result="effect1_foregroundBlur_12_6385"
                />
              </filter>
              <filter
                id="filter2_f_12_6385"
                x="0.191406"
                y="302.112"
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
                  result="effect1_foregroundBlur_12_6385"
                />
              </filter>
              <filter
                id="filter3_f_12_6385"
                x="345.056"
                y="477.102"
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
                  result="effect1_foregroundBlur_12_6385"
                />
              </filter>
              <filter
                id="filter4_f_12_6385"
                x="397.508"
                y="362.299"
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
                  result="effect1_foregroundBlur_12_6385"
                />
              </filter>
              <filter
                id="filter5_f_12_6385"
                x="78.3579"
                y="0.243164"
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
                  result="effect1_foregroundBlur_12_6385"
                />
              </filter>
              <filter
                id="filter6_f_12_6385"
                x="497.199"
                y="464.438"
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
                  result="effect1_foregroundBlur_12_6385"
                />
              </filter>
            </defs>
          </svg>

          <svg
            width="1051"
            height="908"
            viewBox="0 0 1051 908"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-[-349px] right-[-314px]"
          >
            <g filter="url(#filter0_f_12_6395)">
              <circle
                cx="352.15"
                cy="556.15"
                r="188.659"
                transform="rotate(33.1841 352.15 556.15)"
                fill="#842A9A"
                fillOpacity="0.53"
              />
            </g>
            <g filter="url(#filter1_f_12_6395)">
              <ellipse
                cx="635.523"
                cy="415.522"
                rx="252.5"
                ry="252.5"
                transform="rotate(33.1841 635.523 415.522)"
                fill="#68268A"
                fillOpacity="0.51"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_12_6395"
                x="0.566742"
                y="204.566"
                width="703.167"
                height="703.167"
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
                  result="effect1_foregroundBlur_12_6395"
                />
              </filter>
              <filter
                id="filter1_f_12_6395"
                x="220.091"
                y="0.0904236"
                width="830.864"
                height="830.864"
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
                  result="effect1_foregroundBlur_12_6395"
                />
              </filter>
            </defs>
          </svg>
        </section>

        <section
          id="partners"
          className={`mb-[120px] relative ${animatedPartners ? "in-view" : ""}`}
        >
          <div className="container mx-auto">
            <h5 className="text-animate text-center text-gradient-blue text-[40px] mb-[32px] leading-[48px] relative z-10">
              Trust by
            </h5>

            <div className="box flex flex-wrap justify-center items-center space-x-[137px] space-y-[32px]">
              <svg
                width="228"
                height="115"
                viewBox="0 0 228 115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M136.871 38.2448C135.775 38.9346 134.482 39.0185 133.501 38.4685C132.254 37.7695 131.569 36.1291 131.569 33.8517V27.0322C131.569 23.7389 130.258 21.3963 128.068 20.7657C124.355 19.6907 121.563 24.2049 120.514 25.8982L113.966 36.446V23.5556C113.891 20.5886 112.922 18.8145 111.081 18.2802C109.863 17.926 108.041 18.0689 106.271 20.7594L91.6056 44.1634C89.6431 40.46 88.6182 36.3341 88.6245 32.1492C88.6245 18.0534 99.9946 6.58284 113.966 6.58284C127.937 6.58284 139.307 18.0503 139.307 32.1492C139.307 32.174 139.313 32.1958 139.313 32.2175C139.313 32.2424 139.31 32.2641 139.31 32.289C139.447 35.0168 138.556 37.1885 136.871 38.2448ZM144.942 32.1492V32.0777L144.939 32.0063C144.861 14.8378 130.999 0.900391 113.969 0.900391C96.8919 0.900391 82.9955 14.9154 82.9955 32.1461C82.9955 49.3736 96.8919 63.3918 113.969 63.3918C121.806 63.3918 129.286 60.4309 135.027 55.0592C136.167 53.9935 136.236 52.1946 135.176 51.0451C134.675 50.4952 133.968 50.1659 133.22 50.1379C132.473 50.1099 131.744 50.3802 131.198 50.8929C126.545 55.2735 120.38 57.7124 113.969 57.7124C106.486 57.7124 99.7547 54.4223 95.1132 49.2027L108.34 28.0978V37.8285C108.34 42.5012 110.165 44.0112 111.692 44.4555C113.221 44.8966 115.561 44.5953 118.018 40.634L125.292 28.9149C125.526 28.5359 125.741 28.2097 125.937 27.9301V33.8549C125.937 38.2231 127.697 41.7152 130.769 43.4364C133.535 44.9867 137.014 44.8469 139.849 43.0698C143.282 40.9105 145.135 36.9369 144.942 32.1492Z"
                  fill="url(#paint0_linear_19_1351)"
                />
                <path
                  d="M18.0831 86.8361C18.6812 87.1996 19.2014 88.0043 19.2014 88.7282C19.2014 89.8964 18.2046 90.8626 17.0863 90.8626C16.8059 90.8626 16.5287 90.7819 16.2888 90.7011C14.9711 89.7348 13.2952 89.0917 11.5383 89.0917C7.38589 89.0917 4.51377 92.4751 4.51377 96.66C4.51377 100.848 7.389 104.191 11.5383 104.191C13.613 104.191 15.4509 103.346 16.8464 102.057C17.2078 101.799 17.6408 101.659 18.0831 101.653C19.2014 101.653 20.0799 102.538 20.0799 103.666C20.0799 104.39 19.6407 105.033 19.0831 105.397C17.0863 107.087 14.373 108.214 11.5788 108.214C5.18975 108.214 0 102.982 0 96.5389C0 90.0983 5.18975 84.8633 11.5788 84.8633C13.9712 84.8633 16.2483 85.5872 18.0831 86.8361ZM29.7616 91.7077C34.1134 91.7077 37.7861 95.3707 37.7861 99.8787C37.7861 104.39 34.1134 108.214 29.7616 108.214C25.2105 108.214 21.4194 104.39 21.4194 99.8787C21.4194 95.3707 25.2105 91.7077 29.7616 91.7077ZM29.7211 104.188C31.6369 104.188 33.2723 102.377 33.2723 99.9191C33.2723 97.4647 31.6369 95.933 29.7211 95.933C27.6465 95.933 25.93 97.4243 25.93 99.9191C25.93 102.377 27.6465 104.188 29.7211 104.188ZM40.5212 105.72V94.2056C40.5212 92.9567 41.518 91.9096 42.7578 91.9096C43.9945 91.9096 45.0318 92.9567 45.0318 94.2056V105.72C45.0318 106.969 43.9945 108.016 42.7578 108.016C41.5211 108.016 40.5212 106.969 40.5212 105.72ZM40.1629 87.56C40.1629 86.0687 41.3186 84.8633 42.7578 84.8633C44.2343 84.8633 45.4305 86.0718 45.4305 87.56C45.4305 89.0078 44.2312 90.176 42.7578 90.176C41.3186 90.1791 40.1629 89.0109 40.1629 87.56ZM53.6762 99.4779V105.72C53.6762 106.969 52.6389 108.016 51.3991 108.016C50.1624 108.016 49.1624 106.969 49.1624 105.72V93.6805C49.1624 92.7143 49.963 91.9096 50.9193 91.9096C51.8757 91.9096 52.6358 92.7143 52.6358 93.6805C54.4705 91.9904 56.0686 91.7077 57.5856 91.7077C62.0963 91.7077 64.0931 95.088 64.0931 98.9156V105.72C64.0931 106.969 63.0557 108.016 61.8191 108.016C60.5824 108.016 59.5824 106.969 59.5824 105.72V99.4779C59.5824 97.5051 59.3426 95.8554 56.5078 95.8554C54.5142 95.8554 53.6762 97.5051 53.6762 99.4779ZM78.7683 101.855C78.2512 101.855 77.8898 101.612 77.6126 101.289L72.3418 95.613V105.717C72.3418 106.965 71.3045 108.012 70.0678 108.012C68.8311 108.012 67.8312 106.965 67.8312 105.717V85.7083C67.962 85.3635 68.2984 85.1367 68.6723 85.1429C69.071 85.1429 69.3887 85.466 69.6286 85.7083L78.0113 95.088C78.2512 95.3707 78.5689 95.5322 78.7309 95.5322C78.8898 95.5322 79.2106 95.3707 79.4474 95.0911L87.8301 85.7083C88.07 85.466 88.3877 85.1429 88.7864 85.1429C89.1852 85.1429 89.506 85.3852 89.6244 85.7083V105.717C89.6244 106.965 88.6276 108.012 87.3877 108.012C86.1511 108.012 85.1106 106.965 85.1106 105.717V95.613L79.843 101.289C79.5657 101.612 79.2075 101.855 78.7683 101.855ZM100.465 104.188C102.502 104.188 104.215 102.377 104.215 99.9191C104.215 97.4647 102.462 95.8522 100.465 95.8522C98.4681 95.8522 96.8701 97.502 96.8701 99.9191C96.8732 102.296 98.4681 104.188 100.465 104.188ZM105.256 106.242L105.175 105.717C104.3 107.447 101.502 108.214 99.7079 108.214C95.4745 108.214 92.3626 104.39 92.3626 99.8787C92.3626 95.3707 95.5555 91.7077 99.9478 91.7077C100.705 91.7077 103.222 91.9096 105.178 94.2056L105.259 93.6805C105.259 92.7143 106.016 91.9096 106.975 91.9096C107.932 91.9096 108.729 92.7143 108.729 93.6805V106.242C108.729 107.208 107.932 108.012 106.972 108.012C106.013 108.016 105.253 107.208 105.256 106.242ZM121.243 95.8554H120.766C117.931 96.0169 117.374 97.6263 117.374 99.4779V105.72C117.374 106.969 116.336 108.016 115.1 108.016C113.863 108.016 112.863 106.969 112.863 105.72V93.6805C112.863 92.7143 113.66 91.9096 114.62 91.9096C115.579 91.9096 116.336 92.7143 116.336 93.6805C118.012 92.1116 119.37 91.7885 120.766 91.7077H121.205C122.283 91.7077 123.28 92.6335 123.28 93.8017C123.28 94.8891 122.324 95.8554 121.243 95.8554ZM138.631 104.673C138.83 104.993 138.952 105.356 138.952 105.76C138.952 106.928 137.874 108.016 136.715 108.016C135.918 108.016 135.239 107.413 134.718 106.767L129.532 100.767V105.72C129.532 106.969 128.491 108.016 127.255 108.016C126.018 108.016 125.018 106.969 125.018 105.72V87.442C125.018 86.193 126.015 85.146 127.255 85.146C128.491 85.146 129.529 86.193 129.529 87.442V98.8348L134.718 93.1182C135.239 92.5124 135.877 91.9096 136.675 91.9096C137.793 91.9096 138.83 92.9566 138.83 94.1248C138.83 94.4883 138.749 94.8487 138.55 95.1718L134.438 99.6395L138.631 104.673ZM144.241 98.5645H150.749C150.749 96.6414 149.222 95.6876 147.497 95.6876C145.771 95.6876 144.241 96.6818 144.241 98.5645ZM153.384 101.33H144.244C144.244 104.026 146.839 104.43 147.995 104.43C148.836 104.43 150.032 104.269 150.951 103.865C151.232 103.666 151.708 103.501 152.11 103.501C153.107 103.501 153.945 104.349 153.945 105.356C153.945 106.04 153.506 106.645 152.948 106.965C151.549 107.972 149.752 108.214 148.039 108.214C143.487 108.214 139.696 105.76 139.696 100.081C139.696 95.613 142.011 91.7077 147.4 91.7077C151.752 91.7077 155.063 94.5256 155.144 99.5587C155.141 100.525 154.34 101.33 153.384 101.33ZM165.941 108.214H164.704C161.272 108.214 159.275 106.723 159.275 101.37V95.8522H158.116C157.038 95.8522 156.079 94.886 156.079 93.7986C156.079 92.6304 157.035 91.7046 158.116 91.7046H159.275V87.4358C159.275 86.1868 160.272 85.1398 161.511 85.1398C162.748 85.1398 163.785 86.1868 163.785 87.4358V91.7046H165.661C166.739 91.7046 167.698 92.6304 167.698 93.7986C167.698 94.886 166.739 95.8522 165.661 95.8522H163.785V100.481C163.785 103.542 163.944 104.185 165.303 104.185H165.941C167.019 104.185 167.935 105.07 167.935 106.198C167.935 107.289 167.016 108.214 165.941 108.214ZM187.797 86.8361C188.395 87.1996 188.915 88.0043 188.915 88.7282C188.915 89.8964 187.918 90.8626 186.8 90.8626C186.519 90.8626 186.239 90.7819 186.002 90.7011C184.685 89.7348 183.009 89.0917 181.252 89.0917C177.102 89.0917 174.227 92.4751 174.227 96.66C174.227 100.848 177.102 104.191 181.252 104.191C183.326 104.191 185.164 103.346 186.56 102.057C186.921 101.799 187.354 101.659 187.797 101.653C188.915 101.653 189.79 102.538 189.79 103.666C189.79 104.39 189.351 105.033 188.793 105.397C186.797 107.087 184.083 108.214 181.286 108.214C174.9 108.214 169.71 102.979 169.71 96.5389C169.71 90.0983 174.897 84.8633 181.286 84.8633C183.685 84.8633 185.959 85.5872 187.797 86.8361ZM199.235 104.188C201.272 104.188 202.986 102.377 202.986 99.9191C202.986 97.4647 201.229 95.8522 199.232 95.8522C197.235 95.8522 195.64 97.502 195.64 99.9191C195.644 102.296 197.238 104.188 199.235 104.188ZM204.026 106.242L203.948 105.717C203.07 107.447 200.276 108.214 198.478 108.214C194.248 108.214 191.133 104.39 191.133 99.8787C191.133 95.3707 194.329 91.7077 198.718 91.7077C199.475 91.7077 201.992 91.9096 203.948 94.2056L204.026 93.6805C204.026 92.7143 204.783 91.9096 205.743 91.9096C206.699 91.9096 207.5 92.7143 207.5 93.6805V106.242C207.5 107.208 206.699 108.012 205.743 108.012C204.783 108.016 204.026 107.208 204.026 106.242ZM219.895 104.188C221.891 104.188 223.486 102.296 223.486 99.9191C223.486 97.502 221.891 95.8522 219.895 95.8522C217.898 95.8522 216.141 97.4616 216.141 99.9191C216.141 102.377 217.86 104.188 219.895 104.188ZM216.141 106.888V112.604C216.141 113.853 215.104 114.9 213.867 114.9C212.63 114.9 211.63 113.853 211.63 112.604V93.6805C211.63 92.7143 212.431 91.9096 213.387 91.9096C214.343 91.9096 215.104 92.7143 215.104 93.8421C216.779 92.1116 218.854 91.7077 220.412 91.7077C224.804 91.7077 227.997 95.3707 227.997 99.8787C227.997 104.39 224.885 108.214 220.652 108.214C219.337 108.214 217.381 107.814 216.141 106.888Z"
                  fill="url(#paint1_linear_19_1351)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_19_1351"
                    x1="101.534"
                    y1="25.8557"
                    x2="110.938"
                    y2="64.1379"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F07AFF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_19_1351"
                    x1="68.2177"
                    y1="96.8583"
                    x2="68.8431"
                    y2="116.349"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F07AFF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                </defs>
              </svg>

              <svg
                width="281"
                height="77"
                viewBox="0 0 281 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
        </section>

        <section
          id="people"
          className={`relative ${animatedPeople ? "in-view" : ""}`}
        >
          <div className="container mx-auto">
            <h5 className="text-animate text-center text-gradient-blue text-[40px] mb-[32px] leading-[48px] relative z-10">
              Our Team
            </h5>

            <div className="box grid grid-cols-3 gap-x-[32px]">
              <div>
                <div className="mb-[16px] border-linear">
                  <img
                    src="/team-1.png"
                    alt="Nguyễn Nguyên Quân"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <p className="text-[20px] leading-[24px] font-bold mb-[2px]">
                    Nguyễn Nguyên Quân
                  </p>
                  <p className="text-zinc-50 mb-[16px]">CEO</p>
                  <p className="text-zinc-200">
                    Dr. Binh supports Aura in expanding business relations and
                    advancing Aura&apos;s goals by facilitating integrations
                    with the growing number of industry partners.
                  </p>
                </div>
              </div>
              <div>
                <div className="mb-[16px] border-linear">
                  <img
                    src="/team-2.png"
                    alt="Nguyễn Nguyên Quân"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <p className="text-[20px] leading-[24px] font-bold mb-[2px]">
                    Nguyễn Nguyên Quân
                  </p>
                  <p className="text-zinc-50 mb-[16px]">CEO</p>
                  <p className="text-zinc-200">
                    Dr. Binh supports Aura in expanding business relations and
                    advancing Aura&apos;s goals by facilitating integrations
                    with the growing number of industry partners.
                  </p>
                </div>
              </div>
              <div>
                <div className="mb-[16px] border-linear">
                  <img
                    src="/team-3.png"
                    alt="Nguyễn Nguyên Quân"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <p className="text-[20px] leading-[24px] font-bold mb-[2px]">
                    Nguyễn Nguyên Quân
                  </p>
                  <p className="text-zinc-50 mb-[16px]">CEO</p>
                  <p className="text-zinc-200">
                    Dr. Binh supports Aura in expanding business relations and
                    advancing Aura&apos;s goals by facilitating integrations
                    with the growing number of industry partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="whitepaper"
          className={`text-center min-h-[455px] relative flex items-center justify-center ${
            animatedWhitepaper ? "in-view" : ""
          }`}
        >
          <div className="container mx-auto relative z-10">
            <h3 className="text-animate text-[40px] mb-[15px] leading-[48px] font-medium text-shadow-white-51">
              Learn more about VILIK World
            </h3>

            <button
              type="button"
              className="bg-gradient-purple text-[16px] leading-[19px] h-[51px] px-[24px] rounded-[26px]"
            >
              Read Whitepaper
            </button>
          </div>

          <svg
            width="1396"
            height="949"
            viewBox="0 0 1396 949"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 right-0"
          >
            <g opacity="0.67" filter="url(#filter0_f_19_9943)">
              <ellipse
                rx="429.678"
                ry="167.611"
                transform="matrix(0.983903 0.178705 -0.518932 0.854815 1347.26 474.466)"
                fill="#3D17E3"
              />
            </g>
            <g filter="url(#filter1_f_19_9943)">
              <ellipse
                rx="391.751"
                ry="91.462"
                transform="matrix(0.981996 0.188901 -0.49729 0.867585 688.181 529.758)"
                fill="#420A8D"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_19_9943"
                x="603.751"
                y="0.0730896"
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
                  result="effect1_foregroundBlur_19_9943"
                />
              </filter>
              <filter
                id="filter1_f_19_9943"
                x="0.766113"
                y="121.254"
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
                  result="effect1_foregroundBlur_19_9943"
                />
              </filter>
            </defs>
          </svg>
        </section>
      </main>

      <div className="border-top-linear"></div>
      <footer className="text-[16px] leading-[19px] text-center pt-[38px] pb-[33px] bg-white-blur-008 relative">
        <div
          style={{
            position: "absolute",
            width: "1010px",
            height: "425px",
            left: "-505px",
            bottom: "96px",
            background: "rgba(240, 63, 255, 0.37)",
            filter: "blur(200px)",
          }}
        ></div>
        <div className="container mx-auto relative z-10">
          <Link href="/">
            <a className="inline-block mb-[14px]">
              <svg
                width="107"
                height="56"
                viewBox="0 0 107 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4_1125)">
                  <path
                    d="M33.7214 28.6079L46.4131 55.0996L0.00012207 28.6079H33.7214ZM46.4131 0.0996094L0.00012207 26.5913H33.7214L46.4131 0.0996094ZM40.2988 27.5996C40.2988 22.4663 43.356 18.0663 47.71 15.9579V2.11628L35.4815 27.5996L47.6175 53.0829V39.2413C43.356 37.1329 40.2988 32.7329 40.2988 27.5996ZM53.2685 16.7829C51.9716 16.7829 50.7672 16.9663 49.6555 17.4246C48.9144 17.6996 48.2659 17.9746 47.6175 18.3413C44.375 20.2663 42.2443 23.7496 42.2443 27.6913C42.2443 31.6329 44.375 35.1163 47.6175 37.0413C48.2659 37.4079 48.9144 37.6829 49.6555 37.9579C50.7672 38.3246 51.9716 38.5996 53.2685 38.5996C54.5655 38.5996 55.7698 38.4163 56.8815 37.9579C57.6227 37.6829 58.2711 37.4079 58.9196 37.0413C62.162 35.1163 64.2928 31.6329 64.2928 27.6913C64.2928 23.7496 62.162 20.2663 58.9196 18.3413C58.2711 17.9746 57.6227 17.6996 56.8815 17.4246C55.7698 16.9663 54.5655 16.7829 53.2685 16.7829ZM72.9084 28.6079H106.63L60.2165 55.0996L72.9084 28.6079ZM106.63 26.5913L60.2165 0.0996094L72.8157 26.5913H106.63ZM66.3308 27.5996C66.3308 32.7329 63.2737 37.1329 58.9196 39.2413V53.1746L71.1482 27.5996L58.9196 2.11628V16.0496C63.2737 18.0663 66.3308 22.4663 66.3308 27.5996Z"
                    fill="url(#paint0_linear_4_1125)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_4_1125"
                    x1="127.844"
                    y1="59.9121"
                    x2="-36.1295"
                    y2="61.3165"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#05DAC5" />
                    <stop offset="0.277086" stopColor="#4354F2" />
                    <stop offset="0.710545" stopColor="#F526FF" />
                    <stop offset="1" stopColor="#FC176F" />
                  </linearGradient>
                  <clipPath id="clip0_4_1125">
                    <rect
                      width="107"
                      height="55"
                      fill="white"
                      transform="translate(0.00012207 0.0996094)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </Link>
          <h2 className="text-[24px] leading-[29px] mb-[27px]">VILIK</h2>
          <p className="text-gradient text-[18px] leading0[27px] mb-[15px] font-semibold">
            A new native blockchain. Powered by users.
          </p>

          <div className="text-center text-zinc-500">
            Copyright © 2022 Vilik All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
