const Chart = ({ activeSection }) => {
  return (
    <div
      className={`screen relative h-full w-full flex  items-center justify-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
        activeSection === 7 ? "active" : ""
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
    </div>
  );
};

export default Chart;
