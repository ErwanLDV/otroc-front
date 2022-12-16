import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetCategoryResults } from '../../actions/categories';
import './style.scss';
import AnnoucementCard from '../AnnoucementCard';
import { Link, useLocation, useParams } from 'react-router-dom';
import { actionGetOneOfferAnnoucement, actionGetOneWishAnnoucement } from '../../actions/annoucements';

function SearchResult() {
  const dispatch = useDispatch();
  const slug = useParams();
  console.log(slug);
  const categoriesArray = useSelector((state) => state.categories.categoriesArray);
  const categoriesLoaded = useSelector((state) => state.categories.categoriesLoaded);
  console.log(categoriesArray);

  // console.log('Coucou');
  useEffect(() => {
    if (categoriesLoaded) {
      const result = categoriesArray.find(
        (element) => element.categories.find((e) => e.slug === slug.slug),
      );
      dispatch(actionGetCategoryResults(result.id));
    }
  }, [categoriesLoaded]);

  const categoryResults = useSelector((state) => state.categories.categoryResults);
  // console.log(categoryResults);
  const { offers, wishes } = categoryResults;

  return (
    <section>
      <h2>Résultats de la recherche</h2>
      {categoryResults && offers && offers.map((item) => (
        <Link to={`/annonces/offers/${item.id}`} key={item.id}>
          <AnnoucementCard
            key={item.id}
            title={item.title}
            content={item.description}
            pseudo={item.user.alias}
            createdAt={item.createdAt}
            category={item.categories[0].name}
            logo="offer"
          // image={item.picture}
          />
        </Link>
      ))}
      {wishes && wishes.map((item) => (
        <Link to={`/annonces/wishes/${item.id}`} key={item.id}>
          <AnnoucementCard
            key={item.id}
            title={item.title}
            content={item.description}
            pseudo={item.user.alias}
            createdAt={item.createdAt}
            category={item.categories[0].name}
            logo="wish"
          // image={item.picture}
          />
        </Link>
      ))}
    </section>
  );
}

export default SearchResult;
