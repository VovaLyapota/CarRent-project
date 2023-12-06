import { Navigation } from 'components/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense
        //   fallback={}
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
