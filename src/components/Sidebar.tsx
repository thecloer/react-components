import { Link } from 'react-router-dom';
import { myComponentsList } from '@/pages/MyComponents';

const Sidebar = () => (
  <nav className='flex h-full w-full flex-col'>
    <Link to='/'>
      <h1 className='mb-4 text-3xl font-bold'>Components</h1>
    </Link>
    <ul className='flex grow flex-col overflow-scroll'>
      {myComponentsList.map((myComponent) => (
        <li
          key={myComponent.id}
          className='mb-1 capitalize text-slate-700 before:mr-2 before:content-["-"] last:mb-0 hover:text-slate-900'
        >
          <Link to={`/${myComponent.path}`}>{myComponent.id}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Sidebar;
