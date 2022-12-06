import { TOC_DUMMY } from './dummyData';
import { makeNestedToc } from './functions';
import TocList from './TocList';
import { HashProvider } from './HashContext';
import styles from './MyNestedSidebar.module.css';

const MyNestedSidebar = () => {
  const nestedToc = makeNestedToc(TOC_DUMMY);

  return (
    <div className={`card ${styles.box}`}>
      <div className={styles.sidebar}>
        <div className={styles.scrollWrapper}>
          <HashProvider>
            <TocList toc={nestedToc} />
          </HashProvider>
        </div>
      </div>
    </div>
  );
};

export default MyNestedSidebar;
