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

  return (
    <section id="calendar" className="w-full flex flex-col justify-center items-center gap-10 max-container">
      <div className="text-center">
        <p className="text-xl font-montserrat text-coral-red">Calendar</p>
        <h2 className="mt-4 font-palanquin text-5xl max-sm:text-4xl font-bold">Upcoming Events</h2>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8">
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
            className="react-big-calendar"
            dayPropGetter={(date) => {
              const className = date.getDate() === 1 ? 'special-day' : '';
              return { className };
            }}
            eventPropGetter={(event, start, end, isSelected) => {
              let backgroundColor = '#3174ad';
              let color = 'white';
              if (calendarView === 'agenda') {
                backgroundColor = '#E4EBF2';
                color = 'black';
              }
              return {
                style: {
                  backgroundColor,
                  color,
                  borderRadius: '4px',
                  border: 'none',
                },
              };
            }}
          />
        )}
      </div>
    </section>
  );
};

export default CalendarComponent;
