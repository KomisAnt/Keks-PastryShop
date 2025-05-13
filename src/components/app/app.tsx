import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from '../../pages/index-page/index-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';

import { AppRoute, AutorizationStatus } from '../../const';
import CardPage from '../../pages/card-page/card-page';
import Error404Page from '../../pages/error-404-page/error-404-page';
import FavouritesPage from '../../pages/favourites-page/favourites-page';
import PrivateRoute from '../private-route/private-route';

const userAutorizationStatus = AutorizationStatus.Auth;


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<IndexPage />} />
        <Route path={AppRoute.Catalog} element={<CatalogPage />} />
        <Route path={AppRoute.Card} element={<CardPage />} />
        <Route
          path={AppRoute.Favourite}
          element={
            <PrivateRoute userAutorizationStatus={userAutorizationStatus}>
              <FavouritesPage />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
