import {Route, Routes} from "react-router-dom";
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
import Login from "./pages/Login";

function App() {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center text-9xl">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
