import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminProtectedRoute = ({ component: Component, ...rest }) => {
  const admintToken = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        admintToken ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location, login: true },
            }}
          />
        )
      }
    />
  );
};

export default AdminProtectedRoute;