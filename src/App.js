import "./App.css";
// import './index.css'
import Content from "./components/content";
import Sidebar from "./components/sidebar";
import Menubar from "./components/menubar";
import Signup from "./components/signup";
import Login from "./components/login";

import About from "./components/extras/about";
import Profile from "./components/extras/profile";

import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import { auth } from "./firebase";

const App = () => {
  // const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');nnif (prefersDarkScheme.matches) {n  document.body.classList.add('dark-theme');n} else {n  document.body.classList.remove('dark-theme');n}
  const [themeMode, setThemeMode] = useState("light");
  const [isLogin, setIsLogin] = useState(true);

  const toggleThemeMode = () => {
    if (themeMode === "dark") {
      setThemeMode("light");
    } else {
      setThemeMode("dark");
    }
    // console.log(themeMode)
  };

  return (
    <div className={`App ${themeMode === "dark" ? "dark" : "light"}`}>
      {isLogin ? null : (
        <ul>
          <li>
            <Link to={`/`}>Login</Link>
          </li>
          <li>
            <Link to={`/signup`}>Signup</Link>
          </li>
        </ul>
      )}

      {isLogin ? (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Menubar />
                <Content />
                <Sidebar toggleThemeMode={toggleThemeMode} mode={themeMode} />
              </>
            }
          />

          {/* to remove */}
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          {/* to remove */}

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      )}

      {/* <Menubar />
      <Content />
      <Sidebar toggleThemeMode={toggleThemeMode} mode={themeMode}/> */}
      {/* <Login/>
      <Signup /> */}
    </div>
  );
};

export default App;
