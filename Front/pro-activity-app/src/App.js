import './App.css';
import { useState } from 'react';

let initialState = [
  {
    id: 1,
    description: "Bem-Vindo! 1",
  },
  {
    id: 2,
    description: "Bem-Vindo! 2",
  },
];

function App() {
  const [activities, setActivities] = useState(initialState)

  function newActivity(e){
    e.preventDefault();
    const activity = {
      id: document.getElementById('id').value,
      description: document.getElementById('description').value,
    };
    setActivities([...activities, {...activity}]);
  }

  return (
    <>
      <form className='row g-3'>  
        <div className="col-md-6">
          <label id='id' type='text' placeholder='Id' className="form-label">Id</label>
          <input type='number' className='form-control' id="id"/>
        </div>    
        <div className="col-md-6">
          <label id='description' type='text' placeholder='Descrição' className="form-label">Nome</label>
          <input type='text' className='form-control' id="description"/>
        </div>  
        <div className='col-12'>
          <button className='btn btn-outline-primary' onClick={newActivity}>+ Atividade</button>
        </div>
      </form>

      <hr/>

      <div className='mt-3'>
          {activities.map((act) => (
            <div key={act.id} className="card mb-2 shadow-sm">
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h5 className='card-title'>
                  <span className='badge rounded-pill bg-success me-1'>
                    {act.id}
                  </span>
                    - Título
                </h5>
                <h6>
                  Prioridade: Normal
                  </h6>
              </div>
                <p className='card-text'>{act.description}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
