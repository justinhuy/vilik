import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Roadmap = ({ activeSection }) => {
  return (
    <div
      className={`screen relative h-full w-full flex  items-center justify-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
        activeSection === 9 ? "active" : ""
      }`}
      id="roadmap"
    >
      <div className="screen__container relative z-10 w-full lg:static">
        <h5 className="sub-heading text-center text-gradient-blue text-[24px] leading-[29px] lg:text-[40px] lg:leading-[48px] mb-[43px] lg:mb-[54px] lg:leading-[48px] relative z-10  uppercase">
          ROADMAP
        </h5>

        {/* <img
      src="/network-line.png"
      className="absolute hidden w-full lg:block left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4"
    /> */}

        <div className="box relative max-w-[1224px] mx-auto">
          <div className="line-linear absolute top-[34px] w-full left-2/4 -translate-x-2/4"></div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={8}
            slidesPerView={1}
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
              <div className="relative flex flex-wrap items-center justify-center group">
                <div className="w-[72px] h-[72px] relative">
                  <img
                    className="absolute z-10 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4"
                    src="/earth-white.png"
                  />
                </div>
                <p className="w-full text-zinc-50 text-[18px]  leading-[22px] mb-[8px] lg:text-[28px] lg:leading-[34px] lg:mb-[16px] font-bold text-center font-kanit">
                  Q2 - 2022
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
                  className="arrow-flash absolute top-[22px] right-0"
                >
                  <path
                    d="M2 2L14 14L2 26"
                    stroke="url(#paint0_radial_874_5120)"
                    strokeWidth="4"
                    className=""
                  />
                  <path
                    d="M2 2L14 14L2 26"
                    stroke="url(#paint1_linear_874_5120)"
                    strokeWidth="4"
                    className="path-black"
                  />

                  <path
                    d="M14.8008 2L26.8008 14L14.8008 26"
                    stroke="url(#paint1_linear_874_5120)"
                    strokeWidth="4"
                  />
                  <path
                    d="M14.8008 2L26.8008 14L14.8008 26"
                    stroke="url(#paint0_radial_874_5120)"
                    strokeWidth="4"
                    className="path-white opacity-0"
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
              <div className="relative flex flex-wrap items-center justify-center group">
                <div className="w-[72px] h-[72px] relative">
                  <img
                    className="absolute z-10 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4"
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
                  className="arrow-flash absolute top-[22px] right-0"
                >
                  <path
                    d="M2 2L14 14L2 26"
                    stroke="url(#paint0_radial_874_5120)"
                    strokeWidth="4"
                  />
                  <path
                    d="M2 2L14 14L2 26"
                    stroke="url(#paint1_linear_874_5120)"
                    strokeWidth="4"
                    className="path-black"
                  />

                  <path
                    d="M14.8008 2L26.8008 14L14.8008 26"
                    stroke="url(#paint1_linear_874_5120)"
                    strokeWidth="4"
                  />
                  <path
                    d="M14.8008 2L26.8008 14L14.8008 26"
                    stroke="url(#paint0_radial_874_5120)"
                    strokeWidth="4"
                    className="path-white opacity-0"
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
              <div className="relative flex flex-wrap items-center justify-center group">
                <div className="w-[72px] h-[72px] relative">
                  <img
                    className="absolute z-10 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4"
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
                    Vilik Network(Peer-to-Peer Network) Development Begins
                  </li>
                </ul>

                <svg
                  width="30"
                  height="28"
                  viewBox="0 0 30 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="arrow-flash absolute top-[22px] right-0"
                >
                  <path
                    d="M2 2L14 14L2 26"
                    stroke="url(#paint0_radial_874_5120)"
                    strokeWidth="4"
                  />
                  <path
                    d="M2 2L14 14L2 26"
                    stroke="url(#paint1_linear_874_5120)"
                    strokeWidth="4"
                    className="path-black"
                  />

                  <path
                    d="M14.8008 2L26.8008 14L14.8008 26"
                    stroke="url(#paint1_linear_874_5120)"
                    strokeWidth="4"
                  />
                  <path
                    d="M14.8008 2L26.8008 14L14.8008 26"
                    stroke="url(#paint0_radial_874_5120)"
                    strokeWidth="4"
                    className="path-white opacity-0"
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
              <div className="relative flex flex-wrap items-center justify-center group">
                <div className="w-[72px] h-[72px] relative">
                  <img
                    className="absolute z-10 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4"
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
                    Vilik Network(Peer-to-Peer Network) Testnet
                  </li>
                </ul>

                <svg
                  width="30"
                  height="28"
                  viewBox="0 0 30 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="arrow-flash absolute top-[22px] right-0"
                >
                  <path
                    d="M2 2L14 14L2 26"
                    stroke="url(#paint0_radial_874_5120)"
                    strokeWidth="4"
                  />
                  <path
                    d="M2 2L14 14L2 26"
                    stroke="url(#paint1_linear_874_5120)"
                    strokeWidth="4"
                    className="path-black"
                  />

                  <path
                    d="M14.8008 2L26.8008 14L14.8008 26"
                    stroke="url(#paint1_linear_874_5120)"
                    strokeWidth="4"
                  />
                  <path
                    d="M14.8008 2L26.8008 14L14.8008 26"
                    stroke="url(#paint0_radial_874_5120)"
                    strokeWidth="4"
                    className="path-white opacity-0"
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
              <div className="relative flex flex-wrap items-center justify-center group">
                <div className="w-[72px] h-[72px] relative">
                  <img
                    className="absolute z-10 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4"
                    src="/earth-white.png"
                  />
                </div>
                <p className="w-full text-zinc-50 text-[18px]  leading-[22px] mb-[8px] lg:text-[28px] lg:leading-[34px] lg:mb-[16px] font-bold text-center font-kanit">
                  Q2 - 2023
                </p>
                <ul className="text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-[#DCDCDC] font-light">
                  <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                    Vilik Streaming Web Platform Version 4.0 Released
                  </li>
                  <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                    Vilik Network(Peer-to-Peer Network) Mainnet
                  </li>
                </ul>

                <svg
                  width="30"
                  height="28"
                  viewBox="0 0 30 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="arrow-flash absolute top-[22px] right-0"
                >
                  <path
                    d="M2 2L14 14L2 26"
                    stroke="url(#paint0_radial_874_5120)"
                    strokeWidth="4"
                  />
                  <path
                    d="M2 2L14 14L2 26"
                    stroke="url(#paint1_linear_874_5120)"
                    strokeWidth="4"
                    className="path-black"
                  />

                  <path
                    d="M14.8008 2L26.8008 14L14.8008 26"
                    stroke="url(#paint1_linear_874_5120)"
                    strokeWidth="4"
                  />
                  <path
                    d="M14.8008 2L26.8008 14L14.8008 26"
                    stroke="url(#paint0_radial_874_5120)"
                    strokeWidth="4"
                    className="path-white opacity-0"
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
              <div className="relative flex flex-wrap items-center justify-center group">
                <div className="w-[72px] h-[72px] relative">
                  <img
                    className="absolute z-10 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4"
                    src="/earth-white.png"
                  />
                </div>
                <p className="w-full text-zinc-50 text-[18px]  leading-[22px] mb-[8px] lg:text-[28px] lg:leading-[34px] lg:mb-[16px] font-bold text-center font-kanit">
                  Q4 - 2023
                </p>
                <ul className="text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-[#DCDCDC] font-light">
                  <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                    Vilik Streaming Web Platform Version 5.0 Released
                  </li>
                  <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                    Vilik Network(Peer-to-Peer Network) Final Updated
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
              <div className="relative flex flex-wrap items-center justify-center group">
                <div className="w-[72px] h-[72px] relative">
                  <img
                    className="absolute z-10 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4"
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
    </div>
  );
};

export default Roadmap;
