import React from 'react';

function Timetable() {
  const timetable = [
    { day: 'Monday', time:  '12:00 PM - 06:00 PM' },
    { day: 'tuesday', time:  '12:00 PM - 06:00 PM' },
    { day: 'wednesday', time:  '12:00 PM - 06:00 PM' },
    { day: 'thursday', time:  '12:00 PM - 06:00 PM' },
    { day: 'friday', time:  '12:00 PM - 06:00 PM' },
    { day: 'saturday', time:  '12:00 PM - 04:00 PM' },
    
    
  ];

  return (
    <div>
      <h2>Class Timetable</h2>
      <ul>
        {timetable.map((entry, index) => (
          <li key={index}>
            {entry.day}: {entry.subject} ({entry.time})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Timetable;
