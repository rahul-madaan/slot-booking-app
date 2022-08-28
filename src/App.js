import './App.css';
import {SlotButton} from "./MyComponents/SlotButton";
const timeSlot = ["6:00-6:45 AM", "7:00-7:45 AM", "8:00-8:45 AM", "4:00-4:45 PM", "5:00-5:45 PM", "6:00-6:45 PM", "7:00-7:45 PM", "8:00-8:45 PM"];
function App() {
  return (
    <div className="App">
        <p>My App Works</p>
        {timeSlot.map((SlotName,index) => (
        <SlotButton value={SlotName.toString()} key={index} value2={index} />
        )
        )}
    </div>
  );
}

export default App;
