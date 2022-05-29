const EcoSystem = ({ activeSection }) => {
  return (
    <div
      className={`screen relative h-full w-full flex flex-wrap items-center justify-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
        activeSection === 5 ? "active" : ""
      }`}
      id="eco"
    >
      <div className="relative z-10 screen__container">
        <div className="text-center">
          <h4 className="btn-animate large rounded-[38px] h-[35px] inline-flex items-center justify-center px-[18px] mb-[8px] relative z-10">
            <span className="circle"></span>
            <span className="layer"></span>
            <span className="txt whitespace-nowrap">
              ECOSYSTEM &amp; TOKENOMICS
            </span>
          </h4>
        </div>

        <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] lg:text-[40px] lg:leading-[48px] mb-[16px] lg:mb-[32px] lg:leading-[48px] text-center">
          Impress users with exceptional features
        </h5>

        <div className="box bg-white-blur-003 px-[26px] pt-[13px] pb-[21px] max-w-[1209px] mx-auto">
          <div className="inline-block relative">
            <picture>
              <source media="(min-width: 1024px)" srcSet="features@2x.png" />
              <img
                src="featuresmb@2x.png"
                alt="ECOSYSTEM &amp; TOKENOMICS"
                className="w-full max-w-[1000px] mx-auto"
              />
            </picture>

            <svg
              width="192"
              height="361"
              viewBox="0 0 192 361"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block absolute w-[19.2%] top-[18.8%] left-0"
            >
              <rect
                x="1"
                y="1"
                width="190"
                height="359"
                rx="16"
                stroke="url(#paint0_linear_49_198)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="6 6"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_49_198"
                  x1="57.8489"
                  y1="144.363"
                  x2="-65.532"
                  y2="240.862"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4D2FF" />
                  <stop offset="1" stopColor="#5179FF" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              width="471"
              height="92"
              viewBox="0 0 471 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block absolute w-[46.2%] h-auto top-[19.9612403%] left-[24%]"
            >
              <rect
                x="470"
                y="1"
                width="90"
                height="469"
                rx="16"
                transform="rotate(90 470 1)"
                stroke="url(#paint0_linear_49_199)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="6 6"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_49_199"
                  x1="496.928"
                  y1="188.29"
                  x2="409.745"
                  y2="213.014"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4D2FF" />
                  <stop offset="1" stopColor="#5179FF" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              width="227"
              height="176"
              viewBox="0 0 227 176"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block absolute w-[22.3%] top-[64.3410853%] left-[36%]"
            >
              <rect
                x="226"
                y="1"
                width="174"
                height="225"
                rx="16"
                transform="rotate(90 226 1)"
                stroke="url(#paint0_linear_49_200)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="6 6"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_49_200"
                  x1="278.062"
                  y1="90.8514"
                  x2="199.092"
                  y2="181.101"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4D2FF" />
                  <stop offset="1" stopColor="#5179FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* section overlay */}

      {/* end of section overlay */}
    </div>
  );
};

export default EcoSystem;
