import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { actionGetCategoryResults, actionGetMainCategoryResults } from '../../actions/categories';
import CategoryCard from './CategoryCard';
import Error from '../Error';
import './style.scss';

function MainCategoriesListPage() {
  const dispatch = useDispatch();
  const slug = useParams();
  const [is404, setIs404] = useState(false);
  const categoriesArray = useSelector((state) => state.categories.categoriesArray);
  const categoriesLoaded = useSelector((state) => state.categories.categoriesLoaded);
  useEffect(() => {
    if (categoriesLoaded) {
      const mainCategoryResult = categoriesArray.find((element) => element.slug === slug.slug);
      if (mainCategoryResult) {
        dispatch(actionGetMainCategoryResults(mainCategoryResult.id));
      }
      else {
        setIs404(true);
      }
    }
  }, [categoriesLoaded, slug]);

  const categories = useSelector((state) => state.categories.MainCategoriesListCards);

  return (
    is404
      ? <Error />
      : (
        <section>
          <h2> page card des categories</h2>
          {categories.map((item) => (
            <Link to={`/categorie/${item.slug}`} onClick={() => dispatch(actionGetCategoryResults(item.id))} key={item.id}>
              <CategoryCard key={item.id} title={item.name} />
            </Link>
          ))}
        </section>
      )
  );
}

export default MainCategoriesListPage;
