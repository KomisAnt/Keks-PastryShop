import { Navigate } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../../const';


type PrivateRouteProps = {
  userAutorizationStatus: AutorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { userAutorizationStatus, children } = props;
  return (
    userAutorizationStatus === AutorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
