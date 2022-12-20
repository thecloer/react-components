import type { FC } from 'react';
import { getPaginationNumbers } from './functions';

type Props = {
  paginationLength: number;
  currentPage: number;
  lastPage: number;
  action: (index: number) => void;
};

const Pagination: FC<Props> = ({ paginationLength, currentPage, lastPage, action }) => {
  const { paginationNumbers, hasPreviousButton, hasNextButton } = getPaginationNumbers(
    currentPage,
    lastPage,
    paginationLength
  );

  return (
    <nav className='flex gap-2'>
      {paginationNumbers.map((pageNum, i) => (
        <button
          key={pageNum}
          onClick={() => action(pageNum - 1)}
          className={`
          h-8 w-8 rounded-full
          ${pageNum === currentPage ? 'bg-slate-300' : 'bg-slate-100 hover:bg-slate-200'}`}
        >
          {i === 0 && hasPreviousButton ? '<' : i === paginationLength - 1 && hasNextButton ? '>' : pageNum}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
