import type { FC } from 'react';
import { getPaginationNumbers } from './functions';
import styles from './Pagination.module.css';

type Props = {
  paginationLength: number;
  currentPage: number;
  lastPage: number;
  action: (index: number) => void;
};

const Pagination: FC<Props> = ({ paginationLength, currentPage, lastPage, action }) => {
  const { paginationNumbers, hasPriviousButton, hasNextButton } = getPaginationNumbers(currentPage, lastPage, paginationLength);

  return (
    <nav className={styles.pagination}>
      {paginationNumbers.map((pageNum, i) => (
        <button key={pageNum} onClick={() => action(pageNum - 1)} className={pageNum === currentPage ? styles.selected : ''}>
          {i === 0 && hasPriviousButton ? '<' : i === paginationLength - 1 && hasNextButton ? '>' : pageNum}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
