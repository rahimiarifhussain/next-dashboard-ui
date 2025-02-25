import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";
import EvenCalendar from "@/components/EvenCalendar";
import React from 'react'
import { calendarEvents } from "@/lib/data";

const StudentPage = () => {
  return (
    <div className="flex gap-4 flex-col xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1
            className="text-sl font-semibold
           "
          >
            Schedule(4A){" "}
          </h1>
          <BigCalender />
        </div>
      </div>

      {/* Right */}
      <div className=" w-full xl:w-1/3 flex  flex-col gap-8">
        <div className="">
          <EvenCalendar />
          <Announcements />
        </div>
      </div>
    </div>
  );
}

export default StudentPage;