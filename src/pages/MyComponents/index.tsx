import type { RouteObject } from 'react-router-dom';
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
    <div className={styles.cardContainer}>
      {myComponentsList.map((myComponent) => (
        <div key={myComponent.id} className={styles.card}>
          <div>사진</div>
          <div>
            <span>{myComponent.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyComponents;
