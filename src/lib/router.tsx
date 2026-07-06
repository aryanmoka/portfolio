// src/lib/router.tsx
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

interface RouterContextValue {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((to: string) => {
    const [pathPart, hash] = to.split('#');
    const targetPath = pathPart || '/';

    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', to);
      setPath(targetPath);
    } else {
      window.history.pushState({}, '', to);
    }

    if (hash) {
      // Allow the target route to render first, then scroll to the section.
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>;
};

export const useRouter = () => {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used within a RouterProvider');
  return ctx;
};

/**
 * A drop-in <a> replacement that navigates client-side instead of
 * doing a full page reload, but still degrades gracefully (real href,
 * works with cmd/ctrl-click to open in a new tab).
 */
export const Link: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }
> = ({ to, children, onClick, ...rest }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // let modified clicks behave natively
    e.preventDefault();
    navigate(to);
    onClick?.(e);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};
