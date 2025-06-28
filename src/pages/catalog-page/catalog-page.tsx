import HeaderNotAuthtorized from '../../components/header-not-authtorized/header-not-authtorized';
import Header from '../../components/header/header';
import BackLinkBlock from '../../components/back-link-block/back-link-block';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogBlock from '../../components/catalog-block/catalog-block';
import Footer from '../../components/footer/footer';
import { useSelector } from 'react-redux';
import { getFilteredProducts } from '../../store/slices/products-data/products-data-slice';
import CatalogFilterNotFound from '../../components/catalog-filter-not-found/catalog-filter-not-found';
import { AutorizationStatus } from '../../const';
import { getAutorizationStatus } from '../../store/slices/user-data/user-data-slice';

function CatalogPage(): JSX.Element {

  const catalogProducts = useSelector(getFilteredProducts);
  const autorizationStatus = useSelector(getAutorizationStatus);

  return (
    <>
      {
        autorizationStatus === AutorizationStatus.Auth
          ? <Header />
          : <HeaderNotAuthtorized />
      }
      <main>
        <h1 className="visually-hidden">Каталог товаров</h1>
        <BackLinkBlock />
        <CatalogFilter />
        {catalogProducts.length > 0 ? <CatalogBlock /> : <CatalogFilterNotFound />}
      </main>
      <Footer />
    </>
  );
}

export default CatalogPage;
