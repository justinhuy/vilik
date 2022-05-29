import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Moving from "../animation/Moving";

const Features = ({ activeSection }) => {
  return (
    <div
      className={`screen relative h-full w-full flex flex-wrap items-center py-[50px] lg:py-[87px] ${
        activeSection === 3 ? "active" : ""
      }`}
      id="features"
    >
      <div className="relative z-10 w-full screen__container">
        <div className="lg:grid lg:grid-cols-12 relative px-[16px] lg:px-[7.5vw]">
          <div className="col-span-8">
            <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] mb-[16px] lg:text-[40px] lg:leading-[48px] lg:mb-[20px]">
              Features
            </h5>
            <p className="hidden lg:block desc text-[12px] leading-[18px] lg:text-[16px] lg:leading-[24px] mb-[40px] text-zinc-300 text-zinc-300">
              Nowadays, other&apos;s platforms with a central data network are
              based on centralised structures for the delivery of videos, video
              storage, traffic, and routing are concentrated at the central data
              network center. Besides that, these are problems such as bandwidth
              issues on high traffic affecting video quality and high cost of
              maintenance. To solve these problems, Vilik Network is created to
              adopt a decentralized P2P architecture, this network structure
              operates on the same principle as BitTorrrent where users can
              share their redundant computing and bandwidth resource as becoming
              the nodes (peers) and are linked as distribution servers. This
              innovative network architecture improves the quality of stream
              delivery, and video resolution and reduces network costs for
              bandwidth dramatically.
            </p>
            <p className="lg:hidden desc text-[12px] leading-[18px] lg:text-[16px] lg:leading-[24px] mb-[40px] text-zinc-300 text-zinc-300">
              Vilik network has created a decentralized peer-to-peer
              architecture where users can share bandwidth and computing
              resources with other users. This innovative network design will
              improve stream delivery quality, increase video resolution, and
              reduces bandwidth costs for video providers.
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
              <div className="h-full bg-white-blur p-[32px] border-r-blur">
                <div className="w-[56px] h-[56px] mb-[24px] flex items-center justify-center relative">
                  <svg
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0 w-full h-auto animate-spin-slow"
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
                  The innovation generated by Vilik lies in the ecosystem that
                  combines the video live streaming function and social media
                  through the interaction with the newly born crypto and VIK
                  (crypto token).
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full bg-white-blur p-[32px] border-r-blur">
                <div className="w-[56px] h-[56px] mb-[24px] flex items-center justify-center relative">
                  <svg
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0 w-full h-auto animate-spin-slow"
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
                  Video calls between two strangers, sing and dance together,
                  tell stories and interact with each other in unprecedented
                  ways. Furthermore, you can also earn rewards from competing
                  through built-in mini-games in Vilik.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full bg-white-blur p-[32px] border-r-blur">
                <div className="w-[56px] h-[56px] mb-[24px] flex items-center justify-center relative">
                  <svg
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0 w-full h-auto animate-spin-slow"
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
                  Diamond is the real value major unit in Vilik game economy. It
                  can be exchanged from VIK tokens, withdrawn to the bank
                  account at any time with a low fee and fast transaction.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full bg-white-blur p-[32px] border-r-blur">
                <div className="w-[56px] h-[56px] mb-[24px] flex items-center justify-center relative">
                  <svg
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0 w-full h-auto animate-spin-slow"
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
                  Users do not need passwords or third-party servers to store
                  digital currency. Besides, we also ensure high cyber safety
                  with the DDoS with the PSD2 standard with a combination of
                  multisig transactions, automatically enforced Two Factor
                  Authentication.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full bg-white-blur p-[32px] border-r-blur">
                <div className="w-[56px] h-[56px] mb-[24px] flex items-center justify-center relative">
                  <svg
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0 w-full h-auto animate-spin-slow"
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
                  Our high anti-cheat with proxy and multiple account detection
                  systems offers the fair Vilik&apos;s Minigame/ Lucky game
                  where users can play and earn diamonds without being afraid of
                  losing them or fraud activities.
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
                    className="absolute top-0 left-0 w-full h-auto animate-spin-slow"
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
                  exclusive products, such as unique photo frames, medals with
                  effects, and much more.
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
        {/* <svg
      width="375"
      height="667"
      viewBox="0 0 375 667"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0 w-full h-auto lg:hidden"
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
            stopColor="#C82DF4"
            stopOpacity="0.71"
          />
          <stop offset="0.500996" stopColor="#1F1298" />
          <stop offset="1" stopColor="#621EA2" />
        </radialGradient>
      </defs>
    </svg>
    <svg
      width="375"
      height="560"
      viewBox="0 0 375 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 right-0 lg:hidden"
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
            result="effect1_foregroundBlur_35_215"
          />
        </filter>
      </defs>
    </svg> */}

        {/* end of section overlay */}
      </div>
    </div>
  );
};

export default Features;
