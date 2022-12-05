import Pagination from './Pagination';
import usePageRouter from './usePageRouter';
import usePages from './usePages';
import styles from './MyPagination.module.css';
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
    <div className={`card ${styles.box}`}>
      <article className={`center ${styles.page}`}>{Page}</article>
      <div className='center'>
        <Pagination currentPage={currentIndex + 1} lastPage={pages.length} paginationLength={paginationLength} action={goTo} />
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
    </div>
  );
};

export default MyPagination;
