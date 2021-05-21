import './button-counter.js'

function App() {
  return (
    <div className="App">
      <button-counter counter="0" label="原生web components 增加1"></button-counter>
      <vue-button-counter count="2" label="vue web components 增加1"></vue-button-counter>
    </div>
  );
}

export default App;
