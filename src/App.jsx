import React from "react";
import ScheduleAppointment from "./component/ScheduleAppointment";

function App() {
  return (
    <div className="mx-32 overflow-y-auto max-h-[95vh] pr-6 rounded-lg mobile:mx-auto mobile:flex mobile:justify-center mobile:items-center mobile:p-1 mobile:max-h-max">
      <ScheduleAppointment />
    </div>
  );
}

export default App;
