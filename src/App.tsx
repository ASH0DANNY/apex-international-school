import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <>
      <Header />
      <div className="pt-[210px] md:pt-[200px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
