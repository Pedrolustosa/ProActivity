import './App.css';
import api from './api/atividade';
import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ActivityForm from './components/ActivityForm';
import ActivitiesList from './components/ActivitiesList';

function App() {
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState({id: 0});

  const handleActivityModal = () => setShowActivityModal(!showActivityModal);

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
  };

  const updateActivity = async (act) => {
    const response = await api.put(`activity/${act.id}`, act);
    const { id } = response.data;
    setActivities(activities.map((item) => (item.id === id ? response.data : item)));
    setActivity({id: 0});
  };

  const deleteActivity = async (id) =>  {
    if(await api.delete(`activity/${id}`))
    {
      const activityFilter = activities.filter((activity) => activity.id !== id);
      setActivities([...activityFilter]);
    }
  };

  function editActivity(id) {
    const activity = activities.filter((activity) => activity.id === id);
    setActivity(activity[0]);
    handleActivityModal();
  };

  return (
    <>
        <div className='d-flex justify-content-between align-items-end mt-2 mb-3 pb-2 border-bottom border-1'>
          <h1 className='m-0 p-0'>Atividade {activity.id !== 0 ? activity.id : ''}</h1>

          <Button variant="outline-secondary" onClick={handleActivityModal}>
            <i className='fas fa-plus'></i>
          </Button>
        </div>

        <ActivitiesList
          activities={activities}
          deleteActivity={deleteActivity}
          editActivity={editActivity}
        />

        <Modal show={showActivityModal} size="lg" onHide={handleActivityModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Atividade {activity.id !== 0 ? activity.id : ''}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ActivityForm
              activities={activities}
              activSelected={activity}
              newActivity={newActivity}
              updateActivity={updateActivity}
              cancelActivity={cancelActivity}
            />
          </Modal.Body>
        </Modal>
    </>
  );
}

export default App;
