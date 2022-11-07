import './App.css';
// import './index.css'
import Content from './components/content';
import Sidebar from './components/sidebar';
import Menubar from './components/menubar';
import Signup from './components/signup';
import Login from './components/login';
import { useState } from 'react';

const App = () => {
  // const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');nnif (prefersDarkScheme.matches) {n  document.body.classList.add('dark-theme');n} else {n  document.body.classList.remove('dark-theme');n}
  const [themeMode, setThemeMode] = useState("light")

  const toggleThemeMode = () => {
    if (themeMode === "dark") {
    setThemeMode("light")
    }
    else{
    setThemeMode("dark")
    }
    // console.log(themeMode)
  }

  
  return (
    <div className={`App ${themeMode==="dark"?"dark":"light"}`}  >
      {/* <Menubar />
      <Content />
      <Sidebar toggleThemeMode={toggleThemeMode} mode={themeMode}/> */}
 <Login/>
    </div>
  );
}

export default App;
