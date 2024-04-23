import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRout = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return <div>
      Loading .......
    </div>
  }

  if(user){
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRout.propTypes={
  children: PropTypes.node,
}
export default PrivateRout;