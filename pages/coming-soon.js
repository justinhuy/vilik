import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <div className="flex justify-center items-center text-[56px] leading-[67px]">
        <div className="relative">
          <div className="w-[45px] md:w-[80px] h-[67px] font-semibold relative overflow-hidden">
            {days}
          </div>
          <div className="bottom-[-4px] text-[14px] md:text-[16px] leading-[21px] md:leading-[19px] font-semibold absolute w-full bottom-[-18px] left-0">
            Days
          </div>
        </div>
        <span>:</span>
        <div className="relative">
          <div className="w-[45px] md:w-[80px] h-[67px] font-semibold relative overflow-hidden">
            {hours}
          </div>
          <div className="bottom-[-4px] text-[14px] md:text-[16px] leading-[21px] md:leading-[19px] font-semibold absolute w-full bottom-[-18px] left-0">
            Hours
          </div>
        </div>
        <span>:</span>
        <div className="relative">
          <div className="w-[45px] md:w-[80px] h-[67px] font-semibold relative overflow-hidden">
            {minutes}
          </div>
          <div className="bottom-[-4px] text-[14px] md:text-[16px] leading-[21px] md:leading-[19px] font-semibold absolute w-full bottom-[-18px] left-0">
            Mins
          </div>
        </div>
        <span>:</span>
        <div className="relative">
          <div className="w-[45px] md:w-[80px] h-[67px] font-semibold relative overflow-hidden">
            {seconds}
          </div>
          <div className="bottom-[-4px] text-[14px] md:text-[16px] leading-[21px] md:leading-[19px] font-semibold absolute w-full bottom-[-18px] left-0">
            Secs
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center text-[32px] leading-[38px] md:text-[56px] md:leading-[67px]">
        <div className="relative">
          <div className="w-[45px] md:w-[80px] h-[67px] font-semibold relative overflow-hidden">
            {days !== 0 ? (
              <ul
                className="w-[45px] md:w-[80px] font-semibold absolute left-0 transition-all duration-500	"
                style={{ top: `-${(days - 1) * 67}px` }}
              >
                <li className="flex items-center justify-center h-[67px]">
                  01
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  02
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  03
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  04
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  05
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  06
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  07
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  08
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  09
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  10
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  11
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  12
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  13
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  14
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  15
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  16
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  17
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  18
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  19
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  20
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  21
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  22
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  23
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  24
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  25
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  26
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  27
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  28
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  29
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  30
                </li>
                <li className="flex items-center justify-center h-[67px]">
                  31
                </li>
              </ul>
            ) : (
              "00"
            )}
          </div>
          <div className="bottom-[-4px] text-[14px] md:text-[16px] leading-[21px] md:leading-[19px] font-semibold absolute w-full bottom-[-18px] left-0">
            Days
          </div>
        </div>

        <span>:</span>

        <div className="relative">
          <div className="w-[45px] md:w-[80px] h-[67px] font-semibold relative overflow-hidden">
            <ul
              className="w-[45px] md:w-[80px] font-semibold absolute left-0 transition-all duration-500	"
              style={{ top: `-${(hours - 1) * 67}px` }}
            >
              <li className="flex items-center justify-center h-[67px]">01</li>
              <li className="flex items-center justify-center h-[67px]">02</li>
              <li className="flex items-center justify-center h-[67px]">03</li>
              <li className="flex items-center justify-center h-[67px]">04</li>
              <li className="flex items-center justify-center h-[67px]">05</li>
              <li className="flex items-center justify-center h-[67px]">06</li>
              <li className="flex items-center justify-center h-[67px]">07</li>
              <li className="flex items-center justify-center h-[67px]">08</li>
              <li className="flex items-center justify-center h-[67px]">09</li>
              <li className="flex items-center justify-center h-[67px]">10</li>
              <li className="flex items-center justify-center h-[67px]">11</li>
              <li className="flex items-center justify-center h-[67px]">12</li>
              <li className="flex items-center justify-center h-[67px]">13</li>
              <li className="flex items-center justify-center h-[67px]">14</li>
              <li className="flex items-center justify-center h-[67px]">15</li>
              <li className="flex items-center justify-center h-[67px]">16</li>
              <li className="flex items-center justify-center h-[67px]">17</li>
              <li className="flex items-center justify-center h-[67px]">18</li>
              <li className="flex items-center justify-center h-[67px]">19</li>
              <li className="flex items-center justify-center h-[67px]">20</li>
              <li className="flex items-center justify-center h-[67px]">21</li>
              <li className="flex items-center justify-center h-[67px]">22</li>
              <li className="flex items-center justify-center h-[67px]">23</li>
              <li className="flex items-center justify-center h-[67px]">24</li>
            </ul>
          </div>
          <div className="bottom-[-4px] text-[14px] md:text-[16px] leading-[21px] md:leading-[19px] font-semibold absolute w-full bottom-[-18px] left-0">
            Hours
          </div>
        </div>

        <span>:</span>

        <div className="relative">
          <div className="w-[45px] md:w-[80px] h-[67px] font-semibold relative overflow-hidden">
            <ul
              className="w-[45px] md:w-[80px] font-semibold absolute left-0 transition-all duration-500	"
              style={{ top: `-${(minutes - 1) * 67}px` }}
            >
              <li className="flex items-center justify-center h-[67px]">01</li>
              <li className="flex items-center justify-center h-[67px]">02</li>
              <li className="flex items-center justify-center h-[67px]">03</li>
              <li className="flex items-center justify-center h-[67px]">04</li>
              <li className="flex items-center justify-center h-[67px]">05</li>
              <li className="flex items-center justify-center h-[67px]">06</li>
              <li className="flex items-center justify-center h-[67px]">07</li>
              <li className="flex items-center justify-center h-[67px]">08</li>
              <li className="flex items-center justify-center h-[67px]">09</li>
              <li className="flex items-center justify-center h-[67px]">10</li>
              <li className="flex items-center justify-center h-[67px]">11</li>
              <li className="flex items-center justify-center h-[67px]">12</li>
              <li className="flex items-center justify-center h-[67px]">13</li>
              <li className="flex items-center justify-center h-[67px]">14</li>
              <li className="flex items-center justify-center h-[67px]">15</li>
              <li className="flex items-center justify-center h-[67px]">16</li>
              <li className="flex items-center justify-center h-[67px]">17</li>
              <li className="flex items-center justify-center h-[67px]">18</li>
              <li className="flex items-center justify-center h-[67px]">19</li>
              <li className="flex items-center justify-center h-[67px]">20</li>
              <li className="flex items-center justify-center h-[67px]">21</li>
              <li className="flex items-center justify-center h-[67px]">22</li>
              <li className="flex items-center justify-center h-[67px]">23</li>
              <li className="flex items-center justify-center h-[67px]">24</li>
              <li className="flex items-center justify-center h-[67px]">25</li>
              <li className="flex items-center justify-center h-[67px]">26</li>
              <li className="flex items-center justify-center h-[67px]">27</li>
              <li className="flex items-center justify-center h-[67px]">28</li>
              <li className="flex items-center justify-center h-[67px]">29</li>
              <li className="flex items-center justify-center h-[67px]">30</li>
              <li className="flex items-center justify-center h-[67px]">31</li>
              <li className="flex items-center justify-center h-[67px]">32</li>
              <li className="flex items-center justify-center h-[67px]">33</li>
              <li className="flex items-center justify-center h-[67px]">34</li>
              <li className="flex items-center justify-center h-[67px]">35</li>
              <li className="flex items-center justify-center h-[67px]">36</li>
              <li className="flex items-center justify-center h-[67px]">37</li>
              <li className="flex items-center justify-center h-[67px]">38</li>
              <li className="flex items-center justify-center h-[67px]">39</li>
              <li className="flex items-center justify-center h-[67px]">40</li>
              <li className="flex items-center justify-center h-[67px]">41</li>
              <li className="flex items-center justify-center h-[67px]">42</li>
              <li className="flex items-center justify-center h-[67px]">43</li>
              <li className="flex items-center justify-center h-[67px]">44</li>
              <li className="flex items-center justify-center h-[67px]">45</li>
              <li className="flex items-center justify-center h-[67px]">46</li>
              <li className="flex items-center justify-center h-[67px]">47</li>
              <li className="flex items-center justify-center h-[67px]">48</li>
              <li className="flex items-center justify-center h-[67px]">49</li>
              <li className="flex items-center justify-center h-[67px]">50</li>
              <li className="flex items-center justify-center h-[67px]">51</li>
              <li className="flex items-center justify-center h-[67px]">52</li>
              <li className="flex items-center justify-center h-[67px]">53</li>
              <li className="flex items-center justify-center h-[67px]">54</li>
              <li className="flex items-center justify-center h-[67px]">55</li>
              <li className="flex items-center justify-center h-[67px]">56</li>
              <li className="flex items-center justify-center h-[67px]">57</li>
              <li className="flex items-center justify-center h-[67px]">58</li>
              <li className="flex items-center justify-center h-[67px]">59</li>
              <li className="flex items-center justify-center h-[67px]">60</li>
            </ul>
          </div>
          <div className="bottom-[-4px] text-[14px] md:text-[16px] leading-[21px] md:leading-[19px] font-semibold absolute w-full bottom-[-18px] left-0">
            Mins
          </div>
        </div>

        <span>:</span>

        <div className="relative">
          <div className="w-[45px] md:w-[80px] h-[67px] font-semibold relative overflow-hidden">
            <ul
              className="w-[45px] md:w-[80px] font-semibold absolute left-0 transition-all duration-500	"
              style={{ top: `-${(seconds - 1) * 67}px` }}
            >
              <li className="flex items-center justify-center h-[67px]">01</li>
              <li className="flex items-center justify-center h-[67px]">02</li>
              <li className="flex items-center justify-center h-[67px]">03</li>
              <li className="flex items-center justify-center h-[67px]">04</li>
              <li className="flex items-center justify-center h-[67px]">05</li>
              <li className="flex items-center justify-center h-[67px]">06</li>
              <li className="flex items-center justify-center h-[67px]">07</li>
              <li className="flex items-center justify-center h-[67px]">08</li>
              <li className="flex items-center justify-center h-[67px]">09</li>
              <li className="flex items-center justify-center h-[67px]">10</li>
              <li className="flex items-center justify-center h-[67px]">11</li>
              <li className="flex items-center justify-center h-[67px]">12</li>
              <li className="flex items-center justify-center h-[67px]">13</li>
              <li className="flex items-center justify-center h-[67px]">14</li>
              <li className="flex items-center justify-center h-[67px]">15</li>
              <li className="flex items-center justify-center h-[67px]">16</li>
              <li className="flex items-center justify-center h-[67px]">17</li>
              <li className="flex items-center justify-center h-[67px]">18</li>
              <li className="flex items-center justify-center h-[67px]">19</li>
              <li className="flex items-center justify-center h-[67px]">20</li>
              <li className="flex items-center justify-center h-[67px]">21</li>
              <li className="flex items-center justify-center h-[67px]">22</li>
              <li className="flex items-center justify-center h-[67px]">23</li>
              <li className="flex items-center justify-center h-[67px]">24</li>
              <li className="flex items-center justify-center h-[67px]">25</li>
              <li className="flex items-center justify-center h-[67px]">26</li>
              <li className="flex items-center justify-center h-[67px]">27</li>
              <li className="flex items-center justify-center h-[67px]">28</li>
              <li className="flex items-center justify-center h-[67px]">29</li>
              <li className="flex items-center justify-center h-[67px]">30</li>
              <li className="flex items-center justify-center h-[67px]">31</li>
              <li className="flex items-center justify-center h-[67px]">32</li>
              <li className="flex items-center justify-center h-[67px]">33</li>
              <li className="flex items-center justify-center h-[67px]">34</li>
              <li className="flex items-center justify-center h-[67px]">35</li>
              <li className="flex items-center justify-center h-[67px]">36</li>
              <li className="flex items-center justify-center h-[67px]">37</li>
              <li className="flex items-center justify-center h-[67px]">38</li>
              <li className="flex items-center justify-center h-[67px]">39</li>
              <li className="flex items-center justify-center h-[67px]">40</li>
              <li className="flex items-center justify-center h-[67px]">41</li>
              <li className="flex items-center justify-center h-[67px]">42</li>
              <li className="flex items-center justify-center h-[67px]">43</li>
              <li className="flex items-center justify-center h-[67px]">44</li>
              <li className="flex items-center justify-center h-[67px]">45</li>
              <li className="flex items-center justify-center h-[67px]">46</li>
              <li className="flex items-center justify-center h-[67px]">47</li>
              <li className="flex items-center justify-center h-[67px]">48</li>
              <li className="flex items-center justify-center h-[67px]">49</li>
              <li className="flex items-center justify-center h-[67px]">50</li>
              <li className="flex items-center justify-center h-[67px]">51</li>
              <li className="flex items-center justify-center h-[67px]">52</li>
              <li className="flex items-center justify-center h-[67px]">53</li>
              <li className="flex items-center justify-center h-[67px]">54</li>
              <li className="flex items-center justify-center h-[67px]">55</li>
              <li className="flex items-center justify-center h-[67px]">56</li>
              <li className="flex items-center justify-center h-[67px]">57</li>
              <li className="flex items-center justify-center h-[67px]">58</li>
              <li className="flex items-center justify-center h-[67px]">59</li>
              <li className="flex items-center justify-center h-[67px]">60</li>
            </ul>
          </div>
          <div className="bottom-[-4px] text-[14px] md:text-[16px] leading-[21px] md:leading-[19px] font-semibold absolute w-full bottom-[-18px] left-0">
            Secs
          </div>
        </div>
      </div>
    );
  }
};

