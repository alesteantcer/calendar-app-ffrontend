import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ isLoggedIn, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			component={(props) =>
				!isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
			}
		/>
	);
};

export default PublicRoute;

PublicRoute.protoTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};
