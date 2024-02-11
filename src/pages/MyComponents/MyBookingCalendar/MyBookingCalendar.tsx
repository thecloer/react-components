import { useState } from 'react';
import { DateRange } from './reservationCalendar/calendar.core';
import HostCalendar from './reservationCalendar/hostCalendar/HostCalendar';
import GuestCalendar from './reservationCalendar/guestCalendar/GuestCalendar';

function MyBookingCalendar() {
  const [reservations, setReservations] = useState<DateRange[]>([]);
  const [availableDates, setAvailableDates] = useState<DateRange[]>([]);

  const onHostChangeAvailableDates = (newAvailableDates: DateRange[]) => {
    setAvailableDates(newAvailableDates);
  };

  const onGuestChangeReservation = (newReservation: DateRange) => {
    setReservations([newReservation]);
  };

  return (
    <div className='card'>
      <div className='flex h-full w-full flex-wrap items-center justify-center gap-8 lg:justify-evenly'>
        <div className='h-96 w-72'>
          <h2 className='mb-4 cursor-default text-center text-xl font-semibold'>Host's Calendar</h2>
          <HostCalendar
            availableDates={availableDates}
            reservations={reservations}
            onAvailableDatesChange={onHostChangeAvailableDates}
          />
        </div>
        <div className='h-96 w-72'>
          <h2 className='mb-4 cursor-default text-center text-xl font-semibold'>Guest's Calendar</h2>
          <GuestCalendar availableDates={availableDates} onReservationChange={onGuestChangeReservation} />
        </div>
      </div>
    </div>
  );
}

export default MyBookingCalendar;
