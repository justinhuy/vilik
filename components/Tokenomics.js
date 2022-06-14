import Image from "next/image";
import { useState } from "react";
import { InView } from "react-intersection-observer";

import Moving from "../animation/Moving";

const Tokenomics = ({ activeSection }) => {
  const [inView, setInView] = useState(false);
  return (
    <InView
      as="div"
      // triggerOnce
      onChange={(inView) => setInView(inView)}
      className={`screen relative h-full w-full hidden lg:flex items-center justify-center py-[50px] lg:py-[62px] px-[16px] lg:px-[7.5vw] ${
        activeSection === 6 ? "active" : ""
      } ${inView ? "in-view" : ""}`}
    >
      <div className="relative z-10 flex flex-col items-stretch w-full h-full screen__container justify-center">
        <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] lg:text-[40px] lg:leading-[48px] mb-[16px] lg:mb-[24px] lg:leading-[48px] text-center font-semibold lg:font-medium font-kanit uppercase">
          Tokenomics
        </h5>

        <div className="box w-full text-center">
          <div className="inline-block relative">
            <div className="hidden lg:block absolute top-[-162px] right-[-173px] z-10">
              <Moving yFrom={-10} yTo={10} duration={5}>
                <Image
                  src="/shape3@2x.png"
                  alt="Tokenomics"
                  width={277}
                  height={216}
                />
              </Moving>
            </div>
            <Image
              src="/tokenomics@2x.png"
              width={1224}
              height={586}
              className="tokenomics-tbl mx-auto"
            />
          </div>
        </div>
      </div>
    </InView>
  );
};

export default Tokenomics;
