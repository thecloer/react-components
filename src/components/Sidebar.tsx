import { myComponentsList } from '@/pages/MyComponents';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <nav className='w-full h-full flex flex-col'>
    <Link to='/'>
      <h1 className='font-bold text-3xl mb-4'>Components</h1>
    </Link>
    <ul className='flex flex-col overflow-scroll grow'>
      {myComponentsList.map((myComponent) => (
        <li
          key={myComponent.id}
          className='capitalize before:content-["-"] before:mr-2 mb-1 last:mb-0 text-slate-700 hover:text-slate-900'
        >
          <Link to={`/${myComponent.path}`}>{myComponent.id}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Sidebar;
