import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { ProductCatalog } from "./pages/ProductCatalog/ProductCatalog";

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LandingPage />} />

          <Route path="/about" element={<LandingPage />} />

          <Route path="/faq" element={<LandingPage />} />

          <Route path="/catalog" element={<ProductCatalog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
