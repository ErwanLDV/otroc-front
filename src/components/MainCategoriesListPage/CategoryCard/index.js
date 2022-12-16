import './style.scss';

function CategoryCard({ title, image }) {
  return (
    <div className="categorycard">
      <div className="categorycard-header">
        <img src={image} alt="rover" />
      </div>
      <div className="categorycard-body">
        <h4>
          {title}
        </h4>
      </div>
    </div>
  );
}

CategoryCard.defaultProps = {
  title: 'Truck',
  image: 'https://thumbs.dreamstime.com/b/vieux-camion-pourri-gradient-de-isol%C3%A9-dans-le-fond-blanc-213098076.jpg',
};

export default CategoryCard;
