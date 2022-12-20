import { TOC_DUMMY } from './dummyData';
import { makeNestedToc } from './functions';
import TocList from './TocList';
import { HashProvider } from './HashContext';

const MyNestedSidebar = () => {
  const nestedToc = makeNestedToc(TOC_DUMMY);

  return (
    <div className='card center'>
      <div className='bg-slate-100 px-4 py-6 rounded-lg'>
        <div className='h-full max-h-96 w-72 overflow-y-scroll'>
          <HashProvider>
            <TocList toc={nestedToc} />
          </HashProvider>
        </div>
      </div>
    </div>
  );
};

export default MyNestedSidebar;
