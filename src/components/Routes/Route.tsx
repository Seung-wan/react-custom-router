import { useState, useEffect, ReactElement } from 'react';

interface Props {
  path: string;
  children: ReactElement | null;
}

const Route = ({ path, children }: Props) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPathChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onPathChange);

    return () => {
      window.removeEventListener('popstate', onPathChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