export default function ComingSoon() {
  return (
    <div className="relative flex items-center justify-center min-h-screen text-center">
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Coming Soon" />
      </Head>

      <video
        autoPlay
        muted
        playsInline
        loop
        id="video"
        className="fixed top-0 object-cover w-screen h-screen transform rotate-180 lef-0"
      >
        <source src="/loop.webm" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="fixed inset-0 z-10 bg-gray-900 bg-opacity-30"></div>

      <div className="container relative z-20">
        <Link href="/" passHref={true}>
          <a className="inline-block cursor-pointer mb-[24px]">
            <svg
              width="194"
              height="100"
              viewBox="0 0 194 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[104px] md:w-[194px] h-auto"
            >
              <path
                d="M61.2513 51.8332L84.3046 100L0 51.8332H61.2513ZM84.3046 0L0 48.1668H61.2513L84.3046 0ZM73.1986 50C73.1986 40.6668 78.7516 32.6668 86.6603 28.8333V3.66668L64.4483 50L86.4922 96.3332V71.1667C78.7516 67.3333 73.1986 59.3332 73.1986 50ZM96.7567 30.3333C94.4009 30.3333 92.2133 30.6668 90.194 31.5C88.8479 32 87.6699 32.5 86.4922 33.1667C80.6025 36.6667 76.7323 43 76.7323 50.1667C76.7323 57.3333 80.6025 63.6667 86.4922 67.1667C87.6699 67.8332 88.8479 68.3333 90.194 68.8333C92.2133 69.5 94.4009 70 96.7567 70C99.1126 70 101.3 69.6667 103.319 68.8333C104.666 68.3333 105.843 67.8332 107.021 67.1667C112.911 63.6667 116.781 57.3333 116.781 50.1667C116.781 43 112.911 36.6667 107.021 33.1667C105.843 32.5 104.666 32 103.319 31.5C101.3 30.6668 99.1126 30.3333 96.7567 30.3333ZM132.431 51.8332H193.682L109.377 100L132.431 51.8332ZM193.682 48.1668L109.377 0L132.262 48.1668H193.682ZM120.483 50C120.483 59.3332 114.93 67.3333 107.021 71.1667V96.5L129.233 50L107.021 3.66668V29C114.93 32.6668 120.483 40.6668 120.483 50Z"
                fill="url(#paint0_linear_162_256)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_162_256"
                  x1="232.216"
                  y1="108.75"
                  x2="-65.6259"
                  y2="111.298"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#05DAC5" />
                  <stop offset="0.277086" stopColor="#4354F2" />
                  <stop offset="0.710545" stopColor="#F526FF" />
                  <stop offset="1" stopColor="#FC176F" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </Link>
        <h1 className="text-white text-[24px] leading-[28px] md:text-[48px] md:leading-[58px] font-bold mb-[69px]">
          VILIK
        </h1>
        <h3 className="text-gradient text-[20px] leading-[24px] md:text-[32px] md:leading-[38px] font-semibold mb-[16px]">
          LIVESTREAM X BLOCKCHAIN
        </h3>
        <img
          src="/follow-us.png"
          alt="Follow us on Facebook"
          className="inline-block w-[218px] md:w-[275px] h-auto"
        />

        <p className="text-gradient text-[18px] leading-[22px] md:text-[24px] md:leading-[29px] font-semibold md:mb-[20px] mt-[72px] md:mt-[120px]">
          COMING SOON
        </p>
        <div className="mt-[7px] md:mt-0">
          <Countdown date="05/09/2022" renderer={renderer} />
        </div>
      </div>
    </div>
  );
}
