import './App.css';
import { useState } from 'react';
import ActivityForm from './components/ActivityForm';
import ActivitiesList from './components/ActivitiesList';

let initialState = [
  {
    id: 1,
    name: "Name 0",
    title: "Title 0",
    priority: "1",
    description: "Description 0",
  },
];

function App() {
  const [activities, setActivities] = useState(initialState)
  const [activity, setActivitie] = useState({})

  function cleanFields() {
      document.getElementById('id').value = '';
      document.getElementById('name').value = '';
      document.getElementById('title').value = '';
      document.getElementById('priority').value = '';
      document.getElementById('description').value = '';
  }

  function newActivity(e) {
    e.preventDefault();
    const activity = {
      id: Math.max.apply(Math, activities.map(item => item.id)) + 1,
      name: document.getElementById('name').value,
      title: document.getElementById('title').value,
      priority: document.getElementById('priority').value,
      description: document.getElementById('description').value,
    };
    if (activity.name === '') {
      alert('Os Campos são obrigatórios');
    } else {
      setActivities([...activities, { ...activity }]);
      cleanFields();
    }
  }

  function deleteActivity(id) {
    const activityFilter = activities.filter(activity => activity.id !== id);
    setActivities([...activityFilter]);
  }
  function editActivity(id) {
    const activity = activities.filter(activity => activity.id === id);
    setActivitie(activity[0])
  }

  

  return (
    <>

      <ActivityForm
        activities={activities}
        newActivity={newActivity}
        ativSelected={activity}
      />
      <hr />
      <ActivitiesList
        activities={activities}
        deleteActivity={deleteActivity}
        editActivity={editActivity}
      />
    </>
  );
}

export default App;
