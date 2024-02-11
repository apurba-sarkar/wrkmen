import { Homepage } from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Offerings from "./pages/Offerings";
import Industries from "./pages/Industries";
import Aboutus from "./pages/Aboutus";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
// import "./api/countryapi"
const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Offerings" element={<Offerings/>} />
        <Route path="/Industries" element={<Industries/>} />
        <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/Insights" element={<Insights/>} />
        <Route path="/Careers" element={<Careers/>} />
        
      </Routes>
    </div>
  );
};

export default App;
