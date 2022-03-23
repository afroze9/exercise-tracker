import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar.component';
import ExerciseList from './components/ExerciseList.component';
import EditExercise from './components/EditExercise.component';
import AddExercise from './components/AddExercise.component';
import CreateUser from './components/CreateUser.component';

function App() {
  return (
    <Router>
      <Navbar />
      <Outlet />
      <Routes>
        <Route exact path="/" element={<ExerciseList />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/add" element={<AddExercise />} />
        <Route path="/user" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
