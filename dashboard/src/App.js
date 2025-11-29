import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Protected from "./pages/Protected";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Protected />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
