import "./App.css";
import BlogContent from "./Pages/BlogContent";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogcontent" element={<BlogContent />} />
      </Routes>
  );
}

export default App;
