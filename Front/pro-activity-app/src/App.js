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
      <form>       
        <input id='id' type='text' placeholder='Id'/>
        <input id='description' type='text' placeholder='Descrição'/>
        <button onClick={newActivity}>+ Atividade</button>
      </form>
      <hr/>
      <div className="mt-3">
          <ul className="list-group">
            {activities.map((act) => (<li key={act.id} className="list-group-item">{act.id} | {act.description}</li>))}
          </ul>
      </div>
    </>
  );
}

export default App;
