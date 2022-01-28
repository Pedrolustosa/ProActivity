import './App.css';

function App() {
  const Activy = [
    {
      Id: 1,
      Description: "Bem-Vindo! 1",
    },
    {
      Id: 2,
      Description: "Bem-Vindo! 2",
    },
  ];
  return (
    <>
      <form>       
        <input id="id" type="text" placeholder='ID'/>
        <input id="description" type="text" placeholder='Descrição'/>
        <button>+ Atividade</button>
      </form>
      <hr/>
      <div className="mt-3">
          <ul className="list-group">
            {Activy.map(act => (
            <li key={act.Id} className="list-group-item">{act.Id} | {act.Description}</li>
            ))}
          </ul>
      </div>
    </>
  );
}

export default App;
