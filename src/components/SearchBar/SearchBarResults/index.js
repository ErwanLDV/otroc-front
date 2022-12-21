import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AnnoucementCard from '../../AnnoucementCard';
import './style.scss';

function SearchBarResults() {
  const searchAnnoucements = useSelector((state) => state.search.searchAnnoucements);
  console.log(searchAnnoucements);
  const searchTypeResult = useSelector((state) => state.search.searchTypeResult);

  return (
    <section>
      <div className="searchBarResult">
        {searchAnnoucements && searchAnnoucements.length > 0 ? searchAnnoucements.map((item) => (
          <Link key={item.id}>
            <AnnoucementCard
              key={item.id}
              title={item.title}
              content={item.description}
              pseudo={item.user.alias}
              createdAt={item.createdAt}
              category={item.categories[0].name}
              mainCategory={item.categories[0].mainCategory.name}
              logo={searchTypeResult}
            // image={item.picture}
            />
          </Link>
        )) : <p className="searchBarResult-p">La recherche n'a donné aucun résultats</p>}
      </div>
    </section>

  );
}

export default SearchBarResults;
