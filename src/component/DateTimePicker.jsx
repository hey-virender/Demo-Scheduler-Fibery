import React, { useState } from "react";
import Calendar from "./Calendar";
import TimePicker from "./TimePicker";

const DateTimePicker = ({
  setDateTimeSelected,
  setScheduleDate,
  setScheduleTime,
}) => {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDayName, setSelectedDayName] = useState();
  const [showNextButton, setShowNextButton] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const getFormattedDate = (date) => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    const output = new Date(date).toLocaleDateString("en-US", options);
    console.log("DateAfter", output);
    return output;
  };

  const handleDateClick = (date) => {
    const currentDate = new Date();
    const selected = date;
    if (
      selected >= currentDate ||
      (selected.getFullYear() === currentDate.getFullYear() &&
        selected.getMonth() === currentDate.getMonth() &&
        selected.getDate() === currentDate.getDate())
    ) {
      const formattedDate = currentYear;
      setScheduleDate(getFormattedDate(date) + " " + formattedDate);
      console.log("Datefirst", date);
      setSelectedDayName(getFormattedDate(date));
      setShowTimePicker(true);
    }
  };
  const handlePrevMonth = () => {
    const currentDate = new Date();
    const currentYearIndex = currentDate.getFullYear();
    const currentMonthIndex = currentDate.getMonth();

    if (
      currentYear === currentYearIndex &&
      currentMonth === currentMonthIndex
    ) {
      return;
    }

    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleTimeChange = (e, duration) => {
    console.log(e, duration);
    setShowNextButton(true);
    setSelectedTime(e);
    setScheduleTime(`${e}-${duration}`);
  };
  const handleNextButton = () => {
    setDateTimeSelected(true);
  };

  return (
    <div className=" p-4 max-h-full mx-auto max-w-[95%] relative flex mobile:w-full mobile:justify-center">
      <Calendar
        currentYear={currentYear}
        currentMonth={currentMonth}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        handleDateClick={handleDateClick}
        showTimePicker={showTimePicker}
      />
      {showTimePicker && (
        <TimePicker
          showNextButton={showNextButton}
          selectedTime={selectedTime}
          selectedDayName={selectedDayName}
          handleTimeChange={handleTimeChange}
          handleNextButton={handleNextButton}
        />
      )}
      {showTimePicker && (
        <div
          className="absolute -top-[45%] left-3 rounded-full border border-gray-300 w-8 h-8 flex justify-center items-center invisible text-[#0060d4] mobile:visible"
          onClick={() => {
            setShowTimePicker(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
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
  );
};

export default DateTimePicker;
