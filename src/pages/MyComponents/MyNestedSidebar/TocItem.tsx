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
      <a href={heading.url} className='font-bold text-lg'>
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
          <span className='inline-block w-4 h-4 mr-1 text-center'>{showChildren ? 'v' : '>'}</span>
          {heading.value}
        </a>
      </button>

      {showChildren ? (
        <div className='flex'>
          <button
            className={`
          w-4 mt-2 relative cursor-pointer
          before:absolute before:top-0 before:bottom-0 before:w-[1px] before:bg-blue-500 transition-colors
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
        <span className='inline-block w-4 h-4 mr-1 text-center'>&bull;</span>
        {heading.value}
      </a>
    </div>
  );
};

export default TocItem;
