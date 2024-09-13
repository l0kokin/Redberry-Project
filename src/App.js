import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PropertyList from "./pages/PropertyList";
import Header from "./components/Header";
import AddListingPage from "./pages/AddListingPage";
import PropertyInner from "./pages/PropertyInner";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PropertyList />} />
        <Route path="/addListing" element={<AddListingPage />} />
        <Route path="/property/:id" element={<PropertyInner />} />
      </Routes>
    </Router>
  );
}

export default App;
