"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";

// Required CSS imports
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
    start: new Date(2026, 2, 19, 8, 0), // March 19, 2026
    end: new Date(2026, 2, 28, 17, 0),
    type: "ritual", // Custom property for styling
  },
  {
    title: "Other Event",
    start: new Date(2026, 2, 22, 10, 0),
    end: new Date(2026, 2, 22, 12, 0),
    type: "general",
  },
];

export default function CalendarComponent() {
  const [isClient, setIsClient] = useState(false);

  // Fix hydration by ensuring render only happens on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to apply custom styles to the event bars
  const eventStyleGetter = useCallback((event) => {
    let backgroundColor = "#3174ad"; // Default blue
    
    // Specifically target "Shat-Chandi Yag"
    if (event.title === "Shat-Chandi Yag") {
      backgroundColor = "#B22222"; // Deep red
    }

    return {
      style: {
        backgroundColor,
        borderRadius: "6px",
        opacity: 0.9,
        color: "white",
        border: "none",
        display: "block",
        padding: "2px 5px",
      },
    };
  }, []);

  if (!isClient) {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p>Loading Calendar...</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#f0f8ff", padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#B22222",
          margin: "20px 0",
          fontWeight: "bold"
        }}
      >
        Event Calendar
      </h1>
      
      <div style={{ 
        height: "700px", 
        backgroundColor: "white", 
        padding: "20px", 
        borderRadius: "12px", 
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)" 
      }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultDate={new Date(2026, 2, 19)} // Automatically shows the event's month
          eventPropGetter={eventStyleGetter} // Applies the custom colors
          showMultiDayTimes
          style={{ height: "100%" }}
          views={["month", "week", "day", "agenda"]}
        />
      </div>
    </div>
  );
}
