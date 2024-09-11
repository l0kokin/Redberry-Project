import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PropertyList from "./pages/PropertyList";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PropertyList />} />
      </Routes>
    </Router>
  );
}

export default App;
