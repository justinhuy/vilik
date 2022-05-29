import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Teams = ({ activeSection }) => {
  return (
    <div
      className={`screen relative h-full w-full flex flex-wrap items-center justify-center py-[50px] lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
        activeSection === 11 ? "active" : ""
      }`}
    >
      <div className="z-10 w-full screen__container">
        <h5 className="sub-heading text-gradient-blue text-[24px] leading-[29px] mb-[16px] lg:text-[29px] lg:mb-[32px] lg:leading-[48px] text-center lg:text-left relative z-10">
          Our Team
        </h5>

        <div className="flex items-end space-x-[20px] mb-[16px]">
          <h3 className="text-gradient-blue text-[16px] leading-[19px] lg:text-[20px] lg:leading-[24px] relative top-[7px]">
            Blockchain team
          </h3>
          <span className="flex-1 border-b border-light-blue"></span>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          className="box team-slider mb-[16px] lg:mb-[25px]"
          breakpoints={{
            spaceBetween: 56,
          }}
        >
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex items-end space-x-[20px] mb-[16px]">
          <h3 className="text-gradient-blue text-[16px] leading-[19px] lg:text-[20px] lg:leading-[24px] relative top-[7px]">
            Media Advisor
          </h3>
          <span className="flex-1 border-b border-light-blue"></span>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          className="box team-slider mb-[16px] lg:mb-[25px]"
          breakpoints={{
            spaceBetween: 56,
          }}
        >
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex items-end space-x-[20px] mb-[16px]">
          <h3 className="text-gradient-blue text-[16px] leading-[19px] lg:text-[20px] lg:leading-[24px] relative top-[7px]">
            Investor
          </h3>
          <span className="flex-1 border-b border-light-blue"></span>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          className="box team-slider mb-[16px] lg:mb-[25px]"
          breakpoints={{
            spaceBetween: 56,
          }}
        >
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-[14px] leading-[20px]">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-linear bg-gray-blur-015 mb-[3px]"></div>
              <p className="font-kanit font-semibold mb-[2px]">TBA</p>
              <p>TBA</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <svg
        width="375"
        height="667"
        viewBox="0 0 375 667"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 lg:hidden"
      >
        <g opacity="0.83">
          <g filter="url(#filter0_f_1220_8226)">
            <ellipse
              cx="-2.06127"
              cy="159.023"
              rx="104.677"
              ry="100.948"
              transform="rotate(66.7216 -2.06127 159.023)"
              fill="#6900EE"
              fillOpacity="0.5"
            />
          </g>
          <g opacity="0.67" filter="url(#filter1_f_1220_8226)">
            <ellipse
              rx="142.106"
              ry="109.206"
              transform="matrix(-0.00441348 0.99999 -0.987498 0.157631 90.628 411.334)"
              fill="#3D17E3"
            />
          </g>
          <g filter="url(#filter2_f_1220_8226)">
            <ellipse
              rx="136.955"
              ry="60.4817"
              transform="matrix(-0.00441348 0.99999 -0.987498 0.157631 -97.7323 399.806)"
              fill="#420A8D"
            />
          </g>
          <g filter="url(#filter3_f_1220_8226)">
            <ellipse
              rx="102.554"
              ry="82.8799"
              transform="matrix(-0.0172168 0.999852 -0.98878 0.149378 29.2922 379.247)"
              fill="#00F0FF"
              fillOpacity="0.44"
            />
          </g>
          <g opacity="0.7">
            <g filter="url(#filter4_f_1220_8226)">
              <ellipse
                cx="40.3538"
                cy="272.069"
                rx="83.0504"
                ry="93.2011"
                transform="rotate(66.7216 40.3538 272.069)"
                fill="#E84DFC"
                fillOpacity="0.71"
              />
            </g>
            <g filter="url(#filter5_f_1220_8226)">
              <ellipse
                rx="201.591"
                ry="118.908"
                transform="matrix(0.652511 0.757779 -0.783038 0.621973 45.7418 269.952)"
                fill="#E84DFC"
                fillOpacity="0.2"
              />
            </g>
            <g filter="url(#filter6_f_1220_8226)">
              <ellipse
                cx="40.5296"
                cy="272.29"
                rx="38.6661"
                ry="50.7071"
                transform="rotate(66.7216 40.5296 272.29)"
                fill="#FDE2FC"
                fillOpacity="0.71"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_1220_8226"
            x="-198.921"
            y="-40.4015"
            width="393.719"
            height="398.85"
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
              stdDeviation="47.647"
              result="effect1_foregroundBlur_1220_8226"
            />
          </filter>
          <filter
            id="filter1_f_1220_8226"
            x="-223.344"
            y="62.0467"
            width="627.944"
            height="698.574"
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
              stdDeviation="103.065"
              result="effect1_foregroundBlur_1220_8226"
            />
          </filter>
          <filter
            id="filter2_f_1220_8226"
            x="-355.785"
            y="64.1905"
            width="516.105"
            height="671.23"
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
              stdDeviation="99.1621"
              result="effect1_foregroundBlur_1220_8226"
            />
          </filter>
          <filter
            id="filter3_f_1220_8226"
            x="-151.84"
            y="176.791"
            width="362.264"
            height="404.912"
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
              stdDeviation="49.581"
              result="effect1_foregroundBlur_1220_8226"
            />
          </filter>
          <filter
            id="filter4_f_1220_8226"
            x="-117.469"
            y="121.226"
            width="315.646"
            height="301.687"
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
              stdDeviation="33.054"
              result="effect1_foregroundBlur_1220_8226"
            />
          </filter>
          <filter
            id="filter5_f_1220_8226"
            x="-313.754"
            y="-98.1338"
            width="718.992"
            height="736.172"
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
              stdDeviation="99.1621"
              result="effect1_foregroundBlur_1220_8226"
            />
          </filter>
          <filter
            id="filter6_f_1220_8226"
            x="-61.3923"
            y="178.616"
            width="203.843"
            height="187.35"
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
              stdDeviation="26.4432"
              result="effect1_foregroundBlur_1220_8226"
            />
          </filter>
        </defs>
      </svg>
      <svg
        width="375"
        height="484"
        viewBox="0 0 375 484"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0 lg:hidden"
      >
        <g filter="url(#filter0_f_1220_8235)">
          <circle
            cx="266.785"
            cy="348.577"
            r="97.5742"
            transform="rotate(33.1841 266.785 348.577)"
            fill="#9021AC"
            fillOpacity="0.75"
          />
        </g>
        <g filter="url(#filter1_f_1220_8235)">
          <ellipse
            cx="425.683"
            cy="256.977"
            rx="153.135"
            ry="153.135"
            transform="rotate(33.1841 425.683 256.977)"
            fill="#3D17E3"
            fillOpacity="0.35"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1220_8235"
            x="-21.5527"
            y="60.2392"
            width="576.676"
            height="576.675"
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
              stdDeviation="95.376"
              result="effect1_foregroundBlur_1220_8235"
            />
          </filter>
          <filter
            id="filter1_f_1220_8235"
            x="168.951"
            y="0.243851"
            width="513.465"
            height="513.465"
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
              stdDeviation="51.7902"
              result="effect1_foregroundBlur_1220_8235"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Team;
