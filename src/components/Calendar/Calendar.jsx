import React from "react";
import { useState } from "react";
import "./Calendar.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import CheckIcon from "@mui/icons-material/Check";

const Calendar = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 5, 12]);
  return (
    <div>
      <h1 className="Calendar">Calendar</h1>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDateTimePicker
          orientation="landscape"
          openTo="day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          textField={(params) => <textField {...params} />}
          renderDay={(day, _value, DayComponentProps) => {
            const isSelected =
              !DayComponentProps.outsideCurrentMonth &&
              highlightedDays.indexOf(day.getDate()) > 0;

            return (
              <Badge
                key={day.toString()}
                overlap="circular"
                badgeContent={isSelected ? <CheckIcon /> : undefined}
              >
                <PickersDay {...DayComponentProps} />
              </Badge>
            );
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
