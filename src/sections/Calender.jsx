// // Calendar.js
// import React, { useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { useMediaQuery } from 'react-responsive';
// import { calendarEvents } from '../constants';

// const localizer = momentLocalizer(moment);

// const CalendarComponent = () => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });

//   // we will make use of useEffect to make sure the mediaquiry ismobile is working
//   // we want to check isMobile whenever screen size changes
//   useEffect(() => {
//     console.log('isMobile', isMobile);
//   }, [isMobile]);

//   return (
//     <div>
//       {calendarEvents && <Calendar
//         localizer={localizer}
//         events={calendarEvents}
//         startAccessor="start"
//         endAccessor="end"
//         titleAccessor="title"
//         // views={isMobile ? ['day', 'agenda'] : ['month', 'week', 'day']}
//         style={{ height: 500 }}
//       />}
//     </div>
//   );
// };

// export default CalendarComponent;


// // Calendar.js
// import React, { useEffect, useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { useMediaQuery } from 'react-responsive';
// import { calendarEvents } from '../constants';

// const localizer = momentLocalizer(moment);

// const CalendarComponent = () => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   const [calendarView, setCalendarView] = useState('month');

//   useEffect(() => {
//     if (isMobile) {
//       setCalendarView('day');
//     } else {
//       setCalendarView('month');
//     }
//   }, [isMobile]);

//   return (
//     <div>
//       {calendarEvents && (
//         <Calendar
//           localizer={localizer}
//           events={calendarEvents}
//           startAccessor="start"
//           endAccessor="end"
//           titleAccessor="title"
//           view={calendarView}
//           views={['month', 'week', 'day']}
//           style={{ height: 500 }}
//         />
//       )}
//     </div>
//   );
// };

// export default CalendarComponent;


// Calendar.js
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useMediaQuery } from 'react-responsive';
import { calendarEvents } from '../constants';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [calendarView, setCalendarView] = useState('month');

  const handleViewChange = (view) => {
    // Handle the view change here
    setCalendarView(view);
  };

  useEffect(() => {
    if (isMobile) {
      setCalendarView('agenda');
    } else {
      setCalendarView('month');
    }
  }, [isMobile]);
  // make it 7am  
  const defaultDate = moment().startOf('day').hour(7).toDate();
  console.log(defaultDate)

  return (
    <div className=''>
      {calendarEvents && (
        <Calendar
          localizer={localizer}
          events={calendarEvents}
          startAccessor="start"
          endAccessor="end"
          titleAccessor="title"
          defaultView={calendarView}
          style={{ height: isMobile ? 400 : 600 }}
          view={calendarView}
          onView={handleViewChange}
          defaultDate={defaultDate} // Set default date to 7:00 AM
          toolbar={true} // Show toolbar
          timeslots={2} // Set the interval to 30 minutes
        />
      )}
    </div>
  );
};

export default CalendarComponent;