import { Navigation } from 'components/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
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
