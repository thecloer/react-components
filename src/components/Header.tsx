import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const menus = [
    // { to: '/', title: 'Home' },
    { to: '/', title: 'Components' },
  ];
  return (
    <header className={styles.header}>
      <nav className='container'>
        <ul className={styles.ul}>
          {menus.map((menu) => (
            <li key={menu.title} className={styles.li}>
              <Link to={menu.to}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
