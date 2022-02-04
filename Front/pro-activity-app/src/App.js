import './App.css';
import { useState } from 'react';
import ActivityForm from './components/ActivityForm';

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

  function priorityLabel(param) {
    switch (param) {
      case '1':
        return 'Baixa';
      case '2':
        return 'Normal';
      case '3':
        return 'Alta';
      default:
        return 'Não Definido';
    }
  }

  function priorityStyle(param, icon) {
    switch (param) {
      case '1':
        return icon ? 'smile' : 'success';
      case '2':
        return icon ? 'meh' : 'warning';
      case '3':
        return icon ? 'frown' : 'danger';
      default:
        return 'Não Definido';
    }
  }

  return (
    <>

      <ActivityForm
        activities={activities}
        newActivity={newActivity} />
      <hr />

      <div className='mt-3'>
        {activities.map((act) => (
          <div key={act.id} className={'card mb-2 shadow-lg border-3 border-' + priorityStyle(act.priority)}>
            <div className='card-body'>
              <div className='d-flex justify-content-between'>
                <h5 className='card-title'>
                  <span className={'badge rounded-pill me-1 bg-' + priorityStyle(act.priority)}>
                    {act.id}
                  </span>
                  - Título
                </h5>
                <h6>
                  Prioridade:
                  <span className={'ms-1 text-' + priorityStyle(act.priority)}>
                    <i className={'me-1 far fa-' + priorityStyle(act.priority, true)}></i>
                    {priorityLabel(act.priority)}
                  </span>
                </h6>
              </div>
              <p className='card-text mt-1 mb-1'>{act.name}</p>
              <hr />
              <p className='card-text mt-1'>{act.description}</p>
              <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                <button className='btn btn-sm btn-outline-primary me-2'>
                  <i className='fas fa-pen me-2'></i>Editar
                </button>
                <button className='btn btn-sm btn-outline-danger' onClick={() => deleteActivity(act.id)}>
                  <i className='fas fa-trash me-2'></i>Deletar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
