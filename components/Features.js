import { useState } from "react";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { InView } from "react-intersection-observer";

import Moving from "../animation/Moving";

const Features = ({ activeSection }) => {
  const [inView, setInView] = useState(false);
  return (
    <InView
      as="div"
      // triggerOnce
      onChange={(inView) => setInView(inView)}
      className={`screen relative h-full w-full flex flex-wrap items-center py-[50px] lg:py-[87px] ${
        activeSection === 2 || inView ? "active" : ""
      }`}
    >
      <div className="relative z-10 w-full screen__container">
        <div className="lg:grid lg:grid-cols-12 relative px-[16px] lg:px-[7.5vw]">
          <div className="col-span-8">
            <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] mb-[16px] lg:text-[40px] lg:leading-[48px] lg:mb-[20px]">
              Features
            </h5>
            <p className="hidden lg:block desc text-[12px] leading-[18px] lg:text-[16px] lg:leading-[24px] mb-[40px] text-zinc-300 text-zinc-300">
              Nowadays, other content delivery network (CDN) platforms rely on
              central data network structures, concentrating all their resources
              and traffic to few key servers to deliver and store their video
              content. What&apos;s worse, high traffic can cause bandwidth
              issues, severely affecting video quality and hiking up the cost of
              maintenance for these servers. To solve these problems, Vilik
              Network has adopted a decentralized P2P architecture. This network
              structure operates on the same principle as BitTorren where users
              can share their computing and bandwidth resources by becoming
              nodes (peers) linked as distribution servers. This innovative
              network architecture improves the quality of stream delivery, and
              video resolution, and dramatically reduces network costs.
            </p>
            <p className="lg:hidden desc text-[12px] leading-[18px] lg:text-[16px] lg:leading-[24px] mb-[40px] text-zinc-300 text-zinc-300">
              Vilik network has created a decentralized peer-to-peer
              architecture where users can share bandwidth and computing
              resources with other users. This innovative network design will
              improve stream delivery quality, increase video resolution, and
              reduces bandwidth costs for video providers.
            </p>
          </div>

          <div className="hidden lg:block absolute w-[477px] right-[-28px] top-1/2 -translate-y-2/4 z-10">
            {activeSection === 2 || inView ? (
              <Moving yFrom={-5} yTo={5} duration={3}>
                <img
                  src="/earth-layer-3.jpg"
                  className="w-full h-auto opacity-0"
                />

                <div className="w-[93.2914046%] h-auto absolute top-0 left-[2.51572327%]">
                  <Moving rotateTo={360} duration={60}>
                    <img src="/e.png" className="w-full h-auo" />
                  </Moving>
                </div>

                <img
                  src="/line-1.png"
                  className="absolute w-[72.327044%] h-auto top-[22.4719101%] left-[14.6750524%]"
                />
                <img
                  src="/line-2.png"
                  className="absolute w-[81.7610063%] h-auto top-[22.4719101%] left-[9.43396226%]"
                />
              </Moving>
            ) : null}
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
                  combines video live streaming and social media through the
                  interaction of VIK, a newly minted crypto token.
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
                    src="/stranger-duo.png"
                    alt="Strange Duo"
                    width={41}
                    height={23}
                  />
                </div>
                <h6 className="text-[16px leading-[19px] mb-[4px] lg:text-[20px] lg:leading-[28px] lg:mb-[16px] font-semibold">
                  Strange Duo
                </h6>
                <p className="text-[12px] leading-[18px] lg:text-[14px] leading-[21px] text-[#DCDCDC]">
                  Video calls between two strangers who can sing and dance
                  together, tell stories, and interact with each other in
                  unprecedented ways.
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
                  Diamond is the major unit of value in the Vilik economy. It
                  can be exchanged from VIK tokens, withdrawn to your bank
                  account at any time, at fast transaction speeds and low fees.
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
                    src="/wallet.png"
                    alt="Vilik Wallet"
                    width={30}
                    height={36}
                  />
                </div>
                <h6 className="text-[16px leading-[19px] mb-[4px] lg:text-[20px] lg:leading-[28px] lg:mb-[16px] font-semibold">
                  Vilik Wallet
                </h6>
                <p className="text-[12px] leading-[18px] lg:text-[14px] leading-[21px] text-[#DCDCDC]">
                  Users do not need passwords or third-party servers to store
                  their digital currency. We ensure high cyber safety from DDoS
                  with the PSD2 standard and a combination of multisig
                  transactions, as well as automatically enforced Two-Factor
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
                    src="/mini-game.png"
                    alt="Mini-games"
                    width={33}
                    height={24}
                  />
                </div>
                <h6 className="text-[16px leading-[19px] mb-[4px] lg:text-[20px] lg:leading-[28px] lg:mb-[16px] font-semibold">
                  Mini-games
                </h6>
                <p className="text-[12px] leading-[18px] lg:text-[14px] leading-[21px] text-[#DCDCDC]">
                  Vilik&apos;s high quality anti-cheat with proxy and multiple
                  account detection systems offers a fair Minigame/Lucky Game
                  experience where users can play and earn diamonds without
                  being afraid of losing them or fraud activities.
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
                    src="/nft.png"
                    alt="NFT Marketplace"
                    width={37}
                    height={28}
                  />
                </div>
                <h6 className="text-[16px leading-[19px] mb-[4px] lg:text-[20px] lg:leading-[28px] lg:mb-[16px] font-semibold">
                  NFT Marketplace
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
        <div className="relative text-center  lg:hidden">
          <div className="w-[250px] h-[233px] inline-block">
            {activeSection === 2 || inView ? (
              <Moving yFrom={-5} yTo={5} duration={3}>
                <img
                  src="/earth-layer-3.jpg"
                  className="w-full h-auto opacity-0"
                />

                <div className="w-[93.2914046%] h-auto absolute top-0 left-[2.51572327%]">
                  <Moving rotateTo={360} duration={60}>
                    <img src="/e.png" className="w-full h-auo" />
                  </Moving>
                </div>

                <img
                  src="/line-1.png"
                  className="absolute w-[72.327044%] h-auto top-[22.4719101%] left-[14.6750524%]"
                />
                <img
                  src="/line-2.png"
                  className="absolute w-[81.7610063%] h-auto top-[22.4719101%] left-[9.43396226%]"
                />
              </Moving>
            ) : null}
          </div>
        </div>
      </div>
    </InView>
  );
};

export default Features;
