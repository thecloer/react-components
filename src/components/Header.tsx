import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const menus = [
    // { to: '/', title: 'Home' },
    { to: '/', title: 'Components' },
  ];
  return (
    <header className='w-screen center min-h-[5rem] border-b border-b-slate-300 shadow-sm bg-white py-2'>
      <nav className='container'>
        <ul className='flex gap-4'>
          {menus.map((menu) => (
            <li key={menu.title}>
              <Link to={menu.to} className='p-4 font-semibold text-lg'>
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
