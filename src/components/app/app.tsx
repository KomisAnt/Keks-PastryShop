import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from '../../pages/index-page/index-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';

import { AppRoute, AutorizationStatus } from '../../const';
import CardPage from '../../pages/card-page/card-page';
import Error404Page from '../../pages/error-404-page/error-404-page';
import FavouritesPage from '../../pages/favourites-page/favourites-page';
import PrivateRoute from '../private-route/private-route';
import LoginPage from '../../pages/login-page/login-page';
import RegisterPage from '../../pages/register-page/register-page';
// import { useSelector } from 'react-redux';
// import { getProducts } from '../../store/slices/products-data/products-data-slice';
import { useAppDispatch } from '../../store/store';
import React from 'react';
import { fetchLastReview, fetchProducts } from '../../store/api-actions';
import { useSelector } from 'react-redux';
import { getAutorizationStatus } from '../../store/slices/user-data/user-data-slice';

// const userAutorizationStatus = AutorizationStatus.Auth;


function App(): JSX.Element {

  const dispatch = useAppDispatch();

  // const products = useSelector(getProducts);
  // console.log('products = ', products);
  const autorizationStatus = useSelector(getAutorizationStatus);

  React.useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchLastReview());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<IndexPage />} />
        <Route path={AppRoute.Catalog} element={<CatalogPage />} />
        <Route path={`${AppRoute.Card}/:id`} element={<CardPage />} />
        <Route
          path={AppRoute.Favourites}
          element={
            <PrivateRoute autorizationStatus={autorizationStatus}>
              <FavouritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Register}
          element={
            autorizationStatus !== AutorizationStatus.Auth
              ? <RegisterPage />
              : <IndexPage />
          }
        />
        <Route path='*' element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
