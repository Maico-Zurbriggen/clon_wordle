import { HashRouter, Route, Navigate } from 'react-router-dom';
import { RoutesWithNotFound } from './components';
import { Game } from './public';
import { AppRoutes } from './models';

export const AppRouter = () => {
  return (
    <HashRouter>
      <RoutesWithNotFound>
        <Route path='/' element={<Navigate to={AppRoutes.game} />} />
        <Route path={AppRoutes.game} element={<Game />} />
      </RoutesWithNotFound>
    </HashRouter>
  )
}