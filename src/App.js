import "./App.css";
// import './index.css'
import Content from "./components/content";
import Sidebar from "./components/sidebar";
import Menubar from "./components/menubar";
import Signup from "./components/signup";
import Login from "./components/login";
import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  orderBy,
  deleteDoc,
  updateDoc,
  limit,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDSFR44NqKejUJV8TKLhlAOD63wQ4bpOGM",
  authDomain: "twetterdb.firebaseapp.com",
  projectId: "twetterdb",
  storageBucket: "twetterdb.appspot.com",
  messagingSenderId: "494029255747",
  appId: "1:494029255747:web:44e7e0908cf662afa490f6",
};
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const App = () => {
  // const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');nnif (prefersDarkScheme.matches) {n  document.body.classList.add('dark-theme');n} else {n  document.body.classList.remove('dark-theme');n}
  const [themeMode, setThemeMode] = useState("light");
  const [isLogin, setIsLogin] = useState(false);

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
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="gallery" element={<Gallery />} /> */}
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
