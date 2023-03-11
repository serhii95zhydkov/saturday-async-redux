import { Outlet, useParams } from 'react-router-dom';

import Navigation from 'components/Navigation/Navigation';

const Layout = () => {
  const { id } = useParams();

  return (
    <div>
      <header>{!id && <Navigation />}</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
