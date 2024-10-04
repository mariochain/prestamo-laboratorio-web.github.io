import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import AppRoutes from './routes/routes';
import Navbar from './components/NavBar';
import './App.css';
import SideBar from './components/SideBar';
import { useAuthStore } from './stores/authStore';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const { isAuthenticated } = useAuthStore();


  const toggleSidebar = () => {
    setIsSidebarVisible(prev => !prev);
  };

  return (
    <Router>
      {isAuthenticated &&
        <>
          <Navbar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
          <div className={` ${isSidebarVisible ? '' : 'sidebar-collapsed'}`}>
            <SideBar isVisible={isSidebarVisible} />
          </div>
        </>
      }
      <div className={`content ${isSidebarVisible ? '' : 'content-collapsed'} col-9`}>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
