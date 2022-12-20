import Pagination from './Pagination';
import usePageRouter from './usePageRouter';
import usePages from './usePages';
import { useState } from 'react';
import { numberInputToInt } from './functions';

const initPageNumber = 10;
const initPaginationLength = 7;

const MyPagination = () => {
  const [pageNumber, setPageNumber] = useState(initPageNumber);
  const [paginationLength, setPaginationLength] = useState(initPaginationLength);

  const pages = usePages(pageNumber);
  const { Page, currentIndex, goTo } = usePageRouter(pages);

  return (
    <div className='card flex flex-col justify-between'>
      <article className='center grow'>{Page}</article>
      <div className='center'>
        <Pagination
          currentPage={currentIndex + 1}
          lastPage={pages.length}
          paginationLength={paginationLength}
          action={goTo}
        />
      </div>

      <div className='mt-8 flex justify-evenly'>
        <div className='flex align-center gap-2'>
          <label htmlFor='page-number'>Page Number:</label>
          <input
            className='text-center w-16 h-4 px-2 py-3'
            id='page-number'
            type='number'
            min='1'
            max='20'
            value={pageNumber}
            onChange={(e) => setPageNumber(numberInputToInt(e.target, initPageNumber))}
          />
        </div>
        <div className='flex align-center gap-2'>
          <label htmlFor='pagination-length'>Pagination Length:</label>
          <input
            className='text-center w-16 h-4 px-2 py-3'
            id='pagination-length'
            type='number'
            min='3'
            max='10'
            value={paginationLength}
            onChange={(e) => setPaginationLength(numberInputToInt(e.target, initPaginationLength))}
          />
        </div>
      </div>
    </div>
  );
};

export default MyPagination;
