import './style.scss';
import PropTypes from 'prop-types';

function CategoryCard({ title, image }) {
  return (
    <div className="categorycard">
      <div className="categorycard-header">
        <img src={image} alt="Représentation graphique de la catégorie" />
      </div>
      <div className="categorycard-body">
        <h4>
          {title}
        </h4>
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CategoryCard;
