const Introduction = ({ activeSection, onScrollTo }) => {
  return (
    <div
      className={`screen relative h-full w-full flex flex-col flex-wrap justify-center items-center lg:py-[87px] px-[16px] lg:px-[7.5vw] ${
        activeSection === 0 ? "active" : ""
      }`}
      style={{
        backgroundImage: "url(/bg-dot.png)",
      }}
      id="intro"
    >
      <div className="screen__container relative z-10 pt-[75px] lg:pt-0">
        <div className="grid-cols-2 text-center lg:text-left lg:grid">
          <div>
            <h1 className="heading flex flex-wrap flex-col text-[48px] leading-[48px] lg:text-[102px] lg:leading-[106px] mb-[16px] font-semibold">
              <span className="text-gradient-blue-01">Livestream</span>
              <span className="text-gradient-blue-01">Blockchain</span>
            </h1>
            <p className="text-fadein text-[14px] leading-[17px] lg:text-[28px] lg:leading-[34px] mb-[26px] text-white font-kanit">
              Fast. Seamless. An unconventional streaming and earning platform
            </p>

            <button
              type="button"
              className="text-fadein relative group cursor-pointer overflow-hidden p-[3px] rounded-[30px]"
              onClick={() => onScrollTo(1)}
            >
              <span className="box bg-gradient-purple text-[16px] leading-[19px] h-[40px] lg:h-[51px] px-[24px] rounded-[26px] inline-flex items-center relative z-10">
                About us
              </span>
              <div className="absolute w-[275px] h-[275px] top-1/2 left-0 linear-custom transform translate-y-[-50%]">
                <div
                  style={{
                    background:
                      "linear-gradient(178.93deg, #F499FF 31.95%, #4453F2 71.55%)",
                  }}
                  className="w-full h-full duration-200 opacity-0 lg:group-hover:animate-spin-icon lg:group-hover:opacity-100"
                ></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <ul className="hidden lg:flex flex-col items-center justify-center absolute right-[1.11vw] top-2/4 -translate-y-2/4	space-y-[21px]">
        <li>
          <a
            href="https://www.tiktok.com/@vilik.official"
            title="Tiktok"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.2353 18.6616C7.71055 18.9123 8.23985 19.0432 8.77715 19.043C10.5669 19.043 12.0279 17.6194 12.0939 15.845L12.1005 0H16.0538C16.0541 0.336542 16.0855 0.67234 16.1473 1.00316H13.2527V1.00371H17.2065C17.2059 2.32981 17.6866 3.61108 18.5592 4.60959L18.5604 4.61087C19.4506 5.1924 20.491 5.5016 21.5544 5.5006V6.3811C21.9265 6.4608 22.3113 6.50325 22.7071 6.50325V10.4576C20.7334 10.4599 18.809 9.84105 17.2065 8.68875V16.7234C17.2065 20.7355 13.9419 24 9.9293 24C8.93005 24.0002 7.9415 23.7941 7.0256 23.3944C6.11035 22.9951 5.28745 22.4112 4.60826 21.6792L4.60678 21.6782C2.73018 20.3606 1.5 18.1817 1.5 15.7202C1.5 11.7076 4.76453 8.4425 8.77715 8.4425C9.1053 8.44405 9.4329 8.46795 9.7578 8.51395V9.45005C9.78065 9.4496 9.80335 9.4488 9.82615 9.44805C9.86035 9.44685 9.89465 9.44565 9.9293 9.44565C10.2574 9.4472 10.585 9.4711 10.9099 9.5171V13.5534C10.5999 13.4561 10.2718 13.3995 9.9293 13.3995C9.0481 13.4005 8.2033 13.751 7.58025 14.3742C6.9572 14.9973 6.6068 15.8422 6.60595 16.7234C6.606 17.4193 6.82595 18.0975 7.23445 18.6611L7.2353 18.6616ZM3.13214 19.3199C3.46988 20.1998 3.9739 20.9981 4.60517 21.6765C3.96105 20.9872 3.46368 20.1855 3.13214 19.3199Z"
                fill="url(#paint0_linear_890_4477)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_890_4477"
                  x1="7.84526"
                  y1="9.58415"
                  x2="11.8389"
                  y2="24.073"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" title="Telegram">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.35544 12.4614C4.20408 11.4431 6.26766 10.5933 8.19578 9.73904C11.5129 8.33991 14.8432 6.96502 18.207 5.68501C18.8615 5.46691 20.0375 5.25362 20.1528 6.22354C20.0897 7.59645 19.8299 8.96133 19.6518 10.3262C19.1996 13.3277 18.6769 16.3189 18.1672 19.3105C17.9916 20.307 16.7433 20.8228 15.9446 20.1851C14.0251 18.8885 12.0907 17.6046 10.1957 16.2779C9.57495 15.6471 10.1506 14.7413 10.705 14.2909C12.286 12.7328 13.9627 11.4091 15.461 9.77047C15.8652 8.79443 14.671 9.61701 14.2771 9.86905C12.1127 11.3606 10.0013 12.9431 7.71932 14.254C6.5537 14.8956 5.19515 14.3473 4.03006 13.9892C2.9854 13.5567 1.4546 13.121 2.35534 12.4615L2.35544 12.4614Z"
                fill="url(#paint0_linear_890_4478)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_890_4478"
                  x1="7.48924"
                  y1="11.4764"
                  x2="9.37348"
                  y2="20.8176"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/VILIK-107781338574941"
            title="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.8008 14.3391 7.875 15.8297 7.875H17.3438V4.92188C17.3438 4.92188 15.9703 4.6875 14.6578 4.6875C11.9157 4.6875 10.125 6.3492 10.125 9.35625V12H7.07812V15.4688H10.125V23.8547C10.7367 23.9508 11.3625 24 12 24C12.6375 24 13.2633 23.9508 13.875 23.8547V15.4688H16.6711Z"
                fill="url(#paint0_linear_890_4482)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_890_4482"
                  x1="10.1497"
                  y1="12.3997"
                  x2="14.9003"
                  y2="22.7678"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" title="Twitter">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4828 8.49023L11.5229 9.13903L10.8545 9.05958C8.4217 8.75505 6.2963 7.72228 4.49172 5.98775L3.60948 5.12711L3.38224 5.76266C2.90102 7.17941 3.20847 8.6756 4.21101 9.68189C4.7457 10.238 4.6254 10.3174 3.70305 9.98643C3.38224 9.8805 3.10153 9.80106 3.07479 9.84078C2.98122 9.93347 3.30204 11.1384 3.55601 11.615C3.90356 12.2771 4.61203 12.9259 5.38733 13.3098L6.04233 13.6144L5.26702 13.6276C4.51846 13.6276 4.49172 13.6409 4.57193 13.9189C4.83927 14.7795 5.89529 15.6932 7.07161 16.0904L7.90038 16.3684L7.17854 16.7921C6.10916 17.4012 4.85264 17.7455 3.59612 17.7719C2.99459 17.7852 2.5 17.8381 2.5 17.8779C2.5 18.0103 4.13081 18.7517 5.07988 19.043C7.92711 19.9037 11.309 19.5329 13.8488 18.0632C15.6534 17.0172 17.458 14.9384 18.3001 12.9259C18.7546 11.8534 19.2091 9.89374 19.2091 8.95366C19.2091 8.34459 19.2492 8.26514 19.9978 7.53691C20.4389 7.11321 20.8533 6.64978 20.9335 6.51738C21.0671 6.2658 21.0538 6.2658 20.372 6.4909C19.2358 6.88811 19.0754 6.83515 19.6368 6.23932C20.0512 5.81562 20.5458 5.04766 20.5458 4.82257C20.5458 4.78285 20.3453 4.84905 20.1181 4.96822C19.8775 5.10063 19.3428 5.29924 18.9417 5.4184L18.2199 5.64349L17.5649 5.20655C17.204 4.96822 16.696 4.70341 16.4287 4.62396C15.747 4.43859 14.7043 4.46507 14.0894 4.67693C12.4185 5.27275 11.3625 6.80867 11.4828 8.49023Z"
                fill="url(#paint0_linear_890_4486)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_890_4486"
                  x1="8.03529"
                  y1="10.4901"
                  x2="9.8872"
                  y2="19.8679"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAC2FF" />
                  <stop offset="1" stopColor="#1945D9" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </li>
      </ul>

      <img
        className="w-full max-w-[375px] mx-auto mt-[30px] opacity-0 lg:hidden"
        src="/cube.png"
      />
    </div>
  );
};

export default Introduction;
