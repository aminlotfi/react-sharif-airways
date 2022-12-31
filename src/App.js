import {Route, Routes} from "react-router-dom";
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
import Login from "./pages/Login";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
