const Network = ({ activeSection }) => {
  return (
    <div
      className={`screen relative overflow-x-hidden h-full w-full flex flex-wrap items-center justify-center pt-[50px] lg:py-[87px] lg:px-[7.5vw] ${
        activeSection === 2 ? "active" : ""
      }`}
      id="network"
    >
      <div className="relative z-10 screen__container">
        <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] mb-[16px] lg:text-[40px] lg:leading-[48px] lg:mb-[32px] text-center">
          How does the Vilik Network operate?
        </h5>

        <div className="box bg-white-blur-003 pt-[7px] px-[10px] lg:px-[26px] lg:pt-[13px] lg:pb-[21px] w-full max-w-[1224px] mx-auto relative">
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
        className="absolute w-[55px] h-auto top-[151px] left-[438px]"
      >
        <path
          d="M0.922249 36.7056C6.78756 27.0214 14.5816 18.8262 23.8131 12.6356C33.0446 6.44499 43.5143 2.3927 54.5628 0.734024"
          stroke="#F4F4F5"
          strokeWidth="0.332088"
          stroke-dasharray="5.98 5.98"
          className="path"
        />
      </svg>
      <svg
        width="20"
        height="50"
        viewBox="0 0 20 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-[20px] h-auto top-[220px] left-[433px]"
      >
        <path
          d="M19.1684 49.7527C7.22945 36.1981 0.712962 18.7141 0.867959 0.651966"
          stroke="#F4F4F5"
          strokeWidth="0.332088"
          stroke-dasharray="5.98 5.98"
          className="path"
        />
      </svg>
      <svg
        width="73"
        height="11"
        viewBox="0 0 73 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-[73px] h-auto top-[282px] left-[468px]"
      >
        <path
          d="M72.5919 0.340418C61.6978 6.49849 49.4091 9.76632 36.8952 9.83292C24.3813 9.89952 12.0585 6.76268 1.09947 0.720912"
          stroke="#F4F4F5"
          strokeWidth="0.332088"
          stroke-dasharray="5.98 5.98"
          className="path"
        />
      </svg>
      <svg
        width="15"
        height="45"
        viewBox="0 0 15 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-[15px] h-auto top-[222px] left-[559px]"
      >
        <path
          d="M14.5794 0.272233C15.0098 16.079 10.3195 31.6014 1.20783 44.5249"
          stroke="#F4F4F5"
          strokeWidth="0.332088"
          stroke-dasharray="5.98 5.98"
          className="path"
        />
      </svg>
      <svg
        width="47"
        height="38"
        viewBox="0 0 47 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-[47px] h-auto left-[519px] top-[153px]"
      >
        <path
          d="M0.145018 0.904001C9.95322 3.41605 19.135 7.9319 27.112 14.1671C35.0891 20.4024 41.6886 28.2219 46.4948 37.1332"
          stroke="#F4F4F5"
          strokeWidth="0.332088"
          stroke-dasharray="5.98 5.98"
          className="path"
        />
      </svg>

      <svg
        width="109"
        height="308"
        viewBox="0 0 109 308"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-[105px] h-auto top-[76px] left-[635px]"
      >
        <rect
          x="0.733682"
          y="0.957315"
          width="107.932"
          height="306.495"
          rx="9.35394"
          stroke="url(#paint0_linear_792_3237)"
          strokeWidth="0.645099"
          stroke-dasharray="3.23 3.23"
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
        className="absolute w-[90px] top-[69px] left-[790px]"
      >
        <rect
          x="0.595011"
          y="0.970011"
          width="92.5858"
          height="306.15"
          rx="9.35394"
          stroke="url(#paint0_linear_792_3261)"
          strokeWidth="0.645099"
          stroke-dasharray="3.23 3.23"
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
        className="absolute w-[81px] h-auto top-[76px] left-[931px]"
      >
        <rect
          x="1.20341"
          y="0.970011"
          width="81.9034"
          height="239.564"
          rx="9.35394"
          stroke="url(#paint0_linear_792_3324)"
          strokeWidth="0.645099"
          stroke-dasharray="3.23 3.23"
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
        className="absolute w-[81px] h-auto top-[75px] left-[1062px]"
      >
        <rect
          x="1.20341"
          y="0.970011"
          width="81.9034"
          height="239.564"
          rx="9.35394"
          stroke="url(#paint0_linear_792_3324)"
          strokeWidth="0.645099"
          stroke-dasharray="3.23 3.23"
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
        className="absolute w-[32px] h-auto top-[230px] left-[600px]"
      >
        <path
          d="M31.999 1L-0.000976533 0.999997"
          stroke="url(#paint0_linear_792_3532)"
          strokeWidth="0.645099"
          stroke-dasharray="3.23 3.23"
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
        className="absolute w-[53px] h-auto top-[234px] left-[739px]"
      >
        <path
          d="M52.999 1H-0.000977159"
          stroke="url(#paint0_linear_792_3484)"
          strokeWidth="0.645099"
          stroke-dasharray="3.23 3.23"
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
        className="absolute w-[56px] h-auto top-[110px] left-[877px]"
      >
        <path
          d="M55.9893 1L0.989255 1"
          stroke="url(#paint0_linear_792_3491)"
          strokeWidth="0.645099"
          stroke-dasharray="3.23 3.23"
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
        className="absolute w-[56px] h-auto top-[162px] left-[877px]"
      >
        <path
          d="M55.9893 1L0.989255 1"
          stroke="url(#paint0_linear_792_3491)"
          strokeWidth="0.645099"
          stroke-dasharray="3.23 3.23"
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
        className="absolute w-[56px] h-auto top-[213px] left-[877px]"
      >
        <path
          d="M55.9893 1L0.989255 1"
          stroke="url(#paint0_linear_792_3491)"
          strokeWidth="0.645099"
          stroke-dasharray="3.23 3.23"
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
        className="absolute w-[56px] h-auto top-[262px] left-[877px]"
      >
        <path
          d="M55.9893 1L0.989255 1"
          stroke="url(#paint0_linear_792_3491)"
          strokeWidth="0.645099"
          stroke-dasharray="3.23 3.23"
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
        className="absolute w-[56px] h-auto top-[110px] left-[1010px]"
      >
        <path
          d="M54.4541 1L0.4541 1"
          stroke="url(#paint0_linear_792_3514)"
          strokeWidth="0.645099"
          stroke-dasharray="3.23 3.23"
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
        className="absolute w-[56px] h-auto top-[159px] left-[1010px]"
      >
        <path
          d="M54.4541 1L0.4541 1"
          stroke="url(#paint0_linear_792_3514)"
          strokeWidth="0.645099"
          stroke-dasharray="3.23 3.23"
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
        className="absolute w-[56px] h-auto top-[207px] left-[1010px]"
      >
        <path
          d="M54.4541 1L0.4541 1"
          stroke="url(#paint0_linear_792_3514)"
          strokeWidth="0.645099"
          stroke-dasharray="3.23 3.23"
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
        className="absolute w-[56px] h-auto top-[255px] left-[1010px]"
      >
        <path
          d="M54.4541 1L0.4541 1"
          stroke="url(#paint0_linear_792_3514)"
          strokeWidth="0.645099"
          stroke-dasharray="3.23 3.23"
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
  );
};

export default Network;
