import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from '../../pages/index-page/index-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';

import { AppRoute } from '../../const';
import CardPage from '../../pages/card-page/card-page';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<IndexPage />} />
        <Route path={AppRoute.Catalog} element={<CatalogPage />} />
        <Route path={AppRoute.Card} element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
