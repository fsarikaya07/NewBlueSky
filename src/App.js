import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import "./App.css";
import Home01 from "./components/pages/Home01";

import AccComponent from "./components/pages/Account";
import RiskManagement from "./components/pages/Deposit";
import Contact01 from "./components/pages/Contact01";
import Platform from "./components/pages/Platform";
import Whatsapp from "./components/layouts/Whatsapp";
import OverView from "./components/pages/About";
import Platform2 from "./components/pages/Platform2";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Whatsapp />
        <Routes>
          <Route path={`/`} exact element={<Home01 />} />
          <Route path={`/about`} exact element={<OverView />} />
          <Route path={`/account`} exact element={<AccComponent />} />
          <Route path={`/money-deposit`} exact element={<RiskManagement />} />
          <Route path={`/contact`} exact element={<Contact01 />} />
          <Route path={`/platforms`} exact element={<Platform2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
