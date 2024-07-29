"use client";
import { useState } from "react";
import Link from "next/link";


function Header() {
  // Mobile Menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="sticky top-0 bg-white border-b z-999">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label=""
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Prelockon</span>
              <svg
                width="132"
                height="33"
                viewBox="0 0 132 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7949 8.51348L9.14688 0L1.64282 11.3113L9.14688 22.6225L10.4818 20.6104L8.62569 17.8126L14.7949 8.51348Z"
                  fill="#2510AB"
                />
                <path
                  d="M23.634 17.8125L16.1298 6.50122L14.795 8.51336L16.6512 11.3111L10.4819 20.6103L16.1298 29.1236L23.634 17.8125Z"
                  fill="#2510AB"
                />
                <path
                  d="M14.1521 11.5519L8.50406 3.03857L1 14.3498L8.50406 25.6611L9.83902 23.649L7.98287 20.851L14.1521 11.5519Z"
                  stroke="#1C1D21"
                  stroke-width="0.437359"
                  stroke-miterlimit="10"
                />
                <path
                  d="M22.9912 20.8511L15.487 9.53979L14.1522 11.5519L16.0084 14.3499L9.83911 23.649L15.487 32.1623L22.9912 20.8511Z"
                  stroke="#1C1D21"
                  stroke-width="0.437359"
                  stroke-miterlimit="10"
                />
                <path
                  d="M26.6895 10.0104H32.202C34.8872 10.0104 36.694 11.7252 36.694 14.4104C36.694 17.0704 34.7784 18.7853 31.9594 18.7853H30.2363V22.0811H26.6895V10.0104ZM30.2363 12.6789V16.167H31.2317C32.4111 16.167 33.1138 15.5731 33.1138 14.4188C33.1138 13.2728 32.4111 12.6789 31.2568 12.6789H30.2363ZM41.4955 12.6287V15.6902H42.9594C43.9548 15.6902 44.5654 15.0796 44.5654 14.1678C44.5654 13.2728 43.9213 12.6287 42.9677 12.6287H41.4955ZM41.4955 18.0324V22.0811H37.9487V10.0104H43.3107C46.5312 10.0104 48.1874 11.5245 48.1874 14.1093C48.1874 15.5313 47.5015 16.9032 46.2384 17.5054L48.5304 22.0811H44.5654L42.6582 18.0324H41.4955ZM58.1417 19.2621V22.0811H49.6262V10.0104H58.1417V12.8294H53.173V14.7785H57.8322V17.3214H53.173V19.2621H58.1417ZM68.0793 19.2621V22.0811H59.798V10.0104H63.3447V19.2621H68.0793ZM74.7043 9.80131C78.4351 9.80131 80.7857 12.1937 80.7857 16.0499C80.7857 19.9062 78.4351 22.2902 74.7043 22.2902C70.9652 22.2902 68.623 19.9062 68.623 16.0499C68.623 12.1937 70.9736 9.80131 74.7043 9.80131ZM74.7043 12.6287C73.2237 12.6287 72.2367 13.9587 72.2367 16.0499C72.2367 18.1328 73.2154 19.4628 74.7043 19.4628C76.1933 19.4628 77.172 18.1328 77.172 16.0499C77.172 13.9587 76.1849 12.6287 74.7043 12.6287ZM87.8624 22.2902C84.1651 22.2902 81.8731 20.0233 81.8731 16.0416C81.8731 12.0598 84.1735 9.80131 87.8624 9.80131C91.0494 9.80131 93.4586 11.8758 93.4669 14.8705H90.0707C89.9871 13.4986 89.0921 12.5868 87.8624 12.5868C86.4069 12.5868 85.4868 13.875 85.4868 16.0332C85.4868 18.2164 86.3985 19.5046 87.8708 19.5046C89.0921 19.5046 89.9787 18.6096 90.0875 17.2127H93.4836C93.4669 20.224 91.1164 22.2902 87.8624 22.2902ZM98.3771 22.0811H94.8304V10.0104H98.3771V15.1298H98.4441L102.175 10.0104H105.897L101.924 15.3724L106.081 22.0811H101.957L99.3224 17.6476L98.3771 18.9191V22.0811ZM112.213 9.80131C115.944 9.80131 118.294 12.1937 118.294 16.0499C118.294 19.9062 115.944 22.2902 112.213 22.2902C108.474 22.2902 106.131 19.9062 106.131 16.0499C106.131 12.1937 108.482 9.80131 112.213 9.80131ZM112.213 12.6287C110.732 12.6287 109.745 13.9587 109.745 16.0499C109.745 18.1328 110.724 19.4628 112.213 19.4628C113.702 19.4628 114.68 18.1328 114.68 16.0499C114.68 13.9587 113.693 12.6287 112.213 12.6287ZM123.02 22.0811H119.674V10.0104H122.426L127.086 16.2674H127.153V10.0104H130.499V22.0811H127.78L123.087 15.7237H123.02V22.0811Z"
                  fill="#1C1D21"
                />
              </svg>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10 lg:pr-8">
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-x-1 text-base font-normal leading-6 text-gray-900"
                aria-expanded={isDropdownOpen ? "true" : "false"}
                onClick={toggleDropdown}
              >
                Roadmap
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link href="">
                      <a className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
                        Roadmap
                      </a>
                    </Link>
                    <Link href="">
                      <a className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
                        Discord
                      </a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              href=""
              className="text-base font-normal leading-6 text-gray-900 gap-x-1"
            >
              <svg
                className="inline-block mr-1.5"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_821_3370)">
                  <path
                    d="M10 20.5C15.5228 20.5 20 16.0228 20 10.5C20 4.97715 15.5228 0.5 10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5Z"
                    fill="#039BE5"
                  />
                  <path
                    d="M4.57556 10.2833L14.2172 6.56584C14.6647 6.40417 15.0556 6.67501 14.9106 7.35167L14.9114 7.35084L13.2697 15.085C13.1481 15.6333 12.8222 15.7667 12.3664 15.5083L9.8664 13.6658L8.66056 14.8275C8.52723 14.9608 8.41473 15.0733 8.1564 15.0733L8.3339 12.5292L12.9672 8.34334C13.1689 8.16584 12.9222 8.06584 12.6564 8.24251L6.93056 11.8475L4.46223 11.0775C3.9264 10.9075 3.91473 10.5417 4.57556 10.2833Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_821_3370">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Join Telegram
              <svg
                className="inline-block ml-2"
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16667 0.5C8.91667 0.5 8.75 0.583333 8.58333 0.75L0.25 9.08333C-0.0833333 9.41667 -0.0833333 9.91667 0.25 10.25C0.583333 10.5833 1.08333 10.5833 1.41667 10.25L9.75 1.91667C10.0833 1.58333 10.0833 1.08333 9.75 0.75C9.58333 0.583333 9.41667 0.5 9.16667 0.5Z"
                  fill="black"
                />
                <path
                  d="M9.16634 0.500081H1.66634C1.16634 0.500081 0.833008 0.833414 0.833008 1.33341C0.833008 1.83341 1.16634 2.16675 1.66634 2.16675H8.33301V8.83341C8.33301 9.33341 8.66634 9.66675 9.16634 9.66675C9.66634 9.66675 9.99967 9.33341 9.99967 8.83341V1.33341C9.99967 0.833414 9.66634 0.500081 9.16634 0.500081Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
          <div className="hidden lg:flex lg:justify-end">
            <button
              type="button"
              className="bg-blue-100 text-white font-normal py-3 px-8 shadow-button"
            >
              Launch Your Preorder
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Prelockon</span>
                  <svg
                    width="132"
                    height="33"
                    viewBox="0 0 132 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7949 8.51348L9.14688 0L1.64282 11.3113L9.14688 22.6225L10.4818 20.6104L8.62569 17.8126L14.7949 8.51348Z"
                      fill="#2510AB"
                    />
                    <path
                      d="M23.634 17.8125L16.1298 6.50122L14.795 8.51336L16.6512 11.3111L10.4819 20.6103L16.1298 29.1236L23.634 17.8125Z"
                      fill="#2510AB"
                    />
                    <path
                      d="M14.1521 11.5519L8.50406 3.03857L1 14.3498L8.50406 25.6611L9.83902 23.649L7.98287 20.851L14.1521 11.5519Z"
                      stroke="#1C1D21"
                      stroke-width="0.437359"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M22.9912 20.8511L15.487 9.53979L14.1522 11.5519L16.0084 14.3499L9.83911 23.649L15.487 32.1623L22.9912 20.8511Z"
                      stroke="#1C1D21"
                      stroke-width="0.437359"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M26.6895 10.0104H32.202C34.8872 10.0104 36.694 11.7252 36.694 14.4104C36.694 17.0704 34.7784 18.7853 31.9594 18.7853H30.2363V22.0811H26.6895V10.0104ZM30.2363 12.6789V16.167H31.2317C32.4111 16.167 33.1138 15.5731 33.1138 14.4188C33.1138 13.2728 32.4111 12.6789 31.2568 12.6789H30.2363ZM41.4955 12.6287V15.6902H42.9594C43.9548 15.6902 44.5654 15.0796 44.5654 14.1678C44.5654 13.2728 43.9213 12.6287 42.9677 12.6287H41.4955ZM41.4955 18.0324V22.0811H37.9487V10.0104H43.3107C46.5312 10.0104 48.1874 11.5245 48.1874 14.1093C48.1874 15.5313 47.5015 16.9032 46.2384 17.5054L48.5304 22.0811H44.5654L42.6582 18.0324H41.4955ZM58.1417 19.2621V22.0811H49.6262V10.0104H58.1417V12.8294H53.173V14.7785H57.8322V17.3214H53.173V19.2621H58.1417ZM68.0793 19.2621V22.0811H59.798V10.0104H63.3447V19.2621H68.0793ZM74.7043 9.80131C78.4351 9.80131 80.7857 12.1937 80.7857 16.0499C80.7857 19.9062 78.4351 22.2902 74.7043 22.2902C70.9652 22.2902 68.623 19.9062 68.623 16.0499C68.623 12.1937 70.9736 9.80131 74.7043 9.80131ZM74.7043 12.6287C73.2237 12.6287 72.2367 13.9587 72.2367 16.0499C72.2367 18.1328 73.2154 19.4628 74.7043 19.4628C76.1933 19.4628 77.172 18.1328 77.172 16.0499C77.172 13.9587 76.1849 12.6287 74.7043 12.6287ZM87.8624 22.2902C84.1651 22.2902 81.8731 20.0233 81.8731 16.0416C81.8731 12.0598 84.1735 9.80131 87.8624 9.80131C91.0494 9.80131 93.4586 11.8758 93.4669 14.8705H90.0707C89.9871 13.4986 89.0921 12.5868 87.8624 12.5868C86.4069 12.5868 85.4868 13.875 85.4868 16.0332C85.4868 18.2164 86.3985 19.5046 87.8708 19.5046C89.0921 19.5046 89.9787 18.6096 90.0875 17.2127H93.4836C93.4669 20.224 91.1164 22.2902 87.8624 22.2902ZM98.3771 22.0811H94.8304V10.0104H98.3771V15.1298H98.4441L102.175 10.0104H105.897L101.924 15.3724L106.081 22.0811H101.957L99.3224 17.6476L98.3771 18.9191V22.0811ZM112.213 9.80131C115.944 9.80131 118.294 12.1937 118.294 16.0499C118.294 19.9062 115.944 22.2902 112.213 22.2902C108.474 22.2902 106.131 19.9062 106.131 16.0499C106.131 12.1937 108.482 9.80131 112.213 9.80131ZM112.213 12.6287C110.732 12.6287 109.745 13.9587 109.745 16.0499C109.745 18.1328 110.724 19.4628 112.213 19.4628C113.702 19.4628 114.68 18.1328 114.68 16.0499C114.68 13.9587 113.693 12.6287 112.213 12.6287ZM123.02 22.0811H119.674V10.0104H122.426L127.086 16.2674H127.153V10.0104H130.499V22.0811H127.78L123.087 15.7237H123.02V22.0811Z"
                      fill="#1C1D21"
                    />
                  </svg>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-normal leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      Roadmap
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-normal leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      Join Telegram
                    </a>
                  </div>
                  <div className="py-6">
                    <button
                      type="button"
                      className="bg-blue-100 hover:bg-blue-200 text-white font-normal py-3 px-8 shadow-button"
                    >
                      Launch Your Preorder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
export default Header;
