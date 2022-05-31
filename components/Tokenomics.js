import Image from "next/image";

const Tokenomics = ({ activeSection }) => {
  return (
    <div
      className={`screen relative h-full w-full hidden lg:flex items-center justify-center py-[50px] lg:py-[62px] px-[16px] lg:px-[7.5vw] ${
        activeSection === 6 ? "active" : ""
      }`}
      id="tokenomics"
    >
      <div className="relative z-10 flex flex-col items-stretch w-full h-full screen__container">
        <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] lg:text-[40px] lg:leading-[48px] mb-[16px] lg:mb-[24px] lg:leading-[48px] text-center">
          Tokenomics
        </h5>

        <Image
          src="/tokenomics@2x.png"
          width={1224}
          height={586}
          className="tokenomics-tbl mx-auto"
        />

        {/* <div className="flex-1">
      <div className="box text-[16px] leading-[24px] border-linear relative">
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

        <div className="relative h-full pt-[40px] pb-[51px]">
          <div className="flex text-light-blue text-[16px] leading-[24px] bg-white-blur-015 divide-x divide-white/20 font-bold absolute top-0 left-0 w-full">
            <div className="w-[156px] py-[8px] text-center">
              STAGE
            </div>
            <div className="w-[178px] py-[8px] text-center">
              % OF TOTAL SUPPLY
            </div>
            <div className="w-[156px] py-[8px] text-center">
              QUANTITY
            </div>
            <div className="w-[156px] py-[8px] text-center">
              PRICE
            </div>
            <div className="w-[156px] py-[8px] text-center">
              TOTAL SOLD
            </div>
            <div className="flex-1 py-[8px] text-center">
              VESTING PERIOD
            </div>
          </div>

          <div className="flex-1 divide-y divide-zinc-600 text-[14px] leading-[21px] tokenomics-tbl">
            {TOKENOMICS_DATA.map((item) => (
              <div className="group" key={item.stage}>
                <div className="flex transition-all divide-x group-hover:bg-zinc-800 divide-white/20">
                  <div className="w-[156px] py-[11px] text-center text-light-blue text-[16px] leading-[24px]">
                    {item.stage}
                  </div>
                  <div className="w-[178px] py-[11px] text-center text-center">
                    <span className="inline-block rounded-[16px] py-[2px] px-[20px] border border-zinc-400 bg-zinc-800 text-[14px leading-[21px] font-medium">
                      {item.total}
                    </span>
                  </div>
                  <div className="w-[156px] py-[11px] text-center">
                    {item.quantity}
                  </div>
                  <div className="w-[156px] py-[11px] text-center">
                    {item.price}
                  </div>
                  <div className="w-[156px] py-[11px] text-center">
                    {item.totalSold}
                  </div>
                  <div className="flex-1 py-[11px] px-[20px]">
                    {item.vestingPeriod}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex text-[18px] leading-[27px] bg-white-blur-015 divide-x divide-white/20 absolute bottom-0 left-0 w-full">
            <div className="w-[156px] py-[8px] text-center font-bold">
              TOTAL
            </div>
            <div className="w-[178px] py-[8px] text-center text-center">
              <span className="inline-block py-[4px] px-[24px] rounded-[16px] text-center bg-gradient-pink-200">
                100%
              </span>
            </div>
            <div className="w-[156px] py-[8px] text-center text-light-blue">
              1,000,000,000
            </div>
            <div className="w-[156px] py-[15px] text-center"></div>
            <div className="w-[156px] py-[15px] text-center"></div>
            <div className="flex-1 py-[15px] text-center"></div>
          </div>
        </div>
      </div>
    </div> */}
      </div>
    </div>
  );
};

export default Tokenomics;
