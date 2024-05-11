import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

interface DateData {
  startDate: Date;
  endDate: Date;
}

const Calendars: React.FC<{ value: DateData }> = ({ value }) => {
  const [selectedDate, setSelectedDate] = useState<DateData>(value);

  const handleSelect = (ranges: any) => {
    // When a date range is selected, update the state with the new range
    setSelectedDate(ranges.selection);
  };

  return (
    <div>
      <DateRange
        ranges={[selectedDate]}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        className="preview-area"
        direction="vertical"
        showDateDisplay={false}
      />
    </div>
  );
};

export default Calendars;
