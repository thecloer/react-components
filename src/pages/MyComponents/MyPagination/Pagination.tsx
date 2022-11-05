import type { FC } from 'react';
import { range } from './functions';
import styles from './Pagination.module.css';

type Props = {
  paginationLength: number;
  currentPageIndex: number;
  lastPageIndex: number;
  action: (index: number) => void;
};

const Pagination: FC<Props> = ({ paginationLength, currentPageIndex, lastPageIndex, action }) => {
  const gap = Math.floor(paginationLength / 2);
  const sides = { left: Math.min(gap, currentPageIndex), right: Math.min(gap, lastPageIndex - currentPageIndex) };
  const SIDES_LENGTH = Math.min(paginationLength - 1, lastPageIndex);
  while (sides.left + sides.right < SIDES_LENGTH) {
    if (sides.left < gap) sides.right++;
    else if (sides.right < gap) sides.left++;
  }
  const paginationNumbers = range(currentPageIndex - sides.left + 1, currentPageIndex + sides.right + 2);
  const isleftButton = paginationLength <= lastPageIndex && sides.left > gap - 1;
  const isrightButton = paginationLength <= lastPageIndex && sides.right > gap - 1;

  return (
    <nav className={styles.pagination}>
      {paginationNumbers.map((pageNum, i) => (
        <button key={pageNum} onClick={() => action(pageNum - 1)} className={pageNum - 1 === currentPageIndex ? styles.selected : ''}>
          {i === 0 && isleftButton ? '<' : i === paginationNumbers.length - 1 && isrightButton ? '>' : pageNum}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
