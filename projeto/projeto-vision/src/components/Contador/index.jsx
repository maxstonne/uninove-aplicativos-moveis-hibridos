import "./style.css";

export function Contador() {
  return (
    <div>
      <h1>Contador</h1>

      <div className="buttons">
        <button>Increment</button>
        <button>Decrement</button>
      </div>

      <div className="result">
        <strong>Vai ser o resultado</strong>
      </div>
    </div>
  )
}