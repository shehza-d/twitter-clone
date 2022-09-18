import './App.css';
import Content from './components/content';
import Sidebar from './components/sidebar';
import Menubar from './components/menubar';
import { useState } from 'react';

const App = () => {

  const [themeMode, setThemeMode] = useState("dark")
  const toggleThemeMode = () => {
    if (themeMode === "dark") {
    setThemeMode("light")
    document.body.style.backgroundColor = 'white';
    }
    else{
      document.body.style.backgroundColor = 'black';
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
