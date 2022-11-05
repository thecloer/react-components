import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import styles from './AppLayout.module.css';
import Sidebar from '@/components/Sidebar';

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Header />
      <div className={`container ${styles.appBody}`}>
        <div className={`full ${styles.wrapper}`}>
          <aside className={styles.aside}>
            <Sidebar />
          </aside>
          <main className={styles.main}>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
