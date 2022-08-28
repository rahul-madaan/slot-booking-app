import './App.css';
import {SlotButton} from "./MyComponents/SlotButton";
const amountOfComponents = [1, 2, 3, 4, 5];
function App() {
  return (
    <div className="App">
        <p>My App Works</p>
    <SlotButton/>
        {amountOfComponents.map((number) => (
        <SlotButton key={number.toString()} data-value-index={number} />
        )
        )}
    </div>
  );
}

export default App;
