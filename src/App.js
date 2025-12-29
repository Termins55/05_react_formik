import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Snowfall from "react-snowfall";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

import BasePage from "./components/BasePage";
function App() {
  return (
    <Router>
      <Snowfall color='#82C3D9'/>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
