import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "../shared/lib/classNames/classNames";
import {AppRouter} from "./providers/AppRouter";
import {Navbar} from "../widgets/Navbar";
import {Sidebar} from "../widgets/Sidebar";



const App = () => {

    const {toggleTheme, theme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    );
}

export default App;