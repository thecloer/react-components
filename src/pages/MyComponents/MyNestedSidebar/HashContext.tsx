import { PropsWithChildren, useContext, useEffect, useState, createContext } from 'react';

type HashContextType = {
  hash: string;
  setHash: (hash: string) => void;
};
const HashContext = createContext<HashContextType>({ hash: '', setHash: () => {} });

export const HashProvider = ({ children }: PropsWithChildren) => {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    window.addEventListener('hashchange', () => setHash(window.location.hash));
    return () => window.removeEventListener('hashchange', () => setHash(window.location.hash));
  }, []);

  return <HashContext.Provider value={{ hash, setHash }}>{children}</HashContext.Provider>;
};

export const useHash = () => useContext(HashContext);
