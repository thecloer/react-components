import { Link } from 'react-router-dom';

const Header = () => {
  const menus = [
    // { to: '/', title: 'Home' },
    { to: '/', title: 'Components' },
  ];
  return (
    <header className='center min-h-[5rem] w-screen border-b border-b-slate-300 bg-white py-2 shadow-sm'>
      <nav className='container'>
        <ul className='flex gap-4'>
          {menus.map((menu) => (
            <li key={menu.title}>
              <Link to={menu.to} className='p-4 text-lg font-semibold'>
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
