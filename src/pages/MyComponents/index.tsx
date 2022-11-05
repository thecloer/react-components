import { Link, RouteObject } from 'react-router-dom';
import MyCustomSelect from './MyCustomSelect';
import MyPagination from './MyPagination';
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
];

const MyComponents = () => {
  return (
    <div className={styles.grid}>
      {myComponentsList.map((myComponent) => (
        <Link key={myComponent.id} to={`/${myComponent.path}`}>
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
