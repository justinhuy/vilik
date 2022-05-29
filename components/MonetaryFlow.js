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
    </div>
  );
};

export default MonetaryFlow;
