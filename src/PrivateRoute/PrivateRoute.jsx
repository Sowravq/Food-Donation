import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
 

const PrivateRoute = ({children}) => {
    const {information,loading}=useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="flex justify-center items-center mt-40 mb-40">
            <span className="loading loading-spinner loading-lg "></span>
        </div>
    }

    if (information) {
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;
PrivateRoute.propTypes={
    children:PropTypes.object
}