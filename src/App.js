import {Header} from "./components/header/Header";
import {Main} from "./pages/main/Main";
import {Footer} from "./components/footer/Footer";
import {Authors} from "./pages/authors/Authors";
import {Works} from "./pages/works/Works";
import {Regis} from "./pages/regis/Regis";
import {Auth} from "./pages/auth/Auth";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import {useEffect, useState} from "react";
import {Profile} from "./pages/profile/Profile";
import {Users} from "./pages/users/Users";
import {Work} from "./pages/work/Work";

function App() {
    const [ modal, setModal ] = useState(false)
    const [isAuth, setIsAuth] = useState(() => JSON.parse(localStorage.getItem("user")));
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(isAuth))
    }, [isAuth])
    return (
        <Router>
            <div>
                <Header isAuth={isAuth} setIsAuth={setIsAuth} modal={modal} setModal={setModal}/>
                {/*<PrivateRoute path="/dashboard" isAuth={isAuth} Component={() => }/>*/}
                <Switch>
                    <Route path="/authors-works">
                        <Works/>
                    </Route>
                    <Route path="/authors">
                        <Authors/>
                    </Route>
                    <Route path="/registration">
                        <Regis/>
                    </Route>
                    <Route path="/authorization">
                        <Auth/>
                    </Route>
                    <Route path="/dashboard">
                        <Profile />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/work">
                        <Work />
                    </Route>
                    <Route path="/">
                        <Main modal={modal} setModal={setModal}/>
                    </Route>
                    <Route exact path="*">
                        404 Ошибка
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    )

}

export default App;