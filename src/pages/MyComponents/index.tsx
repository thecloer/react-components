import { Link, RouteObject } from 'react-router-dom';
import MyCustomSelect from './MyCustomSelect/MyCustomSelect';
import MyPagination from './MyPagination/MyPagination';
import MyNestedSidebar from './MyNestedSidebar/MyNestedSidebar';
import MyPopupModal from './MyPopupModal/MyPopupModal';
import styles from './MyComponents.module.css';

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
];

const MyComponents = () => {
  return (
    <div className={styles.grid}>
      {myComponentsList.map((myComponent) => (
        <Link key={myComponent.path} to={`/${myComponent.path}`}>
          <div className={styles.card}>
            <img src={`/react-components/components/${myComponent.path}.png`} className={styles.photo} />
            <h3 className={styles.title}>{myComponent.id}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MyComponents;
