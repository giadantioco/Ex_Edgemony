import { Cards } from "./components/components/Cards";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Pokedex</h1>
      <div className="container">
        <Cards />
      </div>
    </>
  );
}

export default App;
