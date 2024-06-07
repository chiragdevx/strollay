"use client";
import React, { useEffect } from "react";
import Button from "../Button";
import { v4 as uuidv4 } from "uuid";
// import { generateSHA512Hash } from "@/utils";

type Props = {};

const CTA = (props: Props) => {
  // useEffect(() => {
  //   var snapmint = document.createElement("script");
  //   snapmint.type = "text/javascript";
  //   snapmint.async = true;
  //   snapmint.src =
  //     ("https:" == document.location.protocol ? "https://" : "https://") +
  //     "assets.snapmint.com/assets/merchant/1413/snapmint_emi.js";
  //   var s = document.getElementsByTagName("script")[0] as any;
  //   s.parentNode.insertBefore(snapmint, s);
  // }, []);

  // const snapmint = async () => {
  //   try {
  //     const orderId = uuidv4();
  //     const merchant_key = "Q99btdqX";
  //     const order_value = 40000.0;
  //     const full_name = "John Doe";
  //     const email = "parth@devxconsultancy.com";
  //     const merchant_token = "-wj9TgxY";
  //     const inputString =
  //       merchant_key +
  //       orderId +
  //       order_value +
  //       full_name +
  //       email +
  //       merchant_token;
  //     const checkSumHash = generateSHA512Hash(inputString);
  //     const url = "https://sandboxapi.snapmint.com/v3/public/online_checkout";
  //     const data = {
  //       token: "-wj9TgxY",
  //       merchant_confirmation_url: "https://yourwebsite.com/confirmation",
  //       merchant_failure_url: "https://yourwebsite.com/failure",
  //       checksum_hash: checkSumHash,
  //       order_id: orderId,
  //       order_value: `${order_value}`,
  //       first_name: "John",
  //       last_name: "Doe",
  //       full_name: full_name,
  //       email: "john.doe@example.com",
  //       mobile: "1234567890",
  //       shipping_address_line1: "123 My Street",
  //       shipping_zip: "12345",
  //       billing_address_line1: "123 My Street",
  //       billing_zip: "12345",
  //       products: JSON.stringify([
  //         {
  //           sku: "SKU123",
  //           name: "Product 1",
  //           quantity: "1",
  //           unit_price: "50.00",
  //         },
  //         {
  //           sku: "SKU456",
  //           name: "Product 2",
  //           quantity: "2",
  //           unit_price: "25.00",
  //         },
  //       ]),
  //     };
  //     try {
  //       const response: any = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //         body: new URLSearchParams(data),
  //       });

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       const responseJson = await response.json();
  //       console.log(responseJson);
  //     } catch (error) {
  //       console.error("There was an error!", error);
  //     }
  //   } catch (error) {}
  // };
  return (
    <div className="mt-5 md:mt-10 flex justify-center items-center mb-12">
      <div>
        <h4 className="text-center font-semibold px-4">NEWSLETTER</h4>
        <div className="text-center text-xs text-[14px] pb-[20px]">
          <strong className="text-xl font-thin">
            Sign up for our newsletter and get 15% off your next order.
          </strong>
        </div>
        <div className="mx-auto w-[80%] md:w-[100%] text-center flex justify-around border-[1px] border-black">
          {/* <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-3 py-2"
          />
          <div className="p-[2px] border-black border-l-[0.5px] px-1 py-2 bg-black">
            <svg
              height={24}
              width={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer "
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                  fill="#FFFFFF"
                ></path>{" "}
              </g>
            </svg>
          </div> */}
          <form action="#" className="input-wrapper input-wrapper-inline">
            <input
              type="email"
              className="form-control news-letter-input w100"
              name="email"
              id="email"
              placeholder="Email address here..."
              required
            />
            <button
              className="btn btn-primary  btn-rounded btn-md"
              type="submit"
            >
              subscribe<i className="d-icon-arrow-right"></i>
            </button>
          </form>
        </div>
        {/* <div className="snap_emi_txt"></div>
        <span
          className="snapmint_lowest_emi_value"
          style={{ display: "none" }}
          data-snapmint-price="30000"
          data-snapmint-merchant_id="2545"
          data-snapmint-
          page="eligibility"
        ></span>
        <div>
          <Button onClick={() => snapmint()}>Snapmint</Button>
        </div> */}
      </div>
    </div>
  );
};

export default CTA;
