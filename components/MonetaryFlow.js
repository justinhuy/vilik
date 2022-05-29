import Image from "next/image";

import Moving from "../animation/Moving";

const MonetaryFlow = ({ activeSection }) => {
  return (
    <div
      className={`screen relative h-full w-full flex flex-wrap items-center justify-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
        activeSection === 6 ? "active" : ""
      }`}
      id="monetary-flow"
    >
      <div className="relative z-10 screen__container">
        <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] lg:text-[40px] lg:leading-[48px] mb-[16px] lg:mb-[32px] lg:leading-[48px] text-center">
          Monetary flow
        </h5>

        <div className="box bg-white-blur-003 p-[32px] lg:px-[143px] lg:py-[57px] w-full relative max-w-[1223px] mx-auto">
          <div className="hidden lg:block absolute top-[-58px] left-[-19px]">
            <Moving yFrom={10} yTo={-10} duration={5}>
              <Image
                src="/shape1@2x.png"
                alt="NFT marketplace"
                width={133}
                height={133}
              />
            </Moving>
          </div>

          <picture>
            <source media="(min-width: 1024px)" srcSet="monetary-flow@2x.png" />
            <img src="monetary-flowmb@2x.png" alt="Monetary flow" />
          </picture>

          <div className="hidden lg:block absolute bottom-[-131px] right-[-182px]">
            <Moving yFrom={-10} yTo={10} duration={5}>
              <Image
                src="/shape2@2x.png"
                alt="NFT marketplace"
                width={277}
                height={216}
              />
            </Moving>
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

export default MonetaryFlow;
