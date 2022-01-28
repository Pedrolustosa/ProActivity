import './App.css';

function App() {
  const Activy = [
    {
      Id: 1,
      Description: "Bem-Vindo!",
    },
  ];
  return (
    <div className="mt-3">
        <ul className="list-group">
          <li className="list-group-item">{Activy[0].Id} {Activy[0].Description}</li>
          <li className="list-group-item" onClick={() => console.log('JSX')}>Segunda Atividade</li>
          <li className="list-group-item">Terceira Atividade</li>
          <li className="list-group-item">Quarta Atividade</li>
        </ul>
    </div>
  );
}

export default App;
