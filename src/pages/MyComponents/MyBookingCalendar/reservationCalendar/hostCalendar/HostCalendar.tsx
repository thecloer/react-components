import { useEffect, useReducer } from 'react';
import ChevronLeft from '../svgs/ChevronLeft';
import ChevronRight from '../svgs/ChevronRight';
import { DAYS, DateRange, SELECT_STATUS, SelectStatus } from '../calendar.core';
import {
  RESERVATION_STATUS,
  ReservationStatus,
  closeSelectionFromAvailableDates,
  hostCalendarInitializer,
  hostCalendarReducer,
  openSelectionFromAvailableDates,
  removeDateFromAvailableDates,
} from './calendar.host';
import CalendarDay from '../CalendarDay';
import HostCalendarDate from './HostCalendarDate';

type Props = {
  initDate?: Date;
  availableDates: DateRange[];
  reservations: DateRange[];
  onAvailableDatesChange: (range: DateRange[]) => void;
};

function HostCalendar({ initDate = new Date(), availableDates, reservations, onAvailableDatesChange }: Props) {
  const [state, calendarDispatch] = useReducer(
    hostCalendarReducer,
    { initDate, reservations, availableDates },
    hostCalendarInitializer
  );

  useEffect(() => {
    calendarDispatch({ type: 'SET_RESERVATIONS', payload: { reservations } });
  }, [reservations]);

  const handleDateSelect = ({
    selectStatus,
    reservationStatus,
    date,
  }: {
    selectStatus: SelectStatus;
    reservationStatus: ReservationStatus;
    date: Date;
  }) => {
    if (reservationStatus !== RESERVATION_STATUS.NONE) return;

    let { availableDates } = state;
    switch (selectStatus) {
      case SELECT_STATUS.SELECTED_START:
      case SELECT_STATUS.SELECTED_END:
      case SELECT_STATUS.SELECTED_SINGLE: {
        availableDates = removeDateFromAvailableDates({ date, availableDates, reservations: state.reservations });
        calendarDispatch({ type: 'DESELECT', payload: { availableDates } });
        break;
      }
      case SELECT_STATUS.HOST_SELECTABLE: {
        if (state.isSelecting) {
          availableDates = closeSelectionFromAvailableDates({ date, availableDates });
          calendarDispatch({ type: 'SELECT_END', payload: { availableDates } });
          break;
        }
        availableDates = openSelectionFromAvailableDates({ date, availableDates });
        calendarDispatch({ type: 'SELECT_START', payload: { availableDates } });
        break;
      }
    }
    onAvailableDatesChange(availableDates);
  };

  return (
    <div className='flex select-none flex-col gap-2 text-sm'>
      <div className='flex items-center justify-between px-2'>
        <button
          className='flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-200 hover:text-zinc-800'
          onClick={() => calendarDispatch({ type: 'PREV_MONTH' })}
        >
          <ChevronLeft className='h-5 w-5' />
        </button>
        <span>{`${state.firstDate.getFullYear()}. ${state.firstDate.getMonth() + 1}.`}</span>
        <button
          className='flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-200 hover:text-zinc-800'
          onClick={() => calendarDispatch({ type: 'NEXT_MONTH' })}
        >
          <ChevronRight className='h-5 w-5' />
        </button>
      </div>

      <div className='grid-rows-7 grid grid-cols-7'>
        {DAYS.map((day, index) => (
          <CalendarDay key={index} day={day} />
        ))}
        {state.dateInfos.map(({ date, selectStatus, reservationStatus }, index) => (
          <HostCalendarDate
            key={index}
            date={date}
            selectStatus={selectStatus}
            reservationStatus={reservationStatus}
            onClick={() => handleDateSelect({ selectStatus, reservationStatus, date })}
          />
        ))}
      </div>
    </div>
  );
}

export default HostCalendar;
