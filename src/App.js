import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar.component';
import ExerciseList from './components/ExerciseList.component';
import EditExercise from './components/EditExercise.component';
import CreateExercise from './components/CreateExercise.component';
import CreateUser from './components/CreateUser.component';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Outlet />
        <Routes>
          <Route exact path="/" element={<ExerciseList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
