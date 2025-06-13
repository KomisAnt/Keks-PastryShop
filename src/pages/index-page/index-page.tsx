import Header from '../../components/header/header';
import HeaderNotAuthtorized from '../../components/header-not-authtorized/header-not-authtorized';
import Hero from '../../components/hero/hero';
import RandomMainBlock from '../../components/random-main-block/random-main-block';
import LastReviewBlock from '../../components/last-review-block/last-review-block';
import MapBlock from '../../components/map-block/map-block';
import Footer from '../../components/footer/footer';

import { useSelector } from 'react-redux';
import { getAutorizationStatus } from '../../store/slices/user-data/user-data-slice';
import { AutorizationStatus } from '../../const';

function IndexPage(): JSX.Element {

  const autorizationStatus = useSelector(getAutorizationStatus);

  return (
    <>
      {
        autorizationStatus === AutorizationStatus.Auth
          ? <Header />
          : <HeaderNotAuthtorized />
      }
      <main>
        <Hero />
        <RandomMainBlock />
        <LastReviewBlock />
        <MapBlock />
      </main>

      <Footer />
    </>
  );
}

export default IndexPage;
