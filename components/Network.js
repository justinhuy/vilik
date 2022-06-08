import { useState } from "react";
import Image from "next/image";
import { InView } from "react-intersection-observer";

const Network = ({ activeSection }) => {
  const [inView, setInView] = useState(false);
  return (
    <InView
      as="div"
      // triggerOnce
      onChange={(inView) => setInView(inView)}
      className={`screen screen-network relative overflow-x-hidden h-full w-full flex flex-wrap items-center justify-center pt-[50px] lg:py-[87px] lg:px-[7.5vw] ${
        activeSection === 3 ? "active" : ""
      } ${inView ? "in-view" : ""}`}
    >
      <div className="relative z-10 screen__container">
        <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] mb-[16px] lg:text-[40px] lg:leading-[48px] lg:mb-[32px] text-center font-medium lg:font-normal font-kanit">
          How does the Vilik Network operate?
        </h5>

        <div className="box box-network bg-white-blur-003 pt-[7px] px-[10px] lg:px-[26px] lg:pt-[13px] lg:pb-[21px] w-full max-w-[1224px] mx-auto relative rounded-[16px]">
          <div className="relative inline-block">
            <picture>
              <source media="(min-width: 1024px)" srcSet="network@2x.png" />
              <img
                src="networkmb@2x.png"
                alt="What is Vilik's network"
                className="w-full"
              />
            </picture>

            <div className="hidden lg:block absolute w-[16.2969283%] top-[22.4299065%] left-[34.0443686%] animate-spin animation-duration-10s leading-[0px]">
              <Image
                src="resource@2x.png"
                width={191}
                height={191}
                className="w-full h-auto"
              />
            </div>

            <svg
              width="66"
              height="12"
              viewBox="0 0 66 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block absolute w-[5.63139932%] h-auto left-[5.11945392%] top-[45.2336449%]"
            >
              <path
                d="M62 6.01453H3.8147e-06"
                stroke="url(#paint0_linear_51_596)"
                strokeWidth="2"
              />
              <path
                d="M65.0176 5.63211L57 0.200806L59.1387 5.86635L57 11.4255L65.0176 5.63211Z"
                fill="url(#paint1_linear_51_596)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_51_596"
                  x1="43.4493"
                  y1="5.61519"
                  x2="43.457"
                  y2="4.90705"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#C4D2FF">
                    <animate
                      attributeName="stop-color"
                      values="#C4D2FF; #5179FF; #C4D2FF"
                      dur="2s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>

                  <stop offset="100%" stopColor="#5179FF">
                    <animate
                      attributeName="stop-color"
                      values="#5179FF; #C4D2FF; #5179FF"
                      dur="2s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_51_596"
                  x1="59.3989"
                  y1="4.68328"
                  x2="61.6261"
                  y2="11.215"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="8"
              height="31"
              viewBox="0 0 8 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block absolute w-[0.682593857%] h-auto left-[14.5051195%] top-[31.4018692%]"
            >
              <path
                d="M4 28.0146L4 0.0146496"
                stroke="url(#paint0_linear_51_589)"
                strokeWidth="2"
              />
              <path
                d="M4.07744 30.1432L7.55078 25.0159L3.92764 26.3836L0.372541 25.0159L4.07744 30.1432Z"
                fill="url(#paint1_linear_51_589)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_51_589"
                  x1="4.39934"
                  y1="19.6369"
                  x2="8.03524"
                  y2="-2.80589"
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
                  id="paint1_linear_51_589"
                  x1="4.68422"
                  y1="26.55"
                  x2="0.507146"
                  y2="27.9743"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="44"
              height="12"
              viewBox="0 0 44 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block absolute w-[3.75426621%] h-auto top-[45.2336449%] left-[19.112628%]"
            >
              <path
                d="M0.624023 5.61072L41.624 5.61071"
                stroke="url(#paint0_linear_5_598)"
                strokeWidth="2"
              />
              <path
                d="M44.0001 5.63138L35.9824 0.200073L38.1211 5.86562L35.9824 11.4248L44.0001 5.63138Z"
                fill="url(#paint1_linear_5_598)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_5_598"
                  x1="12.8914"
                  y1="6.01006"
                  x2="26.8615"
                  y2="5.73433"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#1945D9">
                    <animate
                      attributeName="stop-color"
                      values="#1945D9; #EAC2FF; #1945D9"
                      dur="2s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>

                  <stop offset="100%" stopColor="#EAC2FF">
                    <animate
                      attributeName="stop-color"
                      values="#EAC2FF; #1945D9; #EAC2FF"
                      dur="2s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_5_598"
                  x1="38.3813"
                  y1="4.68254"
                  x2="40.6085"
                  y2="11.2143"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="46"
              height="15"
              viewBox="0 0 46 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block absolute w-[3.92491468%] h-auto top-[14.3925234%] left-[28.4129693%]"
            >
              <path
                d="M44 7.01465L2 7.01464"
                stroke="url(#paint0_linear_51_563)"
                strokeWidth="2"
              />
              <path
                d="M46 6.78884L37 0.0146484L39.4008 7.08099L37 14.0146L46 6.78884Z"
                fill="url(#paint1_linear_51_563)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_51_563"
                  x1="33.1436"
                  y1="12.9307"
                  x2="1.39723"
                  y2="5.50942"
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
                  id="paint1_linear_51_563"
                  x1="39.6928"
                  y1="5.6054"
                  x2="42.7057"
                  y2="13.5578"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="9"
              height="30"
              viewBox="0 0 9 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block absolute w-[0.767918089%] h-auto left-[24.9146758%] top-[22.2429907%]"
            >
              <path
                d="M4.34473 3.75305L4.34473 29.944"
                stroke="url(#paint0_linear_55_236)"
                strokeWidth="2"
              />
              <path
                d="M4.37959 0.940435L0.90625 6.06775L4.52939 4.70004L8.08449 6.06775L4.37959 0.940435Z"
                fill="url(#paint1_linear_55_236)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_55_236"
                  x1="3.94539"
                  y1="11.5895"
                  x2="3.29588"
                  y2="11.5956"
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
                  id="paint1_linear_55_236"
                  x1="3.77281"
                  y1="4.53363"
                  x2="7.94989"
                  y2="3.10933"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="3"
              height="27"
              viewBox="0 0 3 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block absolute w-[0.255972696%] h-auto left-[26.2798635%] top-[22.8037383%]"
            >
              <path
                d="M1.74414 0.753052L1.74414 26.944"
                stroke="url(#paint0_linear_51_557)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_51_557"
                  x1="1.3448"
                  y1="8.58951"
                  x2="0.695291"
                  y2="8.59555"
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
              </defs>
            </svg>
            <svg
              width="3"
              height="30"
              viewBox="0 0 3 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block absolute w-[0.255972696%] h-auto left-[25.0853242%] top-[34.5794393%]"
            >
              <path
                d="M1.71289 0.0145264L1.71289 29.0117"
                stroke="url(#paint0_linear_51_558)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_51_558"
                  x1="1.31355"
                  y1="8.69061"
                  x2="0.664031"
                  y2="8.69606"
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
              </defs>
            </svg>
            <svg
              width="8"
              height="31"
              viewBox="0 0 8 31"
              fill="none"
              className="hidden lg:block absolute w-[0.682593857%] h-auto left-[25.9385666%] top-[34.5794393%]"
            >
              <path
                d="M4 29.0146L4 0.0146486"
                stroke="url(#paint0_linear_55_237)"
                strokeWidth="2"
              />
              <path
                d="M3.96058 30.4961L7.67383 25.0146L3.80044 26.4768L-0.000218868 25.0146L3.96058 30.4961Z"
                fill="url(#paint1_linear_55_237)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_55_237"
                  x1="4.39934"
                  y1="20.3377"
                  x2="5.04886"
                  y2="20.3323"
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
                  id="paint1_linear_55_237"
                  x1="4.60928"
                  y1="26.6547"
                  x2="0.143684"
                  y2="28.1774"
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
              </defs>
            </svg>
            <svg
              width="8"
              height="46"
              viewBox="0 0 8 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block absolute w-[0.682593857%] h-auto left-[76.7918089%] top-[74.3925234%]"
            >
              <path
                d="M4 43.0146L4 1.01465"
                stroke="url(#paint0_linear_51_549)"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M3.96058 45.4961L7.67383 40.0146L3.80044 41.4768L-0.000218868 40.0146L3.96058 45.4961Z"
                fill="url(#paint1_linear_51_549)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_51_549"
                  x1="4.39934"
                  y1="30.4481"
                  x2="4.11001"
                  y2="16.1375"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#1945D9">
                    <animate
                      attributeName="stop-color"
                      values="#1945D9; #EAC2FF; #1945D9"
                      dur="2s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>

                  <stop offset="100%" stopColor="#EAC2FF">
                    <animate
                      attributeName="stop-color"
                      values="#EAC2FF; #1945D9; #EAC2FF"
                      dur="2s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_51_549"
                  x1="4.60928"
                  y1="41.6547"
                  x2="0.143684"
                  y2="43.1774"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              width="68"
              height="8"
              viewBox="0 0 68 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block absolute w-[5.80204778%] h-auto left-[68.003413%] top-[88.5981308%]"
            >
              <path
                d="M4 4.01465H68"
                stroke="url(#paint0_linear_51_560)"
                strokeWidth="2"
              />
              <path
                d="M-1.63647e-05 3.9762L5.48145 7.68945L4.01926 3.81606L5.48145 0.0154061L-1.63647e-05 3.9762Z"
                fill="url(#paint1_linear_51_560)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_51_560"
                  x1="9.48389"
                  y1="5.92383"
                  x2="62.8005"
                  y2="4.87903"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#1945D9">
                    <animate
                      attributeName="stop-color"
                      values="#1945D9; #EAC2FF; #1945D9"
                      dur="2s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>

                  <stop offset="100%" stopColor="#EAC2FF">
                    <animate
                      attributeName="stop-color"
                      values="#EAC2FF; #1945D9; #EAC2FF"
                      dur="2s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_51_560"
                  x1="3.84137"
                  y1="4.6249"
                  x2="2.31869"
                  y2="0.159309"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>

            {/* lines */}
            <svg
              width="55"
              height="37"
              viewBox="0 0 55 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute hidden lg:block w-[4.87588652%] h-auto top-[26.7961165%] left-[36.5248227%]"
            >
              <path
                d="M0.922249 36.7056C6.78756 27.0214 14.5816 18.8262 23.8131 12.6356C33.0446 6.44499 43.5143 2.3927 54.5628 0.734024"
                stroke="#F4F4F5"
                strokeWidth="0.332088"
                strokeDasharray="5.98 5.98"
                className="path"
              />
            </svg>
            <svg
              width="20"
              height="50"
              viewBox="0 0 20 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute hidden lg:block w-[1.77304965%] h-auto top-[40%] left-[35.9929078%]"
            >
              <path
                d="M19.1684 49.7527C7.22945 36.1981 0.712962 18.7141 0.867959 0.651966"
                stroke="#F4F4F5"
                strokeWidth="0.332088"
                strokeDasharray="5.98 5.98"
                className="path"
              />
            </svg>
            <svg
              width="73"
              height="11"
              viewBox="0 0 73 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute hidden lg:block w-[6.47163121%] h-auto top-[52.2330097%] left-[39.0070922%]"
            >
              <path
                d="M72.5919 0.340418C61.6978 6.49849 49.4091 9.76632 36.8952 9.83292C24.3813 9.89952 12.0585 6.76268 1.09947 0.720912"
                stroke="#F4F4F5"
                strokeWidth="0.332088"
                strokeDasharray="5.98 5.98"
                className="path"
              />
            </svg>
            <svg
              width="15"
              height="45"
              viewBox="0 0 15 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute hidden lg:block w-[1.32978723%] h-auto top-[40.3883495%] left-[47.251773%]"
            >
              <path
                d="M14.5794 0.272233C15.0098 16.079 10.3195 31.6014 1.20783 44.5249"
                stroke="#F4F4F5"
                strokeWidth="0.332088"
                strokeDasharray="5.98 5.98"
                className="path"
              />
            </svg>
            <svg
              width="47"
              height="38"
              viewBox="0 0 47 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute hidden lg:block w-[4.16666667%] h-auto left-[43.7056738%] top-[27.184466%]"
            >
              <path
                d="M0.145018 0.904001C9.95322 3.41605 19.135 7.9319 27.112 14.1671C35.0891 20.4024 41.6886 28.2219 46.4948 37.1332"
                stroke="#F4F4F5"
                strokeWidth="0.332088"
                strokeDasharray="5.98 5.98"
                className="path"
              />
            </svg>

            <svg
              width="109"
              height="308"
              viewBox="0 0 109 308"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute hidden lg:block w-[9.21985816%] h-auto top-[12.2330097%] left-[53.9893617%]"
            >
              <rect
                x="0.733682"
                y="0.957315"
                width="107.932"
                height="306.495"
                rx="9.35394"
                stroke="url(#paint0_linear_792_3237)"
                strokeWidth="0.645099"
                strokeDasharray="3.23 3.23"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_792_3237"
                  x1="32.898"
                  y1="123.288"
                  x2="-56.3752"
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
              className="absolute hidden lg:block w-[7.84982935%] top-[12.2330097%] h-auto left-[67.4061433%]"
            >
              <rect
                x="0.595011"
                y="0.970011"
                width="92.5858"
                height="306.15"
                rx="9.35394"
                stroke="url(#paint0_linear_792_3261)"
                strokeWidth="0.645099"
                strokeDasharray="3.23 3.23"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_792_3261"
                  x1="28.1676"
                  y1="123.163"
                  x2="-53.0324"
                  y2="159.629"
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
              className="absolute hidden lg:block w-[7.09219858%] h-auto top-[12.2330097%] left-[80.141844%]"
            >
              <rect
                x="1.20341"
                y="0.970011"
                width="81.9034"
                height="239.564"
                rx="9.35394"
                stroke="url(#paint0_linear_792_3324)"
                strokeWidth="0.645099"
                strokeDasharray="3.23 3.23"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_792_3324"
                  x1="25.5798"
                  y1="96.5723"
                  x2="-43.1021"
                  y2="131.453"
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
              className="absolute hidden lg:block w-[7.09219858%] h-auto top-[12.2330097%] left-[91.9326241%]"
            >
              <rect
                x="1.20341"
                y="0.970011"
                width="81.9034"
                height="239.564"
                rx="9.35394"
                stroke="url(#paint0_linear_792_3324)"
                strokeWidth="0.645099"
                strokeDasharray="3.23 3.23"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_792_3324"
                  x1="25.5798"
                  y1="96.5723"
                  x2="-43.1021"
                  y2="131.453"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4D2FF" />
                  <stop offset="1" stopColor="#5179FF" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="32"
              height="2"
              viewBox="0 0 32 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute hidden lg:block w-[2.83687943%] h-auto top-[42.3300971%] left-[50.7978723%]"
            >
              <path
                d="M31.999 1L-0.000976533 0.999997"
                stroke="url(#paint0_linear_792_3532)"
                strokeWidth="0.645099"
                strokeDasharray="3.23 3.23"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_792_3532"
                  x1="22.4245"
                  y1="0.600659"
                  x2="22.4394"
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
              className="absolute hidden lg:block w-[4.07801418%] h-auto top-[42.9126214%] left-[63.2978723%]"
            >
              <path
                d="M52.999 1H-0.000977159"
                stroke="url(#paint0_linear_792_3484)"
                strokeWidth="0.645099"
                strokeDasharray="3.23 3.23"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_792_3484"
                  x1="37.1412"
                  y1="0.60066"
                  x2="37.1502"
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
              className="absolute hidden lg:block w-[4.96453901%] h-auto top-[18.8349515%] left-[75.2659574%]"
            >
              <path
                d="M55.9893 1L0.989255 1"
                stroke="url(#paint0_linear_792_3491)"
                strokeWidth="0.645099"
                strokeDasharray="3.23 3.23"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_792_3491"
                  x1="39.533"
                  y1="0.600662"
                  x2="39.5417"
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
              className="absolute hidden lg:block w-[4.96453901%] h-auto top-[28.9320388%] left-[75.2659574%]"
            >
              <path
                d="M55.9893 1L0.989255 1"
                stroke="url(#paint0_linear_792_3491)"
                strokeWidth="0.645099"
                strokeDasharray="3.23 3.23"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_792_3491"
                  x1="39.533"
                  y1="0.600662"
                  x2="39.5417"
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
              className="absolute hidden lg:block w-[4.96453901%] h-auto top-[38.8349515%] left-[75.4432624%]"
            >
              <path
                d="M55.9893 1L0.989255 1"
                stroke="url(#paint0_linear_792_3491)"
                strokeWidth="0.645099"
                strokeDasharray="3.23 3.23"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_792_3491"
                  x1="39.533"
                  y1="0.600662"
                  x2="39.5417"
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
              className="absolute hidden lg:block w-[4.96453901%] h-auto top-[48.1553398%] left-[75.2659574%]"
            >
              <path
                d="M55.9893 1L0.989255 1"
                stroke="url(#paint0_linear_792_3491)"
                strokeWidth="0.645099"
                strokeDasharray="3.23 3.23"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_792_3491"
                  x1="39.533"
                  y1="0.600662"
                  x2="39.5417"
                  y2="-0.107448"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4D2FF" />
                  <stop offset="1" stopColor="#5179FF" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="55"
              height="2"
              viewBox="0 0 55 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute hidden lg:block w-[4.78723404%] h-auto top-[18.8349515%] left-[87.322695%]"
            >
              <path
                d="M54.4541 1L0.4541 1"
                stroke="url(#paint0_linear_792_3514)"
                strokeWidth="0.645099"
                strokeDasharray="3.23 3.23"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_792_3514"
                  x1="38.297"
                  y1="0.600662"
                  x2="38.3059"
                  y2="-0.107444"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4D2FF" />
                  <stop offset="1" stopColor="#5179FF" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="55"
              height="2"
              viewBox="0 0 55 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute hidden lg:block w-[4.78723404%] h-auto top-[28.1553398%] left-[87.322695%]"
            >
              <path
                d="M54.4541 1L0.4541 1"
                stroke="url(#paint0_linear_792_3514)"
                strokeWidth="0.645099"
                strokeDasharray="3.23 3.23"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_792_3514"
                  x1="38.297"
                  y1="0.600662"
                  x2="38.3059"
                  y2="-0.107444"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4D2FF" />
                  <stop offset="1" stopColor="#5179FF" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="55"
              height="2"
              viewBox="0 0 55 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute hidden lg:block w-[4.78723404%] h-auto top-[37.6699029%] left-[87.322695%]"
            >
              <path
                d="M54.4541 1L0.4541 1"
                stroke="url(#paint0_linear_792_3514)"
                strokeWidth="0.645099"
                strokeDasharray="3.23 3.23"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_792_3514"
                  x1="38.297"
                  y1="0.600662"
                  x2="38.3059"
                  y2="-0.107444"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4D2FF" />
                  <stop offset="1" stopColor="#5179FF" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="55"
              height="2"
              viewBox="0 0 55 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute hidden lg:block w-[4.78723404%] h-auto top-[46.9902913%] left-[87.322695%]"
            >
              <path
                d="M54.4541 1L0.4541 1"
                stroke="url(#paint0_linear_792_3514)"
                strokeWidth="0.645099"
                strokeDasharray="3.23 3.23"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_792_3514"
                  x1="38.297"
                  y1="0.600662"
                  x2="38.3059"
                  y2="-0.107444"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4D2FF" />
                  <stop offset="1" stopColor="#5179FF" />
                </linearGradient>
              </defs>
            </svg>
            {/* end of lines */}
          </div>
        </div>
      </div>
    </InView>
  );
};

export default Network;
