import React, { useState } from "react";
import { useEffect } from "react";

const Calendar = ({
  currentYear,
  currentMonth,
  handlePrevMonth,
  handleNextMonth,
  handleDateClick,
  showTimePicker,
}) => {
  const getCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return currentTime;
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderDayLabels = () => {
    const dayLabels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    return dayLabels.map((label) => (
      <div key={label} className="text-center text-[8.5px] font-lighter">
        {label}
      </div>
    ));
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    firstDayOfMonth = (firstDayOfMonth === 0 ? 7 : firstDayOfMonth) - 1;

    const today = new Date();
    const currentDay = today.getDate();
    const currentMonthIndex = today.getMonth();
    const currentYearIndex = today.getFullYear();

    const monthDays = [];
    for (let i = 1; i <= daysInMonth; +i++) {
      const currentDate = new Date(currentYear, currentMonth, i);
      const dayOfWeek = currentDate.getDay();
      const isWeekday = dayOfWeek !== 0 && dayOfWeek !== 6;
      const isCurrentDay =
        currentYear === currentYearIndex &&
        currentMonth === currentMonthIndex &&
        i === currentDay;
      const isCurrentOrFutureDate =
        currentDate >= today ||
        (currentYear === currentYearIndex &&
          currentMonth === currentMonthIndex &&
          i === currentDay);

      const isSelected = selectedDate && selectedDate.getDate() === i;

      const dayClasses = `day ${
        isWeekday && isCurrentOrFutureDate
          ? isSelected && isCurrentOrFutureDate
            ? "bg-[#0060d4] text-white"
            : "bg-[#eef5ff] font-bold text-[#0060d4]"
          : ""
      }
    rounded-full w-[32px] h-[32px] flex justify-center items-center relative`;

      monthDays.push(
        <div
          key={i}
          className={dayClasses}
          onClick={() => {
            if (isWeekday) {
              handleDateClick(currentDate);
              setSelectedDate(currentDate);
            }
          }}
        >
          {i}
          {isCurrentDay && (
            <div className="h-1 w-1 bg-blue-500 rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
          )}
        </div>
      );
    }

    const blanks = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      blanks.push(<div key={-i} className="empty h-[30px] w-[30px]"></div>);
    }

    const calendarDays = [...blanks, ...monthDays];

    return calendarDays;
  };

  return (
    <div
      className={`calendar ${
        showTimePicker ? "w-3/4 mobile:hidden" : "w-full"
      }`}
    >
      <h1 className="font-bold">Select Date and Time</h1>
      <div className="flex justify-center items-center mt-[7%] mb-[5%] gap-5">
        <button
          onClick={handlePrevMonth}
          className="text-slate-500 w-7 h-7 rounded-full hover:text-[#0060d4] hover:bg-[#d9e9ff] font-bold flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <span className="text-xs">{` ${new Date(
          currentYear,
          currentMonth
        ).toLocaleString("default", {
          month: "long",
        })} ${currentYear}`}</span>
        <button
          onClick={handleNextMonth}
          className="text-slate-500 w-7 h-7 rounded-full hover:text-[#0060d4] hover:bg-[#d9e9ff] font-bold flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-3 text-center text-sm mb-2">
        {renderDayLabels()}
      </div>
      <div className="calendar text-slate-600 grid grid-cols-7 gap-2 cursor-default text-center text-[11px] items-start">
        {renderCalendar()}
      </div>
      <div className="text-[10px] mt-7">
        <div className="text-xs font-bold ml-3">Time Zone</div>
        <div className="text-gray-800 ml-4 flex items-center mt-1 pb-6 mobile:mb-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 inline"
          >
            <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
              clipRule="evenodd"
            />
          </svg>
          &nbsp;India Standard Time{`(${currentTime})`}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
