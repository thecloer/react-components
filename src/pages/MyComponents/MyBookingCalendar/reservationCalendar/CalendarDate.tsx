import { SELECT_STATUS, SelectStatus } from './calendar.core';

type Props = {
  date: Date;
  selectStatus: SelectStatus;
  onClick?: () => void;
};

function CalendarDate({ date, selectStatus, onClick }: Props) {
  switch (selectStatus) {
    case SELECT_STATUS.NONE:
      return <div className='flex aspect-square w-full items-center justify-center' />;

    case SELECT_STATUS.UNSELECTABLE:
      return <div className='flex aspect-square w-full items-center justify-center'>{date.getDate()}</div>;

    case SELECT_STATUS.HOST_SELECTABLE:
      return (
        <div className='flex aspect-square w-full items-center justify-center'>
          <div
            className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full hover:bg-zinc-200'
            onClick={onClick}
          >
            {date.getDate()}
          </div>
        </div>
      );

    case SELECT_STATUS.GUEST_SELECTABLE:
      return (
        <div className='flex aspect-square w-full items-center justify-center'>
          <div
            className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-zinc-200 hover:bg-indigo-300'
            onClick={onClick}
          >
            {date.getDate()}
          </div>
        </div>
      );

    case SELECT_STATUS.SELECTED:
      return (
        <div className='flex aspect-square w-full items-center justify-center'>
          <div className='flex h-6 w-full items-center justify-center bg-indigo-100 text-zinc-800'>{date.getDate()}</div>
        </div>
      );

    case SELECT_STATUS.SELECTED_SINGLE: {
      return (
        <div className='relative z-0 flex aspect-square w-full items-center justify-center rounded-full'>
          <div
            className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-indigo-300 hover:bg-indigo-400'
            onClick={onClick}
          >
            {date.getDate()}
          </div>
        </div>
      );
    }

    case SELECT_STATUS.SELECTED_START:
    case SELECT_STATUS.SELECTED_END:
      return (
        <div className='relative z-0 flex aspect-square w-full items-center justify-center rounded-full'>
          <div
            className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-indigo-300 before:absolute before:-z-10 before:h-6 before:w-1/2 before:bg-indigo-100 hover:bg-indigo-400
            ${selectStatus === SELECT_STATUS.SELECTED_START ? 'before:right-0' : 'before:left-0'}`}
            onClick={onClick}
          >
            {date.getDate()}
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default CalendarDate;
