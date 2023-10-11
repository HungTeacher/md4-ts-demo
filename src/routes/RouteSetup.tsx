
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/homes/Home";


export default function RouteSetup() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    )
}
