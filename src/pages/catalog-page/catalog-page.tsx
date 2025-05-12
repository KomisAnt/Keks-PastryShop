import HeaderNotAuthtorized from '../../components/header-not-authtorized/header-not-authtorized';
import BackLinkBlock from '../../components/back-link-block/back-link-block';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogBlock from '../../components/catalog-block/catalog-block';
import Footer from '../../components/footer/footer';

function CatalogPage(): JSX.Element {
  return (
    <>
      <HeaderNotAuthtorized />
      <main>
        <h1 className="visually-hidden">Каталог товаров</h1>
        <BackLinkBlock />
        <CatalogFilter />
        <CatalogBlock />
      </main>
      <Footer />
    </>
  );
}

export default CatalogPage;
