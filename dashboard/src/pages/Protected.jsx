import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Home from "../components/Home";  // real dashboard

export default function Protected() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3004/",
          {},
          { withCredentials: true }
        );

        if (!res.data.status) {
          navigate("/login");
        } else {
          setUsername(res.data.user);
        }
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };

    verifyUser();
  }, [navigate]);

  const handleLogout = () => {
    document.cookie = "token=; Max-Age=0";
    navigate("/login");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
          background: "#eee",
        }}
      >
        <h4>Welcome, {username}</h4>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <Home />
    </div>
  );
}