import './App.css';
import Content from './components/content';
import Sidebar from './components/sidebar';
import Menubar from './components/menubar';
import { useState } from 'react';

const App = () => {
  // const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');nnif (prefersDarkScheme.matches) {n  document.body.classList.add('dark-theme');n} else {n  document.body.classList.remove('dark-theme');n}
  const [themeMode, setThemeMode] = useState("dark")

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
      <Menubar />
      <Content />
      <Sidebar toggleThemeMode={toggleThemeMode} mode={themeMode}/>
    </div>
  );
}

export default App;
