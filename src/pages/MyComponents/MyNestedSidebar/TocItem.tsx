import { FC, useState } from 'react';
import type { TocData } from './functions';
import { useHash } from './HashContext';
import TocList from './TocList';

type Props = {
  heading: TocData;
};

const TocItem: FC<Props> = ({ heading }) => {
  const [showChildren, setShowChildren] = useState(false);
  const { hash } = useHash();

  return heading.depth === 1 ? (
    <div>
      <a href={heading.url} className='text-lg font-bold'>
        {heading.value}
      </a>
      <TocList toc={heading.children} />
    </div>
  ) : heading.children.length > 0 ? (
    <div>
      <button
        className={`text-slate-600 hover:text-slate-900 ${
          hash === heading.url ? 'text-blue-600 hover:text-blue-700' : ''
        }`}
        onClick={() => setShowChildren((prev) => !prev)}
      >
        <a href={heading.url}>
          <span className='mr-1 inline-block h-4 w-4 text-center'>{showChildren ? 'v' : '>'}</span>
          {heading.value}
        </a>
      </button>

      {showChildren ? (
        <div className='flex'>
          <button
            className={`
          relative mt-2 w-4 cursor-pointer
          transition-colors before:absolute before:top-0 before:bottom-0 before:w-[1px] before:bg-blue-500
          hover:before:bg-blue-700
          `}
            onClick={() => setShowChildren(false)}
          />
          <TocList toc={heading.children} />
        </div>
      ) : null}
    </div>
  ) : (
    <div
      className={`text-slate-600 hover:text-slate-900 ${
        hash === heading.url ? 'text-blue-600 hover:text-blue-700' : ''
      }`}
    >
      <a href={heading.url}>
        <span className='mr-1 inline-block h-4 w-4 text-center'>&bull;</span>
        {heading.value}
      </a>
    </div>
  );
};

export default TocItem;
