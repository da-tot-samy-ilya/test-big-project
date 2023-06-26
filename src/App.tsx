import {Link, Route, Routes} from "react-router-dom"
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {Suspense, useContext} from "react";
import {Theme, ThemeContext, ThemeContextProps} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";


const App = () => {

    const {toggleTheme, theme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Change theme</button>
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