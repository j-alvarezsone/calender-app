import React, { useState } from 'react';
import { Navbar } from '../ui/Navbar';

import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { enMessages } from '../../helpers/calender-messages-es';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalenderEvent } from './CalenderEvent';
import { CalendarModal } from './CalendarModal';

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const events = [
  {
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hour').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
    user: {
      _id: '123',
      name: 'jorge',
    },
  },
];

export const CalenderScreen = () => {
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const onDoubleClick = (e) => {
    console.log(e);
  };

  const onSelectEvent = (e) => {
    console.log(e);
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white',
    };

    return {
      style,
    };
  };

  return (
    <div className='calender-screen'>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        messages={enMessages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalenderEvent,
        }}
      />
      <CalendarModal />
    </div>
  );
};
