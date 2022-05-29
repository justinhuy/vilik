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
        <h5 className="sub-heading text-center text-gradient-blue text-[24px] leading-[29px] lg:text-[40px] lg:leading-[48px] mb-[43px] lg:mb-[54px] lg:leading-[48px] relative z-10">
          Roadmap
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
                    Vilik Streaming Web Platform Version 4.0 Release
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
                    Vilik Streaming Web Platform Version 5.0 release
                  </li>
                  <li className="relative pl-[10px] before:block before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#DCDCDC] before:top-[7px] before:left-0">
                    Vilik Network(Peer-to-Peer Network) Finally upload
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
        className="lg:hidden absolute bottom-[14px] right-0"
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
      {/* end of section overlay */}
    </div>
  );
};

export default Roadmap;
