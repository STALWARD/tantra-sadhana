// app/calendar/page.jsx
"use client";

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
    start: new Date(2026, 2, 12, 10, 0),
    end: new Date(2026, 2, 17, 11, 0),
  },
];

export default function CalendarComponent() {
  return (
    <div style={{ height: "100vh", width: "98vw", backgroundColor: "#f0f8ff" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "2.5rem",
          color: "#B22222",
          margin: "30px 0 20px",
        }}
      >
        Event Calendar
      </h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        showMultiDayTimes
        style={{ height: 500 }}
        
      />
    </div>
  );
}



