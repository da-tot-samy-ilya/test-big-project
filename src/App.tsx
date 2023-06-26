import {Link, Route, Routes} from "react-router-dom"
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {Suspense} from "react";
const App = () => {
    return (
        <div className="app">
            <Link to="/about">About</Link>
            <Link to="/">Main</Link>
            <Suspense fallback={<div>loading</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync/>}></Route>
                    <Route path={"/"} element={<MainPageAsync/>}></Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;