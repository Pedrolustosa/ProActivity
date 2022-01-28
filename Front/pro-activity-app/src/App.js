import './App.css';

function App() {
  const [state, setstate] = useState(initialState)

  const activities = [
    {
      id: 1,
      description: "Bem-Vindo! 1",
    },
    {
      id: 2,
      description: "Bem-Vindo! 2",
    },
  ];

  function newActivity(e){
    e.preventDefault();

    const activity = {
      id: document.getElementById('id').value,
      description: document.getElementById('description').value,
    };
    activities.push(activity);
    console.log(activity);
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
