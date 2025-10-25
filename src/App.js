import {Routes, Route, useLocation} from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public/Public'
import Login from './features/auth/Login';
import DashLayout from './components/Private/DashLayout';
import Project from './components/Project/Project';
import About from './components/Public/About/About';
import ProjectPage from './components/Project/ProjectPage';
import ProjectLayout from './components/Project/ProjectLayout';
import DashBody from './components/Private/DashBody';
import DashEdit from './components/Private/DashEdit';
import { useAuth } from './app/context/AuthContext';
import { useEffect } from 'react';
import { attachAuth } from './app/api/api';
import RequireAuth from './features/protection/RequireAuth';
import { AnimatePresence } from 'framer-motion';
import ScrollTop from './components/ScrollTop';

function App() {
  const {auth, setAuth} = useAuth();
  const location = useLocation();
  useEffect(() => {
    attachAuth(auth.accessToken, setAuth);
  }, [auth, setAuth]);
  return (
    // These routes are hierarchical in structure
    <>
    <ScrollTop />
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
      {/* this is the root route that has an 'index.' The index is the route it goes to first */}
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />

        <Route path='projects' element={<ProjectLayout />}>
          <Route index element={<Project />} /> 
          <Route path=':slug' element={<ProjectPage />} />
        </Route>
        <Route path='about' element={<About />} />

        {/* after that we have the login which would be /login  */}
        <Route path='login' element={<Login />}/>

        {/* and then we have the /dash but this has its own index that it defaults to */}
        <Route element={<RequireAuth />}>
          <Route path='dash' element={<DashLayout />}>
            <Route index element={<DashBody />} />
            <Route path='create' element={<DashEdit />} />
            <Route path=':slug' element={<DashEdit />} />
          </Route>
        </Route>

      </Route>
    </Routes>
    </AnimatePresence>
    </>
  );
}

export default App;
