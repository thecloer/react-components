import Pagination from './Pagination';
import usePageRouter from './usePageRouter';
import usePages from './usePages';
import styles from './Index.module.css';
import { useState } from 'react';
import { numberInputToInt } from './functions';

const initPageNumber = 10;
const initPaginationLength = 7;

const MyPagination = () => {
  const [pageNumber, setPageNumber] = useState(initPageNumber);
  const [paginationLength, setPaginationLength] = useState(initPaginationLength);

  const pages = usePages(pageNumber);
  const { page, currentIndex, goTo } = usePageRouter(pages);

  return (
    <div className='send-box'>
      <main className={`card ${styles.box}`}>
        <article className={`center ${styles.page}`}>{page}</article>
        <div className='center'>
          <Pagination currentPageIndex={currentIndex} lastPageIndex={pages.length - 1} action={goTo} paginationLength={paginationLength} />
        </div>

        <div className={styles.configuration}>
          <div>
            <label htmlFor='page-number'>Page Number:</label>
            <input id='page-number' type='number' min='1' max='20' value={pageNumber} onChange={(e) => setPageNumber(numberInputToInt(e.target, initPageNumber))} />
          </div>
          <div>
            <label htmlFor='pagination-length'>Pagination Length:</label>
            <input
              id='pagination-length'
              type='number'
              min='3'
              max='10'
              value={paginationLength}
              onChange={(e) => setPaginationLength(numberInputToInt(e.target, initPaginationLength))}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyPagination;
