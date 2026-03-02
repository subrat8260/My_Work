import { Routes, Route } from "react-router";
import Page from "./components/pages/page";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}
export default App;
