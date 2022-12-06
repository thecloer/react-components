import type { FC } from 'react';
import type { Toc } from './functions';
import TocItem from './TocItem';
import styles from './TocList.module.css';

type Props = {
  toc: Toc;
};

const TocList: FC<Props> = ({ toc }) => {
  return (
    <div className={styles.stack}>
      {toc.map((heading) => (
        <TocItem key={heading.url} heading={heading} />
      ))}
    </div>
  );
};

export default TocList;
