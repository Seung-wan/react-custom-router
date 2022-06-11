import { MouseEvent } from 'react';

interface Props {
  href: string;
  children: JSX.Element | string;
}

const Link = ({ href, children }: Props) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
