import React from "react";

const Info = ({ scheduleDate, scheduleTime, dateTimeSelected }) => {
  return (
    <div className="relative">
      <div className="flex justify-center py-5 items-center border-slate-200 border-b-[1px] mobile:py-3">
        <img
          className="w-24 mx-auto mobile:w-16"
          src="https://d3v0px0pttie1i.cloudfront.net/uploads/branding/logo/b53f6730-9e93-409b-92ef-6a1000e8480e/a37e1896.png"
          alt=""
        />
      </div>
      <div className="ml-3 mt-4 px-1 mobile:text-center mobile:mx-auto mobile:flex mobile:flex-col mobile:justify-center">
        <h1 className="font-bold text-xl">Fibery Demo</h1>
        <div className="my-[6%] font-bold text-xs text-slate-500 flex gap-2 items-center mobile:mx-auto mobile:my-[2%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-slate-500"
          >
            <path
              d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          45 min
        </div>
        {dateTimeSelected ? (
          <div className="font-bold text-xs text-slate-500 mobile:mx-auto">
            <div className="flex gap-2  items-center my-2 mobile:mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
              <span>
                {scheduleTime},{scheduleDate}
              </span>
            </div>
            <div className="flex gap-1 items-center my-2 mobile:mx-auto mobile:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg>
              <span>India Standard Time</span>
            </div>
          </div>
        ) : null}
        <div className="text-xs max-w-[100%] min-w-[70%] text-[#1a1a1a] mobile:w-[50%] mobile:mx-auto">
          Book a meeting with a product expert. We've helped hundreds of
          companies overcome product management challenges.
        </div>
      </div>
    </div>
  );
};

export default Info;
