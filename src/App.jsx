import SideNavigation from './components/SideNavigation'
import SplashScreen from './components/SplashScreen';
import './App.css'

const App = () => {
  return (
    <div className="flex">
      <SideNavigation />
      <div className="flex-1">
        <SplashScreen/>
      </div>
    </div>
  );
};

export default App;
