import { type ReactElement, useState } from 'react';

const usePageRouter = (pages: ReactElement[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return {
    Page: pages[currentIndex],
    currentIndex,
    goTo: (index: number) => (index >= 0 && index <= pages.length - 1 ? setCurrentIndex(index) : null),
  };
};
export default usePageRouter;
