"use client";

import React, { useState, useEffect } from "react";
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
  {
    title: "Guru Purnima and Diksha Mahotsava",
    start: new Date(2026, 6, 29, 6, 0),
    end: new Date(2026, 6, 29, 17, 30),
  },
];

export default function CalendarComponent() {
  const [isClient, setIsClient] = useState(false);
  const [defaultDate, setDefaultDate] = useState<Date | null>(null);

  useEffect(() => {
    setIsClient(true);

    if (events.length > 0) {
      // Find the earliest event start date
      const earliest = events.reduce(
        (min, e) => (e.start < min ? e.start : min),
        events[0].start
      );
      setDefaultDate(earliest);
    }
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
        {isClient && defaultDate ? (
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={defaultDate} // Automatically set to first event’s start
            showMultiDayTimes
            style={{ height: "100%" }}
            eventPropGetter={(event) => {
              const backgroundColor = event.title.includes("Festival") ? "#FFD700" : "#87CEFA";
              return { style: { backgroundColor } };
            }}
          />
        ) : (
          <div style={{ textAlign: "center", paddingTop: "100px" }}>Loading Calendar...</div>
        )}
      </div>
    </div>
  );
}
