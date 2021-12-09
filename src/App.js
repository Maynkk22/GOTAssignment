import Header from "./container/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HouseListing from "./container/HouseListing";
import HouseDetails from "./container/HouseDetails";
import "./App.css";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<HouseListing />} />
          <Route path="/houses/:houseId" exact element={<HouseDetails />} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
