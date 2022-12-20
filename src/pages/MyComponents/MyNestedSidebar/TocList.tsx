import type { FC } from 'react';
import type { Toc } from './functions';
import TocItem from './TocItem';

type Props = {
  toc: Toc;
};

const TocList: FC<Props> = ({ toc }) => {
  return (
    <div className='my-2 last:mb-0'>
      {toc.map((heading) => (
        <TocItem key={heading.url} heading={heading} />
      ))}
    </div>
  );
};

export default TocList;
