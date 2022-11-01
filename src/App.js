
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Route/Nav';
import { PublicRoute } from './Components/Route/PublicRoute';
import app from './firebase.init';
import {getAuth} from 'firebase/auth'
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        {PublicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>

    </div>
  );
}

export default App;
