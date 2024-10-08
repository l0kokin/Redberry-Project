import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropertyList from "./pages/PropertyList";
import Header from "./components/Header";
import AddListingPage from "./pages/AddListingPage";
import PropertyInner from "./pages/PropertyInnerPage";
import { FilterProvider } from "./contexts/FilterContext";
import ScrollToTop from "./components/ScrollToTop";
import { AgentModalProvider } from "./contexts";

function App() {
  return (
    <FilterProvider>
      <AgentModalProvider>
        <Router>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<PropertyList />} />
            <Route path="/addListing" element={<AddListingPage />} />
            <Route path="/property/:id" element={<PropertyInner />} />
          </Routes>
        </Router>
      </AgentModalProvider>
    </FilterProvider>
  );
}

export default App;
