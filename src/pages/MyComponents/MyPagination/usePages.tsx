import { FC } from 'react';

type props = {
  pageNum: number;
};

const ExamplePage: FC<props> = ({ pageNum }) => {
  return (
    <div>
      <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Page {pageNum}</h1>
      <p>This is page number #{pageNum}</p>
    </div>
  );
};

const usePages = (pageNumber: number) => Array.from({ length: pageNumber }, (_, num) => <ExamplePage pageNum={num + 1} />);
export default usePages;
