import './style.scss';

function AnnouncementPage() {
  return (
    <div className="annoucementPage-container">
      <div>
        Annoucement
      </div>
      <div className="annoucementPage-container-img">
        <div>
          <img className="annoucementPage-container-img-photo" src="https://www.assuronline.com/wp-content/uploads/2022/01/103948580_l-scaled.jpg" alt="voiture" />
        </div>
        <div className="annoucementPage-container-user">
          informations troqueur
        </div>
      </div>
      <div className="annoucementPage-container-content">
        Title
        content
      </div>
    </div>
  );
}

export default AnnouncementPage;
