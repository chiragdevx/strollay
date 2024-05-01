import Image from "next/image";
import React from "react";
import Cards from "../../../public/images/cards.webp";
import Link from "next/link";

type Props = {};

const FooterPrimary = (props: Props) => {
  return (
    <div className="w-full bg-gray-100">
      <div className="w-full space-y-4 flex-col md:w-[80%] flex md:flex-row  justify-around px-8 py-6 md:py-[55px] mx-auto ">
        <div className="mb-5">
          <h4 className="relative md:mb-10">LOCATION</h4>
          <div>
            <ul className="pl-0">
              <li className="mb-4">
                <div className="flex gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      id="house"
                      height={24}
                      width={24}
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="12"
                        d="M151.99414,207.99263v-48.001a8,8,0,0,0-8-8h-32a8,8,0,0,0-8,8v48.001a8,8,0,0,1-7.999,8l-47.99414.00632a8,8,0,0,1-8.001-8v-92.4604a8,8,0,0,1,2.61811-5.91906l79.9945-72.73477a8,8,0,0,1,10.76339-.00036l80.0055,72.73509A8,8,0,0,1,216,115.53887V207.999a8,8,0,0,1-8.001,8l-48.00586-.00632A8,8,0,0,1,151.99414,207.99263Z"
                      ></path>
                    </svg>
                  </span>
                  <div>
                    G S Tech India Private Limited
                    <br />
                    507, Metro Tower, Ring Road,
                    <br />
                    Surat-395002, Gujarat, India.
                    <br />
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 512 512"
                      viewBox="0 0 512 512"
                      id="phone"
                      height={24}
                      width={24}
                    >
                      <path
                        fill="#231f20"
                        d="M340.4,0h-170c-30.3,0-55,24.7-55,55V457c0,30.3,24.7,55,55,55h170c30.3,0,55-24.7,55-55V55
	C395.4,24.7,370.8,0,340.4,0z M234.7,22.6h42.2c4.9,0,8.8,4.5,8.8,10s-3.9,10-8.8,10h-42.2c-4.9,0-8.8-4.5-8.8-10
	S229.8,22.6,234.7,22.6z M194.8,21.1c6.3,0,11.5,5.1,11.5,11.5S201.1,44,194.8,44c-6.3,0-11.5-5.1-11.5-11.5S188.4,21.1,194.8,21.1z
	 M255.8,477.1c-10.2,0-18.4-8.2-18.4-18.4c0-10.2,8.2-18.4,18.4-18.4s18.4,8.2,18.4,18.4C274.2,468.9,266,477.1,255.8,477.1z
	 M363.4,429.5H147.5V66.6h215.9V429.5z"
                      ></path>
                    </svg>
                  </span>
                  <div>WhatsApp @ +91 90 81 81 68 95</div>
                </div>
              </li>
              <li>
                <div className="flex gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      id="mail"
                    >
                      <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M3 1h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2z"></path>
                        <path d="m21 3-10 7L1 3"></path>
                      </g>
                    </svg>
                  </span>
                  <div>sales@strollay.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-5">
          <h4 className="relative md:mb-10">INFORMATION</h4>
          <div>
            <ul className="pl-0">
              <li className="mb-3">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="mb-3">
                <Link href="/">Cancellation & Refund Policy</Link>
              </li>
              <li className="mb-3">
                <Link href="/">Privacy Policy</Link>
              </li>
              <li className="mb-3">
                <Link href="/">Shipping & Delivery</Link>
              </li>
              <li>
                <Link href="/">Terms of Use</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h4 className="relative md:mb-10">FOLLOW AND LIKE US</h4>
            <div className="flex gap-x-3">
              <a
                href="https://www.instagram.com/Strollay"
                className=" justify-center flex items-center
                 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  height={48}
                  width={48}
                  id="instagram"
                >
                  <linearGradient
                    id="a"
                    x1="1.464"
                    x2="14.536"
                    y1="14.536"
                    y2="1.464"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#FFC107"></stop>
                    <stop offset=".507" stopColor="#F44336"></stop>
                    <stop offset=".99" stopColor="#9C27B0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#a)"
                    d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
                  ></path>
                  <linearGradient
                    id="b"
                    x1="5.172"
                    x2="10.828"
                    y1="10.828"
                    y2="5.172"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#FFC107"></stop>
                    <stop offset=".507" stopColor="#F44336"></stop>
                    <stop offset=".99" stopColor="#9C27B0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#b)"
                    d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
                  ></path>
                  <linearGradient
                    id="c"
                    x1="11.923"
                    x2="12.677"
                    y1="4.077"
                    y2="3.323"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#FFC107"></stop>
                    <stop offset=".507" stopColor="#F44336"></stop>
                    <stop offset=".99" stopColor="#9C27B0"></stop>
                  </linearGradient>
                  <circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle>
                </svg>
              </a>
              <a href="https://www.facebook.com/Strollay">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="60"
                  height="60"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-[30px]">
            <h4>WE ACCEPT</h4>
            <div className="mt-2">
              <Image src={Cards} alt="cards" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPrimary;
