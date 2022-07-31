import "./App.css";
import Navbar from "./components/navbar";
import Journal from "./components/journal";
import data from "./data";
console.log({ ...data });
const journal = data.map((data) => {
  return <Journal {...data} key={data.id} />;
});
function App() {
  return (
    <div>
      <Navbar />
      {journal}
    </div>
  );
}

export default App;
