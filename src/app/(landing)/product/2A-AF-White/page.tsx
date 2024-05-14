"use client";
import { Avatar, Input, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  CheckboxGroup,
  Divider,
} from "@nextui-org/react";
import { Inter } from "next/font/google";
// import { CustomCheckbox } from "@/app/components/customCheckbox.tsx/customCheckbox";
import { CustomCheckbox } from "@/components/ui/components/customCheckbox.tsx/customCheckbox";
import { AddCart } from "@/components/ui/components/addCart/addCart";
import { NavbarHeader } from "@/components/ui/components/navbar/navbar";
import { useState } from "react";
import { Gallery } from "@/components/ui/components/gallery/gallery";
import Breadcrumb from "../../_components/common/Breadcrumb";
import CustomSwiper from "../../_components/common/CustomeSwiper";
import { Description } from "@radix-ui/react-dialog";
const inter = Inter({ subsets: ["latin"] });
const interProducts = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function One() {
  const [selected, setSelected] = useState(["s"]);
  const [quantity, setQuantity] = useState(1);
  const [selectedStars, setSelectedStars] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  

  const findProduct = () => {
    if (selected[0] === "m") {
      return {
        name: "2A AF White M",
        quantity: quantity,
        size: "M",
        priceId: "price_1OolfIGkWb1Ap7UJi10tbETx",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "l") {
      return {
        name: "2A AF White L",
        quantity: quantity,
        size: "L",
        priceId: "price_1OolgHGkWb1Ap7UJmRNUrlWt",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "xl") {
      return {
        name: "2A AF White XL",
        quantity: quantity,
        size: "XL",
        priceId: "price_1Oolh4GkWb1Ap7UJauIu8AGE",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "2xl") {
      return {
        name: "2A AF White 2XL",
        quantity: quantity,
        size: "2XL",
        priceId: "price_1OolhkGkWb1Ap7UJ1hq8PKfW",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "3xl") {
      return {
        name: "2A AF White 3XL",
        quantity: quantity,
        size: "3XL",
        priceId: "price_1OoliIGkWb1Ap7UJObUSEy0V",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "4xl") {
      return {
        name: "2A AF White 4XL",
        quantity: quantity,
        size: "4XL",
        priceId: "price_1OolipGkWb1Ap7UJGLtCkHF6",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "5xl") {
      return {
        name: "2A AF White 5XL",
        quantity: quantity,
        size: "5XL",
        priceId: "price_1OoljKGkWb1Ap7UJVJrjm6fU",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    return {
      name: "2A AF White S",
      quantity: quantity,
      size: "S",
      priceId: "price_1OoljtGkWb1Ap7UJKGzI8MpW",
      url: "/2A/2AAfWhite.jpg",
    };
  };
  const data = ["/2A/2AAfWhite.jpg", "/2A/2AAfWhiteB.jpg"];

  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/stores", label: "Store" },
    { label: "2A AF White" }, // This item does not have a link
  ];
  const images = [
    "/2A/2AAfWhite.jpg",
    "/2A/2AAfWhite.jpg",
    "/2A/2AAfWhite.jpg",
    "/2A/2AAfWhite.jpg",
    // Add more image URLs as needed
  ];

  const handleClick = (index) => {
    const newSelectedStars: any = [...Array(index + 1).keys()];
    setSelectedStars(newSelectedStars);
    console.log(`Selected stars:`, newSelectedStars);
  };

  const sizeOptions = ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-4 pl-20">
            <CustomSwiper images={images} />
          </div>
          <div className="w-2/3 p-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, index: any) => (
                <svg
                  key={index}
                  className={`h-4 w-4 ${selectedStars.includes(index) ? "text-yellow-300" : "text-gray-300"} ms-1 cursor-pointer`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                  onClick={() => handleClick(index)}
                  style={{ pointerEvents: "auto" }}
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}{" "}
              &nbsp; &nbsp;
              <p className="text-xl  text-gray-400">Lorem ipsum dolor sit amet</p>
            </div>
            <p className="py-4 text-5xl font-bold">2A-AF-White</p>
            <p className="border-b py-2 text-2xl font-semibold text-[#636363]">$24.5</p>

            <div className=" border-b py-5">
              <p className="text-xl font-bold">
                SIZE : <span className="font-normal text-gray-400">{selectedSize}</span>
              </p>

              <div className="inline-flex gap-3  rounded-md py-4" role="group">
                {sizeOptions.map((size, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`h-10 w-10 rounded-full border text-sm font-medium  ${
                      selectedSize === size ? "border border-black text-black" : "text-gray-400"
                    }`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className=" border-b py-5">
              <p className="text-xl font-bold">QUANTITY</p>
              <div>
               
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-8 border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 md:space-x-6 lg:flex-row">
        <div className="m-6 flex flex-col md:flex-row md:space-x-2 md:space-y-0">
          <button
            type="button"
            className="mb-2 border-gray-200 bg-[#F5F5F5] px-5 py-2.5 text-sm font-medium text-[#121212] hover:bg-[#121212] hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:mb-0 lg:h-[54px] lg:w-[290px]"
          >
            Description
          </button>
          <button
            type="button"
            className="mb-2 border-gray-200 bg-[#F5F5F5] px-5 py-2.5 text-sm font-medium text-[#121212] hover:bg-[#121212] hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:mb-0 lg:h-[54px] lg:w-[290px]"
          >
            Size Charts
          </button>
          <button
            type="button"
            className="mb-2 border-gray-200 bg-[#F5F5F5] px-5 py-2.5 text-sm font-medium text-[#121212] hover:bg-[#121212] hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:mb-0 lg:h-[54px] lg:w-[290px]"
          >
            Shipping Policy
          </button>
          <button
            type="button"
            className="mb-2 border-gray-200 bg-[#F5F5F5] px-5 py-2.5 text-sm font-medium text-[#121212] hover:bg-[#121212] hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:mb-0 lg:h-[54px] lg:w-[290px]"
          >
            Return Policy
          </button>
        </div>
        <p className="mb-4 mt-4 text-sm font-normal leading-normal text-gray-700 dark:text-gray-400 md:mb-4 md:mt-0 md:text-base lg:text-lg xl:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tincidunt augue, at
          porta sapien. Suspendisse ac finibus tellus, non dapibus nibh. Nulla aliquam, odio
          ultricies aliquet pretium, lectus velit lacinia diam, dignissim egestas tortor nisi
          sagittis nunc. Sed vehicula neque tortor, eget finibus arcu molestie nec. Sed rutrum nisi
          porta turpis vehicula, facilisis finibus sapien tincidunt. Pellentesque sollicitudin purus
          quis dolor finibus congue.
        </p>
        <p className="mb-4 mt-4 text-sm font-normal leading-normal text-gray-700 dark:text-gray-400 md:mb-4 md:mt-0 md:text-base lg:text-lg xl:text-lg">
          In hac habitasse platea dictumst. Pellentesque volutpat enim nec nibh vulputate lacinia.
          Donec tempor, sem id placerat faucibus, sapien urna convallis leo, nec bibendum sapien
          diam mattis nulla. Mauris auctor velit id dui lobortis rhoncus. Praesent eget mattis
          neque. Sed sollicitudin porttitor nisl. Nullam at nunc vulputate, sollicitudin ipsum sit
          amet, venenatis sapien. Maecenas imperdiet sem ut ante varius, a aliquet mauris tristique.
        </p>
        <p className="mb-4 mt-4 text-sm font-normal leading-normal text-gray-700 dark:text-gray-400 md:mb-4 md:mt-0 md:text-base lg:text-lg xl:text-lg">
          Mauris at elementum elit, eget feugiat elit. Pellentesque vel porta velit, quis tristique
          justo. In lobortis vehicula odio, non pretium felis. Donec tempus justo rhoncus augue
          malesuada, et aliquet nisi aliquet. Proin vulputate odio tortor, et pulvinar erat interdum
          quis. Morbi finibus fringilla quam vel finibus. Fusce vel blandit lectus, et tincidunt
          sapien. Sed facilisis erat in orci volutpat sodales.
        </p>
      </div>
      <section className="relative py-24">
        <div className="lg-6 mx-auto w-full max-w-7xl px-4 md:px-5">
          <div className="mb-11 flex items-center justify-center md:space-x-2">
            <div className="flex-grow border-t border-black"></div>
            <h2 className="font-manrope mb-2 text-center text-6xl font-bold text-black">
              Customer Reviews
            </h2>
            <div className="flex-grow border-t border-black"></div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="mx-auto grid max-w-sm grid-cols-12 sm:max-w-full">
              <div className="col-span-12 lg:col-span-10 ">
                <div className="gap-28 sm:flex">
                  <div className="col-span-12 flex flex-row justify-center max-lg:hidden max-lg:pt-6 lg:col-span-2 lg:flex-col lg:items-center ">
                    <div className="mb-5 flex w-full items-center gap-2 lg:justify-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="flex  whitespace-nowrap text-lg font-medium leading-8 text-gray-400 lg:text-center">
                      <button
                        className="mb-2 border-gray-200 bg-[#121212] px-5 py-2 text-sm font-medium text-white  hover:bg-[#F5F5F5]
                          hover:text-[#121212] focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 
                          dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:mb-0 "
                      >
                        Verified buyer
                      </button>
                      <p className="mb-2 pl-2 text-lg font-medium leading-8 text-gray-900">
                        Robert{" "}
                      </p>
                    </p>
                  </div>

                  <div className="text md:ml-12">
                    <p className="mb-2 text-lg font-medium leading-8 text-gray-900">
                      Robert Karmazov
                    </p>

                    <p className="mb-4 text-base font-normal leading-7 text-gray-400 lg:pr-8">
                      One of the standout features of Pagedone is its intuitive and user-friendly
                      interface. Navigating through the system feels natural, and the layout makes
                      it easy to locate and utilize various design elements. This is particularly
                      beneficial for designers looking to streamline their workflow.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-b border-gray-100 pb-8"></div>

            <div className="flex items-center justify-center gap-2">
              <button
                className="flex select-none items-center gap-2 rounded-full px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  ></path>
                </svg>
              </button>
              <button
                className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  1
                </span>
              </button>
              <button
                className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  2
                </span>
              </button>
              <button
                className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  3
                </span>
              </button>
              <button
                className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  4
                </span>
              </button>
              <button
                className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  5
                </span>
              </button>
              <button
                className="flex  select-none items-center gap-2 rounded-full px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4"></div>
      </section>
    </>
  );
}


const review = [
  {
    name:'xyz',
    title : 'fgfdg',
    description : 'dsfsdfd sdfsdf adfdfsdsdfs dsfsgsdf ',
    rating : '4'
  }
]