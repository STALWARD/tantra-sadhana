"use client";

import React, { useState, useEffect } from "react"; // Added hooks
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Shat-Chandi Yag",
    start: new Date(2026, 2, 19, 8, 0),
    end: new Date(2026, 2, 28, 17, 0),
  },
];

export default function CalendarComponent() {
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true only after the component mounts in the browser
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#f0f8ff", padding: "10px" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#B22222",
          margin: "30px 0 20px",
        }}
      >
        Event Calendar
      </h1>
      
      <div style={{ height: 600, backgroundColor: "white", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
        {/* Only render the Calendar if we are on the client side */}
        {isClient ? (
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={new Date(2026, 2, 19)} // Opens to your specific event date
            showMultiDayTimes
            style={{ height: "100%" }}
          />
        ) : (
          <div style={{ textAlign: "center", paddingTop: "100px" }}>Loading Calendar...</div>
        )}
      </div>
    </div>
  );
}
