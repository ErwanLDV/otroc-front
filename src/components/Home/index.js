import './style.scss';
import SearchResult from '../SearchResults';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionGetOffersAnnoucements, actionGetOneOfferAnnoucement, actionGetOneWishAnnoucement, actionGetWishesAnnoucements, actionSaveOneOfferAnnoucement } from '../../actions/annoucements';
import AnnoucementCard from '../AnnoucementCard';

function Home() {
  const dispatch = useDispatch();

  const annoucementsArray = useSelector((state) => state.annoucements.currentAnnoncement);
  console.log(annoucementsArray);
  useEffect(() => {
    dispatch(actionGetOneWishAnnoucement(5));
  }, []);
  return (
    <section>
      <h2>Home</h2>
      {/* <AnnouncementPage /> */}
      {/* <SearchResult /> */}
      {/* {annoucementsArray.map((item) => (
        <AnnoucementCard key={item.id} title={item.title} content={item.description} />
      ))} */}
    </section>
  );
}

export default Home;
