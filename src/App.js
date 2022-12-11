import Canvas from './components/Canvas';
import SettingsBar from './components/SettingsBar';
import Toolbar from './components/Toolbar';
import './styles/app.scss';

const App = () => {
  return (
    <div className='app'>
      <SettingsBar />
      <Toolbar />
      <Canvas />
    </div>
  );
};

export default App;
