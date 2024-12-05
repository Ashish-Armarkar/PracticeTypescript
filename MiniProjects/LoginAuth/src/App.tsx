import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { UsersProvider } from "./Store/Store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Login from "./Components/Login";

const Reg = lazy(() => import("./Components/Reg"));
const Loading = lazy(() => import("./Components/Loading"));
const Home = lazy(() => import("./Components/Home"));
function App() {
  return (
    <Router>
      <UsersProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Reg />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Suspense>
      </UsersProvider>
    </Router>
  );
}

export default App;
