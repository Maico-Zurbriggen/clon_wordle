import { HashRouter, Route, Navigate } from 'react-router-dom';
import { RoutesWithNotFound, Navegation } from './components';
import { Game, Settings } from './public';
import { AppRoutes } from './models';

export const AppRouter = () => {
  return (
    <HashRouter>
        <header>
          <Navegation />
        </header>
        <main>
          <RoutesWithNotFound>
            <Route path='/' element={<Navigate to={AppRoutes.game} />} />
            <Route path={AppRoutes.game} element={<Game />} />
            <Route path={AppRoutes.settings} element={<Settings />} />
          </RoutesWithNotFound>
        </main>
    </HashRouter>
  )
}