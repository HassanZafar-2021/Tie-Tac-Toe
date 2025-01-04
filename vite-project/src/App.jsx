import ReactDOM from "react-dom/client";
import Game from "./components/logic"; // Import your Game component from logic.jsx
import "./index.css"; // Ensure you have a styles.css file for styling

function App() {
  return (
    <div className="app">
      <h1>React Tic-Tac-Toe</h1>
      <Game />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
