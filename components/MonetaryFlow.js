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

        <div className="box w-full relative max-w-[1223px] mx-auto relative">
          <div className="hidden lg:block absolute top-[-107px] left-[-19px] z-10">
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

          <div className="bg-white-blur-003 px-[15px] pt-[40px] pb-[25px]">
            <div className="inline-block relative">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet="monetary-flow-1@2x.png"
                />
                <img src="monetary-flow-1-mb@2x.png" alt="Monetary flow" />
              </picture>

              <svg
                width="36"
                height="11"
                viewBox="0 0 36 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block arrow-flash absolute w-[3.04826418%] h-auto left-[17.9508891%] top-[39.0243902%]"
              >
                <path
                  d="M0 4.99976H32"
                  stroke="url(#paint0_linear_31_593)"
                  strokeWidth="2"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="url(#paint1_linear_31_593)"
                />
                <path
                  d="M0 4.99976H32"
                  stroke="white"
                  strokeWidth="2"
                  className="path-black"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="white"
                  className="path-black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_31_593"
                    x1="9.57455"
                    y1="5.3991"
                    x2="9.57949"
                    y2="6.04862"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_31_593"
                    x1="30.2433"
                    y1="4.44346"
                    x2="32.3261"
                    y2="10.5516"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="36"
                height="11"
                viewBox="0 0 36 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block arrow-flash absolute w-[3.04826418%] h-auto left-[33.19221%] top-[39.0243902%]"
              >
                <path d="M0 4.99976H32" stroke="white" strokeWidth="2" />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="white"
                />
                <path
                  d="M0 4.99976H32"
                  stroke="url(#paint0_linear_31_593)"
                  strokeWidth="2"
                  className="path-black"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="url(#paint1_linear_31_593)"
                  className="path-black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_31_593"
                    x1="9.57455"
                    y1="5.3991"
                    x2="9.57949"
                    y2="6.04862"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_31_593"
                    x1="30.2433"
                    y1="4.44346"
                    x2="32.3261"
                    y2="10.5516"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="36"
                height="11"
                viewBox="0 0 36 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block arrow-flash absolute w-[3.04826418%] h-auto left-[46.2320068%] top-[39.0243902%]"
              >
                <path
                  d="M0 4.99976H32"
                  stroke="url(#paint0_linear_31_593)"
                  strokeWidth="2"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="url(#paint1_linear_31_593)"
                />
                <path
                  d="M0 4.99976H32"
                  stroke="white"
                  strokeWidth="2"
                  className="path-black"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="white"
                  className="path-black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_31_593"
                    x1="9.57455"
                    y1="5.3991"
                    x2="9.57949"
                    y2="6.04862"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_31_593"
                    x1="30.2433"
                    y1="4.44346"
                    x2="32.3261"
                    y2="10.5516"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="36"
                height="11"
                viewBox="0 0 36 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block arrow-flash absolute w-[3.04826418%] h-auto left-[59.2718036%] top-[39.0243902%]"
              >
                <path d="M0 4.99976H32" stroke="white" strokeWidth="2" />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="white"
                />
                <path
                  d="M0 4.99976H32"
                  stroke="url(#paint0_linear_31_593)"
                  strokeWidth="2"
                  className="path-black"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="url(#paint1_linear_31_593)"
                  className="path-black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_31_593"
                    x1="9.57455"
                    y1="5.3991"
                    x2="9.57949"
                    y2="6.04862"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_31_593"
                    x1="30.2433"
                    y1="4.44346"
                    x2="32.3261"
                    y2="10.5516"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="36"
                height="11"
                viewBox="0 0 36 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block arrow-flash absolute w-[3.04826418%] h-auto left-[72.3116003%] top-[39.0243902%]"
              >
                <path
                  d="M0 4.99976H32"
                  stroke="url(#paint0_linear_31_593)"
                  strokeWidth="2"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="url(#paint1_linear_31_593)"
                />
                <path
                  d="M0 4.99976H32"
                  stroke="white"
                  strokeWidth="2"
                  className="path-black"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="white"
                  className="path-black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_31_593"
                    x1="9.57455"
                    y1="5.3991"
                    x2="9.57949"
                    y2="6.04862"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_31_593"
                    x1="30.2433"
                    y1="4.44346"
                    x2="32.3261"
                    y2="10.5516"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="36"
                height="11"
                viewBox="0 0 36 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block arrow-flash absolute w-[3.04826418%] h-auto left-[85.3513971%] top-[39.0243902%]"
              >
                <path d="M0 4.99976H32" stroke="white" strokeWidth="2" />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="white"
                />
                <path
                  d="M0 4.99976H32"
                  stroke="url(#paint0_linear_31_593)"
                  strokeWidth="2"
                  className="path-black"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="url(#paint1_linear_31_593)"
                  className="path-black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_31_593"
                    x1="9.57455"
                    y1="5.3991"
                    x2="9.57949"
                    y2="6.04862"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_31_593"
                    x1="30.2433"
                    y1="4.44346"
                    x2="32.3261"
                    y2="10.5516"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="mt-[2px] bg-white-blur-003 px-[15px] pt-[40px] pb-[25px]">
            <div className="inline-block relative">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet="monetary-flow-2@2x.png"
                />
                <img src="monetary-flow-2-mb@2x.png" alt="Monetary flow" />
              </picture>

              <svg
                width="36"
                height="11"
                viewBox="0 0 36 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block arrow-flash absolute w-[3.04826418%] h-auto left-[17.9508891%] top-[39.0243902%]"
              >
                <path
                  d="M0 4.99976H32"
                  stroke="url(#paint0_linear_31_593)"
                  strokeWidth="2"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="url(#paint1_linear_31_593)"
                />
                <path
                  d="M0 4.99976H32"
                  stroke="white"
                  strokeWidth="2"
                  className="path-black"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="white"
                  className="path-black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_31_593"
                    x1="9.57455"
                    y1="5.3991"
                    x2="9.57949"
                    y2="6.04862"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_31_593"
                    x1="30.2433"
                    y1="4.44346"
                    x2="32.3261"
                    y2="10.5516"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="36"
                height="11"
                viewBox="0 0 36 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block arrow-flash absolute w-[3.04826418%] h-auto left-[45.9779848%] top-[39.0243902%]"
              >
                <path d="M0 4.99976H32" stroke="white" strokeWidth="2" />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="white"
                />
                <path
                  d="M0 4.99976H32"
                  stroke="url(#paint0_linear_31_593)"
                  strokeWidth="2"
                  className="path-black"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="url(#paint1_linear_31_593)"
                  className="path-black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_31_593"
                    x1="9.57455"
                    y1="5.3991"
                    x2="9.57949"
                    y2="6.04862"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_31_593"
                    x1="30.2433"
                    y1="4.44346"
                    x2="32.3261"
                    y2="10.5516"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="36"
                height="11"
                viewBox="0 0 36 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block arrow-flash absolute w-[3.04826418%] h-auto left-[59.1024555%] top-[39.0243902%]"
              >
                <path
                  d="M0 4.99976H32"
                  stroke="url(#paint0_linear_31_593)"
                  strokeWidth="2"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="url(#paint1_linear_31_593)"
                />
                <path
                  d="M0 4.99976H32"
                  stroke="white"
                  strokeWidth="2"
                  className="path-black"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="white"
                  className="path-black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_31_593"
                    x1="9.57455"
                    y1="5.3991"
                    x2="9.57949"
                    y2="6.04862"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_31_593"
                    x1="30.2433"
                    y1="4.44346"
                    x2="32.3261"
                    y2="10.5516"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="36"
                height="11"
                viewBox="0 0 36 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block arrow-flash absolute w-[3.04826418%] h-auto left-[72.2269263%] top-[39.0243902%]"
              >
                <path d="M0 4.99976H32" stroke="white" strokeWidth="2" />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="white"
                />
                <path
                  d="M0 4.99976H32"
                  stroke="url(#paint0_linear_31_593)"
                  strokeWidth="2"
                  className="path-black"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="url(#paint1_linear_31_593)"
                  className="path-black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_31_593"
                    x1="9.57455"
                    y1="5.3991"
                    x2="9.57949"
                    y2="6.04862"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_31_593"
                    x1="30.2433"
                    y1="4.44346"
                    x2="32.3261"
                    y2="10.5516"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="36"
                height="11"
                viewBox="0 0 36 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block arrow-flash absolute w-[3.04826418%] h-auto left-[85.2667231%] top-[39.0243902%]"
              >
                <path
                  d="M0 4.99976H32"
                  stroke="url(#paint0_linear_31_593)"
                  strokeWidth="2"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="url(#paint1_linear_31_593)"
                />
                <path
                  d="M0 4.99976H32"
                  stroke="white"
                  strokeWidth="2"
                  className="path-black"
                />
                <path
                  d="M35.4976 5.33076L28 0.251709L30 5.5498L28 10.7484L35.4976 5.33076Z"
                  fill="white"
                  className="path-black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_31_593"
                    x1="9.57455"
                    y1="5.3991"
                    x2="9.57949"
                    y2="6.04862"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_31_593"
                    x1="30.2433"
                    y1="4.44346"
                    x2="32.3261"
                    y2="10.5516"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EAC2FF" />
                    <stop offset="1" stopColor="#1945D9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="hidden lg:block absolute bottom-[-136px] right-[-182px]">
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
