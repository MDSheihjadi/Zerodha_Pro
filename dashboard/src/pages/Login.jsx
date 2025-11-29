// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:3004/login", form, {
//         withCredentials: true,
//       });

//       if (res.data.success) {
//         alert("Login successful");
//         navigate("/"); // go to dashboard
//       } else {
//         alert(res.data.message || "Login failed");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: 300 }}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//         <button type="button" onClick={() => navigate("/signup")}>
//           New user? Signup
//         </button>
//       </form>
//     </div>
//   );
// }

// This code defines a Login component that manages user authentication.
//WITH STYLING
// ...existing code...
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg,#0f172a 0%, #0f375a 100%)",
    padding: "2rem",
    boxSizing: "border-box",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  card: {
    background: "#fff",
    borderRadius: 12,
    padding: "2rem",
    width: "100%",
    maxWidth: 420,
    boxShadow: "0 8px 24px rgba(2,6,23,0.4)",
  },
  header: {
    margin: 0,
    marginBottom: "1rem",
    color: "#0b2540",
    fontSize: "1.5rem",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  input: {
    padding: "0.75rem 0.9rem",
    borderRadius: 8,
    border: "1px solid #d1d5db",
    fontSize: "0.95rem",
    outline: "none",
    transition: "box-shadow .15s, border-color .15s",
  },
  inputFocus: {
    boxShadow: "0 0 0 4px rgba(59,130,246,0.12)",
    borderColor: "#3b82f6",
  },
  actions: {
    display: "flex",
    gap: "0.5rem",
    marginTop: "0.25rem",
  },
  primaryBtn: {
    flex: 1,
    padding: "0.75rem",
    borderRadius: 8,
    border: "none",
    background: "linear-gradient(90deg,#2563eb,#60a5fa)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 600,
  },
  secondaryBtn: {
    flex: 1,
    padding: "0.75rem",
    borderRadius: 8,
    border: "1px solid #e5e7eb",
    background: "#fff",
    color: "#0b2540",
    cursor: "pointer",
    fontWeight: 600,
  },
  smallNote: {
    fontSize: "0.85rem",
    color: "#6b7280",
    textAlign: "center",
    marginTop: "0.75rem",
  },
};

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [focused, setFocused] = useState({ email: false, password: false });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3004/login", form, {
        withCredentials: true,
      });

      if (res.data.success) {
        alert("Login successful");
        navigate("/"); // go to dashboard
      } else {
        alert(res.data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.header}>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocused((s) => ({ ...s, email: true }))}
            onBlur={() => setFocused((s) => ({ ...s, email: false }))}
            required
            style={{
              ...styles.input,
              ...(focused.email ? styles.inputFocus : {}),
            }}
            aria-label="Email"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            onFocus={() => setFocused((s) => ({ ...s, password: true }))}
            onBlur={() => setFocused((s) => ({ ...s, password: false }))}
            required
            style={{
              ...styles.input,
              ...(focused.password ? styles.inputFocus : {}),
            }}
            aria-label="Password"
          />
          <div style={styles.actions}>
            <button type="submit" style={styles.primaryBtn}>
              Login
            </button>
            <button
              type="button"
              onClick={() => navigate("/signup")}
              style={styles.secondaryBtn}
            >
              New user? Signup
            </button>
          </div>
        </form>
        <div style={styles.smallNote}>
          Use a valid account to access the dashboard.
        </div>
      </div>
    </div>
  );
}
// ...existing code...
