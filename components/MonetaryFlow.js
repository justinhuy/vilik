import { useState } from "react";
import { InView } from "react-intersection-observer";
import Image from "next/image";

import Moving from "../animation/Moving";

const MonetaryFlow = ({ activeSection }) => {
  const [inView, setInView] = useState(false);
  return (
    <InView
      as="div"
      // triggerOnce
      onChange={(inView) => setInView(inView)}
      className={`screen relative h-full w-full flex flex-wrap items-center justify-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
        activeSection === 8 ? "active" : ""
      } ${inView ? "in-view" : ""}`}
    >
      <div className="relative z-10 screen__container">
        <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] lg:text-[40px] lg:leading-[48px] mb-[16px] lg:mb-[32px] lg:leading-[48px] text-center uppercase font-semibold lg:font-normal font-kanit">
          Monetary flow
        </h5>

        <div className="box bg-white-blur-003 p-[32px] lg:px-[143px] lg:py-[57px] w-full relative max-w-[1223px] mx-auto">
          <div className="hidden lg:block absolute top-[-58px] left-[-19px]">
            {activeSection === 8 || inView ? (
              <Moving yFrom={10} yTo={-10} duration={5}>
                <Image
                  src="/shape1@2x.png"
                  alt="NFT marketplace"
                  width={133}
                  height={133}
                />
              </Moving>
            ) : null}
          </div>

          <div className="inline-block relative">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet="monetary-flow@2x.png"
              />
              <img src="monetary-flowmb@2x.png" alt="Monetary flow" />
            </picture>
            <svg
              width="48"
              height="11"
              viewBox="0 0 48 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block arrow-flash absolute w-[5.12273212%] h-auto left-[22.1985059%] top-[12.601626%]"
            >
              <path
                d="M0 5L46 5"
                stroke="url(#paint0_linear_9_107)"
                strokeWidth="2"
              />
              <path
                d="M47.5438 5.07905L40.0461 0L42.0461 5.2981L40.0461 10.4967L47.5438 5.07905Z"
                fill="url(#paint1_linear_9_107)"
              />

              <path
                d="M0 5L46 5"
                stroke="white"
                strokeWidth="2"
                className="path-black"
              />
              <path
                d="M47.5438 5.07905L40.0461 0L42.0461 5.2981L40.0461 10.4967L47.5438 5.07905Z"
                fill="white"
                className="path-black"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9_107"
                  x1="13.7634"
                  y1="5.39934"
                  x2="13.7669"
                  y2="6.04889"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9_107"
                  x1="42.2895"
                  y1="4.19175"
                  x2="44.3722"
                  y2="10.2999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              width="48"
              height="11"
              viewBox="0 0 48 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block arrow-flash absolute w-[5.12273212%] h-auto left-[47.3852721%] top-[12.601626%]"
            >
              <path d="M0 5L46 5" stroke="white" strokeWidth="2" />
              <path
                d="M47.5438 5.07905L40.0461 0L42.0461 5.2981L40.0461 10.4967L47.5438 5.07905Z"
                fill="white"
              />
              <path
                d="M0 5L46 5"
                stroke="url(#paint0_linear_9_107)"
                strokeWidth="2"
                className="path-black"
              />
              <path
                d="M47.5438 5.07905L40.0461 0L42.0461 5.2981L40.0461 10.4967L47.5438 5.07905Z"
                fill="url(#paint1_linear_9_107)"
                className="path-black"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9_107"
                  x1="13.7634"
                  y1="5.39934"
                  x2="13.7669"
                  y2="6.04889"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9_107"
                  x1="42.2895"
                  y1="4.19175"
                  x2="44.3722"
                  y2="10.2999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              width="48"
              height="11"
              viewBox="0 0 48 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block arrow-flash absolute w-[5.12273212%] h-auto left-[72.7854856%] top-[12.601626%]"
            >
              <path
                d="M0 5L46 5"
                stroke="url(#paint0_linear_9_107)"
                strokeWidth="2"
              />
              <path
                d="M47.5438 5.07905L40.0461 0L42.0461 5.2981L40.0461 10.4967L47.5438 5.07905Z"
                fill="url(#paint1_linear_9_107)"
              />

              <path
                d="M0 5L46 5"
                stroke="white"
                strokeWidth="2"
                className="path-black"
              />
              <path
                d="M47.5438 5.07905L40.0461 0L42.0461 5.2981L40.0461 10.4967L47.5438 5.07905Z"
                fill="white"
                className="path-black"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9_107"
                  x1="13.7634"
                  y1="5.39934"
                  x2="13.7669"
                  y2="6.04889"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9_107"
                  x1="42.2895"
                  y1="4.19175"
                  x2="44.3722"
                  y2="10.2999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              width="12"
              height="45"
              viewBox="0 0 12 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block arrow-flash absolute w-[1.28068303%] h-auto left-[87.8335112%] top-[22.7642276%]"
            >
              <path d="M6 0L6 42" stroke="white" strokeWidth="2" />
              <path
                d="M5.94146 44.0201L11.0205 36.5225L5.72241 38.5225L0.523802 36.5225L5.94146 44.0201Z"
                fill="white"
              />
              <path
                d="M6 0L6 42"
                stroke="url(#paint0_linear_9_128)"
                strokeWidth="2"
                className="path-black"
              />
              <path
                d="M5.94146 44.0201L11.0205 36.5225L5.72241 38.5225L0.523802 36.5225L5.94146 44.0201Z"
                fill="url(#paint1_linear_9_128)"
                className="path-black"
              />

              <defs>
                <linearGradient
                  id="paint0_linear_9_128"
                  x1="5.60066"
                  y1="12.5666"
                  x2="4.95112"
                  y2="12.5704"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9_128"
                  x1="6.82876"
                  y1="38.7658"
                  x2="0.720634"
                  y2="40.8485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              width="48"
              height="11"
              viewBox="0 0 48 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block arrow-flash absolute w-[5.12273212%] h-auto left-[72.678762%] top-[46.7479675%]"
            >
              <path
                d="M3.99988 5.09961L47.9999 5.09961"
                stroke="url(#paint0_linear_9_116)"
                strokeWidth="2"
              />
              <path
                d="M-0.000150171 5.41778L7.4975 10.4968L5.4975 5.19873L7.4975 0.000120163L-0.000150171 5.41778Z"
                fill="url(#paint1_linear_9_116)"
              />
              <path
                d="M3.99988 5.09961L47.9999 5.09961"
                stroke="white"
                strokeWidth="2"
                className="path-black"
              />
              <path
                d="M-0.000150171 5.41778L7.4975 10.4968L5.4975 5.19873L7.4975 0.000120163L-0.000150171 5.41778Z"
                fill="white"
                className="path-black"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9_116"
                  x1="17.1649"
                  y1="5.49895"
                  x2="17.1685"
                  y2="6.1485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9_116"
                  x1="5.25417"
                  y1="6.30507"
                  x2="3.17142"
                  y2="0.196953"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              width="48"
              height="11"
              viewBox="0 0 48 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block arrow-flash absolute w-[5.12273212%] h-auto left-[47.3852721%] top-[46.7479675%]"
            >
              <path
                d="M3.99988 5.09961L47.9999 5.09961"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M-0.000150171 5.41778L7.4975 10.4968L5.4975 5.19873L7.4975 0.000120163L-0.000150171 5.41778Z"
                fill="white"
              />
              <path
                d="M3.99988 5.09961L47.9999 5.09961"
                stroke="url(#paint0_linear_9_116)"
                strokeWidth="2"
                className="path-black"
              />
              <path
                d="M-0.000150171 5.41778L7.4975 10.4968L5.4975 5.19873L7.4975 0.000120163L-0.000150171 5.41778Z"
                fill="url(#paint1_linear_9_116)"
                className="path-black"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9_116"
                  x1="17.1649"
                  y1="5.49895"
                  x2="17.1685"
                  y2="6.1485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9_116"
                  x1="5.25417"
                  y1="6.30507"
                  x2="3.17142"
                  y2="0.196953"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              width="48"
              height="11"
              viewBox="0 0 48 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block arrow-flash absolute w-[5.12273212%] h-auto left-[22.3052295%] top-[46.7479675%]"
            >
              <path
                d="M3.99988 5.09961L47.9999 5.09961"
                stroke="url(#paint0_linear_9_116)"
                strokeWidth="2"
              />
              <path
                d="M-0.000150171 5.41778L7.4975 10.4968L5.4975 5.19873L7.4975 0.000120163L-0.000150171 5.41778Z"
                fill="url(#paint1_linear_9_116)"
              />
              <path
                d="M3.99988 5.09961L47.9999 5.09961"
                stroke="white"
                strokeWidth="2"
                className="path-black"
              />
              <path
                d="M-0.000150171 5.41778L7.4975 10.4968L5.4975 5.19873L7.4975 0.000120163L-0.000150171 5.41778Z"
                fill="white"
                className="path-black"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9_116"
                  x1="17.1649"
                  y1="5.49895"
                  x2="17.1685"
                  y2="6.1485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9_116"
                  x1="5.25417"
                  y1="6.30507"
                  x2="3.17142"
                  y2="0.196953"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              width="11"
              height="45"
              viewBox="0 0 11 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block arrow-flash absolute w-[1.17395945%] h-auto left-[11.7395945%] top-[56.097561%]"
            >
              <path
                d="M5.47607 0L5.47608 42"
                stroke="white"
                strokeWidth="2"
                className="path-black"
              />
              <path
                d="M5.41753 44.0201L10.4966 36.5225L5.19849 38.5225L-0.000123978 36.5225L5.41753 44.0201Z"
                fill="white"
                className="path-black"
              />
              <path
                d="M5.47607 0L5.47608 42"
                stroke="url(#paint0_linear_9_131)"
                strokeWidth="2"
              />
              <path
                d="M5.41753 44.0201L10.4966 36.5225L5.19849 38.5225L-0.000123978 36.5225L5.41753 44.0201Z"
                fill="url(#paint1_linear_9_131)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9_131"
                  x1="5.07674"
                  y1="12.5666"
                  x2="4.42719"
                  y2="12.5704"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9_131"
                  x1="6.30483"
                  y1="38.7658"
                  x2="0.196709"
                  y2="40.8485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              width="48"
              height="11"
              viewBox="0 0 48 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block arrow-flash absolute w-[5.12273212%] h-auto left-[22.1985059%] top-[80.4878049%]"
            >
              <path
                d="M0 5L46 5"
                stroke="url(#paint0_linear_9_107)"
                strokeWidth="2"
              />
              <path
                d="M47.5438 5.07905L40.0461 0L42.0461 5.2981L40.0461 10.4967L47.5438 5.07905Z"
                fill="url(#paint1_linear_9_107)"
              />

              <path
                d="M0 5L46 5"
                stroke="white"
                strokeWidth="2"
                className="path-black"
              />
              <path
                d="M47.5438 5.07905L40.0461 0L42.0461 5.2981L40.0461 10.4967L47.5438 5.07905Z"
                fill="white"
                className="path-black"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_9_107"
                  x1="13.7634"
                  y1="5.39934"
                  x2="13.7669"
                  y2="6.04889"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9_107"
                  x1="42.2895"
                  y1="4.19175"
                  x2="44.3722"
                  y2="10.2999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="hidden lg:block absolute bottom-[-131px] right-[-182px]">
            {activeSection === 8 || inView ? (
              <Moving yFrom={-10} yTo={10} duration={5}>
                <Image
                  src="/shape2@2x.png"
                  alt="NFT marketplace"
                  width={277}
                  height={216}
                />
              </Moving>
            ) : null}
          </div>
        </div>
      </div>
    </InView>
  );
};

export default MonetaryFlow;
