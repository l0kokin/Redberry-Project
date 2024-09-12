import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PropertyList from "./pages/PropertyList";
import Header from "./components/Header";
import AddListingPage from "./pages/AddListingPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PropertyList />} />
        <Route path="/addListing" element={<AddListingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
