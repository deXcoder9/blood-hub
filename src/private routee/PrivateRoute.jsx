
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { Triangle } from "react-loader-spinner";
import useAuth from "../hooks/use auth/useAuth";

const PrivateRoute = ({ children }) => {
    const { userInfo, loading } = useAuth()
    if (loading) {
        // return <span className="loading loading-infinity loading-lg"></span>
        return <div className="relative min-h-screen flex justify-center items-center">
            (<Triangle
                visible={true}
                height="80"
                width="80"
                color="#6b34eb"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />)
        </div>
    }

    if (userInfo) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;