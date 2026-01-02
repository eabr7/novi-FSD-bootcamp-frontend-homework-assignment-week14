import './App.css'
import logo from './assets/logo-white.png'
import Homepage from "./pages/homepage/Homepage.jsx";
import NewPostPage from "./pages/NewPostPage/NewPostPage.jsx";
import OverviewPage from "./pages/OverviewPage/OverviewPage.jsx";
import Error404Page from "./pages/Error404Page/Error404Page.jsx";
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="page-container">
            <img src={logo} alt="Company logo"/>
            <h1>Begin hier met het maken van jouw blog-applicatie!</h1>

            {/* Toekomstige menubalk... */}
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/newpost" element={<NewPostPage />}/>
                <Route path="/overview" element={<OverviewPage />}/>
                <Route path="*" element={<Error404Page />}/>
            </Routes>
            {/* Eventuele footer ... */}

        </div>
    )
}

export default App
