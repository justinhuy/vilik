import { useState } from "react";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Value = ({ activeSection }) => {
  const [active, setActive] = useState("problem");
  return (
    <div
      className={`screen relative h-full w-full flex flex-wrap items-center pt-[50px] pb-[8px] lg:py-[87px] lg:px-[7.5vw] ${
        activeSection === 4 ? "active" : ""
      }`}
      id="value"
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
              <div className="relative inline-block">
                <img
                  src="/problem@2x.png"
                  alt="THE PROBLEM OF LIVE VIDEOSTREAMING TODAY"
                  className="mx-auto w-full max-w-[844px] mb-[25px]"
                />

                <div className="hidden lg:block w-[16.2322275%] absolute top-[27.3556231%] left-[1px] transition-all duration-300 hover:scale-105">
                  <Image
                    src="/content-creator.png"
                    width={137}
                    height={130}
                    className="w-full h-auto"
                  />
                </div>
                <div className="hidden lg:block w-[15.7582938%] absolute top-[26.7477204%] left-[29.7393365%] transition-all duration-300 hover:scale-105">
                  <Image
                    src="/video-platform.png"
                    width={133.5}
                    height={133.5}
                    className="w-full h-auto"
                  />
                </div>
                <div className="hidden lg:block w-[18.1279621%] absolute top-[27.9635258%] left-[59.0047393%] transition-all duration-300 hover:scale-105">
                  <Image
                    src="/cdn.png"
                    width={153}
                    height={139}
                    className="w-full h-auto"
                  />
                </div>
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
                        Inconvenience in CDN which causes video re-buffering and
                        high load times, users cannot enjoy perfect quality in
                        case of increasing demand for online video.
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
                        rapidly increased, which means data needs are
                        skyrocketing with 4k, 8k and higher-quality streams are
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
                        content creators and ecosystem.
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
    </div>
  );
};

export default Value;
