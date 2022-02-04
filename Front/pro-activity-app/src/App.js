import './App.css';
import { useState } from 'react';
import ActivityForm from './components/ActivityForm';
import Activity from './components/Activity';

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

  function newActivity(e) {
    e.preventDefault();
    const activity = {
      id: document.getElementById('id').value,
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

  function cleanFields() {
    const activity = {
      id: document.getElementById('id').value = '',
      name: document.getElementById('name').value = '',
      title: document.getElementById('title').value = '',
      priority: document.getElementById('priority').value = '',
      description: document.getElementById('description').value = '',
    };
  }



  return (
    <>

      <ActivityForm
        activities={activities}
        newActivity={newActivity} />
      <hr />

      <div className='mt-3'>
        {activities.map((act) => (
          <Activity key={act.id} act={act} deleteActivity={deleteActivity} />
        ))}
      </div>
    </>
  );
}

export default App;
