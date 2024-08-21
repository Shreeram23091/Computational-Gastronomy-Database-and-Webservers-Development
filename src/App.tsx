// App.tsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Predict from "./components/Predict";
import PredictMini from "./components/PredictMini";
import ContactUs from "./components/ContactUs";
import UmamiDB from "./components/Search"; // Import UmamiDB component

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/predict-mini" element={<PredictMini />} />
          <Route path="/search" element={<UmamiDB />} />
          <Route path="/umami-db" element={<UmamiDB />} /> {/* Add route for UmamiDB */}
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
