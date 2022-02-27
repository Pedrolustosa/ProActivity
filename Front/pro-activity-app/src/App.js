import './App.css';
import { useState, useEffect } from 'react';
import ActivityForm from './components/ActivityForm';
import ActivitiesList from './components/ActivitiesList';
import api from './api/atividade';

function App() {
  const [index] = useState(0);
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState({id: 0});

  const takeAllActivies = () => {
    const response = api.get('actitivity');
    return response.data;
  };

  useEffect(() => {
    const getActivity = () => {
      const allActivities = takeAllActivies();
      if(allActivities) setActivities(allActivities);
    };
    getActivity();
  }, [activities])

  function cleanFields() {
      document.getElementById('name').value = '';
      document.getElementById('title').value = '';
      document.getElementById('priority').value = '';
      document.getElementById('description').value = '';
  };

  function newActivity(act) {

    if (act.name === '') {
      alert('Os Campos são obrigatórios');
    } else {
      setActivities([...activities, { ...act, id: index}]);
      cleanFields();
    }
  };

  function cancelActivity(){
    setActivity({id: 0});
  }

  function updateActivity(act){
    setActivities(activities.map(item => item.id === act.id ? act : item));
    setActivity({id: 0});
  }

  function deleteActivity(id) {
    const activityFilter = activities.filter((activity) => activity.id !== id);
    setActivities([...activityFilter]);
  };

  function editActivity(id) {
    const activity = activities.filter((activity) => activity.id === id);
    setActivity(activity[0]);
    console.log(activity);
  };

  return (
    <>
      <ActivityForm
        activities={activities}
        activSelected={activity}
        newActivity={newActivity}
        updateActivity={updateActivity}
        cancelActivity={cancelActivity}
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
