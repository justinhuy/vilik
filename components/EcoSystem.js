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
          <picture>
            <source media="(min-width: 1024px)" srcSet="features@2x.png" />
            <img
              src="featuresmb@2x.png"
              alt="ECOSYSTEM &amp; TOKENOMICS"
              className="w-full max-w-[1000px] mx-auto"
            />
          </picture>
        </div>
      </div>

      {/* section overlay */}

      {/* end of section overlay */}
    </div>
  );
};

export default EcoSystem;
