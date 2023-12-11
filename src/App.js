import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import { Routes, Route } from "react-router-dom"
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';

function App() {
  return (
    <div className="App">
      <Banner />
      {/* <Switch> */}
      <Routes >


        <Route strict exact path="/" element={TodoPage} />
        <Route strict exact path="/followers" element={FollowersPage} />
        {/* </Switch> */}
      </Routes>
    </div>
  );
}

export default App;
