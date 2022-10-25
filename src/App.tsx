import { Outlet, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./routes/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/home" element={<Home />}>
    //     <Route path="shop" element={<Shop />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
