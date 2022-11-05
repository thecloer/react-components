import { myComponentsList } from '@/pages/MyComponents';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => (
  <nav className={styles.nav}>
    <Link to='/'>
      <h1 className={styles.title}>Components</h1>
    </Link>
    <ul className={styles.ul}>
      {myComponentsList.map((myComponent) => (
        <li key={myComponent.id} className={styles.li}>
          <Link to={`/${myComponent.path}`}>{myComponent.id}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Sidebar;
