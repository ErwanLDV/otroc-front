import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetCategoryResults } from '../../actions/categories';
import './style.scss';
import AnnoucementCard from '../AnnoucementCard';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { actionGetOneOfferAnnoucement, actionGetOneWishAnnoucement } from '../../actions/annoucements';

function SearchResult() {
  const dispatch = useDispatch();
  const categoryResults = useSelector((state) => state.categories.categoryResults);
  // console.log(categoryResults);
  const { offers, wishes } = categoryResults;
  // useEffect(() => {
  //   console.log(categoryResults);

  //   const { offers, wishes } = categoryResults;
  //   if (offers && wishes) {
  //     const newCategoryResults = offers.concat(wishes);
  //     console.log(newCategoryResults);
  //   }
  // }, [categoryResults]);
  // console.log(newCategoryResults);
  const navigate = useNavigate();
  return (
    <section>
      <h2>Résultats de la recherche</h2>

      {offers && offers.map((item) => (
        <div onClick={
          () => {
            // ceci est un test avec un set timeout
            dispatch(actionGetOneOfferAnnoucement(item.id));
            console.log('onClick');
            setTimeout(() => {
              navigate(`/annonces/offers/${item.id}`);
            }, 200);
          }
        }
        >
          <AnnoucementCard
            key={item.id}
            title={item.title}
            content={item.description}
            pseudo={item.user.alias}
            createdAt={item.createdAt}
            category={item.categories[0].name}
            logo="offer"
            onClick={
              () => {
                dispatch(actionGetOneOfferAnnoucement(item.id));
                console.log('onClick');
                setTimeout(() => {
                  (<Navigate to={`/annonces/offers/${item.id}`} />);
                }, 200);
              }
            }
              // image={item.picture}
          />
        </div>
      ))}
      {wishes && wishes.map((item) => (
        <Link to={`/annonces/wishes/${item.id}`} key={item.id} onClick={() => dispatch(actionGetOneWishAnnoucement(item.id))}>
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
