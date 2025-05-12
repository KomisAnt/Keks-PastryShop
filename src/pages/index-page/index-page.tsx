import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import RandomMainBlock from '../../components/random-main-block/random-main-block';
import LastReviewBlock from '../../components/last-review-block/last-review-block';
import MapBlock from '../../components/map-block/map-block';
import Footer from '../../components/footer/footer';

function IndexPage(): JSX.Element {
  return (
    <>
      <Header />
      <Hero />
      <RandomMainBlock />
      <LastReviewBlock />
      <MapBlock />
      <Footer />
    </>
  );
}

export default IndexPage;
