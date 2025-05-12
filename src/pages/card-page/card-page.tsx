import HeaderNotAuthtorized from '../../components/header-not-authtorized/header-not-authtorized';
import BackLinkBlock from '../../components/back-link-block/back-link-block';
import CardItemsDetailsBlock from '../../components/card-items-details-block/card-items-details-block';
import FilterSort from '../../components/filter-sort/filter-sort';
import CommentsBlock from '../../components/comments-block/comments-block';

function CardPage(): JSX.Element {
  return (
    <>
      <HeaderNotAuthtorized />
      <main>
        <BackLinkBlock />
        <CardItemsDetailsBlock />
        <FilterSort />
        <CommentsBlock />
      </main>
    </>
  );
}

export default CardPage;
