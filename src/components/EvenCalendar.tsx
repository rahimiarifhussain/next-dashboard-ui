"use client";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const events = [
  {
    id: 1,
    title: "Meeting with Team",
    time: "2025-2-24 10 AM",
    desc: "Discuss project updates and next steps.",
  },
  {
    id: 2,
    title: "Client Presentation",
    time: "2025-2-25 2 PM",
    desc: "Present the new product features to the client.",
  },
  {
    id: 3,
    title: "Code Review",
    time: "2025-2-26 4:30 PM",
    desc: "Review the latest code commits with the development team.",
  },
];

const EvenCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar
        onChange={onChange}
        value={value}
        calendarType="gregory"
        locale="en-US"
      />
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image  src="/moreDark.png" alt="moreDark" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple
          " key={event.id}>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-sm">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvenCalendar;
