
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Games from "../Games/Games";
import GameInnerPage from "../GameInnerPage/GameInnerPage";


export default function RootContainer() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Games />} />
                <Route path='/*' element={<GameInnerPage />} />
            </Routes>
        </Router>
    );
}
