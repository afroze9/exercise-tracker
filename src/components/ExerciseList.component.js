import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Exercise from './Exercise.component';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/exercises/')
      .then(res => {
        if (res.data.length > 0) {
          setExercises(res.data.map(exercise => exercise));
        }
      });
  }, []);

  const deleteExercise = (id) => {
    axios.delete('http://localhost:5000/exercises/' + id)
      .then(res => console.log(res.data));

    setExercises(exercises.filter(exercise => exercise._id !== id));
  }

  const exerciseList = () => {
    return (
      exercises.map(exercise => {
        return <Exercise exercise={exercise} deleteExercise={deleteExercise} key={exercise._id} />
      })
    )
  }

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exerciseList()}
        </tbody>
      </table>
      <p>
        <Link to="/create" className="btn btn-primary">Log New Exercise</Link>
      </p>
    </div>
  )
}

export default ExerciseList;