const Network = ({ activeSection }) => {
  return (
    <div
      className={`screen screen-network relative overflow-x-hidden h-full w-full flex flex-wrap items-center justify-center pt-[50px] lg:py-[87px] lg:px-[7.5vw] ${activeSection === 2 ? "active" : ""
        }`}
      id="network"
    >
      <div className="relative z-10 screen__container">
        <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] mb-[16px] lg:text-[40px] lg:leading-[48px] lg:mb-[32px] text-center">
          How does the Vilik Network operate?
        </h5>

        <div className="box box-network bg-white-blur-003 pt-[7px] px-[10px] lg:px-[26px] lg:pt-[13px] lg:pb-[21px] w-full max-w-[1224px] mx-auto relative">
          <div className="relative inline-block">
            <picture>
              <source media="(min-width: 1024px)" srcSet="network@2x.png" />
              <img
                src="networkmb@2x.png"
                alt="What is Vilik's network"
                className="w-full"
              />
            </picture>
            {/* lines */}
            {/* <svg
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
              className="absolute hidden lg:block w-[7.9787234%] top-[12.2330097%] h-auto left-[67.7304965%]"
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
              className="absolute hidden lg:block w-[7.26950355%] h-auto top-[12.2330097%] left-[80.141844%]"
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
              className="absolute hidden lg:block w-[4.60992908%] h-auto top-[42.9126214%] left-[63.2978723%]"
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
              className="absolute hidden lg:block w-[4.78723404%] h-auto top-[18.8349515%] left-[75.5319149%]"
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
              className="absolute hidden lg:block w-[4.78723404%] h-auto top-[28.9320388%] left-[75.5319149%]"
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
              className="absolute hidden lg:block w-[4.78723404%] h-auto top-[38.8349515%] left-[75.4432624%]"
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
              className="absolute hidden lg:block w-[4.78723404%] h-auto top-[48.1553398%] left-[75.6205674%]"
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
              className="absolute hidden lg:block w-[4.87588652%] h-auto top-[18.8349515%] left-[87.322695%]"
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
              className="absolute hidden lg:block w-[4.87588652%] h-auto top-[28.1553398%] left-[87.322695%]"
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
              className="absolute hidden lg:block w-[4.87588652%] h-auto top-[37.6699029%] left-[87.322695%]"
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
              className="absolute hidden lg:block w-[4.87588652%] h-auto top-[46.9902913%] left-[87.322695%]"
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
            </svg> */}
            {/* end of lines */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
