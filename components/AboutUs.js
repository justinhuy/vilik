const AboutUs = ({ activeSection }) => {
  return (
    <div
      className={`screen relative h-full w-full flex flex-wrap items-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
        activeSection === 1 ? "active" : ""
      }`}
      id="about-us"
    >
      <div className="relative z-10 w-full screen__container">
        {/* <img
      className="w-full max-w-[200px] mx-auto mb-[110px] lg:hidden"
      src="/cube.png"
    /> */}

        <div className="lg:grid lg:grid-cols-12">
          <div className="col-span-6 col-start-7">
            <h4 className="btn-animate rounded-[38px] text-[12px] leading-[14px] lg:text-[14px] lg:leading-[17px] h-[22px] lg:h-[35px] inline-flex items-center justify-center px-[12px] lg:px-[18px] mb-[8px]">
              <span className="circle"></span>
              <span className="layer"></span>
              <span className="txt whitespace-nowrap">ABOUT US</span>
            </h4>
            <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] mb-[16px] lg:text-[40px] lg:leading-[48px] lg:mb-[32px] lg:leading-[48px]">
              A cutting-edge <br />
              multi-purpose SocialFi <br /> streaming platform
            </h5>
            <p className="desc text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px] text-zinc-300 text-zinc-300 lg:max-w-[457px]">
              In the era of high interactivity, edutainment, and a combination
              between entertainment and earning, Vilik proudly introduces a
              high-end video streaming platform built on the BSC network. Here,
              content creators and consumers can play and earn cryptocurrency
              for their actions.
            </p>
          </div>
        </div>
      </div>

      {/* section overlay */}
      {/* <svg
    width="375"
    height="606"
    viewBox="0 0 375 606"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute bottom-0 left-0 w-full h-auto lg:hidden"
  >
    <g opacity="0.66">
      <path
        d="M-59.248 371.695C-95.9689 507.869 -14.8935 647.699 121.839 684.014C258.572 720.329 399.184 639.378 435.905 503.204C472.626 367.031 391.55 227.201 254.818 190.886C118.085 154.571 -22.527 235.522 -59.248 371.695Z"
        fill="url(#paint0_radial_1200_5744)"
      />
      <g filter="url(#filter0_f_1200_5744)">
        <ellipse
          rx="205.22"
          ry="264.219"
          transform="matrix(-0.262057 0.965052 -0.965784 -0.259346 135.16 502.019)"
          fill="#041128"
        />
      </g>
      <g filter="url(#filter1_f_1200_5744)">
        <ellipse
          rx="205.22"
          ry="135.666"
          transform="matrix(-0.262057 0.965052 -0.965784 -0.259347 287.455 389.887)"
          fill="#041128"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_1200_5744"
        x="-313.53"
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
          result="effect1_foregroundBlur_1200_5744"
        />
      </filter>
      <filter
        id="filter1_f_1200_5744"
        x="-42.0659"
        y="0.851532"
        width="659.043"
        height="778.071"
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
          result="effect1_foregroundBlur_1200_5744"
        />
      </filter>
      <radialGradient
        id="paint0_radial_1200_5744"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(-147.585 293.517) rotate(24.4204) scale(614.505 613.475)"
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

export default AboutUs;
