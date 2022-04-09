import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			component={(props) =>
				isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

export default PrivateRoute;

PrivateRoute.protoTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};
