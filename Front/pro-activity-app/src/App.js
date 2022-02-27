import './App.css';
import { useState, useEffect } from 'react';
import ActivityForm from './components/ActivityForm';
import ActivitiesList from './components/ActivitiesList';
import api from './api/atividade';

function App() {
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState({id: 0});

  const takeAllActivies = async () => {
    const response = await api.get('activity');
    return response.data;
  };

  useEffect(() => {
    const getActivity = async () => {
      const allActivities = await takeAllActivies();
      if(allActivities) setActivities(allActivities);
    };
    getActivity();
  }, [])

  function cleanFields() {
      document.getElementById('name').value = '';
      document.getElementById('title').value = '';
      document.getElementById('priority').value = '';
      document.getElementById('description').value = '';
  };

  const newActivity = async (act) => {
    const response = await api.post('activity', act);
    if (act.name === '') {
      alert(`Os Campos são obrigatórios`);
      document.getElementById('name').style.borderColor = "red";
    } else {
      setActivities([...activities, response.data]);
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
