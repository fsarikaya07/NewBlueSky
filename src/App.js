import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import "./App.css";
import Home01 from "./components/pages/Home01";
import OverView from "./components/pages/OverView";
import AccComponent from "./components/pages/Account";
import RiskManagement from "./components/pages/RiskManagement";
import Contact01 from "./components/pages/Contact01";
import Platform from "./components/pages/Platform";
import Whatsapp from "./components/layouts/Whatsapp";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Whatsapp/>
        <Routes>
          <Route path={`/`} exact element={<Home01 />} />
          <Route path={`/about`} exact element={<OverView />} />
          <Route path={`/account`} exact element={<AccComponent />} />
          <Route path={`/money-deposit`} exact element={<RiskManagement />} />
          <Route path={`/contact`} exact element={<Contact01 />} />
          <Route path={`/platforms`} exact element={<Platform />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
