import { Outlet, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./routes/home";
import SignIn from "./routes/sign-in";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
