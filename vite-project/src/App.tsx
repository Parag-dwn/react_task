import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import FirstPage from "./components/Firstpage";
import SecondPage from "./components/Secondpage";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/first-page" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/" element={<Navigate to="/first-page" />} />
      </Routes>
    </Router>
  );
};

export default App;
