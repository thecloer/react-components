import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import styles from './ComponentsLayout.module.css';

const ComponentsLayout = () => {
  return (
    <div className={`full ${styles.wrapper}`}>
      <aside className={styles.aside}>
        <Sidebar />
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default ComponentsLayout;
