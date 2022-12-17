import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({
  redirectPath,
  children,
}) {
  const isLogged = useSelector((state) => state.user.isLogged);

  if (!isLogged) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}

ProtectedRoute.propTypes = {
  redirectPath: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ProtectedRoute;
