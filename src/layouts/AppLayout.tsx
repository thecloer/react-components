import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import styles from './AppLayout.module.css';

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Header />
      <div className={`${styles.appBody} container`}>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
