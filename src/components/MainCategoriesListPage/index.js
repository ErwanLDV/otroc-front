import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionGetCategoryResults } from '../../actions/categories';
import CategoryCard from './CategoryCard';
import './style.scss';

function MainCategoriesListPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.MainCategoriesListCards);

  return (
    <section>
      <h2> page card des categories</h2>
      {categories.map((item) => (
        <Link to={`/categorie/${item.slug}`} onClick={() => dispatch(actionGetCategoryResults(item.id))} key={item.id}>
          <CategoryCard key={item.id} title={item.name} />
        </Link>
      ))}
    </section>

  );
}

export default MainCategoriesListPage;
