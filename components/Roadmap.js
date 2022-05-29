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
      {/* <svg
    width="375"
    height="667"
    viewBox="0 0 375 667"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 left-0 lg:hidden"
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
    className="absolute bottom-0 right-0 lg:hidden"
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
  </svg> */}
      {/* end of section overlay */}
    </div>
  );
};

export default Roadmap;
