const AboutUs = ({ activeSection }) => {
  return (
    <div
      className={`screen relative h-full w-full flex flex-wrap items-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
        activeSection === 1 ? "active" : ""
      }`}
      id="about-us"
    >
      <div className="relative z-10 w-full screen__container">
        <img
          className="w-full max-w-[200px] mx-auto mb-[110px] opacity-0 lg:hidden"
          src="/cube.png"
        />

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
    </div>
  );
};

export default AboutUs;
