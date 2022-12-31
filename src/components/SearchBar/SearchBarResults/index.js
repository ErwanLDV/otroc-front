import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AnnoucementCard from '../../AnnoucementCard';
import departmentsFilter from './filters';
import './style.scss';

function SearchBarResults() {
  const searchAnnoucements = useSelector((state) => state.search.searchAnnoucements);
  const searchTypeResult = useSelector((state) => state.search.searchTypeResult);

  let linkUrl = 'offres';
  if (searchTypeResult === 'wish') {
    linkUrl = 'demandes';
  }

  const [searchAnnoucementsResultFiltered, setSearchAnnoucementsResultFiltered] = useState(null);
  const [selectValue, setSelectValue] = useState('default');

  const currentDepartmentsResult = departmentsFilter(searchAnnoucements);

  const handleDepartmentFilter = (event) => {
    setSelectValue(event.target.value);
  };

  useEffect(() => {
    const annoucementsFiltered = searchAnnoucements.filter(
      (annoucement) => annoucement.zipcode.startsWith(selectValue),
    );
    if (selectValue !== 'default') {
      setSearchAnnoucementsResultFiltered(annoucementsFiltered);
    }
    else {
      setSearchAnnoucementsResultFiltered(null);
    }
  }, [selectValue]);

  return (
    <section>
      {currentDepartmentsResult && currentDepartmentsResult.length > 0 && (
        <select className="selectBarResult" name="departmentFilter" onChange={handleDepartmentFilter} value={selectValue}>
          <option value="default">Filtrer par département</option>
          {currentDepartmentsResult.map((department) => (
            <option
              key={department.num}
              value={department.num}
            >
              {`${department.num} - ${department.name}`}
            </option>
          ))}
        </select>
      )}
      {searchAnnoucements && searchAnnoucements.length > 0 && <h2>Résultats de la recherche :</h2>}
      <div className="searchBarResult">
        {!searchAnnoucementsResultFiltered && searchAnnoucements && searchAnnoucements.length > 0
          ? searchAnnoucements.map((item) => (
            <Link to={`/annonces/${linkUrl}/${item.id}`} key={item.id}>
              <AnnoucementCard
                key={item.id}
                title={item.title}
                content={item.description}
                pseudo={item.user.alias}
                createdAt={item.createdAt}
                category={item.categories[0].name}
                mainCategory={item.categories[0].mainCategory.name}
                logo={searchTypeResult}
                image={item.picture}
                isLended={item.isLended}
                type={item.type}
                profilImage={item.user.picture}
              />
            </Link>
          )) : !searchAnnoucementsResultFiltered && <p className="searchBarResult-p">La recherche n'a donné aucun résultats</p>}
        {searchAnnoucementsResultFiltered && searchAnnoucementsResultFiltered.map((item) => (
          <Link to={`/annonces/${linkUrl}/${item.id}`} key={item.id}>
            <AnnoucementCard
              key={item.id}
              title={item.title}
              content={item.description}
              pseudo={item.user.alias}
              createdAt={item.createdAt}
              category={item.categories[0].name}
              mainCategory={item.categories[0].mainCategory.name}
              logo={searchTypeResult}
              image={item.picture}
              isLended={item.isLended}
              type={item.type}
              profilImage={item.user.picture}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default SearchBarResults;
