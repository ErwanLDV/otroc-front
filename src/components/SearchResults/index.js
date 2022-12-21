import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { actionGetCategoryResults } from '../../actions/categories';
import './style.scss';
import AnnoucementCard from '../AnnoucementCard';
import Error from '../Error';

function SearchResult() {
  const dispatch = useDispatch();
  const [is404, setIs404] = useState(false);
  const slug = useParams();

  const categoriesArray = useSelector((state) => state.categories.categoriesArray);
  const categoriesLoaded = useSelector((state) => state.categories.categoriesLoaded);

  useEffect(() => {
    if (categoriesLoaded) {
      const categoriesArrayResult = categoriesArray.map(
        (main) => main.categories.find((subcat) => subcat.slug === slug.slug),
      );
      const subCategory = categoriesArrayResult.filter((element) => element !== undefined);
      if (subCategory.length > 0) {
        const { id } = subCategory[0];
        dispatch(actionGetCategoryResults(id));
      }
      else {
        setIs404(true);
      }
    }
  }, [categoriesLoaded, slug]);

  const categoryResults = useSelector((state) => state.categories.categoryResults);
  // console.log(categoryResults);
  const { offers, wishes } = categoryResults;

  return (
    is404
      ? <Error />
      : (
        <section>
          <h2>Résultats de la recherche</h2>
          <div className="container-searchResult">
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
          </div>
        </section>
      )
  );
}

export default SearchResult;
