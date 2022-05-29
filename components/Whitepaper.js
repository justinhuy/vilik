import Link from "next/link";

const Whitepaper = ({ activeSection }) => {
  return (
    <div
      className={`screen relative h-full w-full flex flex-col items-center justify-center ${
        activeSection === 10 ? "active" : ""
      }`}
      id="whitepaper"
    >
      <div className="flex-1 flex items-center justify-center text-center py-[117px] lg:py-0 px-[16px] lg:px-[7.5vw] relative z-10">
        <div>
          <h3 className="sub-heading text-[24px] leading-[29px] lg:text-[40px] lg:leading-[48px] mb-[24px] lg:mb-[29px] lg:leading-[48px] font-medium text-shadow-white-51">
            Learn more about VILIK World
          </h3>

          <a
            href="/whitepaper.pdf"
            rel="noreferrer"
            target="_blank"
            title="Whitepaper"
            type="button"
            className="relative group cursor-pointer overflow-hidden p-[3px] rounded-[30px] inline-block"
          >
            <span className="box bg-gradient-purple text-[16px] leading-[19px] h-[40px] lg:h-[51px] px-[24px] rounded-[26px] inline-flex items-center relative z-10">
              Whitepaper
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
          </a>
        </div>
      </div>
      <div className="py-[53px] lg:py-0 lg:h-[318px] w-full flex items-center justify-center text-center bg-white-blur-008 px-[16px] lg:px-[7.5vw] relative z-10">
        <div>
          <Link href="/">
            <a className="inline-block mb-[27px]">
              <svg
                width="107"
                height="89"
                viewBox="0 0 107 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.8382 29.0259L46.5741 55.9989L0 29.0259H33.8382ZM46.5741 0L0 26.9729H33.8382L46.5741 0ZM40.4384 27.9994C40.4384 22.773 43.5057 18.2924 47.875 16.1466V2.05299L35.6047 27.9994L47.7825 53.9459V39.8534C43.5068 37.7064 40.4384 33.2258 40.4384 27.9994ZM53.4538 16.9864C52.1518 16.9864 50.9434 17.1731 49.8285 17.6394C49.0845 17.919 48.4341 18.1996 47.7836 18.5731C44.5304 20.5333 42.3919 24.0802 42.3919 28.0934C42.3919 32.1065 44.5304 35.6534 47.7836 37.6136C48.4341 37.9871 49.0856 38.2667 49.8285 38.5473C50.9445 38.9208 52.1529 39.2003 53.4538 39.2003C54.7558 39.2003 55.9642 39.0136 57.0791 38.5473C57.8231 38.2678 58.4735 37.9871 59.1239 37.6136C62.3772 35.6534 64.5156 32.1065 64.5156 28.0934C64.5156 24.0802 62.3772 20.5333 59.1239 18.5731C58.4735 18.1996 57.8219 17.9201 57.0791 17.6394C55.9631 17.1731 54.7546 16.9864 53.4538 16.9864ZM73.1618 29.0259H107L60.4259 56L73.1618 29.0259ZM107 26.9729L60.4259 0L73.0693 26.9729H107ZM66.5616 27.9994C66.5616 33.2258 63.4943 37.7064 59.1251 39.8522V54.0387L71.3953 27.9994L59.1239 2.05299V16.2394C63.4932 18.2936 66.5616 22.773 66.5616 27.9994Z"
                  fill="url(#paint0_linear_1231_9131)"
                />
                <path
                  d="M20.7423 70.002H23.3673C23.5529 70.002 23.7649 70.1343 23.8445 70.3195L28.9885 81.4367C29.0946 81.6484 29.2006 81.7543 29.3066 81.7543C29.4126 81.7543 29.5187 81.6484 29.6247 81.4367L34.7422 70.3195C34.8218 70.1343 35.0338 70.002 35.2459 70.002H37.8444C38.0565 70.002 38.136 70.1343 38.0565 70.3195L29.6777 88.5574C29.5982 88.7162 29.4656 88.7956 29.3066 88.7956C29.1476 88.7956 28.9885 88.7162 28.909 88.5574L20.5302 70.3195C20.4507 70.1343 20.5302 70.002 20.7423 70.002Z"
                  fill="url(#paint1_linear_1231_9131)"
                />
                <path
                  d="M41.1602 70.346C41.1602 70.1343 41.2927 70.002 41.5047 70.002H43.9973C44.2093 70.002 44.3418 70.1343 44.3418 70.346V72.6225C44.3418 72.8342 44.2093 72.9665 43.9973 72.9665H41.5047C41.2927 72.9665 41.1602 72.8342 41.1602 72.6225V70.346Z"
                  fill="url(#paint2_linear_1231_9131)"
                />
                <path
                  d="M41.5047 75.5342H43.9973C44.2093 75.5342 44.3418 75.6665 44.3418 75.8782V88.187C44.3418 88.3987 44.2093 88.531 43.9973 88.531H41.5047C41.2927 88.531 41.1602 88.3987 41.1602 88.187V75.8782C41.1602 75.6665 41.2927 75.5342 41.5047 75.5342Z"
                  fill="url(#paint3_linear_1231_9131)"
                />
                <path
                  d="M63.3535 70.346C63.3535 70.1343 63.4861 70.002 63.6981 70.002H66.1906C66.4027 70.002 66.5352 70.1343 66.5352 70.346V72.6225C66.5352 72.8342 66.4027 72.9665 66.1906 72.9665H63.6981C63.4861 72.9665 63.3535 72.8342 63.3535 72.6225V70.346Z"
                  fill="url(#paint4_linear_1231_9131)"
                />
                <path
                  d="M51.5528 70.346C51.5528 70.1343 51.4202 70.002 51.2082 70.002H48.7157C48.5036 70.002 48.3711 70.1343 48.3711 70.346V82.5992H51.5528V70.346Z"
                  fill="url(#paint5_linear_1231_9131)"
                />
                <path
                  d="M60.0376 85.5656H52.295C52.2729 85.5656 52.2508 85.5648 52.2296 85.563H48.3711V88.1862C48.3711 88.3979 48.5036 88.5302 48.7157 88.5302H60.0376C60.2496 88.5302 60.3822 88.3979 60.3822 88.1862V85.9096C60.3822 85.6988 60.2496 85.5656 60.0376 85.5656Z"
                  fill="url(#paint6_linear_1231_9131)"
                />
                <path
                  d="M63.6981 75.5342H66.1906C66.4027 75.5342 66.5352 75.6665 66.5352 75.8782V88.187C66.5352 88.3987 66.4027 88.531 66.1906 88.531H63.6981C63.4861 88.531 63.3535 88.3987 63.3535 88.187V75.8782C63.3535 75.6665 63.4861 75.5342 63.6981 75.5342Z"
                  fill="url(#paint7_linear_1231_9131)"
                />
                <path
                  d="M84.0076 70.2655L82.1512 72.5906L82.1503 72.5914L78.1628 77.5714L75.855 80.4522C75.8223 80.4839 75.7914 80.5201 75.7605 80.5624L75.4256 80.9885L74.2222 82.5206C73.9297 82.8654 73.7451 83.3947 73.7451 83.8445V88.1859C73.7451 88.3976 73.6125 88.5299 73.3996 88.5299H70.9071C70.695 88.5299 70.5625 88.3976 70.5625 88.1859V70.3458C70.5625 70.1332 70.695 70.0009 70.9071 70.0009H73.3996C73.6125 70.0009 73.7451 70.1332 73.7451 70.3458V77.6773C73.7451 77.9419 73.7972 78.0477 73.9041 78.0477C73.9836 78.0477 74.0897 77.9948 74.2222 77.836L74.512 77.4753L78.374 72.6602L79.6349 71.0884L80.2949 70.2646C80.4274 70.1058 80.6395 70 80.8524 70H83.875C84.0871 70.0009 84.1401 70.1076 84.0076 70.2655Z"
                  fill="url(#paint8_linear_1231_9131)"
                />
                <path
                  d="M75.4277 80.9895L75.8571 80.4541C75.8244 80.4859 75.7926 80.522 75.7626 80.5635L75.4277 80.9895Z"
                  fill="#D3AEF4"
                />
                <path
                  d="M86.4468 88.2663L79.3696 79.1187L78.0884 80.7037L77.416 81.5354L82.6007 88.2672C82.7333 88.4259 82.9453 88.5318 83.1574 88.5318H86.286C86.4999 88.5309 86.5529 88.4251 86.4468 88.2663Z"
                  fill="url(#paint9_linear_1231_9131)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1231_9131"
                    x1="0"
                    y1="27.9997"
                    x2="107"
                    y2="27.9997"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#05DAC5" />
                    <stop offset="0.3585" stopColor="#5C6AF3" />
                    <stop offset="0.499" stopColor="#8F74D9" />
                    <stop offset="0.6491" stopColor="#CC42D3" />
                    <stop offset="1" stopColor="#FC176F" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1231_9131"
                    x1="29.2936"
                    y1="70.0015"
                    x2="29.2936"
                    y2="88.7954"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.1711" stopColor="#BC79AD" />
                    <stop offset="0.7698" stopColor="#8BE3F7" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1231_9131"
                    x1="41.0641"
                    y1="69.9538"
                    x2="43.4154"
                    y2="72.0939"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="0.0269" stopColor="#EEF8FA" />
                    <stop offset="0.1345" stopColor="#ADDCE6" />
                    <stop offset="0.2372" stopColor="#77C5D5" />
                    <stop offset="0.332" stopColor="#4DB3C8" />
                    <stop offset="0.4173" stopColor="#2FA6BF" />
                    <stop offset="0.4902" stopColor="#1D9EB9" />
                    <stop offset="0.5419" stopColor="#169BB7" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_1231_9131"
                    x1="42.751"
                    y1="88.5307"
                    x2="42.751"
                    y2="75.5339"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8BE3F7" />
                    <stop offset="0.322" stopColor="#89E2F6" />
                    <stop offset="0.4942" stopColor="#81DDF1" />
                    <stop offset="0.6308" stopColor="#73D4EA" />
                    <stop offset="0.7488" stopColor="#60C8DF" />
                    <stop offset="0.8548" stopColor="#47B9D2" />
                    <stop offset="0.9508" stopColor="#29A7C1" />
                    <stop offset="1" stopColor="#169BB7" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_1231_9131"
                    x1="64.9443"
                    y1="72.9662"
                    x2="64.9443"
                    y2="70.0015"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4F5BBD" />
                    <stop offset="0.3755" stopColor="#515CBD" />
                    <stop offset="0.5414" stopColor="#5862BF" />
                    <stop offset="0.6661" stopColor="#656BC1" />
                    <stop offset="0.7701" stopColor="#7777C5" />
                    <stop offset="0.8612" stopColor="#8E88C9" />
                    <stop offset="0.942" stopColor="#AA9CCF" />
                    <stop offset="1" stopColor="#C4AED4" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_1231_9131"
                    x1="53.8652"
                    y1="72.4957"
                    x2="46.0711"
                    y2="80.3032"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4F84BD" />
                    <stop offset="0.4162" stopColor="#4F5BBD" />
                    <stop offset="1" stopColor="#8BE3F7" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_1231_9131"
                    x1="48.3705"
                    y1="87.0471"
                    x2="60.3821"
                    y2="87.0471"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0027933" stopColor="#8BE3F7" />
                    <stop offset="1" stopColor="#8BE3F7" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_1231_9131"
                    x1="64.9443"
                    y1="75.5339"
                    x2="64.9443"
                    y2="88.5307"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4F5BBD" />
                    <stop offset="0.0774" stopColor="#576DC5" />
                    <stop offset="0.2827" stopColor="#6997D7" />
                    <stop offset="0.4824" stopColor="#78B8E5" />
                    <stop offset="0.6728" stopColor="#83D0EF" />
                    <stop offset="0.8497" stopColor="#89DEF5" />
                    <stop offset="1" stopColor="#8BE3F7" />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_1231_9131"
                    x1="73.6601"
                    y1="85.1845"
                    x2="77.2329"
                    y2="70.526"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8BE3F7" />
                    <stop offset="0.4332" stopColor="#4F5BBD" />
                    <stop offset="0.5039" stopColor="#545FBE" />
                    <stop offset="0.5874" stopColor="#6269C1" />
                    <stop offset="0.6774" stopColor="#7A7AC5" />
                    <stop offset="0.7717" stopColor="#9B91CC" />
                    <stop offset="0.866" stopColor="#C4AED4" />
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear_1231_9131"
                    x1="81.9588"
                    y1="88.5306"
                    x2="81.9588"
                    y2="79.118"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8BE3F7" />
                    <stop offset="0.3812" stopColor="#8AE1F5" />
                    <stop offset="0.5496" stopColor="#88DAEE" />
                    <stop offset="0.6761" stopColor="#83CFE1" />
                    <stop offset="0.7817" stopColor="#7DBECF" />
                    <stop offset="0.8742" stopColor="#75A8B8" />
                    <stop offset="0.9562" stopColor="#6B8E9B" />
                    <stop offset="1" stopColor="#647D89" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </Link>
          <ul className="flex items-center justify-center	space-x-[16px] mb-[15px]">
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
          <p className="text-gradient text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px]  mb-[4px] lg:mb-[15px] font-semibold">
            A new native blockchain. Powered by users.
          </p>

          <div className="text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px] text-center text-zinc-500">
            Copyright © 2022 Vilik All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
