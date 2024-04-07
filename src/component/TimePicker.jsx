import React from "react";

const TimePicker = ({
  selectedDayName,
  showNextButton,
  selectedTime,
  handleTimeChange,
  handleNextButton,
}) => {
  const generateTimeOptions = () => {
    const timeOptions = [];
    for (let hour = 13; hour <= 21; hour++) {
      for (let minute = 0; minute <= 30; minute += 30) {
        const amOrPm = hour >= 12 ? "pm" : "am";
        const time = `${hour >= 13 ? hour - 12 : hour}:${
          minute === 0 ? "00" : "30"
        }${amOrPm}`;
        let currentHour = hour;
        let currentMinute = minute + 45;

        // Adjust hour and minute if minute exceeds 60
        if (currentMinute >= 60) {
          currentHour += 1;
          currentMinute -= 60;
        }

        const durationAmOrPm = currentHour >= 12 ? "pm" : "am";
        const duration = `${
          currentHour >= 13 ? currentHour - 12 : currentHour
        }:${currentMinute}${durationAmOrPm}`;

        timeOptions.push(
          <div
            className="flex gap-1 mr-5 tracking-tight mobile:mx-auto mobile:w-full"
            key={`${hour}-${minute}`}
          >
            <div
              className={`${
                showNextButton && selectedTime === time
                  ? "bg-gray-600 text-white w-[50%]"
                  : "text-[#0069ff] border-[#0069ff] border-[0.8px] bg-white border w-[100%] hover:border-2"
              } p-2 text-center rounded cursor-pointer h-10 text-xs font-bold flex justify-center items-center`}
              onClick={() => {
                handleTimeChange(time, duration);
              }}
            >
              {time}
            </div>
            {showNextButton && selectedTime === time && (
              <div
                key={time}
                className="bg-[#0069ff] text-center text-white rounded flex justify-center items-center text-sm font-bold w-[50%]"
                onClick={handleNextButton}
              >
                Next
              </div>
            )}
          </div>
        );
      }
    }
    return timeOptions;
  };

  const renderTimePicker = () => {
    return (
      <div className="mobile:flex mobile:justify-center mobile:flex-col">
        <h1 className="mb-[3%] text-center text-xs">{selectedDayName}</h1>
        <div className="mx-[10%] h-80 w-48 overflow-y-auto  rounded flex flex-col gap-3 pl-[5%] mobile:w-full mobile:pl-0 mobile:mx-auto">
          {generateTimeOptions()}
        </div>
      </div>
    );
  };

  return <div className="min-w-48 mobile:pb-[12%]">{renderTimePicker()}</div>;
};

export default TimePicker;
