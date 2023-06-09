import Navbar from "./Navbar";

function App() {
  const funcionSaludar = () => {
    alert("Hola con un alert");
  };
  return (
    <div>
      <Navbar />
      <h1>Hola Ricardo!</h1>
      <button onClick={funcionSaludar}> SALUDAR</button>
    </div>
  );
}

export default App;
