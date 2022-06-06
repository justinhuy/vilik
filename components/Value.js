import { useState } from "react";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { InView } from "react-intersection-observer";

const Value = ({ activeSection }) => {
  const [active, setActive] = useState("problem");
  const [inView, setInView] = useState(false);
  return (
    <InView
      as="div"
      // triggerOnce
      onChange={(inView) => setInView(inView)}
      className={`screen relative h-full w-full flex flex-wrap items-center pt-[50px] pb-[8px] lg:py-[87px] lg:px-[7.5vw] ${
        activeSection === 4 || inView ? "active" : ""
      }`}
    >
      <div className="relative z-10 w-full screen__container">
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
                active === "problem" ? "text-shadow-white-51 bg-white-012" : ""
              }`}
            >
              Problems
            </button>
            <button
              type="button"
              onClick={() => setActive("solution")}
              className={`w-6/12 h-[36px] lg:h-[43px] rounded-[22px] flex items-center justify-center ${
                active === "solution" ? "text-shadow-white-51 bg-white-012" : ""
              }`}
            >
              Solutions
            </button>
          </div>
        </div>

        {active === "problem" ? (
          <>
            <h5 className="sub-heading text-center text-gradient-blue text-[24px] mb-[24px] leading-[29px] lg:leading-[38px]">
              THE PROBLEM OF LIVE VIDEOSTREAMING TODAY
            </h5>

            <div className="desc text-center  px-[16px] lg:px-0">
              <div className="relative inline-block mb-[25px]">
                <img
                  src="/problem@2x.png"
                  alt="THE PROBLEM OF LIVE VIDEOSTREAMING TODAY"
                  className="mx-auto w-full max-w-[844px]"
                />

                <div className="hidden lg:block w-[16.2322275%] absolute top-[29.6052632%] left-[1px] transition-all duration-300 hover:scale-105">
                  <Image
                    src="/content-creator.png"
                    width={137}
                    height={130}
                    className="w-full h-auto"
                  />
                </div>
                <div className="hidden lg:block w-[15.7582938%] absolute top-[28.9473684%] left-[29.7393365%] transition-all duration-300 hover:scale-105">
                  <Image
                    src="/video-platform.png"
                    width={133.5}
                    height={133.5}
                    className="w-full h-auto"
                  />
                </div>
                <div className="hidden lg:block w-[18.1279621%] absolute top-[30.5921053%] left-[59.0047393%] transition-all duration-300 hover:scale-105">
                  <Image
                    src="/cdn.png"
                    width={153}
                    height={139}
                    className="w-full h-auto"
                  />
                </div>

                <svg
                  width="77"
                  height="11"
                  viewBox="0 0 77 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-[9.12322275%] h-auto top-[49.3421053%] left-[17.6540284%]"
                >
                  <path
                    d="M0 5.24805L74.9765 5.24804"
                    stroke="url(#paint0_linear_61_65)"
                    strokeWidth="2"
                  />
                  <path
                    d="M76.5435 5.07905L69.0459 0L71.0459 5.2981L69.0459 10.4967L76.5435 5.07905Z"
                    fill="url(#paint1_linear_61_65)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_61_65"
                      x1="22.4333"
                      y1="5.64738"
                      x2="22.4354"
                      y2="6.29694"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#EAC2FF">
                        <animate
                          attributeName="stop-color"
                          values="#EAC2FF; #1945D9; #EAC2FF"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>

                      <stop offset="100%" stopColor="#1945D9">
                        <animate
                          attributeName="stop-color"
                          values="#1945D9; #EAC2FF; #1945D9"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_61_65"
                      x1="71.2892"
                      y1="4.19175"
                      x2="73.372"
                      y2="10.2999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="77"
                  height="11"
                  viewBox="0 0 77 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-[9.12322275%] h-auto left-[48.5781991%] top-[49.3421053%]"
                >
                  <path
                    d="M0 5.24796L74.9765 5.24795"
                    stroke="url(#paint0_linear_61_68)"
                    strokeWidth="2"
                  />
                  <path
                    d="M76.1139 5.07905L68.6162 0L70.6162 5.2981L68.6162 10.4967L76.1139 5.07905Z"
                    fill="url(#paint1_linear_61_68)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_61_68"
                      x1="22.4333"
                      y1="5.64729"
                      x2="22.4354"
                      y2="6.29685"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#EAC2FF">
                        <animate
                          attributeName="stop-color"
                          values="#EAC2FF; #1945D9; #EAC2FF"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>

                      <stop offset="100%" stopColor="#1945D9">
                        <animate
                          attributeName="stop-color"
                          values="#1945D9; #EAC2FF; #1945D9"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_61_68"
                      x1="70.8595"
                      y1="4.19175"
                      x2="72.9423"
                      y2="10.2999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="175"
                  height="49"
                  viewBox="0 0 175 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-[20.7345972%] h-auto left-[67.1800948%] top-[12.7868852%]"
                >
                  <path
                    d="M1 48.471V5.73438H174.196"
                    stroke="url(#paint0_linear_61_83)"
                    strokeWidth="2"
                  />
                  <path
                    d="M174.313 5.2812L166.815 0.202148L168.815 5.50024L166.815 10.6989L174.313 5.2812Z"
                    fill="url(#paint1_linear_61_83)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_61_83"
                      x1="52.821"
                      y1="22.8008"
                      x2="54.4833"
                      y2="50.4611"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#EAC2FF">
                        <animate
                          attributeName="stop-color"
                          values="#EAC2FF; #1945D9; #EAC2FF"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>

                      <stop offset="100%" stopColor="#1945D9">
                        <animate
                          attributeName="stop-color"
                          values="#1945D9; #EAC2FF; #1945D9"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_61_83"
                      x1="169.059"
                      y1="4.3939"
                      x2="171.142"
                      y2="10.502"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="176"
                  height="50"
                  viewBox="0 0 176 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-[20.8530806%] h-auto left-[67.1800948%] top-[73.0263158%]"
                >
                  <path
                    d="M1.00098 0.428689V43.915H174.197"
                    stroke="url(#paint0_linear_61_101)"
                    strokeWidth="2"
                  />
                  <path
                    d="M175.314 44.0791L167.816 39L169.816 44.2981L167.816 49.4967L175.314 44.0791Z"
                    fill="url(#paint1_linear_61_101)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_61_101"
                      x1="52.8219"
                      y1="26.5492"
                      x2="54.5429"
                      y2="-1.59278"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#EAC2FF">
                        <animate
                          attributeName="stop-color"
                          values="#EAC2FF; #1945D9; #EAC2FF"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>

                      <stop offset="100%" stopColor="#1945D9">
                        <animate
                          attributeName="stop-color"
                          values="#1945D9; #EAC2FF; #1945D9"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_61_101"
                      x1="170.06"
                      y1="43.1918"
                      x2="172.142"
                      y2="49.2999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="90"
                  height="11"
                  viewBox="0 0 90 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-[10.6635071%] h-auto left-[77.1327014%] top-[48.0263158%]"
                >
                  <path
                    d="M0.0654297 5L88.0654 4.99999"
                    stroke="url(#paint0_linear_61_97)"
                    strokeWidth="2"
                  />
                  <path
                    d="M89.9879 5.07905L82.4902 0L84.4902 5.2981L82.4902 10.4967L89.9879 5.07905Z"
                    fill="url(#paint1_linear_61_97)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_61_97"
                      x1="26.3954"
                      y1="5.39934"
                      x2="26.3972"
                      y2="6.0489"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#EAC2FF">
                        <animate
                          attributeName="stop-color"
                          values="#EAC2FF; #1945D9; #EAC2FF"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>

                      <stop offset="100%" stopColor="#1945D9">
                        <animate
                          attributeName="stop-color"
                          values="#1945D9; #EAC2FF; #1945D9"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_61_97"
                      x1="84.7336"
                      y1="4.19175"
                      x2="86.8163"
                      y2="10.2999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
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
                        className="absolute top-0 left-0 w-full h-auto animate-spin-icon"
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
                        Inconveniences in CDN causes video-buffering and high
                        load times, users can&apos;t enjoy perfect quality in
                        the case of increasing demand for online video.
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
                        className="absolute top-0 left-0 w-full h-auto animate-spin-icon"
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
                        rapidly increased, which means skyrocketing data needs
                        such as 4K, 8K, and higher-quality streams are
                        bottlenecked by un-scalable infrastructure.
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
                        className="absolute top-0 left-0 w-full h-auto animate-spin-icon"
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
                        A centralized framework means less revenue flows back to
                        content the ecosystem.
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

            <div className="desc relative mt-[54px] px-[16px] lg:px-0 text-center">
              <div className="relative inline-block mb-[29px]">
                <svg
                  width="437"
                  height="103"
                  viewBox="0 0 437 103"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 left-0 w-[63.9824305%] h-auto"
                >
                  <rect
                    x="436.489"
                    y="0.484549"
                    width="101.701"
                    height="435.621"
                    rx="12.125"
                    transform="rotate(90 436.489 0.484549)"
                    stroke="url(#paint0_linear_46_343)"
                    strokeWidth="0.969099"
                    strokeDasharray="5.81 5.81"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_46_343"
                      x1="467.693"
                      y1="174.348"
                      x2="609.403"
                      y2="311.174"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="64"
                  height="3"
                  viewBox="0 0 64 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-[10.031348%] h-auto top-[16.9329073%] left-[17.1303075%]"
                >
                  <path
                    d="M0.327148 1.69336L63.3186 1.69336"
                    stroke="url(#paint0_linear_46_344)"
                    strokeWidth="0.969099"
                    strokeDasharray="5.81 5.81"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_46_344"
                      x1="19.1745"
                      y1="2.0927"
                      x2="19.177"
                      y2="2.74226"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F07AFF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="61"
                  height="3"
                  viewBox="0 0 61 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-[8.93118594%] h-auto top-[15.9744409%] left-[38.2137628%]"
                >
                  <path
                    d="M0.338867 1.81543L60.7897 1.81543"
                    stroke="url(#paint0_linear_46_345)"
                    strokeWidth="0.969099"
                    strokeDasharray="5.81 5.81"
                    className="path"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_46_345"
                      x1="18.4261"
                      y1="2.21477"
                      x2="18.4287"
                      y2="2.86433"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F07AFF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  width="57"
                  height="11"
                  viewBox="0 0 57 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-[8.34553441%] h-auto top-[56.2300319%] left-[17.2767204%]"
                >
                  <path
                    d="M3.86035 5.35352H50.8777"
                    stroke="url(#paint0_linear_65_319)"
                    strokeWidth="1.91908"
                  />
                  <path
                    d="M56.224 5.18968L48.958 0.267578L50.8962 5.40195L48.958 10.4399L56.224 5.18968Z"
                    fill="url(#paint1_linear_65_319)"
                  />
                  <path
                    d="M0.298495 5.51833L7.56445 10.4404L5.62626 5.30605L7.56445 0.268087L0.298495 5.51833Z"
                    fill="url(#paint2_linear_65_319)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_65_319"
                      x1="17.9282"
                      y1="5.75286"
                      x2="17.9315"
                      y2="6.4024"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#EAC2FF">
                        <animate
                          attributeName="stop-color"
                          values="#EAC2FF; #1945D9; #EAC2FF"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>

                      <stop offset="100%" stopColor="#1945D9">
                        <animate
                          attributeName="stop-color"
                          values="#1945D9; #EAC2FF; #1945D9"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_65_319"
                      x1="51.132"
                      y1="4.3298"
                      x2="53.1504"
                      y2="10.2492"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_65_319"
                      x1="5.39044"
                      y1="6.37821"
                      x2="3.37206"
                      y2="0.458837"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="57"
                  height="11"
                  viewBox="0 0 57 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-[8.34553441%] h-auto top-[56.2300319%] left-[38.0673499%]"
                >
                  <path
                    d="M3.86035 5.35352H50.8777"
                    stroke="url(#paint0_linear_65_319)"
                    strokeWidth="1.91908"
                  />
                  <path
                    d="M56.224 5.18968L48.958 0.267578L50.8962 5.40195L48.958 10.4399L56.224 5.18968Z"
                    fill="url(#paint1_linear_65_319)"
                  />
                  <path
                    d="M0.298495 5.51833L7.56445 10.4404L5.62626 5.30605L7.56445 0.268087L0.298495 5.51833Z"
                    fill="url(#paint2_linear_65_319)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_65_319"
                      x1="17.9282"
                      y1="5.75286"
                      x2="17.9315"
                      y2="6.4024"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#EAC2FF">
                        <animate
                          attributeName="stop-color"
                          values="#EAC2FF; #1945D9; #EAC2FF"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>

                      <stop offset="100%" stopColor="#1945D9">
                        <animate
                          attributeName="stop-color"
                          values="#1945D9; #EAC2FF; #1945D9"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_65_319"
                      x1="51.132"
                      y1="4.3298"
                      x2="53.1504"
                      y2="10.2492"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_65_319"
                      x1="5.39044"
                      y1="6.37821"
                      x2="3.37206"
                      y2="0.458837"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="11"
                  height="37"
                  viewBox="0 0 11 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-[1.61054173%] h-auto top-[33.8658147%] left-[51.8301611%]"
                >
                  <path
                    d="M4.9082 33.2949L4.9082 3.54925"
                    stroke="url(#paint0_linear_65_335)"
                    strokeWidth="1.91908"
                  />
                  <path
                    d="M5.03245 0.669588L0.110352 7.93555L5.24473 5.99735L10.2827 7.93555L5.03245 0.669588Z"
                    fill="url(#paint1_linear_65_335)"
                  />
                  <path
                    d="M5.3611 36.9564L10.2832 29.6904L5.14883 31.6286L0.110861 29.6904L5.3611 36.9564Z"
                    fill="url(#paint2_linear_65_335)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_65_335"
                      x1="5.30754"
                      y1="24.3949"
                      x2="5.95706"
                      y2="24.3896"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#EAC2FF">
                        <animate
                          attributeName="stop-color"
                          values="#EAC2FF; #1945D9; #EAC2FF"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>

                      <stop offset="100%" stopColor="#1945D9">
                        <animate
                          attributeName="stop-color"
                          values="#1945D9; #EAC2FF; #1945D9"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_65_335"
                      x1="4.17257"
                      y1="5.76154"
                      x2="10.0919"
                      y2="3.74315"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_65_335"
                      x1="6.22098"
                      y1="31.8644"
                      x2="0.301611"
                      y2="33.8828"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="105"
                  height="36"
                  viewBox="0 0 105 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-[15.3733529%] h-auto top-[71.2460064%] left-[52.1229868%]"
                >
                  <path
                    d="M1.9082 0.572694V30.3184H100.741"
                    stroke="url(#paint0_linear_65_346)"
                    strokeWidth="1.91908"
                  />
                  <path
                    d="M104.168 30.4426L96.9023 25.5205L98.8405 30.6549L96.9023 35.6929L104.168 30.4426Z"
                    fill="url(#paint1_linear_65_346)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_65_346"
                      x1="31.4793"
                      y1="18.4397"
                      x2="32.8881"
                      y2="-0.778756"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#EAC2FF">
                        <animate
                          attributeName="stop-color"
                          values="#EAC2FF; #1945D9; #EAC2FF"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>

                      <stop offset="100%" stopColor="#1945D9">
                        <animate
                          attributeName="stop-color"
                          values="#1945D9; #EAC2FF; #1945D9"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_65_346"
                      x1="99.0764"
                      y1="29.5827"
                      x2="101.095"
                      y2="35.5021"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="181"
                  height="11"
                  viewBox="0 0 181 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-[26.5007321%] h-auto left-[59.1508053%] top-[56.2300319%]"
                >
                  <path
                    d="M4.80078 5.18945H180.208"
                    stroke="url(#paint0_linear_65_331)"
                    strokeWidth="1.91908"
                  />
                  <path
                    d="M0.922518 5.5945L8.18848 10.5166L6.25028 5.38222L8.18848 0.344259L0.922518 5.5945Z"
                    fill="url(#paint1_linear_65_331)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_65_331"
                      x1="57.2833"
                      y1="5.58879"
                      x2="57.2842"
                      y2="6.23836"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#EAC2FF">
                        <animate
                          attributeName="stop-color"
                          values="#EAC2FF; #1945D9; #EAC2FF"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>

                      <stop offset="100%" stopColor="#1945D9">
                        <animate
                          attributeName="stop-color"
                          values="#1945D9; #EAC2FF; #1945D9"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_65_331"
                      x1="6.01447"
                      y1="6.45438"
                      x2="3.99608"
                      y2="0.535009"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="98"
                  height="40"
                  viewBox="0 0 98 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-[14.3484627%] h-auto top-[68.6900958%] left-[77.7452416%]"
                >
                  <path
                    d="M0.58417 38.3174L91.7402 38.3174L91.7402 1.85495"
                    stroke="url(#paint0_linear_65_349)"
                    strokeWidth="1.91908"
                  />
                  <path
                    d="M91.8518 0.895174L86.9297 8.16113L92.0641 6.22294L97.102 8.16113L91.8518 0.895174Z"
                    fill="url(#paint1_linear_65_349)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_65_349"
                      x1="55.338"
                      y1="27.4077"
                      x2="12.1414"
                      y2="1.10552"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#EAC2FF">
                        <animate
                          attributeName="stop-color"
                          values="#EAC2FF; #1945D9; #EAC2FF"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>

                      <stop offset="100%" stopColor="#1945D9">
                        <animate
                          attributeName="stop-color"
                          values="#1945D9; #EAC2FF; #1945D9"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_65_349"
                      x1="90.9919"
                      y1="5.98712"
                      x2="96.9113"
                      y2="3.96873"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="140"
                  height="12"
                  viewBox="0 0 140 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-[20.4978038%] h-auto left-[63.8360176%] top-[15.0159744%]"
                >
                  <path
                    d="M4.46484 5.82324H134.324"
                    stroke="url(#paint0_linear_65_327)"
                    strokeWidth="1.91908"
                  />
                  <path
                    d="M139.652 5.89964L132.386 0.977539L134.324 6.11192L132.386 11.1499L139.652 5.89964Z"
                    fill="url(#paint1_linear_65_327)"
                  />
                  <path
                    d="M0.586581 6.22829L7.85254 11.1504L5.91434 6.01601L7.85254 0.978048L0.586581 6.22829Z"
                    fill="url(#paint2_linear_65_327)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_65_327"
                      x1="43.3193"
                      y1="6.22258"
                      x2="43.3205"
                      y2="6.87215"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#EAC2FF">
                        <animate
                          attributeName="stop-color"
                          values="#EAC2FF; #1945D9; #EAC2FF"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>

                      <stop offset="100%" stopColor="#1945D9">
                        <animate
                          attributeName="stop-color"
                          values="#1945D9; #EAC2FF; #1945D9"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_65_327"
                      x1="134.56"
                      y1="5.03976"
                      x2="136.578"
                      y2="10.9591"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_65_327"
                      x1="5.67853"
                      y1="7.08817"
                      x2="3.66014"
                      y2="1.1688"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAC2FF" />
                      <stop offset="1" stopColor="#1945D9" />
                    </linearGradient>
                  </defs>
                </svg>

                <img
                  src="/solution@2x.png"
                  alt="VILIK'S SOLUTION"
                  className="mx-auto w-full max-w-[683px]"
                />
              </div>
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
                        className="absolute top-0 left-0 w-full h-auto animate-spin-icon"
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
                        Viewers are now rewarded to participate in the network.
                        This is a new way of monetizing excess network
                        resources, such as bandwidth and storage.
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
                        className="absolute top-0 left-0 w-full h-auto animate-spin-icon"
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
                        Our decentralized network allows everyone to globally
                        earn streaming revenues. Therefore, artists, producers,
                        streamers, and viewers jointly enjoy the most immersive
                        experiences.
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
                        className="absolute top-0 left-0 w-full h-auto animate-spin-icon"
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
                        Reduce cost of delivering video streams
                      </h6>
                      <p className="text-[12px] leading-[18px] lg:text-[14px] leading-[21px] text-[#DCDCDC]">
                        Fewer servers, less bandwidth and no more expensive
                        hosting means more capital to invest in developing new
                        apps and improving the experience for users.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </>
        ) : null}
      </div>
    </InView>
  );
};

export default Value;
