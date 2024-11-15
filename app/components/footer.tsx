"use client";
import Link from "next/link";
import BackToTopButton from "./backtotopButton";

function Footer() {
  return (
    <>
      <footer className="bg-footer-pattern bg-cover">
        <div className="mx-auto max-w-7xl items-center justify-between pt-12 lg:pt-20 px-4 md:px-4 text-center">
          <svg
            width="100%"
            height="49"
            viewBox="0 0 197 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5879 12.7059L13.1585 0L1.95923 16.8814L13.1585 33.7628L15.1509 30.7598L12.3807 26.5843L21.5879 12.7059Z"
              fill="#2510AB"
            />
            <path
              d="M34.7793 26.5845L23.5798 9.70312L21.5876 12.7061L24.3578 16.8817L15.1506 30.7601L23.5798 43.4657L34.7793 26.5845Z"
              fill="#2510AB"
            />
            <path
              d="M20.6289 17.2406L12.1996 4.53491L1.00024 21.4163L12.1996 38.2977L14.1919 35.2947L11.4217 31.119L20.6289 17.2406Z"
              stroke="white"
              stroke-width="0.652731"
              stroke-miterlimit="10"
            />
            <path
              d="M33.8201 31.1187L22.6205 14.2373L20.6284 17.2403L23.3986 21.4161L14.1914 35.2945L22.6205 48.0001L33.8201 31.1187Z"
              stroke="white"
              stroke-width="0.652731"
              stroke-miterlimit="10"
            />
            <path
              d="M39.3392 15.4853H47.5663C51.5737 15.4853 54.2703 18.0446 54.2703 22.052C54.2703 26.022 51.4114 28.5812 47.2043 28.5812H44.6325V33.5H39.3392V15.4853ZM44.6325 19.4678V24.6737H46.1181C47.8784 24.6737 48.9271 23.7873 48.9271 22.0645C48.9271 20.3542 47.8784 19.4678 46.1556 19.4678H44.6325ZM61.4362 19.3929V23.9621H63.621C65.1066 23.9621 66.0179 23.0507 66.0179 21.69C66.0179 20.3542 65.0566 19.3929 63.6334 19.3929H61.4362ZM61.4362 27.4577V33.5H56.1429V15.4853H64.1453C68.9517 15.4853 71.4236 17.745 71.4236 21.6026C71.4236 23.7249 70.3999 25.7723 68.5147 26.6712L71.9354 33.5H66.0179L63.1715 27.4577H61.4362ZM86.2797 29.2928V33.5H73.5708V15.4853H86.2797V19.6925H78.8641V22.6013H85.8178V26.3965H78.8641V29.2928H86.2797ZM101.111 29.2928V33.5H88.7516V15.4853H94.0449V29.2928H101.111ZM110.998 15.1732C116.566 15.1732 120.074 18.7437 120.074 24.4989C120.074 30.2541 116.566 33.8121 110.998 33.8121C105.418 33.8121 101.922 30.2541 101.922 24.4989C101.922 18.7437 105.43 15.1732 110.998 15.1732ZM110.998 19.3929C108.789 19.3929 107.316 21.3779 107.316 24.4989C107.316 27.6075 108.776 29.5925 110.998 29.5925C113.221 29.5925 114.681 27.6075 114.681 24.4989C114.681 21.3779 113.208 19.3929 110.998 19.3929ZM130.636 33.8121C125.118 33.8121 121.697 30.4289 121.697 24.4864C121.697 18.544 125.13 15.1732 130.636 15.1732C135.392 15.1732 138.988 18.2693 139 22.7386H133.932C133.807 20.6912 132.471 19.3305 130.636 19.3305C128.464 19.3305 127.09 21.253 127.09 24.4739C127.09 27.7323 128.451 29.6549 130.648 29.6549C132.471 29.6549 133.794 28.3191 133.957 26.2342H139.025C139 30.7285 135.492 33.8121 130.636 33.8121ZM146.329 33.5H141.035V15.4853H146.329V23.1257H146.428L151.996 15.4853H157.552L151.622 23.4877L157.827 33.5H151.672L147.739 26.8834L146.329 28.781V33.5ZM166.977 15.1732C172.545 15.1732 176.053 18.7437 176.053 24.4989C176.053 30.2541 172.545 33.8121 166.977 33.8121C161.397 33.8121 157.901 30.2541 157.901 24.4989C157.901 18.7437 161.409 15.1732 166.977 15.1732ZM166.977 19.3929C164.768 19.3929 163.295 21.3779 163.295 24.4989C163.295 27.6075 164.755 29.5925 166.977 29.5925C169.2 29.5925 170.66 27.6075 170.66 24.4989C170.66 21.3779 169.187 19.3929 166.977 19.3929ZM183.107 33.5H178.113V15.4853H182.221L189.174 24.8235H189.274V15.4853H194.268V33.5H190.21L183.207 24.012H183.107V33.5Z"
              fill="white"
            />
          </svg>
          <p className="lg:w-128 mx-auto text-blue-30 pt-6 text-sm">
            We are empowering entrepreneurs, innovators and creators while
            safeguarding consumers. Every preorder in our platform will be
            Transferable,Tradable and Verifiable before it expires.
          </p>
          <ul className="flex flex-col md:flex-row flex-wrap justify-center gap-3 md:gap-12 py-8 text-white">
            <li className="hover:underline">
              <Link href="#">Roadmap</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">
                <svg
                  className="inline-block mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_821_2658)">
                    <path
                      d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                      fill="#039BE5"
                    />
                    <path
                      d="M4.57556 9.78351L14.2172 6.06601C14.6647 5.90434 15.0556 6.17517 14.9106 6.85184L14.9114 6.85101L13.2697 14.5852C13.1481 15.1335 12.8222 15.2668 12.3664 15.0085L9.8664 13.166L8.66056 14.3277C8.52723 14.461 8.41473 14.5735 8.1564 14.5735L8.3339 12.0293L12.9672 7.84351C13.1689 7.66601 12.9222 7.56601 12.6564 7.74267L6.93056 11.3477L4.46223 10.5777C3.9264 10.4077 3.91473 10.0418 4.57556 9.78351Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_821_2658">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Join Telegram
                <svg
                  className="inline-block ml-1"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1667 5C13.9167 5 13.75 5.08333 13.5833 5.25L5.25 13.5833C4.91667 13.9167 4.91667 14.4167 5.25 14.75C5.58333 15.0833 6.08333 15.0833 6.41667 14.75L14.75 6.41667C15.0833 6.08333 15.0833 5.58333 14.75 5.25C14.5833 5.08333 14.4167 5 14.1667 5Z"
                    fill="white"
                  />
                  <path
                    d="M14.1663 5.00008H6.66634C6.16634 5.00008 5.83301 5.33341 5.83301 5.83341C5.83301 6.33341 6.16634 6.66675 6.66634 6.66675H13.333V13.3334C13.333 13.8334 13.6663 14.1667 14.1663 14.1667C14.6663 14.1667 14.9997 13.8334 14.9997 13.3334V5.83341C14.9997 5.33341 14.6663 5.00008 14.1663 5.00008Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
            <li className="hover:underline">
              <Link href="#">Request Early Access</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>

          <div className="copyright border-t border-blue-25 py-6 text-blue-50 text-sm">
            © 2024, All rights Reserved. PreLockon
          </div>
        </div>
      </footer>

      <BackToTopButton />
    </>
  );
}

export default Footer;
