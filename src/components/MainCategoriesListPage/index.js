import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { actionGetCategoryResults, actionGetMainCategoryResults } from '../../actions/categories';
import CategoryCard from './CategoryCard';
import './style.scss';

function MainCategoriesListPage() {
  const dispatch = useDispatch();
  const slug = useParams();

  const categoriesArray = useSelector((state) => state.categories.categoriesArray);
  const categoriesLoaded = useSelector((state) => state.categories.categoriesLoaded);

  useEffect(() => {
    if (categoriesLoaded) {
      const mainCategoryResult = categoriesArray.find((element) => element.slug === slug.slug);
      dispatch(actionGetMainCategoryResults(mainCategoryResult.id));
    }
  }, [categoriesLoaded, slug]);

  const categories = useSelector((state) => state.categories.MainCategoriesListCards);

  return (
    <section>
      <h2> page card des categories</h2>
      <div className="container-categoriesPage">
      {categories.map((item) => (
        <Link to={`/categorie/${item.slug}`} onClick={() => dispatch(actionGetCategoryResults(item.id))} key={item.id}>
          <CategoryCard key={item.id} title={item.name} />
        </Link>
      ))}
      </div>
    </section>

  );
}

export default MainCategoriesListPage;
