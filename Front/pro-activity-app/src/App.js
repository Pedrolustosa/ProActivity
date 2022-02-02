import './App.css';
import { useState } from 'react';

let initialState = [
  {
    id: 1,
    name: "Name 0",
    title: "Title 0",
    priority: "1",
    description: "Description 0",
  },
  {
    id: 2,
    name: "Name 1",
    title: "Title 1",
    priority: "1",
    description: "Description 1",
  },
];

function App() {
  const [activities, setActivities] = useState(initialState)

  function newActivity(e){
    e.preventDefault();
    const activity = {
      id: document.getElementById('id').value,
      name: document.getElementById('name').value,
      title: document.getElementById('title').value,
      priority: document.getElementById('priority').value,
      description: document.getElementById('description').value,
    };
    setActivities([...activities, {...activity}]);
  }

  function priorityLabel(param){
    switch(param){
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

  function priorityIcon(param){
    switch(param){
      case '1':
        return 'smile';
      case '2':
        return 'meh';
      case '3':
        return 'frown';
      default:
        return 'Não Definido';
    }
  }

  return (
    <>
      <form className='row g-3 mt-3 mb-2 pt-1 pb-3'>  
        <div className="col-md-1">
          <label className='form-label'>Id</label>
          <input id='id' type='number' placeholder='Id' min='0' className='form-control' />
        </div>    
        <div className='col-md-2'>
          <label className='form-label'>Prioridade</label>
          <select id='priority' className='form-select'>
            <option defaultValue='0'>Selecionar...</option>
            <option value='1'>Alta</option>
            <option value='2'>Normal</option>
            <option value='3'>Baixa</option>
          </select>
        </div>
        <div className='col-md-2'>
          <label className='form-label'>Nome</label>
          <input id='name' type='text' placeholder='Nome' className='form-control' />
        </div>  
        <div className='col-md-3'>
          <label className='form-label'>Título</label>
          <input id='title' type='text' placeholder='Título' className='form-control' />
        </div> 
        <div className='col-md-4'>
          <label className='form-label'>Descrição</label>
          <input id='description' type='text' placeholder='Descrição' className='form-control' />
        </div> 
        <div className='col-12'>
          <button className='btn btn-outline-primary' onClick={newActivity}>+ Atividade</button>
        </div>
      </form>

      <hr/>

      <div className='mt-3'>
          {activities.map((act) => (
            <div key={act.id} className='card mb-2 shadow-lg'>
              <div className='card-body'>
                <div className='d-flex justify-content-between'>
                  <h5 className='card-title'>
                    <span className='badge rounded-pill bg-success me-1'>
                      {act.id}
                    </span>
                      - Título
                  </h5>
                  <h6>
                    Prioridade: 
                    <span className='ms-1 text-black'>
                      <i className={'me-1 far fa-' + priorityIcon(act.priority)}></i>
                     {priorityLabel(act.priority)}
                    </span>
                  </h6>
                </div>
                  <p className='card-text mt-1 mb-1'>{act.name}</p>
                  <hr/>
                  <p className='card-text mt-1'>{act.description}</p>
                  <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                    <button className='btn btn-sm btn-outline-primary me-2'>
                      <i className='fas fa-pen me-2'></i>Editar
                    </button>
                    <button className='btn btn-sm btn-outline-danger'>
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
