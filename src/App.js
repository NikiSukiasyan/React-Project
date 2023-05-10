import Header from './proect/Header/header'
// import './App.css';
import './proect/Header/Header.css'

function PressOnButton() {
  console.log("information")
}

function App() {
  return (
    <div className="App">
      <button class = "yellow-button" onClick = {PressOnButton}>get in touch</button>
      <div><button class = "button">get in touch</button></div>
      <button class = "read-more">read more</button>
       
      <Header />
    </div>
  );
}

export default App;
