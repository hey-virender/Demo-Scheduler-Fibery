import React from "react";

const ScheduleDetails = ({ scheduleDate, scheduleTime, userName }) => {
  return (
    <div className="pt-[5%] pb-[6%]">
      <div className="mx-auto">
        <div id="picture" className="flex justify-center">
          <img src="./man.png" alt="man" className="w-12" />
        </div>
        <div className="text-center mt-4">
          <h1 className="font-bold flex justify-center items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#007a5c"
              className="w-5 h-5 inline"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            You are scheduled
          </h1>
          <p className="text-[11px] mt-6 px-7 text-gray-800">
            A calendar invitation has been sent to your email address.
          </p>
        </div>
        <div className="border border-gray-400 border-1 rounded-lg text-[11px] text-gray-500 font-bold px-4 py-3 ">
          <h2 className=" text-black text-base">Fibery Demo</h2>
          <p className="my-2">
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            &nbsp;
            {userName}
          </p>
          <p className="my-2">
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
            &nbsp;
            {scheduleTime} &nbsp;
            {scheduleDate}
          </p>
          <p className="my-2">
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
            &nbsp; India Standard Time
          </p>
          <p className="my-2">
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
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            &nbsp; Web conferencing details to follow
          </p>
        </div>
        <div id="border" className="bg-gray-700 w-68 h-[0.1px] my-5"></div>
        <div>
          <p className="w-68 text-xs font-semibold mb-2 mobile:text-center">
            Schedule your own meetings with Calendly for free.
          </p>
          <p className="w-68 text-[10.5px] mb-2 mobile:text-center">
            Eliminate the back-and-forth emails for finding time.
          </p>
          <div className="flex justify-between">
            <button className="text-[9.5px] border-gray-700 border border-1 rounded-full w-36 py-1 flex justify-center items-center gap-1">
              <img src="/google-logo.svg" alt="" className="w-3" />
              Sign up with Google
            </button>
            <button className="text-[9.5px] border-gray-700 border border-1 rounded-full w-36 py-1 flex justify-center items-center gap-1">
              <img src="/Microsoft_logo.svg" alt="" className="w-3" />
              Sign up with Microsoft
            </button>
          </div>
          <p className="text-[9.5px] text-center text-[#0060d4] mt-3 mb-8 cursor-pointer hover:underline">
            Sign up with work email
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDetails;
