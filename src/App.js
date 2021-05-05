
import Header from "./components/header/Header";
import TableContainer from "./components/tablecontainer/TableContainer";
import s from "./styles.module.css";

function App() {
  return (
    <div className={s.container}>
      <Header />
      <TableContainer />
    </div>
  );
}

export default App;
