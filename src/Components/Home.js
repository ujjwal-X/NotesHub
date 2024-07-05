import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <>
        <div
          id="animation-carousel"
          className="relative w-full  h-full"
          data-carousel="slide"
        >
          <div className="relative h-full overflow-hidden  md:h-96 sm:h-96">
            <div
              className="hidden duration-200 ease-linear bg-purple"
              data-carousel-item
            >
              <img
                src={"c1.jpg"}
                className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div
              className="bg-orange hidden duration-200 ease-linear"
              data-carousel-item
            >
              <img
                src={"c2.jpg"}
                className="absolute block w-full  h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  object-cover;"
                alt="..."
              />
            </div>

            <div
              className="hidden duration-200 ease-linear"
              data-carousel-item="active"
            >
              <img
                src={"c3.jpg"}
                className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  object-cover"
                alt="..."
              />
            </div>

            <div className="hidden duration-200 ease-linear" data-carousel-item>
              <img
                src={"c4.jpg"}
                className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                object-cover
                alt="..."
              />
            </div>

            <div className="hidden duration-200 ease-linear" data-carousel-item>
              <img
                src={"c5.jpg"}
                className="absolute block w-full  h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  object-cover"
                alt="..."
              />
            </div>
          </div>
          {/* controller */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </>
      <div className="bg-img h-full ">
        <h1 className="shadow-2xl font-bold text-white text-center text-4xl middle sm:text-center ">
          Welcome to Notes <span className="text-logoColor bg-black">HUB</span>
        </h1>
      </div>
    </>
  );
}

export default Home;
