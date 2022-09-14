import './App.css';
import Content from './components/content';
import Sidebar from './components/sidebar';
import Menubar from './components/menubar';

const App = () => {
  return (
    <div className="App">
      <Menubar />
      <Content />
      <Sidebar />
    </div>
  );
}

export default App;
