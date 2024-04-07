import React, { useState } from "react";
import Info from "./Info";
import DateTimePicker from "./DateTimePicker";
import Details from "./Details";
import ScheduleDetails from "./ScheduleDetails";

const ScheduleAppointment = () => {
  const [dateTimeSelected, setDateTimeSelected] = useState(false);
  const [detailsFilled, setDetailsFilled] = useState(false);
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [userName, setUserName] = useState();

  const handleSubmit = (formData) => {
    console.log(formData);
    setUserName(formData.name.current.value);
    setDetailsFilled(true);
  };

  return (
    <div className="flex mt-[5%] mx-auto min-h-[80vh] max-h-max max-w-fit min-w-[50vw] rounded-lg relative bg-white mobile:flex-col mobile:w-[90vw] mobile:max-w-full mobile:max-h-full">
      {!detailsFilled ? (
        <>
          <div className="left w-72  border-r-[0.1px] border-slate-600 mobile:w-full mobile:border-none">
            <Info
              scheduleDate={scheduleDate}
              scheduleTime={scheduleTime}
              dateTimeSelected={dateTimeSelected}
            />
            {dateTimeSelected && (
              <div
                className="absolute top-[3%] left-[4%] border border-[0.5px] border-gray-600 rounded-full w-8 h-8 flex justify-center items-center"
                onClick={() => {
                  setDateTimeSelected(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-[#0060de]"
                >
                  <path
                    fillRule="evenodd"
                    d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className="right max-W-[60%] mobile:w-full">
            {!dateTimeSelected ? (
              <DateTimePicker
                setDateTimeSelected={setDateTimeSelected}
                setScheduleDate={setScheduleDate}
                setScheduleTime={setScheduleTime}
              />
            ) : (
              <Details onSubmit={handleSubmit} />
            )}
          </div>
        </>
      ) : (
        <div className="mx-auto">
          <ScheduleDetails
            scheduleDate={scheduleDate}
            scheduleTime={scheduleTime}
            userName={userName}
          />
        </div>
      )}
      <div className="absolute bottom-[4%] left-[3%] mobile:-bottom:-[13%]">
        <a href="#" className="text-[9.5px] mt-6 mb-[4%] block text-[#0060d4]">
          Cookie settings
        </a>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
