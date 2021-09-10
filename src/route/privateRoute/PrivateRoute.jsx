import { Route, Redirect } from "react-router-dom"

export const PrivateRoute = ({Component, isAuth, path, exact, ...props}) => {
    return (
        <Route exact={exact} path={path}>
            {
                isAuth ? <Component path/> : <Redirect to="/authorization"/>
            }
        </Route>
    );
}
