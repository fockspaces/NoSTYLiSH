import ProductForm from "./components/ProductForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/product" element={<ProductForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
