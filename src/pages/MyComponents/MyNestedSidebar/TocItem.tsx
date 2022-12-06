import { FC, useState } from 'react';
import type { TocData } from './functions';
import { useHash } from './HashContext';
import TocList from './TocList';
import styles from './TocItem.module.css';

type Props = {
  heading: TocData;
};

const TocItem: FC<Props> = ({ heading }) => {
  const [showChildren, setShowChildren] = useState(false);
  const { hash } = useHash();
  const headingClassName = `${styles.heading} ${hash === heading.url ? styles.selected : ''}`;

  return heading.depth === 1 ? (
    <div>
      <a href={heading.url} className={styles.h1}>
        {heading.value}
      </a>
      <TocList toc={heading.children} />
    </div>
  ) : heading.children.length > 0 ? (
    <div>
      <button className={headingClassName} onClick={() => setShowChildren((prev) => !prev)}>
        <a href={heading.url}>
          <span className={styles.decorator}>{showChildren ? 'v' : '>'}</span>
          {heading.value}
        </a>
      </button>

      {showChildren ? (
        <div className={styles.nestedStack}>
          <button className={styles.collapseLine} onClick={() => setShowChildren(false)} />
          <TocList toc={heading.children} />
        </div>
      ) : null}
    </div>
  ) : (
    <div className={headingClassName}>
      <a href={heading.url}>
        <span className={styles.decorator}>&bull;</span>
        {heading.value}
      </a>
    </div>
  );
};

export default TocItem;
