const Chart = ({ activeSection }) => {
  return (
    <div
      className={`screen relative h-full w-full flex  items-center justify-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
        activeSection === 8 ? "active" : ""
      }`}
      id="chart"
    >
      <div className="z-10 screen__container">
        <div className="grid grid-cols-12">
          <div className="sub-heading col-span-12 order-2 mt-[23px] lg-[mt-0] lg:order-1 lg:col-span-4">
            <div className="flex items-center h-full">
              <div className="w-full grid grid-cols-2 gap-y-[20px]">
                <div className="flex items-center space-x-[16px]">
                  <span className="inline-block w-[20px] h-[20px] bg-linear-1"></span>
                  <span>28% Reward Pool</span>
                </div>
                <div className="flex items-center space-x-[16px]">
                  <span className="inline-block w-[20px] h-[20px] bg-linear-2"></span>
                  <span>3% Public Round</span>
                </div>
                <div className="flex items-center space-x-[16px]">
                  <span className="inline-block w-[20px] h-[20px] bg-linear-3"></span>
                  <span>10% Staking Pool</span>
                </div>
                <div className="flex items-center space-x-[16px]">
                  <span className="inline-block w-[20px] h-[20px] bg-linear-4"></span>
                  <span>5% Core Team</span>
                </div>
                <div className="flex items-center space-x-[16px]">
                  <span className="inline-block w-[20px] h-[20px] bg-linear-5"></span>
                  <span>12% Reserve</span>
                </div>
                <div className="flex items-center space-x-[16px]">
                  <span className="inline-block w-[20px] h-[20px] bg-linear-6"></span>
                  <span>3% Public Round</span>
                </div>
                <div className="flex items-center space-x-[16px]">
                  <span className="inline-block w-[20px] h-[20px] bg-linear-7"></span>
                  <span>10% Seed Round</span>
                </div>
                <div className="flex items-center space-x-[16px]">
                  <span className="inline-block w-[20px] h-[20px] bg-linear-8"></span>
                  <span>9% Liquidity</span>
                </div>
                <div className="flex items-center space-x-[16px]">
                  <span className="inline-block w-[20px] h-[20px] bg-linear-9"></span>
                  <span>6% Private Round</span>
                </div>
                <div className="flex items-center space-x-[16px]">
                  <span className="inline-block w-[20px] h-[20px] bg-linear-10"></span>
                  <span>10% Marketing</span>
                </div>
                <div className="flex items-center space-x-[16px]">
                  <span className="inline-block w-[20px] h-[20px] bg-linear-11"></span>
                  <span>4% Partnership</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 col-span-12 desc lg:order-2 lg:col-span-8">
            <div className="text-right">
              <img
                className="inline-block w-full max-w-[682px] h-auto"
                src="/chart.png"
              />
            </div>
          </div>
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

export default Chart;
