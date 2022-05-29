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

      {/* section overlay */}
      {/* <svg
    width="339"
    height="427"
    viewBox="0 0 339 427"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 left-0 lg:hidden"
  >
    <g opacity="0.5" filter="url(#filter0_f_33_345)">
      <ellipse
        rx="130.105"
        ry="166.827"
        transform="matrix(0.957263 -0.289218 0.16205 0.986783 86.9276 133.213)"
        fill="#3D17E3"
      />
    </g>
    <g opacity="0.5" filter="url(#filter1_f_33_345)">
      <ellipse
        rx="147.131"
        ry="136.816"
        transform="matrix(0.998958 -0.0456498 0.0248309 0.999692 -21.6253 204.303)"
        fill="#3D17E3"
        fillOpacity="0.44"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_33_345"
        x="-165.041"
        y="-160.189"
        width="503.938"
        height="586.804"
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
          stdDeviation="62.2487"
          result="effect1_foregroundBlur_33_345"
        />
      </filter>
      <filter
        id="filter1_f_33_345"
        x="-228.534"
        y="7.46968"
        width="413.818"
        height="393.667"
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
          stdDeviation="29.9458"
          result="effect1_foregroundBlur_33_345"
        />
      </filter>
    </defs>
  </svg>
  <svg
    width="300"
    height="662"
    viewBox="0 0 300 662"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 right-0 lg:hidden"
  >
    <g opacity="0.64" filter="url(#filter0_f_33_348)">
      <ellipse
        rx="80.2016"
        ry="90.3458"
        transform="matrix(0.748089 0.663598 -0.434307 0.900765 273.74 120.602)"
        fill="#68268A"
      />
    </g>
    <g filter="url(#filter1_f_33_348)">
      <ellipse
        rx="86.1436"
        ry="105.759"
        transform="matrix(0.769241 0.638959 -0.140829 0.990034 236.885 159.849)"
        fill="#3D17E3"
        fillOpacity="0.1"
      />
    </g>
    <g opacity="0.4" filter="url(#filter2_f_33_348)">
      <ellipse
        rx="65.8121"
        ry="77.5758"
        transform="matrix(0.779951 0.625841 -0.136133 0.990691 156.855 282.481)"
        fill="#0419D6"
      />
    </g>
    <g filter="url(#filter3_f_33_348)">
      <ellipse
        rx="59.9237"
        ry="67.5031"
        transform="matrix(0.74809 0.663598 -0.434308 0.900765 193.284 251.805)"
        fill="#842A9A"
        fillOpacity="0.53"
      />
    </g>
    <g filter="url(#filter4_f_33_348)">
      <ellipse
        cx="304.618"
        cy="344.857"
        rx="160.093"
        ry="176.182"
        transform="rotate(18.527 304.618 344.857)"
        fill="#320A70"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_33_348"
        x="155.791"
        y="-22.8988"
        width="235.897"
        height="287.001"
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
          stdDeviation="23.1256"
          result="effect1_foregroundBlur_33_348"
        />
      </filter>
      <filter
        id="filter1_f_33_348"
        x="126.364"
        y="-1.05467"
        width="221.042"
        height="321.806"
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
          stdDeviation="21.2939"
          result="effect1_foregroundBlur_33_348"
        />
      </filter>
      <filter
        id="filter2_f_33_348"
        x="47.6558"
        y="138.486"
        width="218.398"
        height="287.991"
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
          stdDeviation="28.3918"
          result="effect1_foregroundBlur_33_348"
        />
      </filter>
      <filter
        id="filter3_f_33_348"
        x="93.4631"
        y="132.892"
        width="199.642"
        height="237.825"
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
          stdDeviation="23.1256"
          result="effect1_foregroundBlur_33_348"
        />
      </filter>
      <filter
        id="filter4_f_33_348"
        x="0.567719"
        y="27.9699"
        width="608.1"
        height="633.774"
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
          stdDeviation="71.108"
          result="effect1_foregroundBlur_33_348"
        />
      </filter>
    </defs>
  </svg>
  <svg
    width="931"
    height="900"
    viewBox="0 0 931 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute bottom-0 w-full h-auto lg:hidden left-2/4 -translate-x-2/4"
  >
    <g opacity="0.66">
      <path
        d="M254.752 371.696C218.031 507.869 299.107 647.699 435.839 684.014C572.572 720.329 713.184 639.378 749.905 503.205C786.626 367.031 705.55 227.202 568.818 190.887C432.085 154.571 291.473 235.522 254.752 371.696Z"
        fill="url(#paint0_radial_33_337)"
      />
      <g filter="url(#filter0_f_33_337)">
        <ellipse
          rx="205.22"
          ry="264.219"
          transform="matrix(-0.262057 0.965052 -0.965784 -0.259346 449.16 502.019)"
          fill="#041128"
        />
      </g>
      <g filter="url(#filter1_f_33_337)">
        <ellipse
          rx="205.22"
          ry="135.666"
          transform="matrix(-0.262057 0.965052 -0.965784 -0.259347 601.455 389.887)"
          fill="#041128"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_33_337"
        x="0.470428"
        y="104.541"
        width="897.38"
        height="794.955"
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
          stdDeviation="93.9263"
          result="effect1_foregroundBlur_33_337"
        />
      </filter>
      <filter
        id="filter1_f_33_337"
        x="271.934"
        y="0.851288"
        width="659.043"
        height="778.072"
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
          stdDeviation="93.9263"
          result="effect1_foregroundBlur_33_337"
        />
      </filter>
      <radialGradient
        id="paint0_radial_33_337"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(166.415 293.517) rotate(24.4204) scale(614.505 613.475)"
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
  </svg> */}

      {/* end of section overlay */}
    </div>
  );
};

export default Network;
