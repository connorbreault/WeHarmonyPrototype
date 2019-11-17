import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "./Auth.js";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    // const { currentUser } = useContext(AuthContext);
    return (
        <AuthConsumer>
            {({ currentUser }) => (
                <Route
                    render={routeProps => !!currentUser ? (
                        <RouteComponent {...routeProps} />
                    ) : (
                            <Redirect to={"/"} />)}
                >
                </Route>
            )}
        </AuthConsumer>
    );
};

export default PrivateRoute;