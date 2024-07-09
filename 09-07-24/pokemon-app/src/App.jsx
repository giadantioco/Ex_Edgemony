import { Cards } from "./components/Cards/Cards";
import styles from "./App.module.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Pokedex</h1>
      <div className={styles.container}>
        <Cards />
      </div>
    </>
  );
}

export default App;
