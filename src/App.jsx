import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Aboutus from "./Component/Aboutus";
import HowweHelp from "./Component/Howwehelp";
import Applytopresent from "./Component/Applytopresent";
import Attendameeting from "./Component/Attendameeting";
import Futuremeetings from './Component/Futuremeetings'
import Media from './Component/Media'
function App() {
  return (
    <div>
      <div className="header">
      <h3 className="heading">the enterpreneural hour</h3>
      </div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="hwhelp" element={<HowweHelp />} />
          <Route path="atpresent" element={<Applytopresent />} />
          <Route path="aameeting" element={<Attendameeting />} />
          <Route path="fmeetings" element={<Futuremeetings />} />
          <Route path="media" element={<Media />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
