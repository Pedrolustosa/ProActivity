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
  function newActivity(e){
    e.preventDefault();
    
    const activy = {
      Id: document.getElementById('id').value,
      Description: document.getElementById('description').value,
    }
    activy.push(activy);
  }

  return (
    <>
      <form>       
        <input id="id" type="text" placeholder='ID'/>
        <input id="description" type="text" placeholder='Descrição'/>
        <button onClick={newActivity}>+ Atividade</button>
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
