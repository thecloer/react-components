import { Link, RouteObject } from 'react-router-dom';
import MyCustomSelect from './MyCustomSelect/MyCustomSelect';
import MyPagination from './MyPagination/MyPagination';
import MyNestedSidebar from './MyNestedSidebar/MyNestedSidebar';
import MyPopupModal from './MyPopupModal/MyPopupModal';
import MySkeleton from './MySkeleton/MySkeleton';
import MyBookingCalendar from './MyBookingCalendar/MyBookingCalendar';

export const myComponentsList: RouteObject[] = [
  {
    id: 'pagination',
    path: 'pagination',
    element: <MyPagination />,
  },
  {
    id: 'custom select',
    path: 'custom-select',
    element: <MyCustomSelect />,
  },
  {
    id: 'nested sidebar',
    path: 'nested-sidebar',
    element: <MyNestedSidebar />,
  },
  {
    id: 'popup modal',
    path: 'popup-modal',
    element: <MyPopupModal />,
  },
  {
    id: 'skeleton',
    path: 'skeleton',
    element: <MySkeleton />,
  },
  {
    id: 'booking calendar',
    path: 'booking-calendar',
    element: <MyBookingCalendar />,
  },
];

const MyComponents = () => {
  return (
    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3'>
      {myComponentsList.map((myComponent) => (
        <Link key={myComponent.path} to={`/${myComponent.path}`}>
          <div className='card'>
            <img src={`/react-components/components/${myComponent.path}.png`} className='aspect-[1.3] w-full' />
            <h3 className='text-center text-lg font-medium'>{myComponent.id}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MyComponents;
