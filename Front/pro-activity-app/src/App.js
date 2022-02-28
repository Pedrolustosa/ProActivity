import './App.css';
import api from './api/atividade';
import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ActivityForm from './components/ActivityForm';
import ActivitiesList from './components/ActivitiesList';

function App() {
  const [show, setShow] = useState(false);
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState({id: 0});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
